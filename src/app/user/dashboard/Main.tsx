'use client'

import { useGqlClient } from '@/hooks/UseGqlClient';
import { useManualQuery, useQuery } from 'graphql-hooks';
import React, { useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Notification } from '@/gql/graphql';
import NotificationCard from '@/components/NotificationCard';
import NotificationBlock from '../../../components/NotificationBlock';
import InfoCards from '@/components/InfoCards';
import AuthConfig from '@/firebase/oauth.config';
import Loading from '@/app/loading';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';


const GET_NOTIFICATIONS = `
query Notifications($where: NotificationWhere, $options: NotificationOptions) {
    notifications(where: $where, options: $options) {
      title
      description
      createdAt
    }
  }
`
const GET_PROJECT = `
query Projects($where: ProjectWhere) {
    projects(where: $where) {
      id
    }
  }
`
const GET_MODULE_TICKET = `
query ModuleTickets($where: ModuleTicketWhere, $options: ModuleTicketOptions) {
    moduleTickets(where: $where, options: $options) {
      id
      ticket
      status
      createdAt
    }
  }
`

const GET_USER = `
query Users($where: UserWhere) {
    users(where: $where){
      user_type
    }
  }`




const Main = () => {

    // STATES
    const [totalTickets, setTotalTickets] = React.useState<any>(0)
    const [pendingTickets, setPendingTickets] = React.useState<any>(0)
    const [completedTickets, setCompletedTickets] = React.useState<any>(0)
    const [latestTickets, setLatestTickets] = React.useState<any>('')

    // HOOKS 
    const client = useGqlClient()
    const router = useRouter()
    const { user, authLoading } = AuthConfig();



    // getting data based on user
    useEffect(() => {
        getUserAndAuthenticate(user?.email)
        getModuleTicketCount()
        getPendingTicket()
        getCompletedTicket()
        getLatestTicket()
    }, [user?.email])






    // queries
    const [getDataFn, { data, loading, error }] = useManualQuery(GET_USER, { client })
    const [moduleTicketDataFn, state] = useManualQuery(GET_MODULE_TICKET, { client })
    const { data: notificationsData, error: notificationError, loading: notificationLoading } = useQuery(GET_NOTIFICATIONS, {
        client,
        revalidateOnMount: 3600,
        revalidateOnReconnect: 3600,
        revalidateOnFocus: false,
        variables: {
            "where": {
                "OR": [
                    {
                        "notificationFor": "CLIENT",
                        "clientHas": {
                            "userIs": {
                                "email": user?.email || 'no email'
                            }
                        }
                    },
                    {
                        "notificationFor": "GENERAL",
                    },
                ]
            },
            "options": {
                "limit": 3,
                "sort": [
                    {
                        "createdAt": "DESC"
                    }
                ]
            }
        }
    })
    const { data: projectData, error: projectDataError, loading: projectDataLoading } = useQuery(GET_PROJECT, {
        client,
        revalidateOnMount: 3600,
        revalidateOnReconnect: 3600,
        revalidateOnFocus: false,
        variables: {
            "where": {
                "clientOrdered": {
                    "userIs": {
                        "email": user?.email || 'no email'
                    }
                }
            }

        }
    })



    // fetching functions
    const getModuleTicketCount = async () => {
        const { data } = await moduleTicketDataFn({
            variables: {
                "where": {
                    "clientHas": {
                        "userIs": {
                            "email": user?.email || 'no email'
                        }
                    }

                }
            }
        })

        data.moduleTickets.length && setTotalTickets(data?.moduleTickets?.length)
    }
    const getPendingTicket = async () => {
        const { data } = await moduleTicketDataFn({
            variables: {
                "where": {
                    "status_IN": ["PENDING", "ACCEPTED", "UNDER_REVIEW"],
                    "clientHas": {
                        "userIs": {
                            "email": user?.email || 'no email'
                        }
                    }

                }
            }
        })
        data.moduleTickets.length && setPendingTickets(data?.moduleTickets?.length)
    }
    const getCompletedTicket = async () => {
        const { data } = await moduleTicketDataFn({
            variables: {
                "where": {
                    status: "COMPLETED",
                    "clientHas": {
                        "userIs": {
                            "email": user?.email || 'no email'
                        }
                    }

                }
            }
        })
        data.moduleTickets.length && setCompletedTickets(data?.moduleTickets?.length)
    }
    const getLatestTicket = async () => {
        const { data } = await moduleTicketDataFn({
            variables: {
                "where": {
                    "clientHas": {
                        "userIs": {
                            "email": user?.email || 'no email'
                        }
                    }
                },
                "options": {
                    "sort": [
                        {
                            "createdAt": "DESC"
                        }
                    ],
                    "limit": 3
                }
            }
        })
        data.moduleTickets.length && setLatestTickets(data?.moduleTickets)
    }


    const getUserAndAuthenticate = async (email: string) => {
        const { data, error, loading } = await getDataFn({
            variables: {
                where: {
                    email: email || 'no email'
                }
            }
        })

        if (!user?.email && !authLoading) {
            router.push('/auth/login')
            toast.error('You are not authorized to access this page')
        } else {
            if (data?.users[0].user_type !== 'CONSUMER' && !loading) {

                router.push('/auth/login')
                toast.error('You are not authorized to access this page')

            }
        }
    }


    if (authLoading || loading) return <Loading />


    //render
    return (
        <>
            {/* <!-- status section Start --> */}
            <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full max-w-6xl" >
                <div className='mb-5'>
                    <InfoCards title='Total Projects' value={projectData?.projects?.length || '00'} />
                </div>
                <div className='mb-5'>
                    <InfoCards title='Tickets Created' value={`${totalTickets < 10 ? `0${totalTickets}` : totalTickets}` || '00'} />
                </div>
                <div className='mb-5'>
                    <InfoCards title='On Going ' value={`${pendingTickets < 10 ? `0${pendingTickets}` : pendingTickets}` || '00'} />
                </div>
                <div className='mb-5'>
                    <InfoCards title='Completed' value={`${completedTickets < 10 ? `0${completedTickets}` : completedTickets}` || '00'} />
                </div>
            </section >
            {/* <!-- status section End  --> */}

            {/* <!-- chart section Start --> */}
            <section className="grid lg:grid-cols-2 gap-6 w-full my-8 rounded">
                <div className="bg-white rounded shadow pb-6 dark:bg-darkBgLight dark:text-white overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                    <p className="focus:outline-none px-5 pt-5 text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-700">Notifications</p>
                    <NotificationBlock data={notificationsData?.notifications} />
                </div>
                <div className="bg-white rounded shadow dark:bg-darkBgLight dark:text-white">
                    <p className="focus:outline-none px-5 pb-3 pt-5 text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-700">Latest Tickets</p>
                    <div className='space-y-3 mt-3'>
                        {
                            latestTickets && latestTickets?.map((item: any, i: number) =>
                                <div key={i} className='w-full flex items-center justify-between px-3 py-2 border-b'>
                                    <div className='flex items-center  space-x-3'>
                                        <div className='h-3 w-3 rounded-full bg-green-500'></div>
                                        <div className='text-sm'>

                                            <p className='text-desktopText text-xs xl:text-base'>{item?.ticket}</p>
                                            <p className='text-desktopTextLight text-[10px] xl:text-sm'>{item?.createdAt}</p>
                                        </div>
                                    </div>

                                    <div className='flex items-center justify-center space-x-3'>

                                        <button className='bg-primary/10 text-primary text-[10px] xl:text-sm px-4 py-1 rounded-2xl'>
                                            {item?.status}
                                        </button>

                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>




        </>
    )


};

export default Main;