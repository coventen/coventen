'use client'
import React, { useState } from 'react';



const ChatsPage = () => {
    const [onClose, setOnClose] = useState(false)
    return (

        <>
            <div className="flex h-screen antialiased text-gray-800">
                <div className="flex flex-row h-full lg:max-h-[85vh] w-full overflow-x-hidden">
                    {/* side bar */}
                    <div className="flex flex-col py-8 pl-6 pr-2 w-80 rounded-lg bg-white flex-shrink-0">
                        <div className="flex flex-row items-center  h-12 w-full">
                            <div
                                className="flex items-center justify-center rounded-2xl text-primary bg-primary/30 h-10 w-10"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="ml-2 font-bold text-2xl">All Tickets</div>
                        </div>


                        <div className="flex flex-col mt-8">
                            <div className="flex flex-row items-center justify-between text-xs">
                                <span className="font-bold">All Support Conversations</span>
                                <span
                                    className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full"
                                >4</span
                                >
                            </div>
                            <div className="flex flex-col space-y-1 mt-4 -mx-2 h-full overflow-y-auto">
                                <button
                                    className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 border-b"
                                >
                                    <div
                                        className="flex items-center justify-center h-10 w-10 bg-primary/20 text-primary font-bold rounded-lg"
                                    >
                                        H
                                    </div>
                                    <div>

                                        <div className="ml-2  ">
                                            <div>
                                                <span className='text-sm font-semibold '> Cars Breaek Problem</span>
                                                <span className='text-primary text-xs ml-2'>#H4569-01</span>
                                            </div>

                                        </div>
                                        <div className="ml-2 flex text-[10px] text-gray-600">
                                            <p className=' '>Vendors name </p>

                                        </div>
                                    </div>

                                </button>
                                <button
                                    className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 border-b"
                                >
                                    <div
                                        className="flex items-center justify-center h-10 w-10 bg-primary/20 text-primary font-bold rounded-lg"
                                    >
                                        H
                                    </div>
                                    <div>

                                        <div className="ml-2  ">
                                            <div>
                                                <span className='text-sm font-semibold '> Cars Breaek Problem</span>
                                                <span className='text-primary text-xs ml-2'>#H4569-01</span>
                                            </div>

                                        </div>
                                        <div className="ml-2 flex text-[10px] text-gray-600">
                                            <p className=' '>Vendors name </p>
                                        </div>
                                    </div>

                                </button>
                                <button
                                    className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 border-b"
                                >
                                    <div
                                        className="flex items-center justify-center h-10 w-10 bg-primary/20 text-primary font-bold rounded-lg"
                                    >
                                        H
                                    </div>
                                    <div>

                                        <div className="ml-2  ">
                                            <div>
                                                <span className='text-sm font-semibold '> Cars Breaek Problem</span>
                                                <span className='text-primary text-xs ml-2'>#H4569-01</span>
                                            </div>

                                        </div>
                                        <div className="ml-2 flex text-[10px] text-gray-600">
                                            <p className=' '>Vendors name </p>
                                        </div>
                                    </div>

                                </button>
                                <button
                                    className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 border-b"
                                >
                                    <div
                                        className="flex items-center justify-center h-10 w-10 bg-primary/20 text-primary font-bold rounded-lg"
                                    >
                                        H
                                    </div>
                                    <div>

                                        <div className="ml-2  ">
                                            <div>
                                                <span className='text-sm font-semibold '> Cars Breaek Problem</span>
                                                <span className='text-primary text-xs ml-2'>#H4569-01</span>
                                            </div>

                                        </div>
                                        <div className="ml-2 flex text-[10px] text-gray-600">
                                            <p className=' '>Vendors name </p>
                                        </div>
                                    </div>

                                </button>
                                <button
                                    className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 border-b"
                                >
                                    <div
                                        className="flex items-center justify-center h-10 w-10 bg-primary/20 text-primary font-bold rounded-lg"
                                    >
                                        H
                                    </div>
                                    <div>

                                        <div className="ml-2  ">
                                            <div>
                                                <span className='text-sm font-semibold '> Cars Breaek Problem</span>
                                                <span className='text-primary text-xs ml-2'>#H4569-01</span>
                                            </div>

                                        </div>
                                        <div className="ml-2 flex text-[10px] text-gray-600">
                                            <p className=' '>Vendors name </p>
                                        </div>
                                    </div>

                                </button>



                            </div>


                        </div>
                        {/* side bar end */}
                    </div>


                    <div className="flex flex-col flex-auto h-full px-6">
                        <div
                            className="flex flex-col flex-auto flex-shrink-0 rounded-lg bg-white h-full lg:max-h-[85vh]"
                        >
                            <div onClick={() => setOnClose(true)} className='bg-white shadow-sm px-4 py-5 rounded-lg flex items-center'>
                                <p className='bg-green-500 w-3 h-3 rounded-full mr-2'></p>
                                <p className='font-bold'> Empolyee Name</p>

                            </div>
                            {/* <Scrollbars style={{ width: 500, height: 300 }}>
                            ehllo
                        </Scrollbars> */}
                            <div className="flex flex-col h-full overflow-x-auto mb-4  p-4">
                                {/* <Scrollbars style={{ width: 500, height: 300 }}> */}
                                <div className="flex flex-col h-full">
                                    <div className="grid grid-cols-12 gap-y-2">
                                        <div className="col-start-1 col-end-8 p-3 rounded-lg">
                                            <div className="flex flex-row items-center">
                                                <div
                                                    className="flex items-center justify-center h-10 w-10 rounded-full bg-primary flex-shrink-0"
                                                >
                                                    A
                                                </div>
                                                <div
                                                    className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                                                >
                                                    <div>Hey How are you today?</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-start-1 col-end-8 p-3 rounded-lg">
                                            <div className="flex flex-row items-center">
                                                <div
                                                    className="flex items-center justify-center h-10 w-10 rounded-full bg-primary flex-shrink-0"
                                                >
                                                    A
                                                </div>
                                                <div
                                                    className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                                                >
                                                    <div>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                                        elit. Vel ipsa commodi illum saepe numquam maxime
                                                        asperiores voluptate sit, minima perspiciatis.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-start-6 col-end-13 p-3 rounded-lg">
                                            <div className="flex items-center justify-start flex-row-reverse">
                                                <div
                                                    className="flex items-center justify-center h-10 w-10 rounded-full bg-primary flex-shrink-0"
                                                >
                                                    A
                                                </div>
                                                <div
                                                    className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                                                >
                                                    <div>ok what about you?</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-start-6 col-end-13 p-3 rounded-lg">
                                            <div className="flex items-center justify-start flex-row-reverse">
                                                <div
                                                    className="flex items-center justify-center h-10 w-10 rounded-full bg-primary flex-shrink-0"
                                                >
                                                    A
                                                </div>
                                                <div
                                                    className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                                                >
                                                    <div>
                                                        Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-start-1 col-end-8 p-3 rounded-lg">
                                            <div className="flex flex-row items-center">
                                                <div
                                                    className="flex items-center justify-center h-10 w-10 rounded-full bg-primary flex-shrink-0"
                                                >
                                                    A
                                                </div>
                                                <div
                                                    className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                                                >
                                                    <div>Lorem ipsum dolor sit amet !</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-start-6 col-end-13 p-3 rounded-lg">
                                            <div className="flex items-center justify-start flex-row-reverse">
                                                <div
                                                    className="flex items-center justify-center h-10 w-10 rounded-full bg-primary flex-shrink-0"
                                                >
                                                    A
                                                </div>
                                                <div
                                                    className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                                                >
                                                    <div>
                                                        Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                                                    </div>
                                                    <div
                                                        className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500"
                                                    >
                                                        Seen
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-start-1 col-end-8 p-3 rounded-lg">
                                            <div className="flex flex-row items-center">
                                                <div
                                                    className="flex items-center justify-center h-10 w-10 rounded-full bg-primary flex-shrink-0"
                                                >
                                                    A
                                                </div>
                                                <div
                                                    className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                                                >
                                                    <div>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        Perspiciatis, in.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/* </Scrollbars> */}
                            </div>
                            <div
                                className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
                            >
                                <div>
                                    <button
                                        className="flex items-center justify-center text-gray-400 hover:text-gray-600"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex-grow ml-4">
                                    <div className="relative w-full">
                                        <input
                                            type="text"
                                            className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                                        />
                                        <button
                                            className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                                        >
                                            <svg
                                                className="w-6 h-6"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <button
                                        className="flex items-center justify-center bg-primary hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                                    >
                                        <span>Send</span>
                                        <span className="ml-2">
                                            <svg
                                                className="w-4 h-4 transform rotate-45 -mt-px"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                                ></path>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>



    );
};

export default ChatsPage;