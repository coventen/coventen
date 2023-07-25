'use client'

import React, { useState } from 'react';

const ProjectCard = () => {

    //states
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    //handle accordion click
    const handleAccordionClick = (index: any) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };





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


    ]



    return (
        <div>
            {
                assignmentDAta.map((assing, index) =>
                    <>
                        <div className="transition-all duration-500 my-2 hover:bg-white border text-gray-600 border-gray-200 rounded-md">
                            <>

                                <div
                                    key={index}

                                    className={`accordion-header    cursor-pointer transition flex space-x-5 px-3 items-center h-auto ${expandedIndex === index ? "bg-white" : ""
                                        }`}
                                    onClick={() => handleAccordionClick(index)}
                                >
                                    <i className={`fas ${expandedIndex === index ? "fa-minus" : "fa-plus"}`}></i>
                                    <div className="flex items-center justify-between   p-3 ">
                                        <div className='flex  flex-col space-y-3 w-[70%]'>
                                            <p className='text-desktopText font-semibold text-sm'>
                                                Username:  XYZAdmin
                                            </p>
                                            <p className="text-xs lg:text-2xl text-desktopPrimary  font-semibold ">
                                                {assing?.title}
                                            </p>
                                            <p className='text-sm text-desktopTextLight'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet facere cum esse consequatur, maxime, deleniti provident explicabo voluptate beatae nisi accusantium adipisci asperiores delectus totam quae? </p>
                                            <p className='text-primary text-xs'>Created: July 5, 2023 | Last Updated: July 20, 2023</p>
                                        </div>


                                        <div className='flex items-center justify-center'>
                                            <button
                                                className=" bg-white border-2 border-desktopPrimary text-desktopPrimary font-bold rounded-lg px-6 py-3"
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


                                        <div className="">
                                            <div className="pb-10 relative">
                                                <h5 className="text-desktopPrimary font-bold text-2xl  mb-3">
                                                    Ticket Id: #456389
                                                </h5>
                                                <h5 className="text-desktopText mt-5 font-semibold text-xl  mb-3">
                                                    User name: John Doe
                                                </h5>
                                                <h5 className="text-desktopText font-semibold text-xl  mb-3">
                                                    Company name: Aurigene Pharmaceutical Pvt Ltd
                                                </h5>
                                                <h5 className="text-desktopText font-semibold text-xl  mb-3">
                                                    Project name: Aurigene Pharmaceutical Pvt Ltd
                                                </h5>
                                                <p className='text-desktopTextLight text-sm'>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi nihil aliquid possimus a quasi rerum doloremque autem inventore distinctio ipsa, dicta obcaecati laudantium error nam eum minima, architecto ad corporis fuga ex quod eos. Vero commodi at sunt vel culpa?
                                                </p>


                                                {/* <button onClick={() => setIsOpen(true)} className='absolute -top-1 right-2 py-[3px] px-3 lg:px-4 lg:py-2 bg-green-600 text-white rounded-lg text-xs'>Start</button> */}
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
    );
};

export default ProjectCard;