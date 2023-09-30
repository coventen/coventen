'use client';

import React, { useEffect, useState } from 'react';


import EventFilterCard from './EventFilterCard';
import SideBarFilter from './SideBarFilter';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useManualQuery, useQuery } from 'graphql-hooks';
import Loading from '@/app/loading';
import Pagination from '@/components/Pagination';

const GET_EVENT = `
query Events($where: EventWhere, $options: EventOptions) {
    events(where: $where, options: $options) {
      id
      name
      slug
      description
      location
      image
      endAt
      startAt
      category
      registrationUrl
    }
  }
`;

const GET_CATEGORY = `
query Categories($where: CategoryWhere) {
    categories(where: $where) {
      name
      id
    }
  }
`;





const Main = () => {

    // states
    const [isOpen, setIsOpen] = useState(false);
    const [searchFilter, setSearchFilter] = useState({
        type: '',
        value: '',
    })
    const [eventData, setEventData] = useState<any>(null)
    // pagination states
    const [pageLimit, setPageLimit] = React.useState(8)
    const [currentPage, setCurrentPage] = React.useState(1)
    const [totalPages, setTotalPages] = React.useState(0)
    const [totalEvent, setTotalEvent] = React.useState(0)

    // HOOKS
    const client = useGqlClient()


    // QUERY
    const [getEventDataFn, state] = useManualQuery(GET_EVENT, { client })
    const { data: category, loading: catLoading } = useQuery(GET_CATEGORY, {
        client,
        variables: {
            "where": {
                "type": "EVENT"
            }
        }
    })




    useEffect(() => {
        let where = {}
        if (searchFilter.type === "Date" && searchFilter.value === "Today") {
            where = {
                startAt: new Date().toISOString()
            }
        }
        else if (searchFilter.type === "Date" && searchFilter.value === "This Week") {
            where = {
                startAt_LTE: getLastDateOfCurrentWeek(),
            }
        }
        else if (searchFilter.type === "Date" && searchFilter.value === "This Month") {
            where = {
                startAt_LTE: getLastDateOfCurrentMonth(),
            }
        }
        else if (searchFilter.type === "Category") {

            where = {
                "category_CONTAINS": searchFilter.value
            }
        } else {
            where = {}
        }
        getEvents(where)

    }, [searchFilter.value, searchFilter.type])




    useEffect(() => {
        getEvents()
        getItemsCount()
    }, [currentPage])




    // get events data
    const getEvents = async (where: any = {}) => {
        const { data } = await getEventDataFn({
            variables: {
                where: where,
                options: {
                    limit: pageLimit,
                    offset: (currentPage - 1) * pageLimit,
                    sort: [
                        {
                            "startAt": "ASC"
                        }
                    ]
                }

            }
        })

        if (data?.events) {
            setEventData(data)
        }

    }

    // get event count
    const getItemsCount = async () => {
        const { data } = await getEventDataFn()

        if (data?.events?.length > 0) {
            setTotalEvent(data?.events?.length)
            setTotalPages(Math.ceil(data?.events?.length / pageLimit))
        }
    }



    function getLastDateOfCurrentMonth() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const lastDate = new Date(year, month, 0);
        const isoLastDate = lastDate.toISOString().split('T')[0];
        return isoLastDate;
    }

    function getLastDateOfCurrentWeek() {
        const currentDate = new Date();
        const currentDayOfWeek = currentDate.getDay();
        const lastDate = new Date(currentDate);
        const daysUntilEndOfWeek = 6 - currentDayOfWeek;
        lastDate.setDate(currentDate.getDate() + daysUntilEndOfWeek);
        const isoLastDate = lastDate.toISOString().split('T')[0];
        return isoLastDate;
    }

    console.log('totalLearnItem', pageLimit, 'pageLimit', currentPage, 'currentPage', totalPages, 'totalPages')

    useEffect(() => { console.log(eventData?.events, 'these are events') }, [eventData?.events?.length])


    if (state.loading) return <Loading />


    return (
        <>
            <div className="max-w-screen-2xl mx-auto mt-0 lg:px-3">
                <SideBarFilter
                    setSearchFilter={setSearchFilter}
                    category={category?.categories}
                >
                    <div
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-3 ${isOpen ? 'hidden' : 'block'}`}
                    >

                        {
                            eventData?.events?.length ?

                                eventData?.events.map((item: any, i: number) => (
                                    <div key={i} className="">
                                        <EventFilterCard data={item}></EventFilterCard>
                                    </div>
                                ))

                                :
                                <div className="flex justify-center items-center">
                                    <h1 className="text-2xl text-gray-500">No Events</h1>
                                </div>



                        }
                    </div>
                </SideBarFilter>
            </div>
            <div className='w-full mt-12 flex items-center justify-center'>
                {totalEvent > pageLimit &&
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />}

            </div>
        </>
    );
};

export default Main;