'use client'
import { currentUser } from '@/firebase/oauth.config';
import GetModules from '@/shared/queries/modules';
import React, { useEffect, useState } from 'react';
import ViewModal from './ViewModal';
import Loading from '@/app/loading';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation } from 'graphql-hooks';
import { toast } from 'react-hot-toast';
import UploadDocModal from './UploadDocModal';
import Pagination from '@/components/Pagination';
import deleteImageFromDb from '@/shared/deleteImageFromDb';



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
const AcceptedModules = () => {
    //states
    const [modules, setModules] = useState([])
    const [isDocModalOpen, setIsDocModalOpen] = useState(false)
    const [currentModuleId, setCurrentModuleId] = useState('')
    const [reset, setReset] = useState(false)
    const [loading, setLoading] = useState(false)
    // pagination states
    const [pageLimit, setPageLimit] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [totalModules, setTotalModules] = useState(0)

    // hooks
    const user = currentUser()
    const client = useGqlClient()

    // UPDATING MODULE STATUS
    const [updateModuleStatusFn, updateStatus] = useMutation(UPDATE_MODULE_STATUS, { client })




    // getting module data
    useEffect(() => {
        getModulesData()
        getTotalModulesCount()
    }, [currentPage, user?.email]);


    console.log(user?.email, 'user email')

    // get module data
    const getModulesData = async () => {
        setLoading(true)

        const where = {
            vendorHas: {
                userIs: {
                    email: user?.email
                }
            },
            status_IN: ["UNDER_REVIEW", "ACCEPTED"]
        }

        const options = {
            limit: pageLimit,
            offset: (currentPage - 1) * pageLimit

        }


        const modules = await GetModules(where, options)
        console.log(modules, 'modules000000000000')
        if (modules) {
            setLoading(false)
            setModules(modules)
        } else {
            setLoading(false)
            setModules([])
        }
    }

    //getting total modules
    const getTotalModulesCount = async () => {
        const where = {
            vendorHas: {
                userIs: {
                    email: user?.email
                }
            },
            status_IN: ["UNDER_REVIEW", "ACCEPTED"]
        }
        const modules = await GetModules(where)
        if (modules?.length) {
            setTotalModules(modules?.length)
            setTotalPages(Math.ceil(modules?.length / pageLimit))
        }

    }


    // update module status after uploading doc
    const updateModule = async (status: string, id: string) => {

        console.log(status, id, 'i am inside')
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
            setReset(!reset)
            getModulesData()
            toast.success('Module updated successfully')
        }
    }

    // on status change to completed upload doc and update status
    const handleStatusChange = (e: any, id: string) => {

        if (e.target.value == 'UNDER_REVIEW') {
            setIsDocModalOpen(true)
            setCurrentModuleId(id)
        }

    }


    deleteImageFromDb('https://firebasestorage.googleapis.com/v0/b/coventen-9444b.appspot.com/o/ModuleReports%2Freport-0c9bab18-bd90-459d-8434-371410f323db?alt=media&token=bda11059-7d56-427f-94b8-58faf5f0e58e')

    console.log(module, 'accepted')



    if (loading || updateStatus.loading) return <Loading />

    return (
        <>
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
                            <td className="px-4 py-3 text-sm space-x-2 flex items-center justify-center">
                                <div className="relative w-40 ">
                                    <select
                                        value={module?.status || 'ACCEPTED'}
                                        onChange={(e) => handleStatusChange(e, module?.id)}
                                        className=" h-full rounded-r block  w-full bg-white border text-sm pr-8 border-gray-300  py-1 px-3  leading-tight focus:outline-none  dark:bg-darkBg dark:border-darkBorder">
                                        <option value='ACCEPTED'>IN DEVELOPMENT</option>
                                        <option value='UNDER_REVIEW'>UNDER REVIEW</option>
                                    </select>

                                </div>

                            </td>

                        </tr>

                    )
                    }
                </tbody>
                <UploadDocModal isDocModalOpen={isDocModalOpen} setIsDocModalOpen={setIsDocModalOpen} currentModuleId={currentModuleId} updateModule={updateModule} />
            </table>
            <div className='w-full flex items-center justify-center'>
                {totalModules! > pageLimit &&
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />}

            </div>
        </>
    );
};

export default AcceptedModules;