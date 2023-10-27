'use client'
import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import Navbar from "../Navbar";
import Main from "./Main";

const Accordion = () => {


    return (
        <>
            <section className="relative  min-h-screen z-0 overflow-hidden bg-white  pb-12  lg:pb-[90px]">
                <div style={{
                    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) ), url('/assets/learn.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}

                    className=" h-[470px] flex items-center justify-center text-white">
                    <div className="-mx-4 flex flex-wrap w-full">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                                <span className="mb-2 block text-lg font-semibold text-white">
                                    LEARN
                                </span>
                                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                                    Learn more about our company
                                </h2>
                                <p className="text-base text-body-color">
                                    There are many variations of passages of Lorem Ipsum available
                                    but the majority have suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container mx-auto px-5">
                    <Main />
                </div>

                {/* <div className="absolute bottom-0 right-0 -z-40">
                    <svg
                        width="1440"
                        height="886"
                        viewBox="0 0 1440 886"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            opacity="0.5"
                            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                            fill="url(#paint0_linear)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear"
                                x1="1308.65"
                                y1="1142.58"
                                x2="602.827"
                                y2="-418.681"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#3056D3" stop-opacity="0.36" />
                                <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
                                <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div> */}
            </section>
        </>
    );
};

export default Accordion;




