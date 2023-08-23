'use client'

import { useGqlClient } from '@/hooks/UseGqlClient';
import { useManualQuery, useQuery } from 'graphql-hooks';
import React, { useState, useEffect } from 'react';
import AssignmentModal from './AssignmentModal';
import Loading from '@/app/loading';
import Error from '@/components/Error';
import Pagination from '@/components/Pagination';
import TableSkeleton from '@/components/TableSkeleton';

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
    const [pageLimit, setPageLimit] = useState(10)
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
                    ProjectDataState.loading && <TableSkeleton />
                }


                {
                    ProjectData && ProjectData.map((assing: any, index: number) =>
                        <>
                            <div className="transition-all duration-500 my-2 hover:bg-white border text-gray-600 border-gray-200 rounded-md">
                                <>

                                    <div
                                        key={index}

                                        className={`accordion-header    cursor-pointer transition flex space-x-5 px-3 items-center h-16 ${expandedIndex === index ? "bg-white" : ""
                                            }`}
                                        onClick={() => handleAccordionClick(index)}
                                    >
                                        <i className={`fas ${expandedIndex === index ? "fa-minus" : "fa-plus"}`}></i>
                                        <div className="grid grid-cols-2 lg:grid-cols-4  gap-3 w-full ">
                                            <div className='flex items-center justify-start'>
                                                <p className="text-xs lg:text-sm  font-semibold ">
                                                    {assing?.title}
                                                </p>
                                            </div>
                                            <div className='lg:flex flex-col items-center justify-center hidden md:block'>
                                                <p className="text-xs lg:text-sm font-semibold text-gray-600">
                                                    Contact Person
                                                </p>
                                                <p className="text-xs lg:text-sm   font-normal">{assing?.email}</p>
                                            </div>
                                            <div className="hidden md:block">
                                                <p className="text-xs lg:text-sm font-semibold text-center text-gray-600">
                                                    Date
                                                </p>
                                                <p className="text-xs text-center lg:text-sm  text-gray-600 font-semibold ">{assing?.createdAt.slice(0, 10)}</p>
                                            </div>

                                            <div className='flex items-center justify-center'>
                                                <button
                                                    className="p-1 lg:p-3 bg-primary text-white rounded-lg text-xs"
                                                // onClick={() => handleOpen(1)}
                                                >
                                                    {expandedIndex === index ? 'Hide Details' : 'Show Details'}
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


                                            <div className="">
                                                <div className="pb-10 relative">
                                                    <h5 className="text-gray-600 font-bold text-xs lg:text-base mb-3">
                                                        Description
                                                    </h5>
                                                    <p className="text-xs lg:text-sm ">{assing?.description}</p>

                                                    {/* <button onClick={() => setIsOpen(true)} className='absolute -top-1 right-2 py-[3px] px-3 lg:px-4 lg:py-2 bg-green-600 text-white rounded-lg text-xs'>Start</button> */}
                                                </div>
                                                <div className="grid grid-cols-1 lg:grid-cols-3">
                                                    <div>
                                                        <ul className="list-none">
                                                            <li>
                                                                <p className="text-xs lg:text-sm font-bold text-gray-600">
                                                                    Contact
                                                                </p>
                                                                <p className="text-xs lg:text-sm ">{assing?.email}</p>
                                                            </li>
                                                            <li>
                                                                <p className="text-xs lg:text-sm font-bold text-gray-600">
                                                                    company
                                                                </p>
                                                                <p className="text-xs lg:text-sm ">{assing?.companyName}</p>
                                                            </li>
                                                            <li>
                                                                <p className="text-xs lg:text-sm font-bold text-gray-600">
                                                                    Email
                                                                </p>
                                                                <p className="text-xs lg:text-sm ">{assing?.email}</p>
                                                            </li>
                                                            <li>
                                                                <p className="text-xs lg:text-sm font-bold text-gray-600">
                                                                    GST No.
                                                                </p>
                                                                <p className="text-xs lg:text-sm ">{assing?.gst}</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-span-2">
                                                        <ul className="list-none ">
                                                            {
                                                                assing?.hasModule?.map((item: any, i: number) =>
                                                                    <li key={item?.id} className='py-1 w-full'>
                                                                        <div className='flex items-center justify-between'>
                                                                            <p className="text-xs lg:text-sm font-semibold text-gray-600">
                                                                                Module-{i + 1} :  {item?.title}
                                                                            </p>

                                                                            <button
                                                                                disabled={item.moduleticketFor?.ticket ? true : false}
                                                                                onClick={() => {
                                                                                    setIsOpen(true)
                                                                                    setCurrentProject({
                                                                                        clientEmail: assing?.email,
                                                                                        moduleId: item?.id,
                                                                                        projectTicket: assing?.projectticketFor.projectTicket,
                                                                                    })
                                                                                }}
                                                                                className={`
                                                                            ${item.moduleticketFor?.ticket ? "bg-gray-400 text-primaryText" : "bg-green-600 text-white "}
                                                                             py-[2px] px-3 lg:px-4 lg:py-1 rounded text-xs`}>

                                                                                {item.moduleticketFor?.ticket ? "Assigned" : "Assign"}

                                                                            </button>
                                                                        </div>
                                                                        <p className="text-xs lg:text-sm ">
                                                                            Description:  {item?.description}
                                                                        </p>
                                                                    </li>

                                                                )
                                                            }


                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className='mt-5'>
                                            <p className='text-xs lg:text-sm font-bold text-gray-700'>Documents</p>
                                            <PhotoProvider>
                                                <div className='mt-3 grid grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-6'>
                                                    <div className=' h-14 w-full lg:h-20 lg:w-full '>
                                                        <PhotoView src="/assets/home/lab1.jpg">
                                                            <Image height={500} width={500} src="/assets/home/lab1.jpg" alt="" className='w-full h-full object-cover' />
                                                        </PhotoView>
                                                    </div>
                                                    <div className=' h-14 w-full lg:h-20 lg:w-full '>
                                                        <PhotoView src="/assets/home/lab2.jpg">
                                                            <Image height={500} width={500} src="/assets/home/lab2.jpg" alt="" className='w-full h-full object-cover' />
                                                        </PhotoView>
                                                    </div>
                                                    <div className=' h-14 w-full lg:h-20 lg:w-full '>
                                                        <PhotoView src="/assets/home/lab3.jpg">
                                                            <Image height={500} width={500} src="/assets/home/lab3.jpg" alt="" className='w-full h-full object-cover' />
                                                        </PhotoView>
                                                    </div>
                                                    <div className=' h-14 w-full lg:h-20 lg:w-full '>
                                                        <PhotoView src="/assets/home/lab4.jpg">
                                                            <Image height={500} width={500} src="/assets/home/lab4.jpg" alt="" className='w-full h-full object-cover' />
                                                        </PhotoView>
                                                    </div>

                                                </div>

                                            </PhotoProvider>

                                        </div> */}
                                        </div>
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