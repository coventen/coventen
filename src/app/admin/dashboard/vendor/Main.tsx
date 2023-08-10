import { Vendor } from '@/gql/graphql';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useQuery } from 'graphql-hooks';


import React, { useState } from 'react';
const GET_VENDORS = `
query Clients {
    clients {
      companyName
      companyEmail
      id
      userIs {
        name
      }
    }
  }
`

const Main = () => {
    //states
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);



    //hooks 
    const client = useGqlClient()

    //fetching vendors
    const { data, loading } = useQuery(GET_VENDORS, { client })

    console.log(data)

    const handleAccordionClick = (index: any) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className=" grid place-items-center">
            <div className="w-full mx-auto rounded  ">
                <div className="bg-white py-7 px-4  min-w-[600px] overflow-hidden">


                    {
                        data?.clients && data?.clients.map((vendor: any, index: number) =>
                            <>
                                <div className="transition my-2  hover:bg-white border text-gray-600 border-gray-200 rounded-md">
                                    <>

                                        <div
                                            key={index}

                                            className={`accordion-header    cursor-pointer transition flex space-x-5 px-3 items-center h-16 ${expandedIndex === index ? "bg-white" : ""
                                                }`}
                                            onClick={() => handleAccordionClick(index)}
                                        >
                                            <i className={`fas ${expandedIndex === index ? "fa-minus" : "fa-plus"}`}></i>
                                            <div className="grid grid-cols-4  gap-3 w-full ">
                                                <div className='flex items-center justify-start'>
                                                    <p className="text-xs lg:text-sm  font-semibold ">
                                                        {vendor?.companyName}
                                                    </p>
                                                </div>
                                                <div className='lg:flex flex-col items-center justify-center hidden md:block'>
                                                    <p className="text-xs lg:text-sm font-semibold text-gray-900">
                                                        Contact Person
                                                    </p>
                                                    <p className="text-xs lg:text-sm   font-normal">{vendor?.userIs
                                                        ?.name}</p>
                                                </div>
                                                <div className="hidden md:block">
                                                    <p className="text-xs lg:text-sm font-semibold text-gray-900">
                                                        email
                                                    </p>
                                                    <p className="text-xs lg:text-sm   font-normal">{vendor.companyEmail}</p>
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
                                        {/* Content */}
                                        <div
                                            className={`accordion-content px-5 pt-0 overflow-hidden ${expandedIndex === index ? "max-h-content" : "max-h-0"
                                                }`}
                                            style={{
                                                transition: "max-height 0.3s ease-out, padding 0.3s ease",
                                            }}
                                        >
                                            <div className="py-8 my-5 px-12 border border-gray-200 rounded-lg">
                                                <div className="pb-10">
                                                    <h5 className="text-gray-900 font-bold text-sm lg:text-md">
                                                        Description
                                                    </h5>
                                                    <p className="text">{""}</p>
                                                </div>
                                                <div className="grid grid-cols-1 lg:grid-cols-3">
                                                    <div>
                                                        <ul className="list-none">
                                                            <li>
                                                                <p className="text-xs lg:text-sm font-bold text-gray-900">
                                                                    Contact Person
                                                                </p>
                                                                <p>{""}</p>
                                                            </li>
                                                            <li>
                                                                <p className="text-xs lg:text-sm font-bold text-gray-900">
                                                                    Designation
                                                                </p>
                                                                <p>{""}</p>
                                                            </li>
                                                            <li>
                                                                <p className="text-xs lg:text-sm font-bold text-gray-900">
                                                                    Email
                                                                </p>
                                                                <p>{""}</p>
                                                            </li>
                                                            <li>
                                                                <p className="text-xs lg:text-sm font-bold text-gray-900">
                                                                    Phone
                                                                </p>
                                                                <p>{""}</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-span-2">
                                                        <ul className="list-none">
                                                            <li>
                                                                <p className="text-xs lg:text-sm font-bold text-gray-900">
                                                                    Address
                                                                </p>
                                                                <p>
                                                                    {""}, {""}
                                                                </p>
                                                            </li>
                                                            <li>
                                                                <p className="text-xs lg:text-sm font-bold text-gray-900">
                                                                    City
                                                                </p>
                                                                <p>{""}</p>
                                                            </li>
                                                            <li>
                                                                <p className="text-xs lg:text-sm font-bold text-gray-900">
                                                                    State
                                                                </p>
                                                                <p>{""}</p>
                                                            </li>
                                                            <li>
                                                                <p className="text-xs lg:text-sm font-bold text-gray-900">
                                                                    Country
                                                                </p>
                                                                <p>{""}</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                </div>


                            </>
                        )
                    }



                </div>
            </div>

        </div>
    );
};

export default Main;