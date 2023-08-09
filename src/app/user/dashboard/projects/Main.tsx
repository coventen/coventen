'use client'
import React, { Suspense } from 'react';
import { useGqlClient } from '@/hooks/UseGqlClient';
import ProjectTable from './ProjectTable';
import Loading from '@/app/loading';
import Error from '@/components/Error';
import { useMutation, useQuery } from 'graphql-hooks';


const GET_ALL_PROJECTS_OVERVIEW = `
        query Projects {
        projects {
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


    //apollo client
    const client = useGqlClient()

    //fetch data
    const { data, loading, refetch, error: fetchError } = useQuery(GET_ALL_PROJECTS_OVERVIEW, { client });

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
        if (data) {
            refetch()
        }
    }


    //error handling
    if (fetchError || state.error) return <Error message={'Sorry Something Went Wrong'} />



    return (
        <section >
            <Suspense fallback={<Loading />}>
                <ProjectTable data={data?.projects} deleteProjectById={deleteProjectById} />
            </Suspense>
        </section>
    );
};

export default Main;