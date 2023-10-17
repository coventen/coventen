'use client'
import AuthConfig from '@/firebase/oauth.config';

import React, { useEffect, useState } from 'react';
import ViewModal from './ViewModal';
import Loading from '@/app/loading';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useManualQuery, useMutation } from 'graphql-hooks';
import { toast } from 'react-hot-toast';
import Pagination from '@/components/Pagination';
import GetModules from '@/shared/graphQl/queries/modules';
import { getEmployerEmail } from '@/shared/getEmployerEmail';
import { Module } from '@/gql/graphql';



const UPDATE_MODULE_STATUS = `
mutation UpdateModuleTickets($where: ModuleTicketWhere, $update: ModuleTicketUpdateInput, $disconnect: ModuleTicketDisconnectInput) {
    updateModuleTickets(where: $where, update: $update, disconnect: $disconnect) {
      moduleTickets {
        id
      }
      info {
        relationshipsDeleted
      }
    }
  }
  
`
const SEND_NOTIFICATION = `
mutation CreateNotifications($input: [NotificationCreateInput!]!) {
    createNotifications(input: $input) {
      info {
        nodesCreated
      }
    }
  }`


const GET_TEST_MODULES = `
  query Modules($options: ModuleOptions, $where: ModuleWhere) {
    modules(options: $options, where: $where) {
      id
      title
      description
      files
      ticket
      status
      type
    }
  }
  `

const UPDATE_TEST_MODULE = `
mutation UpdateModules($where: ModuleWhere, $update: ModuleUpdateInput, $disconnect: ModuleDisconnectInput) {
    updateModules(where: $where, update: $update, disconnect: $disconnect) {
      info {
        nodesCreated
        relationshipsCreated
      }
    }
  }
`




// component
const NewModules = () => {
    //states
    const [modules, setModules] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentModuleId, setCurrentModuleId] = useState('')
    const [loading, setLoading] = useState(false)
    const [labEmail, setLabEmail] = useState('')
    const [clientId, setClientId] = useState('')
    const [testModuleData, setTestModuleData] = useState<Module[]>([])
    // pagination states
    const [pageLimit, setPageLimit] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [totalModules, setTotalModules] = useState(0)


    // hooks
    const { user, authLoading } = AuthConfig()
    const client = useGqlClient()

    //quires and mutations
    const [getTestModulesFn, status] = useManualQuery(GET_TEST_MODULES, { client })
    const [updateModuleStatusFn, updateStatus] = useMutation(UPDATE_MODULE_STATUS, { client })
    const [updateTestModuleStatusFn, updateTestStatus] = useMutation(UPDATE_TEST_MODULE, { client })
    const [sendNotificationFn, notificationState] = useMutation(SEND_NOTIFICATION, { client })


    // getting module data
    useEffect(() => {
        getLabEmail()
        getModulesData()
        getTotalModulesCount()
        getTestModule()
    }, [currentPage, labEmail, user?.email]);




    // getting lab email if employee is logged in
    const getLabEmail = async () => {
        if (user?.email) {
            const email = await getEmployerEmail(user?.email)
            setLabEmail(email)
        }

    }

    const getTestModule = async () => {
        const { data } = await getTestModulesFn({
            variables: {
                "options": {
                    "sort": [
                        {
                            "createdAt": "ASC"
                        }
                    ]
                },
                "where": {
                    status: "ASSIGNED",
                    "forUser": {
                        "email": labEmail || 'no email'
                    }
                }
            }
        })
        console.log(data?.modules, ' this is data77777777777777777777777')

        if (data) {

            setTestModuleData(data?.modules)
        }

    }

    //* update module status
    const updateModule = async (status: string, id: string) => {

        if (status === 'REJECTED') {
            const { data } = await updateModuleStatusFn({
                variables: {
                    where: {
                        id: id
                    },
                    update: {
                        status: status
                    },
                    disconnect: {
                        vendorHas: {
                            where: {
                                node: {
                                    userIs: {
                                        email: labEmail || "no email"
                                    }
                                }
                            }
                        }
                    }
                }
            })
            if (data.updateModuleTickets.moduleTickets.length) {
                console.log('updated')
                getModulesData()
                sendNotificationToVendor('REJECTED')

                toast.success('Module updated successfully')
            }
        }
        else {
            const { data } = await updateModuleStatusFn({
                variables: {
                    where: {
                        id: id
                    },
                    update: {
                        status: status
                    }
                }
            })
            if (data.updateModuleTickets.moduleTickets.length) {
                console.log('updated')
                getModulesData()
                sendNotificationToVendor('ACCEPTED')
                toast.success('Module updated successfully')
            }
        }







    }
    //* update Test module status
    const updateTestModule = async (status: string, id: string) => {

        if (status === 'REJECTED') {
            const { data } = await updateTestModuleStatusFn({
                variables: {
                    where: {
                        id: id
                    },
                    update: {
                        status: status
                    },
                    "disconnect": {
                        "forUser": {
                            "where": {
                                "node": {
                                    "email": labEmail || "no email"
                                }
                            }
                        }
                    }

                }
            })
            if (data?.updateModules) {
                console.log('updated')
                getModulesData()
                sendNotificationToVendor('REJECTED')

                toast.success('Module updated successfully')
            }
        }
        else {
            const { data } = await updateTestModuleStatusFn({
                variables: {
                    where: {
                        id: id
                    },
                    update: {
                        status: status
                    }
                }
            })
            if (data?.updateModules) {
                console.log('updated')
                getTestModule()
                sendNotificationToVendor('ACCEPTED')
                toast.success('Module updated successfully')
            }
        }







    }


    //getting total modules

    const getTotalModulesCount = async () => {


        const where = {
            vendorHas: {
                userIs: {
                    email: labEmail || "no email"
                }
            },
            status: "ASSIGNED"
        }
        const modules = await GetModules(where)
        if (modules?.length) {
            setTotalModules(modules?.length)
            setTotalPages(Math.ceil(modules?.length / pageLimit))
        }

    }

    // get module data
    const getModulesData = async () => {
        setLoading(true)
        const where = {
            vendorHas: {
                userIs: {
                    email: labEmail || "no email"
                }
            },
            status: "ASSIGNED"
        }
        const options = {
            sort: [
                {
                    createdAt: "DESC"
                }
            ],
            limit: pageLimit,
            offset: (currentPage - 1) * pageLimit

        }


        const modules = await GetModules(where, options)
        if (modules) {
            setLoading(false)
            setModules(modules)
        } else {
            setLoading(false)
            setModules([])
        }
    }




    const sendNotificationToVendor = async (type: string) => {

        const { data: clientData } = await sendNotificationFn({
            variables: {
                "input": [
                    {
                        "title": `Vendor has ${type} a module`,
                        "description": `Vendor has ${type} your module now you can chat with him`,
                        "createdAt": new Date().toISOString(),
                        "notificationFor": "CLIENT",
                        "clientHas": {
                            "connect": {
                                "where": {
                                    "node": {
                                        "userIs": {
                                            "id": clientId
                                        }
                                    }
                                }
                            }
                        }
                    }
                ]
            }
        })
        const { data: adminData } = await sendNotificationFn({
            variables: {
                "input": [
                    {
                        "title": `Vendor has ${type} a module`,
                        "description": `Vendor has ${type} a module`,
                        "createdAt": new Date().toISOString(),
                        "notificationFor": "ADMIN",
                    }
                ]
            }
        })
        console.log(clientData, adminData, 'client notification')
    }


    console.log(testModuleData, 'this is test module data 000000000000')


    if (loading || updateStatus.loading || authLoading) return <Loading />

    return (
        <>
            <table className="w-full ">
                <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-white dark:text-gray-400 dark:bg-gray-800">
                        <th className="px-4 py-3">Serial</th>
                        <th className="px-4 py-3">Ticket-Id</th>
                        <th className="px-4 py-3">Module Title</th>
                        <th className="px-4 py-3 text-center">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 ">

                    {modules?.length ?
                        (modules?.map((module: any, index: number) =>

                            <tr key={module?.id} className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">

                                <td className="px-4 py-3 text-sm">{index + 1}</td>
                                <td className="px-4 py-3 text-sm">{module?.ticket}</td>
                                <td className="px-4 py-3 text-sm">{module?.forModule
                                    ?.title || 'N/A'}</td>
                                <td className="px-4 py-3 text-sm space-x-2 text-center">
                                    <button
                                        onClick={() => {
                                            setIsModalOpen(true)
                                            setCurrentModuleId(module?.forModule?.id)
                                        }}
                                        className='px-3 py-1 bg-primary text-white rounded'>
                                        View
                                    </button>
                                    <button
                                        onClick={() => {
                                            setClientId(module?.clientHas?.userIs?.id)
                                            updateModule('ACCEPTED', module?.id)

                                        }}
                                        className='px-3 py-1 bg-green-600 text-white rounded'>
                                        Accept
                                    </button>
                                    <button
                                        onClick={() => {
                                            updateModule('REJECTED', module?.id)
                                        }}
                                        className='px-3 py-1 bg-red-600 text-white rounded'>
                                        Reject
                                    </button>

                                </td>

                            </tr>

                        ))


                        :
                        (
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                                {/* <td className="px-4 py-3 text-sm" colSpan={4}>No modules found</td> */}
                            </tr>
                        )
                    }

                    {/************************  test modules *******************/}
                    {testModuleData?.length ?
                        (testModuleData?.map((module: any, index: number) =>

                            <tr key={module?.id} className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">

                                <td className="px-4 py-3 text-sm">{index + 1}</td>
                                <td className="px-4 py-3 text-sm">{module?.ticket}</td>
                                <td className="px-4 py-3 text-sm">{module?.title || 'N/A'}</td>
                                <td className="px-4 py-3 text-sm space-x-2 text-center">
                                    <button
                                        onClick={() => {
                                            setIsModalOpen(true)
                                            setCurrentModuleId(module?.id)
                                        }}
                                        className='px-3 py-1 bg-primary text-white rounded'>
                                        View
                                    </button>
                                    <button
                                        onClick={() => {
                                            setClientId(module?.clientHas?.userIs?.id)
                                            updateTestModule('ACCEPTED', module?.id)

                                        }}
                                        className='px-3 py-1 bg-green-600 text-white rounded'>
                                        Accept
                                    </button>
                                    <button
                                        onClick={() => {
                                            updateTestModule('REJECTED', module?.id)
                                        }}
                                        className='px-3 py-1 bg-red-600 text-white rounded'>
                                        Reject
                                    </button>

                                </td>

                            </tr>

                        ))


                        :
                        (
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                                {/* <td className="px-4 py-3 text-sm" colSpan={4}>No modules found</td> */}
                            </tr>
                        )
                    }
                </tbody>
                <ViewModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} currentModuleId={currentModuleId} />
            </table>
            <div className='w-full flex items-center justify-center'>
                {totalModules! > pageLimit &&
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />}

            </div>
        </>
    );
};

export default NewModules;