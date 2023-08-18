'use client'
import { currentUser } from '@/firebase/oauth.config';
import GetModules from '@/shared/queries/modules';
import React, { useEffect, useState } from 'react';
import ViewModal from './ViewModal';
import Loading from '@/app/loading';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation } from 'graphql-hooks';
import { toast } from 'react-hot-toast';



const UPDATE_MODULE_STATUS = `
mutation UpdateModuleTickets($where: ModuleTicketWhere, $update: ModuleTicketUpdateInput) {
    updateModuleTickets(where: $where, update: $update) {
      moduleTickets {
        id
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
    const [moduleStatus, setModuleStatus] = useState('')
    const [loading, setLoading] = useState(false)

    // hooks
    const user = currentUser()
    const client = useGqlClient()

    // UPDATING MODULE STATUS
    const [updateModuleStatusFn, updateStatus] = useMutation(UPDATE_MODULE_STATUS, { client })




    // getting module data
    useEffect(() => {

        getModulesData()
    }, []);

    // functions


    // get module data
    const getModulesData = async () => {
        setLoading(true)

        const where = {
            vendorHas: {
                userIs: {
                    email: user?.email
                }
            },
            status: "ASSIGNED"
        }


        const modules = await GetModules(where)
        if (modules) {
            setLoading(false)
            setModules(modules)
        } else {
            setLoading(false)
            setModules([])
        }
    }


    // update module status
    const updateModule = async (status: string, id: string) => {

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

        console.log(data, 'jk')

        if (data.updateModuleTickets.moduleTickets.length) {
            console.log('updated')
            getModulesData()
            toast.success('Module updated successfully')
        }
    }



    if (loading || updateStatus.loading) return <Loading />

    return (
        <table className="w-full">
            <thead>
                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-white dark:text-gray-400 dark:bg-gray-800">
                    <th className="px-4 py-3">Serial</th>
                    <th className="px-4 py-3">Ticket-Id</th>
                    <th className="px-4 py-3">Module Title</th>
                    <th className="px-4 py-3 text-center">Action</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">

                {modules && modules?.map((module: any, index: number) =>

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

                )
                }
            </tbody>
            <ViewModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} currentModuleId={currentModuleId} />
        </table>
    );
};

export default NewModules;