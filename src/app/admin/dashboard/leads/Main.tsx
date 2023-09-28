'use client'


import React, { useState, useEffect } from 'react';
import LeadsTable from './LeadsTable';

import { Leads, User } from '@/gql/graphql';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation, useQuery } from 'graphql-hooks';
import { IUpdateLead } from './interface';
import LeadsModal from './leadModal';
import { toast } from 'react-hot-toast';
import Pagination from '@/components/Pagination';
import { getEmployerEmail } from '@/shared/getEmployerEmail';
import AuthConfig from '@/firebase/oauth.config';
import Loading from '@/app/loading';
import GetLeads from '@/shared/graphQl/queries/leads';
import GetCurrentUserDetails from '@/shared/graphQl/queries/currentUser';


// const RESOLVED_LEADS = `
// mutation UpdateLeads($where: LeadsWhere, $update: LeadsUpdateInput) {
//     updateLeads(where: $where, update: $update) {
//         leads {
//             id
//           }
//     }
//   }
// `





// COMPONENT
const Main = () => {
    //states
    const [leads, setLeads] = useState<Leads[] | []>([]);
    const [userDetails, setUserDetails] = useState<User | {}>({})
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentLead, setCurrentLead] = useState<Leads | {}>({});
    const [searchQuery, setSearchQuery] = useState('')
    const [pageLimit, setPageLimit] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [totalLeads, setTotalLeads] = useState(0)




    // hooks 
    const client = useGqlClient();

    // MUTATIONS
    // const [updateLeadsFn, updateState] = useMutation(RESOLVED_LEADS, { client })




    // refetching data based on pagination and search query
    useEffect(() => {
        getLeadsData()
        getTotalLeadsCount()
    }, [currentPage]);



    // initializing query and mutations
    const getLeadsData = async () => {

        let where
        if (searchQuery) {
            where = {
                OR: [
                    {
                        email_CONTAINS: searchQuery.toLocaleLowerCase(),

                    },
                    {
                        industry_CONTAINS: searchQuery.toLocaleLowerCase()

                    },
                    {
                        phone_CONTAINS: searchQuery
                    }
                ]
            }
        }
        else {
            where = {}
        }

        //fetch options
        const options = {
            sort: [
                {
                    createdAt: "DESC"
                },
            ],
            limit: pageLimit,
            offset: (currentPage - 1) * pageLimit
        }

        const leads = await GetLeads(where, options);
        setLeads(leads);
    };

    const getTotalLeadsCount = async () => {
        const result = await GetLeads({}, {});
        if (result) {
            setTotalLeads(result?.length)
            setTotalPages(Math.ceil(result?.length / pageLimit))
        }
    }


    // handle update leads
    // const updateLeads = async (id: string) => {
    //     const { data } = await updateLeadsFn({
    //         variables: {
    //             where: {
    //                 id: id
    //             },
    //             update: {
    //                 status: "COMPLETED",
    //             }
    //         }
    //     })

    //     if (data.updateLeads.leads[0].id) {
    //         setIsModalOpen(false);
    //         toast.success('Lead updated successfully')
    //         getLeadsData()
    //     }

    // }




    return (
        <div>
            <div className="my-2 flex justify-end sm:flex-row flex-col">
                <div className="flex flex-row mb-1 sm:mb-0">


                </div>
                <div className="block relative">
                    <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                            <path
                                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                            </path>
                        </svg>
                    </span>
                    <input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by email or industry"
                        className="  sm:rounded-l-none border border-gray-300 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700  focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none dark:bg-darkBg dark:border-darkBorder" />
                </div>
            </div>
            <LeadsTable data={leads} setIsModalOpen={setIsModalOpen} setCurrentLead={setCurrentLead} />
            <LeadsModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                data={currentLead}
                setCurrentLead={setCurrentLead}
                userDetails={userDetails}
                setUserDetails={setUserDetails}
            // updateLeads={updateLeads}
            />
            <div className='w-full flex items-center justify-center'>
                {totalLeads! > pageLimit &&
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />}

            </div>

        </div>
    );
};

export default Main;