'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { RiServiceLine } from 'react-icons/ri';
import { BsTicketDetailed } from 'react-icons/bs';
import { FaAngleDown } from 'react-icons/fa';




const urls = [
    {
        id: 1,
        name: "Users",
        options: [
            {
                id: 1,
                name: "User List",
                link: '/admin/dashboard/users'
            },
            {
                id: 2,
                name: "Vendor List",
                link: '/admin/dashboard/vendor'
            }
        ]
    },
    {
        id: 2,
        name: "Tickets System",
        options: [
            {
                id: 1,
                name: "Ticket List",
                link: '/admin/dashboard/ticket_system/all_tickets'
            },
            {
                id: 2,
                name: "Assign Tasks",
                link: '/admin/dashboard/assignment'
            },
            {
                id: 3,
                name: "All Chats",
                link: '/admin/dashboard/ticket_system/messages'


            }
        ]
    }, {
        id: 3,
        name: "Invoice Management",
        options: [
            {
                id: 1,
                name: "Invoice List",
                link: '/admin/dashboard/invoice'
            }, {
                id: 2,
                name: "Create Invoice",
                link: '/admin/dashboard/invoice/create_invoice'
            }
        ]
    }
]





const layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className='absolute overflow-scroll top-0 z-[99999999999] w-full min-h-screen h-auto'>
            <section className="bg-gray-100 dark:bg-gray-900 w-full ">
                <aside
                    className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] dark:bg-gray-800 dark:border-gray-700"
                >
                    <div id="Main" className=" h-full transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start  w-full bg-transparent text-gray-900 flex-col">


                        <div className="hidden xl:flex justify-start p-6 items-center space-x-3 text-gray-900">

                            <p className="text-2xl leading-6 text-gray-800 dark:text-white">Company Logo</p>
                        </div>
                        <div className="mt-6  flex flex-col justify-start items-center  pl-4 w-full  space-y-3 pb-5 ">
                            <Link
                                href="/admin/dashboard"
                                aria-label="dashboard"
                                className="relative w-full  flex items-center space-x-4 rounded-xl bg-gradient-to-r from-primary to-primary/80 px-4 py-3 text-white"
                            >
                                <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                                        className="dark:fill-slate-600 fill-current text-cyan-400"
                                    ></path>
                                    <path
                                        d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                                        className="fill-current text-cyan-200 group-hover:text-primary"
                                    ></path>
                                    <path
                                        d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                                        className="fill-current group-hover:text-sky-300"
                                    ></path>
                                </svg>
                                <span className="-mr-1 font-medium">Dashboard</span>
                            </Link>
                            <Link
                                href="/admin/dashboard/users"
                                className="group w-full flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-gray-50"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        className="fill-current text-gray-300 group-hover:text-primary"
                                        fill-rule="evenodd"
                                        d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                                        clip-rule="evenodd"
                                    />
                                    <path
                                        className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                                        d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                                    />
                                </svg>
                                <span className="group-hover:text-gray-700  dark:group-hover:text-gray-50">users</span>
                            </Link>
                            <Link
                                href="/admin/dashboard/roles"
                                className="group w-full flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-gray-50"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        className="fill-current text-gray-300 group-hover:text-primary"
                                        fill-rule="evenodd"
                                        d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                                        clip-rule="evenodd"
                                    />
                                    <path
                                        className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                                        d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                                    />
                                </svg>
                                <span className="group-hover:text-gray-700  dark:group-hover:text-gray-50">Roles</span>
                            </Link>
                            <Link
                                href="/admin/dashboard/services"
                                className="group w-full flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-gray-50"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        className="fill-current text-gray-300 group-hover:text-primary"
                                        fill-rule="evenodd"
                                        d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                                        clip-rule="evenodd"
                                    />
                                    <path
                                        className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                                        d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                                    />
                                </svg>
                                <span className="group-hover:text-gray-700  dark:group-hover:text-gray-50">Services</span>
                            </Link>
                            <Link
                                href="/admin/dashboard/vendor"
                                className="group w-full flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-gray-50"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        className="fill-current text-gray-300 group-hover:text-primary"
                                        fill-rule="evenodd"
                                        d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                                        clip-rule="evenodd"
                                    />
                                    <path
                                        className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                                        d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                                    />
                                </svg>
                                <span className="group-hover:text-gray-700  dark:group-hover:text-gray-50">Vendor List</span>
                            </Link>
                            <Link
                                href="/admin/dashboard/notification"
                                className="group w-full flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-gray-50"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        className="fill-current text-gray-300 group-hover:text-primary"
                                        fill-rule="evenodd"
                                        d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                                        clip-rule="evenodd"
                                    />
                                    <path
                                        className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                                        d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                                    />
                                </svg>
                                <span className="group-hover:text-gray-700  dark:group-hover:text-gray-50">Notifications</span>
                            </Link>
                            <Link
                                href="/admin/dashboard/logs"
                                className="group w-full flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-gray-50"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        className="fill-current text-gray-300 group-hover:text-primary"
                                        fill-rule="evenodd"
                                        d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                                        clip-rule="evenodd"
                                    />
                                    <path
                                        className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                                        d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                                    />
                                </svg>
                                <span className="group-hover:text-gray-700  dark:group-hover:text-gray-50">Logs</span>
                            </Link>
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="group w-full flex items-center justify-between space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-gray-50">
                                            <div className='flex items-center space-x-2'>
                                                <p><BsTicketDetailed /></p>
                                                <p className='group-hover:text-gray-700 dark:group-hover:text-gray-50 '>Ticket system</p>
                                            </div>

                                            <FaAngleDown
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-gray-400 dark:text-white`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="pl-4 w-full pt-2 pb-2 text-sm text-gray-800 dark:text-white">
                                            <ul className='w-full'>
                                                <li className='w-full'>
                                                    <Link
                                                        href="/admin/dashboard/ticket_system/all_tickets"
                                                        className="group w-full flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-gray-50"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 w-5"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                className="fill-current text-gray-300 group-hover:text-primary"
                                                                fill-rule="evenodd"
                                                                d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                                                                clip-rule="evenodd"
                                                            />
                                                            <path
                                                                className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                                                                d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                                                            />
                                                        </svg>
                                                        <span className="group-hover:text-gray-700  dark:group-hover:text-gray-50">All Tickets</span>
                                                    </Link>
                                                </li>
                                                <li className='w-full'>
                                                    <Link
                                                        href="/admin/dashboard/ticket_system/chats"
                                                        className="group w-full flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-gray-50"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 w-5"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                className="fill-current text-gray-300 group-hover:text-primary"
                                                                fill-rule="evenodd"
                                                                d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                                                                clip-rule="evenodd"
                                                            />
                                                            <path
                                                                className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                                                                d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                                                            />
                                                        </svg>
                                                        <span className="group-hover:text-gray-700  dark:group-hover:text-gray-50">Chats</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                            <Link
                                href="/admin/dashboard/support/chats"
                                className="group w-full flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-gray-50"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        className="fill-current text-gray-300 group-hover:text-primary"
                                        fill-rule="evenodd"
                                        d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                                        clip-rule="evenodd"
                                    />
                                    <path
                                        className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                                        d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                                    />
                                </svg>
                                <span className="group-hover:text-gray-700  dark:group-hover:text-gray-50">Support</span>
                            </Link>

                        </div>




                    </div>

                    <div className="-mx-6 flex items-center justify-between  px-6 pt-4 ">
                        <div className=" flex justify-between items-center w-full">
                            <div className="flex justify-center items-center  space-x-2">
                                <div>
                                    <img className="rounded-full" src="https://i.ibb.co/L1LQtBm/Ellipse-1.png" alt="avatar" />
                                </div>
                                <div className="flex justify-start flex-col items-start">
                                    <p className="cursor-pointer text-sm leading-5 text-gray-800 dark:text-white">Alexis Enache</p>
                                    <p className="cursor-pointer text-xs leading-3 text-gray-800 dark:text-white">alexis81@gmail.com</p>
                                </div>
                            </div>
                            <svg className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>

                        {/* <button className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                />
                            </svg>
                            <span className="group-hover:text-gray-700 dark:group-hover:text-white">Logout</span>
                        </button> */}
                    </div>
                </aside>
                <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] ">
                    <div className="sticky top-0 h-16  bg-white dark:bg-gray-800  lg:py-2.5">
                        <div className="flex items-center justify-between space-x-4 px-6 2xl:container">
                            <h5 hidden className="text-2xl font-medium text-gray-600 lg:block dark:text-white">Dashboard</h5>
                            <button className="-mr-2 h-16 w-12 border-r lg:hidden dark:border-gray-700 dark:text-gray-300">
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
                            <div className="flex space-x-4">
                                {/* <!--search bar --> */}
                                <div hidden className="md:block">
                                    <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                                        <span className="absolute left-4 flex h-6 items-center border-r border-gray-300 pr-3 dark:border-gray-700">
                                            <svg
                                                xmlns="http://ww50w3.org/2000/svg"
                                                className="w-4 fill-current"
                                                viewBox="0 0 35.997 36.004"
                                            >
                                                <path
                                                    id="Icon_awesome-search"
                                                    data-name="search"
                                                    d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                                                ></path>
                                            </svg>
                                        </span>
                                        <input
                                            type="search"
                                            name="leadingIcon"
                                            id="leadingIcon"
                                            placeholder="Search here"
                                            className="outline-none w-full rounded-xl border border-gray-300 py-2.5 pl-14 pr-4 text-sm text-gray-600 transition focus:border-cyan-300 dark:bg-gray-900 dark:border-gray-700"
                                        />
                                    </div>
                                </div>
                                {/* <!--/search bar --> */}
                                <button
                                    aria-label="search"
                                    className="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 md:hidden dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
                                >
                                    <svg
                                        xmlns="http://ww50w3.org/2000/svg"
                                        className="mx-auto w-4 fill-current text-gray-600 dark:text-gray-300"
                                        viewBox="0 0 35.997 36.004"
                                    >
                                        <path
                                            id="Icon_awesome-search"
                                            data-name="search"
                                            d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                                        ></path>
                                    </svg>
                                </button>
                                <button
                                    aria-label="chat"
                                    className="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="m-auto h-5 w-5 text-sm text-gray-600 dark:text-gray-300"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                        />
                                    </svg>
                                </button>
                                <button
                                    aria-label="notification"
                                    className="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="m-auto h-5 w-5 text-sm text-gray-600 dark:text-gray-300"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="px-6 pt-6 2xl:container h-full  ">
                        <div
                            className=" min-h-[90vh] w-full  rounded-xl  "
                        >
                            <div className="dark:text-white h-full  ">{children}</div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default layout;