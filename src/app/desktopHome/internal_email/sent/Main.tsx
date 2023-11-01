'use client'
import Loading from '@/app/loading';
import Error from '@/components/Error';
import AuthConfig from '@/firebase/oauth.config';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { getEmployerEmail } from '@/shared/getEmployerEmail';
import { useManualQuery, useMutation, useQuery } from 'graphql-hooks';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { TfiReload } from 'react-icons/tfi';


const GET_SET_MESSAGES = `
query CommunicationTickets($where: CommunicationTicketWhere, $options: CommunicationTicketOptions) {
    communicationTickets(where: $where, options: $options) {
      id
      sub
      date
    }
  }

`
const DELETE_MESSAGES = `
mutation DeleteCommunicationTickets($where: CommunicationTicketWhere) {
    deleteCommunicationTickets(where: $where) {
      nodesDeleted
    }
  }

`

// component
const Main = () => {

    // pagination states
    const [pageLimit, setPageLimit] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [totalInternalEmail, setTotalInternalEmail] = useState(0)
    const [emailData, setEmailData] = useState<any>([])

    // hooks
    const client = useGqlClient()
    const { user } = AuthConfig()

    //quires 
    const [getInternalEmailFn, internalEmailState] = useManualQuery(GET_SET_MESSAGES, { client })

    // mutations
    const [deleteMessageFn, deleteState] = useMutation(DELETE_MESSAGES, { client })


    // refetching data based on pagination and search query
    useEffect(() => {
        getInternalEmailData()
        getEmailCount()
    }, [currentPage, user?.email]);







    // initializing query and mutations

    const getEmailCount = async () => {
        const { data } = await getInternalEmailFn()
        if (data.communicationTickets.length) {
            setTotalInternalEmail(data.communicationTickets.length)
            setTotalPages(Math.ceil(data.communicationTickets.length / pageLimit))
        }

    }

    const getInternalEmailData = async () => {
        const { data } = await getInternalEmailFn({
            variables: {
                where: {
                    sender: "CONSUMER",
                    forClient_ALL: {
                        userIs: {
                            email: user?.email || 'no email'
                        }
                    }
                },
                options: {
                    limit: pageLimit,
                    offset: (currentPage - 1) * pageLimit,
                    sort: [
                        {
                            date: "DESC"
                        }
                    ]
                }
            }
        })
        if (data.communicationTickets.length) {
            console.log('data', data)
            setEmailData(data?.communicationTickets)
        }
    }




    // delete message INIT

    const deleteMessage = async (id: string) => {
        const { data } = await deleteMessageFn({
            variables: {
                where: {
                    id: id
                }
            }
        })

        if (data.deleteCommunicationTickets.nodesDeleted) {
            getInternalEmailData()
            toast.error("Message deleted successfully")
        }
    }


    if (internalEmailState.loading || deleteState.loading) return <Loading />

    if (internalEmailState.error || deleteState.error) return <Error />

    return (
        <div className="flex-1  w-full " >
            <div className=" flex items-center justify-between w-full">
                <div className=" w-full">
                    <div className='border-b  w-full flex items-center justify-between py-4 px-2'>
                        <div className='flex items-center space-x-3 '>
                            <div onClick={getInternalEmailData} className='text-dimText cursor-pointer'>
                                <TfiReload />
                            </div>
                        </div>
                        <div className='flex items-center space-x-3 '>
                            <div className='text-dimText cursor-pointer'>
                                <p className='text-sm'>
                                    {(currentPage - 1) * pageLimit}
                                    -{totalInternalEmail - ((currentPage - 1) * pageLimit)}
                                    of {totalInternalEmail}</p>
                            </div>
                            <div className='text-dimText cursor-pointer'>
                                <HiChevronLeft />
                            </div>
                            <div className='text-dimText cursor-pointer'>
                                <HiChevronRight />
                            </div>

                        </div>

                    </div>

                    {/* messages */}
                    <div className=" mb-6 mt-4  w-full">
                        <ul className=''>
                            {
                                emailData.length ?
                                    emailData?.map((item: any) =>

                                        <li key={item?.id} >
                                            <div
                                                className="flex items-center border-b hover:bg-gray-200 px-2 py-1 w-full"
                                            >

                                                <div className=" flex items-center justify-between p-1 my-1 cursor-pointer  w-full">
                                                    <Link href={`/desktopHome/internal_email/message_preview/${item?.id}`} className="flex items-center ">
                                                        <div className="flex items-center mr-4 ml-1 space-x-1">

                                                            <button title="Read">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-500 hover:text-gray-900 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        {/* <span className=" pr-2 truncate mr-8 text-sm font-semibold">William Livingston</span> */}
                                                        <span className=" text-gray-600 text-sm truncate mr-4">{item?.sub}</span>
                                                    </Link>
                                                    <div className=" flex items-center justify-end">
                                                        <div className="flex items-center space-x-2" >

                                                            <button onClick={() => deleteMessage(item?.id)} title="Delete">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-500 hover:text-gray-900 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                                                </svg>
                                                            </button>

                                                            <button title="Clock">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-500 hover:text-gray-900 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        <span x-show="!messageHover" className="text-xs text-gray-500">
                                                            {item?.date?.slice(-10, -5)}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    )

                                    :
                                    <>
                                        No Emails Found
                                    </>
                            }


                        </ul >
                    </div >
                </div >
            </div >
        </div>

    );
};

export default Main;