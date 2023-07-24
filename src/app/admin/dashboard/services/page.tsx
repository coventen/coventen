'use client'
import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import GenarelNotification from './GenarelNotification';
import NotificationModal from './NotificationModal';
import PersonalizeNotification from './PersonalizeNotification';
import { BiSolidEditAlt } from 'react-icons/bi';
import { AiTwotoneDelete } from 'react-icons/ai';



function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}



const NotificationPage = () => {

    // States
    const [isOpen, setIsOpen] = useState(false);
    const [newNotification, setNewNotification] = useState(false);



    return (
        <>
            <div className="w-full  bg-white rounded-lg py-4 md:py-7 px-4 md:px-8 xl:px-10 ">
                <div className=" py-4 md:py-7">
                    <div className="flex items-center justify-between">
                        <p className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Notifications</p>

                    </div>
                </div>
                <>

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
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full  rounded-sm overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            User
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Company
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Location
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 w-10 h-10">
                                                    <img className="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                        alt="" />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        Vera Carpenter
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                            <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                            <span
                                                className="relative inline-block px-3 py-1  leading-tight">
                                                <span aria-hidden
                                                    className="absolute inset-0 opacity-50 rounded-full"></span>
                                                <span className="relative">Delhi</span>
                                            </span>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                            <div className="relative flex items-center justify-around  space-x-3 px-8 ">

                                                <button className="focus:ring-2 focus:ring-offset-2  text-sm leading-none text-green-600 py-2 px-2 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"><BiSolidEditAlt /></button>
                                                <button className="focus:ring-2 focus:ring-offset-2  text-sm leading-none text-red-600 py-2 px-2 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"><AiTwotoneDelete /></button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 w-10 h-10">
                                                    <img className="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                        alt="" />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        Blake Bowman
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                            <p className="text-gray-900 whitespace-no-wrap">Editor</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                            <span
                                                className="relative inline-block px-3 py-1  leading-tight">
                                                <span aria-hidden
                                                    className="absolute inset-0 opacity-50 rounded-full"></span>
                                                <span className="relative">Kolkata</span>
                                            </span>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                            <div className="relative flex items-center justify-around  space-x-3 px-8 ">

                                                <button className="focus:ring-2 focus:ring-offset-2  text-sm leading-none text-green-600 py-2 px-2 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"><BiSolidEditAlt /></button>
                                                <button className="focus:ring-2 focus:ring-offset-2  text-sm leading-none text-red-600 py-2 px-2 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"><AiTwotoneDelete /></button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 w-10 h-10">
                                                    <img className="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                        alt="" />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        Dana Moore
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                            <p className="text-gray-900 whitespace-no-wrap">Editor</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                            <span
                                                className="relative inline-block px-3 py-1  leading-tight">
                                                <span aria-hidden
                                                    className="absolute inset-0  opacity-50 rounded-full"></span>
                                                <span className="relative">Delhi</span>
                                            </span>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                            <div className="relative flex items-center justify-around  space-x-3 px-8 ">

                                                <button className="focus:ring-2 focus:ring-offset-2  text-sm leading-none text-green-600 py-2 px-2 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"><BiSolidEditAlt /></button>
                                                <button className="focus:ring-2 focus:ring-offset-2  text-sm leading-none text-red-600 py-2 px-2 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"><AiTwotoneDelete /></button>
                                            </div>
                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                            {/* <div
                                    className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                    <span className="text-xs xs:text-sm text-gray-900">
                                        Showing 1 to 4 of 50 Entries
                                    </span>
                                    <div className="inline-flex mt-2 xs:mt-0">
                                        <button
                                            className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                            Prev
                                        </button>
                                        <button
                                            className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                            Next
                                        </button>
                                    </div>
                                </div> */}
                        </div>
                    </div>
                </>

            </div>
            <NotificationModal setIsOpen={setIsOpen} isOpen={isOpen} setNewNotification={setNewNotification} />
        </>
    );
};

export default NotificationPage;