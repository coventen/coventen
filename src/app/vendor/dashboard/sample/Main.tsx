'use client'
import AuthConfig from '@/firebase/oauth.config';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useManualQuery, useMutation, useQuery } from 'graphql-hooks';
import React, { useEffect, useState } from 'react';
import SampleTable from './SampleTable';
import { toast } from 'react-hot-toast';
import Loading from '@/app/loading';
import { getEmployerEmail } from '@/shared/getEmployerEmail';
import Pagination from '@/components/Pagination';

const GET_MODULES = `
query Modules($where: ModuleWhere, $options: ModuleOptions) {
    modules(where: $where, options: $options) {
        id
      title
      sampleStatus
      projectHas {
        title
      }
    }
  }
`
const UPDATE_MODULE = `
mutation Mutation($where: ModuleWhere, $update: ModuleUpdateInput) {
    updateModules(where: $where, update: $update) {
  
      modules {
        id
      }
    }
  }
`

const Main = () => {
    // states 
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedUserType, setSelectedUserType] = useState('All')
    const [labEmail, setLabEmail] = useState('')

    // pagination states
    const [pageLimit, setPageLimit] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [TotalSample, setTotalSample] = useState(0)
    const [SampleData, setSampleData] = useState<any>([])

    // HOOKS 
    const client = useGqlClient()
    const { user, authLoading } = AuthConfig()

    // mutations
    const [updateModule, updateState] = useMutation(UPDATE_MODULE, { client })

    //quires 
    const [getUserFn, SampleDataState] = useManualQuery(GET_MODULES, { client })





    // refetching data based on pagination and search query
    useEffect(() => {

        // search variable
        let where: any = {
            "moduleticketFor": {
                "vendorHas": {
                    "userIs": {
                        "email": labEmail
                    }
                }
            }
        }

        if (searchQuery) {
            where = {
                "moduleticketFor": {
                    "vendorHas": {
                        "userIs": {
                            "email": labEmail
                        }
                    }
                },
                "title_CONTAINS": searchQuery

            }
        }
        getLabEmail()
        getSampleData(where)
        getSampleCount()
    }, [currentPage, searchQuery, user?.email, authLoading]);






    // getting lab email if employee is logged in
    const getLabEmail = async () => {
        if (user?.email) {
            const email = await getEmployerEmail(user?.email)
            setLabEmail(email)
        }
    }


    // initializing query and mutations


    const getSampleCount = async () => {
        const { data } = await getUserFn({
            variables: {
                where: {
                    "moduleticketFor": {
                        "vendorHas": {
                            "userIs": {
                                "email": labEmail
                            }
                        }
                    }
                }
            }
        })
        if (data?.modules?.length) {
            setTotalSample(data?.modules?.length)
            setTotalPages(Math.ceil(data?.modules?.length / pageLimit))
        }

    }

    const getSampleData = async (where: any) => {
        const { data } = await getUserFn({
            variables: {
                where: where,
                options: {
                    limit: pageLimit,
                    offset: (currentPage - 1) * pageLimit,
                    sort: [
                        {
                            createdAt: "DESC"
                        }
                    ]
                }
            }
        })
        if (data?.modules?.length) {
            setSampleData(data?.modules)
        }
    }

    console.log(SampleData)


    // initializing update module

    const updateModuleStatus = async (id: string, status: string) => {

        const { data } = await updateModule({
            variables: {
                where: {
                    id: id
                },
                update: {
                    sampleStatus: status
                }
            }
        })

        console.log(data)
        if (data.updateModules?.modules?.length) {
            console.log('updated')
            toast.success('Updated')

            // refetching data
            getSampleData({
                "moduleticketFor": {
                    "vendorHas": {
                        "userIs": {
                            "email": labEmail
                        }
                    }
                }
            })

        }
    }


    if (SampleDataState.loading || updateState.loading) return <div><Loading /></div>

    console.log(labEmail)


    return (
        <div>
            <SampleTable data={SampleData} updateModuleStatus={updateModuleStatus} />
            <div className='w-full flex items-center justify-center'>
                {TotalSample! > pageLimit &&
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />}

            </div>
        </div>
    );

}
export default Main;