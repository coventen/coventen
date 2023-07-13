'use client'
import React, { useState } from 'react';

const VendorPage = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleAccordionClick = (index: any) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };


    const vadors = [
        {
            id: 1,
            name: "User name",
            email: "example@gmail.com",
            companyName: "Aurigene Pharmaceutical Pvt Ltd",
            location: "212/2, Off. Soli Poonawalla Road, Pune Maharashtra",
            phone: "1-770-736-8031 x56442",
            website: "aurigene.org",
            specialities: ["speciality1", "speciality2", "speciality3", "speciality4", "speciality5"],

        },
        {
            id: 2,
            name: "User name",
            email: "example@gmail.com",
            companyName: "Biopharmax India Pvt Ltd",
            location: "212/2, Off. Soli Poonawalla Road, Pune Maharashtra",
            phone: "1-770-736-8031 x56442",
            website: "aurigene.org",
            specialities: ["speciality1", "speciality2", "speciality3", "speciality4", "speciality5"],
        },
        {
            id: 3,
            name: "User name",
            email: "",
            companyName: "Aurigene Pharmaceutical Pvt Ltd",
            location: "212/2, Off. Soli Poonawalla Road, Pune Maharashtra",
            phone: "1-770-736-8031 x56442",
            website: "aurigene.org",
            specialities: ["speciality1", "speciality2", "speciality3", "speciality4", "speciality5"],
        },
        {
            id: 4,
            name: "User name",
            email: "",
            companyName: "Aurigene Pharmaceutical Pvt Ltd",
            location: "212/2, Off. Soli Poonawalla Road, Pune Maharashtra",
            phone: "1-770-736-8031 x56442",
            website: "aurigene.org",
            specialities: ["speciality1", "speciality2", "speciality3", "speciality4", "speciality5"],
        }
    ]

    return (
        <>
            <div className="w-full  bg-white min-h-[400px] rounded-lg py-4 md:py-7 px-4 md:px-8 xl:px-10 ">
                <div className=" py-4 md:py-7">
                    <div className="flex items-center justify-between">
                        <p className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Vendors</p>

                    </div>
                    <div className="my-2 flex justify-end sm:flex-row flex-col">
                        <div className="flex flex-row mb-1 sm:mb-0">

                            <div className="relative">
                                <select
                                    className=" h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block  w-full bg-white border-gray-300 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                                    <option>All</option>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>

                            </div>
                        </div>
                        <div className="block relative">
                            <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                                    <path
                                        d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                    </path>
                                </svg>
                            </span>
                            <input placeholder="Search"
                                className="  sm:rounded-l-none border border-gray-300 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                        </div>
                    </div>

                    <div className=" grid place-items-center">
                        <div className="w-full mx-auto rounded  ">
                            <div className="bg-white py-7 px-4  min-w-[600px] overflow-hidden">


                                {
                                    vadors.map((vendor, index) =>
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
                                                                <p className="text-xs lg:text-sm   font-normal">{vendor.email}</p>
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
                                                                <p className="text">{"company?.catchPhrase"}</p>
                                                            </div>
                                                            <div className="grid grid-cols-1 lg:grid-cols-3">
                                                                <div>
                                                                    <ul className="list-none">
                                                                        <li>
                                                                            <p className="text-xs lg:text-sm font-bold text-gray-900">
                                                                                Contact Person
                                                                            </p>
                                                                            <p>{"name"}</p>
                                                                        </li>
                                                                        <li>
                                                                            <p className="text-xs lg:text-sm font-bold text-gray-900">
                                                                                Designation
                                                                            </p>
                                                                            <p>{"username"}</p>
                                                                        </li>
                                                                        <li>
                                                                            <p className="text-xs lg:text-sm font-bold text-gray-900">
                                                                                Email
                                                                            </p>
                                                                            <p>{"email"}</p>
                                                                        </li>
                                                                        <li>
                                                                            <p className="text-xs lg:text-sm font-bold text-gray-900">
                                                                                Phone
                                                                            </p>
                                                                            <p>{"phone"}</p>
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
                                                                                {"address?.city"}, {"address?.street"}
                                                                            </p>
                                                                        </li>
                                                                        <li>
                                                                            <p className="text-xs lg:text-sm font-bold text-gray-900">
                                                                                City
                                                                            </p>
                                                                            <p>{"address?.city"}</p>
                                                                        </li>
                                                                        <li>
                                                                            <p className="text-xs lg:text-sm font-bold text-gray-900">
                                                                                State
                                                                            </p>
                                                                            <p>{"address?.street"}</p>
                                                                        </li>
                                                                        <li>
                                                                            <p className="text-xs lg:text-sm font-bold text-gray-900">
                                                                                Country
                                                                            </p>
                                                                            <p>{"address?.city"}</p>
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
                </div>
            </div >
        </>
    );
};

export default VendorPage;