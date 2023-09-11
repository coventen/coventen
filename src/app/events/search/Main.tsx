'use client';

import React, { useEffect, useState } from 'react';


import EventFilterCard from './EventFilterCard';
import SideBarFilter from './SideBarFilter';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useManualQuery, useQuery } from 'graphql-hooks';
import Loading from '@/app/loading';

const GET_EVENT = `
query Events {
    events {
      name
      slug
      location
      startAt
      endAt
      image
      description
    }
  }
`;



const Main = () => {

    // states
    const [isOpen, setIsOpen] = useState(false);
    const [searchFilter, setSearchFilter] = useState('')
    const [eventData, setEventData] = useState<any>(null)

    // HOOKS
    const client = useGqlClient()


    // QUERY
    const [getEventDataFn, state] = useManualQuery(GET_EVENT, { client })




    useEffect(() => {
        let where = {}
        if (searchFilter === "Today") {
            where = {
                startAt: new Date().toISOString()
            }
        }
        else if (searchFilter === "This Week") {
            where = {
                startAt_LTE: getLastDateOfCurrentWeek(),
            }
        }
        else if (searchFilter === "This Month") {
            where = {
                startAt_LTE: getLastDateOfCurrentMonth(),
            }
        }

        getEvents(where)

    }, [searchFilter])




    const getEvents = async (where: any) => {

        const { data } = await getEventDataFn({
            variables: {
                where: where
            }
        })

        if (data?.events.length) {
            setEventData(data)
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


    if (state.loading) return <Loading />


    return (
        <>
            <div className="max-w-screen-2xl mx-auto mt-0 lg:px-3">
                <SideBarFilter
                    setSearchFilter={setSearchFilter}
                >
                    <div
                        className={`grid grid-cols-1 gap-3 ${isOpen ? 'hidden' : 'block'}`}
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
        </>
    );
};

export default Main;