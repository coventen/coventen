'use client'
import React, { Suspense } from 'react';
import { useGqlClient } from '@/hooks/UseGqlClient';
import ProjectTable from './ProjectTable';
import Loading from '@/app/loading';
import Error from '@/components/Error';
import { useMutation, useQuery } from 'graphql-hooks';
import { currentUser } from '@/firebase/oauth.config';
import { toast } from 'react-hot-toast';


const GET_ALL_PROJECTS_OVERVIEW = `
query Query($where: ProjectWhere) {
    projects(where: $where) {
        id
        title
        description
        createdAt
        status
        projectticketFor {
         projectTicket
    }
   }
 }
`
const DELETE_PROJECT = `
mutation Mutation($where: ProjectWhere) {
  deleteProjects(where: $where) {
    nodesDeleted
  }
}
`

//component
const Main = () => {


    //hooks
    const client = useGqlClient()
    const user = currentUser()

    //fetch data
    const { data, loading, refetch, error: fetchError } = useQuery(GET_ALL_PROJECTS_OVERVIEW, {
        client, variables: {

            where: {
                clientOrdered: {
                    userIs: {
                        email: user?.email
                    }
                }
            }

        }
    });

    //deleting project 
    const [deleteProjectFn, state, resetFn] = useMutation(DELETE_PROJECT, { client });


    // initializing project delete function
    const deleteProjectById = async (id: string) => {
        const { data } = await deleteProjectFn({
            variables: {
                where: {
                    id
                }
            }
        })
        if (data.deleteProjects.nodesDeleted) {
            refetch()
            toast.success('Project Deleted Successfully')
            alert('Project Deleted Successfully')
        }
    }


    //error handling
    if (fetchError || state.error) return <Error message={'Sorry Something Went Wrong'} />


    if (loading) return <Loading />

    return (
        <section >
            <Suspense fallback={<Loading />}>
                <ProjectTable data={data?.projects} deleteProjectById={deleteProjectById} />
            </Suspense>
        </section>
    );
};

export default Main;