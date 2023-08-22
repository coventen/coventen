'use client'
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation, useQuery } from 'graphql-hooks';
import React from 'react';
import Tabs from './Tabs';
import Loading from '@/app/loading';
import { toast } from 'react-hot-toast';

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
const CREATE_ROLE = `
mutation Mutation($input: [RoleCreateInput!]!) {
    createRoles(input: $input) {
      roles {
        id
      }
    }
  }
`
const GET_ROLE = `
query Query {
    roles {
        id
      name
      createdAt
      permissions
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
                user_type: "EMPLOYEE"
            },
            "options": {
                "sort": [
                    {
                        "createdAt": "ASC"
                    }
                ]
            }
        }
    })
    const { data: rolesData, loading: roleLoading, error: roleError, refetch: refetchRoles } = useQuery(GET_ROLE, { client })

    // mutations
    const [updateEmployeeStatusFn, updateEmployeeState] = useMutation(UPDATE_EMPLOYEE_STATUS, {
        client
    })

    const [createRoleFn, createRoleStatus] = useMutation(CREATE_ROLE, {
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

    // creating role
    const createRole = async (name: string, permissions: string[]) => {
        const dateTime = new Date().toISOString()
        const { data } = await createRoleFn({
            variables:
            {
                input: [
                    {
                        createdAt: dateTime,
                        permissions: permissions,
                        name: name
                    }
                ]
            }

        })

        if (data.createRoles.roles.length > 0) {
            toast.success("Role created successfully")
            refetchRoles()
        }
    }




    if (employeeLoading || roleLoading || updateEmployeeState.loading || createRoleStatus.loading) return <Loading />

    return (
        <>
            <Tabs employeeList={employeeList?.users} updateEmployeeStatus={updateEmployeeStatus} createRole={createRole} rolesData={rolesData?.roles} />
        </>
    );
};

export default Main;