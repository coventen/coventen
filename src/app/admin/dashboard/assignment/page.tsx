'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import AssignmentModal from './AssignmentModal';


//component
const AssignmentPage = () => {

    //states
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    //handle accordion click
    const handleAccordionClick = (index: any) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };


    // fake data
    const assignmentDAta = [
        {
            id: 1,
            name: "User name",
            company: "Aurigene",
            email: "example@gmail.com",
            title: "Aurigene Pharmaceutical Pvt Ltd",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quas laudantium ullam magnam atque quibusdam nam molestias error harum est ",
            location: "Pune Maharashtra",
            phone: "1-770-736-8031 x56442",
            website: "aurigene.org",
            modules: [
                {
                    id: 1,
                    title: 'lorem',
                    description: "lorem description"
                },
                {
                    id: 2,
                    title: "problem 2",
                    description: "problem 2"
                },
                {
                    id: 3,
                    title: "problem 3",
                    description: "problem 3"
                },
                {
                    id: 4,
                    title: "problem 4",
                    description: "problem 4"
                },
            ]

        },
        {
            id: 2,
            name: "User name",
            company: "Aurigene",
            email: "example@gmail.com",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quas laudantium ullam magnam atque quibusdam nam molestias error harum est ",
            title: "Biopharmax India Pvt Ltd",
            location: "Pune Maharashtra",
            phone: "1-770-736-8031 x56442",
            website: "aurigene.org",
            modules: [
                {
                    id: 1,
                    title: 'lorem',
                    description: "lorem description"
                },
                {
                    id: 2,
                    title: "problem 2",
                    description: "problem 2"
                },
                {
                    id: 3,
                    title: "problem 3",
                    description: "problem 3"
                },
                {
                    id: 4,
                    title: "problem 4",
                    description: "problem 4"
                },
            ]
        },
        {
            id: 3,
            name: "User name",
            company: "Aurigene",
            email: "",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quas laudantium ullam magnam atque quibusdam nam molestias error harum est ",
            title: "Aurigene Pharmaceutical Pvt Ltd",
            location: "Pune Maharashtra",
            phone: "1-770-736-8031 x56442",
            website: "aurigene.org",
            modules: [
                {
                    id: 1,
                    title: 'lorem',
                    description: "lorem description"
                },
                {
                    id: 2,
                    title: "problem 2",
                    description: "problem 2"
                },
                {
                    id: 3,
                    title: "problem 3",
                    description: "problem 3"
                },
                {
                    id: 4,
                    title: "problem 4",
                    description: "problem 4"
                },
            ]
        },

        {
            id: 4,
            name: "User name",
            company: "Aurigene",
            email: "",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quas laudantium ullam magnam atque quibusdam nam molestias error harum est ",
            title: "Aurigene Pharmaceutical Pvt Ltd",
            location: "Pune Maharashtra",
            phone: "1-770-736-8031 x56442",
            website: "aurigene.org",
            modules: [
                {
                    id: 1,
                    title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                    description: "lorem description"
                },
                {
                    id: 2,
                    title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                    description: "problem 2"
                },
                {
                    id: 3,
                    title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                    description: "problem 3"
                },
                {
                    id: 4,
                    title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                    description: "problem 4"
                },
            ]
        }
    ]

    return (
        <>
            <div className="w-full  bg-white min-h-[400px] rounded-lg py-4 md:py-7 px-4 md:px-8 xl:px-10 ">
                <div className=" py-4 md:py-7">
                    <div className="flex items-center justify-between">
                        <p className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Assignment</p>

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


                    <div className=" grid place-items-center  overflow-auto  w-full">


                        <div className="bg-white py-7 lg:px-4 w-full  ">


                            {
                                assignmentDAta.map((assing, index) =>
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
                                                            <p className="text-xs lg:text-sm   font-normal">{assing?.name}</p>
                                                        </div>
                                                        <div className="hidden md:block">
                                                            <p className="text-xs lg:text-sm font-semibold text-center text-gray-600">
                                                                Status
                                                            </p>
                                                            <p className="text-xs text-center lg:text-sm  text-blue-700 font-semibold ">Pending</p>
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
                                                                                Contact Person
                                                                            </p>
                                                                            <p className="text-xs lg:text-sm ">{assing?.name}</p>
                                                                        </li>
                                                                        <li>
                                                                            <p className="text-xs lg:text-sm font-bold text-gray-600">
                                                                                company
                                                                            </p>
                                                                            <p className="text-xs lg:text-sm ">{assing?.company}</p>
                                                                        </li>
                                                                        <li>
                                                                            <p className="text-xs lg:text-sm font-bold text-gray-600">
                                                                                Email
                                                                            </p>
                                                                            <p className="text-xs lg:text-sm ">{assing?.email}</p>
                                                                        </li>
                                                                        <li>
                                                                            <p className="text-xs lg:text-sm font-bold text-gray-600">
                                                                                Location
                                                                            </p>
                                                                            <p className="text-xs lg:text-sm ">{assing?.location}</p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-span-2">
                                                                    <ul className="list-none">
                                                                        {
                                                                            assing?.modules?.map((item, i) =>
                                                                                <li key={item?.id} className='py-1'>
                                                                                    <p className="text-xs lg:text-sm font-semibold text-gray-600">
                                                                                        Module-{i + 1} :  {item?.title}
                                                                                    </p>
                                                                                    {/* <p className="text-xs lg:text-sm ">
                                                                                    {item?.description}
                                                                                </p> */}
                                                                                </li>

                                                                            )
                                                                        }


                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='mt-5'>
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
            </div >
            <AssignmentModal setIsOpen={setIsOpen} isOpen={isOpen} />
        </>
    );
};

export default AssignmentPage;