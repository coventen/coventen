'use client'
import React, { Suspense, useState, useEffect } from 'react';
import { useGqlClient } from '@/hooks/UseGqlClient';
import Loading from '@/app/loading';
import Error from '@/components/Error';
import { useManualQuery, useMutation, useQuery } from 'graphql-hooks';
import AuthConfig from '@/firebase/oauth.config';
import { toast } from 'react-hot-toast';
import ProjectCard from './ProjectCard';
import Pagination from '@/components/Pagination';


const GET_ALL_PROJECTS_OVERVIEW = `
query Query($where: ProjectWhere, $options: ProjectOptions) {
    projects(where: $where, options: $options) {
        id
        title
        description
        createdAt
        status
        projectticketFor {
         projectTicket
    }
      hasModule {
        id
        title
        description
        files
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
    //states
    const [pageLimit, setPageLimit] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [totalProject, setTotalProject] = useState(0)
    const [ProjectData, setProjectData] = useState<any>([])




    //hooks
    const client = useGqlClient()
    const { user } = AuthConfig()

    //quires 
    const [getProjectFn, ProjectDataState] = useManualQuery(GET_ALL_PROJECTS_OVERVIEW, { client })
    // mutation
    const [deleteProjectFn, state, resetFn] = useMutation(DELETE_PROJECT, { client });


    // refetching data based on pagination 
    useEffect(() => {
        getProjectData()
        getProjectCount()
    }, [currentPage, user?.email]);

    console.log(ProjectData, 'this is project data')
    console.log(user?.email, 'this is user email')

    // initializing query and mutations

    const getProjectCount = async () => {
        const { data } = await getProjectFn({
            variables: {
                where: {
                    clientOrdered: {
                        userIs: {
                            email: user?.email || 'no email'
                        }
                    }
                }
            }
        })
        if (data.projects.length) {
            setTotalProject(data.projects.length)
            setTotalPages(Math.ceil(data.projects.length / pageLimit))
        }

    }

    const getProjectData = async () => {
        const { data } = await getProjectFn({
            variables: {
                where: {
                    clientOrdered: {
                        userIs: {
                            email: user?.email || 'no email'
                        }
                    }
                },
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



        if (data.projects.length) {
            setProjectData(data?.projects)
        }
    }





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
            getProjectData()
            toast.error('Project Deleted ')
        }
    }


    //error handling
    if (ProjectDataState.error || state.error) return <Error message={'Sorry Something Went Wrong'} />


    if (ProjectDataState.loading || state.loading) return <Loading />

    return (
        <section >
            <Suspense fallback={<Loading />}>
                <ProjectCard data={ProjectData} deleteProjectById={deleteProjectById} />
                <div className='w-full flex items-center justify-center'>
                    {totalProject > pageLimit &&
                        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
                    }

                </div>
            </Suspense>

        </section>
    );
};

export default Main;