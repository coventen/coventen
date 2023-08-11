import { Vendor } from '@/gql/graphql';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useQuery } from 'graphql-hooks';


import React, { useState } from 'react';
const GET_VENDORS = `
query Users($where: UserWhere) {
    users(where: $where) {
      name
      id
      status
      companyEmail
      companyName
      email
      bio
      gstNumber
      user_type
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
    const { data, loading } = useQuery(GET_VENDORS, { client, variables: { where: { user_type: "SERVICE_PROVIDER", status: "APPROVED" } } })


    const handleAccordionClick = (index: any) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    if (data?.users.length === 0) return <div className="grid  mt-20 font-semibold text-primaryText">No Vendors Found</div>

    return (
        <div className=" grid place-items-center">
            <div className="w-full mx-auto rounded  ">
                <div className="bg-white py-7 px-4  min-w-[600px] overflow-hidden">


                    {
                        data?.users && data?.users.map((vendor: any, index: number) =>
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
                                                    <p className="text-xs lg:text-sm   font-normal">{vendor?.name}</p>
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
                                                    <p className="text">{vendor?.bio}</p>
                                                </div>
                                                <div className="grid grid-cols-1 lg:grid-cols-3">
                                                    <div>
                                                        <ul className="list-none">
                                                            <li>
                                                                <p className="text-xs lg:text-sm font-bold text-gray-900">
                                                                    Contact Person
                                                                </p>
                                                                <p className='text-sm'>{vendor?.name}</p>
                                                            </li>

                                                            <li>
                                                                <p className="text-xs lg:text-sm font-bold text-gray-900">
                                                                    Email
                                                                </p>
                                                                <p className='text-sm'>{vendor?.email}</p>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="col-span-2">
                                                        <ul className="list-none">
                                                            <li>
                                                                <p className="text-xs lg:text-sm font-bold text-gray-900">
                                                                    Address
                                                                </p>
                                                                <p className='text-sm'>
                                                                    {vendor?.address || 'N/A'}
                                                                </p>
                                                            </li>
                                                            <li>
                                                                <p className="text-xs lg:text-sm font-bold text-gray-900">
                                                                    City
                                                                </p>
                                                                <p className='text-sm'>{vendor?.city || 'N/A'}</p>
                                                            </li>
                                                            <li>
                                                                <p className="text-xs lg:text-sm font-bold text-gray-900">
                                                                    State
                                                                </p>
                                                                <p className='text-sm'>{vendor?.state || 'N/A'}
                                                                </p>
                                                            </li>
                                                            <li>
                                                                <p className="text-xs lg:text-sm font-bold text-gray-900">
                                                                    Country
                                                                </p>
                                                                <p className='text-sm'>{vendor?.country || 'N/A'}</p>
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