'use client'
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation, useQuery } from 'graphql-hooks';
import React from 'react';
import Loading from '@/app/loading';
import { toast } from 'react-hot-toast';
import EmployeeTable from './EmplyeeTable';

const GET_EMPLOYEES = `
query Users($where: UserWhere) {
    users(where: $where) {
      name
      email
      status
    }
  }
`

const UPDATE_EMPLOYEE_STATUS = `
mutation UpdateUsers($where: UserWhere, $update: UserUpdateInput) {
    updateUsers(where: $where, update: $update) {
      info {
        bookmark
      }
    }
  }
`





// COMPONENT
const Main = () => {

    // hooks
    const client = useGqlClient()


    //getting all employees
    const { data: employeeList, loading: employeeLoading, error, refetch } = useQuery(GET_EMPLOYEES, {
        client,
        variables: {
            where: {
                user_type: "LAB_ASSISTANT"
            },
            "options": {
                "sort": [
                    {
                        "createdAt": "DESC"
                    }
                ]
            }
        }
    })

    // mutations
    const [updateEmployeeStatusFn, updateEmployeeState] = useMutation(UPDATE_EMPLOYEE_STATUS, {
        client
    })





    // functions


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
            refetch()
        }
    }






    if (employeeLoading || updateEmployeeState.loading) return <Loading />

    return (
        <>
            <EmployeeTable employeeList={employeeList?.users} updateEmployeeStatus={updateEmployeeStatus} />
        </>
    );
};

export default Main;