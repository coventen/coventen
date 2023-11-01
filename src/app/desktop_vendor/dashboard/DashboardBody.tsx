'use client'

import classNames from "classnames";
import React, { PropsWithChildren, useState, Fragment, useEffect } from "react";
import { Transition, Menu } from '@headlessui/react';
import { FaBars } from 'react-icons/fa';
import Sidebar from "./Sidebar";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthConfig from "@/firebase/oauth.config";
// import CheckNotification from "./CheckNotification";
import dynamic from "next/dynamic";

const CheckNotification = dynamic(
    () => import("./CheckNotification").then((mod) => mod.default),
    { ssr: false }
);




const DashboardBody = (props: PropsWithChildren) => {

    // state
    const [collapsed, setSidebarCollapsed] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false)
    const [newNotificationCount, setNewNotificationCount] = useState(0)

    // hooks 
    const router = useRouter()
    const { logout, user, authLoading } = AuthConfig()



    useEffect(() => {
        // console.log(newNotificationCount)
    }, [newNotificationCount])


    if (!user?.email && !authLoading) {
        router.replace('/desktop_vendor/auth/login')
        return <></>
    }

    return (
        <div
            className={` grid min-h-screen ${showSidebar ? 'grid-cols-sidebar ' : 'hide-sidebar'}       lg:grid-cols-sidebar  
        "transition-[grid-template-columns] duration-300 ease-in-out overflow-hidden`}
        >
            <div className=" max-h-screen overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">

                <Sidebar
                    collapsed={collapsed}
                    setCollapsed={() => setSidebarCollapsed((prev) => !prev)}
                    showSidebar={showSidebar}
                    setShowSidebar={setShowSidebar}
                />
            </div>

            {/* content */}
            <div className="relative  max-h-screen overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                <div className="sticky top-0 h-16 z-[300000000]  bg-white dark:bg-gray-800  lg:py-2.5 border-b shadow-sm">
                    <div className="flex items-center justify-between space-x-4 px-6 2xl:container">
                        <h5 hidden className="text-2xl font-medium text-gray-600 lg:block dark:text-white"></h5>
                        <button onClick={() => setShowSidebar(!showSidebar)} className="-mr-2 h-16 w-12 border-r lg:hidden dark:border-gray-700 dark:text-gray-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="my-auto h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                        <div className="flex space-x-7">



                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="">
                                        <div className="w-9 h-9 rounded-full overflow-hidden border-2 dark:border-white border-gray-500">
                                            <img src="/assets/no_user.png" alt="" className="w-full h-full object-cover" />
                                        </div>
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">

                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        href={`/desktop_vendor/dashboard/profile`}
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Profile
                                                    </Link>
                                                )}
                                            </Menu.Item>

                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        type="submit"
                                                        onClick={() => {
                                                            router.replace('/desktop_vendor/auth/login')
                                                            logout()
                                                            return <></>
                                                        }}
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block w-full px-4 py-2 text-left text-sm'
                                                        )}
                                                    >
                                                        Sign out
                                                    </button>
                                                )}
                                            </Menu.Item>

                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                </div>
                <div className="w-full min-h-screen h-auto   bg-bgLight p-2 lg:p-6 ">
                    {props.children}
                </div>


            </div>
            <CheckNotification />
        </div>
    );
};

export default DashboardBody;