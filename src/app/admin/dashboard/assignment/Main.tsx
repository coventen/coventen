'use client'

import { useGqlClient } from '@/hooks/UseGqlClient';
import { useManualQuery, useQuery } from 'graphql-hooks';
import React, { useState, useEffect } from 'react';
import AssignmentModal from './AssignmentModal';
import Loading from '@/app/loading';
import Error from '@/components/Error';
import Pagination from '@/components/Pagination';
import TableSkeleton from '@/components/TableSkeleton';
import ModuleCards from './ModuleCards';

interface ICurrentProject {
    clientEmail: string;
    moduleId: string;
    projectTicket: string;
}

const GET_PROJECTS = `
query Projects($where: ProjectWhere, $options: ProjectOptions) {
    projects(where: $where, options: $options){
      id
      title
      status
      gst
      email
      description
      createdAt
      country
      companyName
      projectticketFor {
        projectTicket
      }
      hasModule {
        title
        description
        files
        id
        moduleticketFor {
            ticket
          }
      }
    }
  }
`


const Main = () => {
    //states
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState<ICurrentProject | {}>({});

    // search sates
    const [searchQuery, setSearchQuery] = useState('')

    // pagination states
    const [pageLimit, setPageLimit] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [projectsCount, setProjectsCount] = useState(0)
    const [ProjectData, setProjectData] = useState<any>([])



    //hooks 
    const client = useGqlClient()


    //quires 
    const [getProjectFn, ProjectDataState] = useManualQuery(GET_PROJECTS, { client })



    // refetching data based on pagination and search query
    useEffect(() => {
        let where

        // sending parameters to query based on search query
        if (searchQuery) {
            where = {
                OR: [
                    {
                        title: searchQuery,
                    },
                    {
                        clientOrdered: {
                            userIs: {
                                email: searchQuery.toLowerCase(),
                            }
                        }
                    },
                    {
                        clientOrdered: {
                            userIs: {
                                companyName: searchQuery
                            }
                        }
                    },
                ]
            }
        } else {
            where = {}
        }

        getProjectData(where)
        getProjectCount()
    }, [currentPage, searchQuery]);






    // initializing query and mutations

    const getProjectCount = async () => {
        const { data } = await getProjectFn()
        if (data.projects.length) {
            setProjectsCount(data.projects.length)
            setTotalPages(Math.ceil(data.projects.length / pageLimit))
        }

    }

    const getProjectData = async (where: any = {}) => {
        const { data } = await getProjectFn({
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
        if (data.projects.length) {
            setProjectData(data?.projects)
        }
    }


    console.log(ProjectData, 'this is project data')



    //handle accordion click
    const handleAccordionClick = (index: any) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };


    // handling loading and error 
    // if (ProjectDataState.loading) return <Loading />
    if (ProjectDataState.error) return <Error />


    return (
        <>
            <div className="my-2 flex justify-end sm:flex-row flex-col">

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
                        placeholder="Search"
                        className="  sm:rounded-l-none border border-gray-300 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                </div>
            </div>
            {/* end fo search */}
            <div className="bg-white py-7 lg:px-4 w-full  ">

                {
                    ProjectDataState.loading ? <TableSkeleton />
                        :
                        ProjectData && ProjectData.map((project: any, index: number) =>
                            <>
                                <div className="transition-all duration-500 my-2 hover:bg-white  text-gray-600 ">
                                    <>
                                        <div className="transition-all duration-500 my-2 hover:bg-white border text-gray-600 border-gray-200 rounded-md">
                                            <>

                                                <div
                                                    key={project?.id}

                                                    className={`accordion-header    cursor-pointer transition flex space-x-5 px-2 xl:px-3 items-center h-auto ${expandedIndex === index ? "bg-white" : ""
                                                        }`}
                                                    onClick={() => handleAccordionClick(index)}
                                                >
                                                    <i className={`fas ${expandedIndex === index ? "fa-minus" : "fa-plus"}`}></i>
                                                    <div className="flex items-center justify-between w-full  p-3 ">
                                                        <div className='flex  flex-col space-y-3 w-80% xl:w-[70%]'>
                                                            <p className="text-base lg:text-lg text-gray-700 font-bold xl:font-semibold ">
                                                                {project?.title?.slice(0, 50)}
                                                            </p>

                                                            <p className='text-dimText text-sm   '>Created: {project.createdAt.slice(0, 10)}</p>
                                                        </div>


                                                        <div className='flex items-center justify-center ml-3'>
                                                            <button
                                                                className=" bg-white border-2 border-gray-700 text-gray-700 font-bold text-sm  rounded-lg px-6 py-1.5"
                                                            // onClick={() => handleOpen(1)}
                                                            >
                                                                {expandedIndex === index ? 'Hide Details' : 'View'}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Content - body*/}
                                                <div
                                                    className={`accordion-content px-2 lg:px-5 pt-0 overflow-hidden ${expandedIndex === index ? "max-h-content" : "max-h-0"
                                                        }`}
                                                    style={{
                                                        transition: "all 3s ease-out",
                                                    }}
                                                >
                                                    <div className='py-8 my-5 px-2 lg:px-12 border border-gray-200 rounded-lg'>

                                                        {/* modules section */}
                                                        <div className="">
                                                            <div className="pb-10 relative">

                                                                <h5 className="text-desktopText font-semibold text-md lg:text-lg mb-1">
                                                                    Client: {project?.companyName}
                                                                </h5>
                                                                <h5 className="text-desktopText font-semibold text-sm mb-3">
                                                                    email: {project?.email}
                                                                </h5>
                                                                <h5 className="text-desktopText font-semibold text-md lg:text-lg mb-1">
                                                                    Project name: {project?.title}
                                                                </h5>
                                                                <h5 className="text-desktopText font-bold text-md lg:text-base  mb-3">
                                                                    Ticket Id: #{project?.projectticketFor?.projectTicket}
                                                                </h5>
                                                                <p className='text-desktopTextLight text-xs lg:text-sm'>
                                                                    {project?.description}
                                                                </p>

                                                                <ModuleCards data={project?.hasModule} setCurrentProject={setCurrentProject}
                                                                    projectTicket={project?.projectticketFor?.projectTicket}
                                                                    clientEmail={project?.email}
                                                                    setIsOpen={setIsOpen}
                                                                />



                                                            </div>

                                                        </div>




                                                    </div>
                                                </div>
                                            </>
                                        </div>

                                    </>
                                </div>


                            </>
                        )
                }





                <AssignmentModal setIsOpen={setIsOpen} isOpen={isOpen} currentProject={currentProject} refetchProjects={getProjectData} />
            </div>
            {/* pagination */}
            <div className='w-full flex items-center justify-center'>
                {projectsCount! > pageLimit &&
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />}

            </div>
        </>
    );
};

export default Main;