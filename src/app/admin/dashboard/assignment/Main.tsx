import { useGqlClient } from '@/hooks/UseGqlClient';
import { useQuery } from 'graphql-hooks';
import React, { useState } from 'react';

const GET_PROJECTS = `
query Projects {
    projects {
      id
      title
      status
      gst
      email
      description
      createdAt
      country
      companyName
      hasModule {
        title
        description
        id
      }
    }
  }
`


const Main = () => {
    //states
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [isOpen, setIsOpen] = useState(false);


    //hooks 
    const client = useGqlClient()

    //fetching vendors
    const { data, loading } = useQuery(GET_PROJECTS, { client })

    //handle accordion click
    const handleAccordionClick = (index: any) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="bg-white py-7 lg:px-4 w-full  ">


            {
                data?.projects && data?.projects.map((assing: any, index: number) =>
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
                                                Status
                                            </p>
                                            <p className="text-xs text-center lg:text-sm  text-blue-700 font-semibold ">{assing?.status}</p>
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

                                                <button onClick={() => setIsOpen(true)} className='absolute -top-1 right-2 py-[3px] px-3 lg:px-4 lg:py-2 bg-green-600 text-white rounded-lg text-xs'>Start</button>
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
                                                    <ul className="list-none">
                                                        {
                                                            assing?.hasModule?.map((item, i) =>
                                                                <li key={item?.id} className='py-1'>
                                                                    <p className="text-xs lg:text-sm font-semibold text-gray-600">
                                                                        Module-{i + 1} :  {item?.title}
                                                                    </p>
                                                                    <p className="text-xs lg:text-sm ">
                                                                        {item?.description}
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



        </div>
    );
};

export default Main;