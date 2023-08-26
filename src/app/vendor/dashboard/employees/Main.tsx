'use client'
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useManualQuery, useMutation, useQuery } from 'graphql-hooks';
import React, { useEffect, useState } from 'react';
import Loading from '@/app/loading';
import { toast } from 'react-hot-toast';
import EmployeeTable from './EmplyeeTable';
import { currentUser } from '@/firebase/oauth.config';
import { getEmployerEmail } from '@/shared/getEmployerEmail';

const GET_EMPLOYEES = `
query Users($where: UserWhere, $options: UserOptions) {
    users(where: $where, options: $options) {
      name
      email
      status
    }
  }
`

const UPDATE_EMPLOYEE_STATUS = `
mutation UpdateEmployees($where: UserWhere, $update: UserUpdateInput) {
    updateEmployees(where: $where, update: $update) {
      info {
        bookmark
      }
    }
  }
`





// COMPONENT
const Main = () => {
    // sates
    const [labEmail, setLabEmail] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedEmployeeType, setSelectedEmployeeType] = useState('All')
    // pagination states
    const [pageLimit, setPageLimit] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [totalEmployee, setTotalEmployee] = useState(0)
    const [EmployeeData, setEmployeeData] = useState<any>([])

    // hooks
    const client = useGqlClient()
    const user = currentUser()

    //quires 
    const [getEmployeeFn, EmployeeDataState] = useManualQuery(GET_EMPLOYEES, { client })

    // mutations
    const [updateEmployeeStatusFn, updateEmployeeState] = useMutation(UPDATE_EMPLOYEE_STATUS, {
        client
    })


    // refetching data based on pagination and search query
    useEffect(() => {

        let where
        if (searchQuery) {
            where = {
                user_type: "LAB_ASSISTANT",
                hasEmployee: {
                    employerEmail: labEmail
                },
                OR: [
                    {
                        email: searchQuery.toLowerCase(),

                    },
                    {
                        name: searchQuery.toLowerCase()
                    }
                ]
            }
        } else {
            where = {
                user_type: "LAB_ASSISTANT",
                hasEmployee: {
                    employerEmail: labEmail
                }
            }
        }




        getLabEmail()
        getEmployeeData(where)
        getEmployeeCount()
    }, [currentPage, searchQuery, user?.email, labEmail]);


    console.log(EmployeeData, 'employee data')



    // getting lab email if employee is logged in
    const getLabEmail = async () => {
        if (user?.email) {
            const email = await getEmployerEmail(user?.email)
            setLabEmail(email)
        }


    }



    // initializing query and mutations


    const getEmployeeCount = async () => {
        const { data } = await getEmployeeFn({
            variables: {
                where: {
                    user_type_IN: ["LAB_ASSISTANT"]
                }
            }
        })
        if (data?.users?.length) {
            setTotalEmployee(data?.users?.length)
            setTotalPages(Math.ceil(data?.users?.length / pageLimit))
        }

    }

    const getEmployeeData = async (where: any) => {
        const { data } = await getEmployeeFn({
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
        if (data?.users?.length) {
            setEmployeeData(data?.users)
        }
    }

    // updating employee status

    const updateEmployeeStatus = async (id: string, status: string) => {
        const { data } = await updateEmployeeStatusFn({
            variables: {
                where: {
                    id: id
                },
                update: {
                    status: status
                }
            }
        })

        if (data) {
            toast.success("Employee status updated successfully")
            // refetching data
            getEmployeeData({
                user_type: "LAB_ASSISTANT",
                hasEmployee: {
                    employerEmail: labEmail
                }
            })
        }
    }






    if (EmployeeDataState.loading || updateEmployeeState.loading) return <Loading />

    return (
        <>
            <div className="my-2 flex justify-end sm:flex-row flex-col mb-5">

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
                        placeholder="Search By Email"
                        className="  sm:rounded-l-none border border-gray-300 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700  focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none dark:bg-darkBg dark:border-darkBorder" />
                </div>
            </div>
            <EmployeeTable employeeList={EmployeeData} updateEmployeeStatus={updateEmployeeStatus} />
        </>
    );
};

export default Main;