'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
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
        <div className='w-full absolute top-0 z-[966666666]'>
            <section className="bg-gray-100 dark:bg-gray-900 ">
                <aside
                    className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] dark:bg-gray-800 dark:border-gray-700"
                >
                    <div className='mt-5'>

                        <Link href='/vendor/dashboard/profile' className="mt-8 text-center">
                            <Image
                                height={500}
                                width={500}
                                src="/assets/no_user.png"
                                alt="user"
                                className="m-auto h-7 w-7 rounded-full object-cover lg:h-28 lg:w-28"
                            />
                            <h5 className="mt-4  hidden text-xl font-semibold text-gray-600 lg:block dark:text-gray-300 hover:underline">Cynthia J. Watts</h5>
                            <span className="hidden text-gray-400 lg:block">Admin</span>
                        </Link>

                        <ul className="mt-8 space-y-2 tracking-wide overflow-y-auto text-sm">
                            <Link
                                href="/vendor/dashboard"
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
                                href="/vendor/dashboard/notification"
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
                                href="/vendor/dashboard/invoice"
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
                                <span className="group-hover:text-gray-700  dark:group-hover:text-gray-50">Invoices</span>
                            </Link>
                            <Link
                                href="/vendor/dashboard/documents"
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
                                <span className="group-hover:text-gray-700  dark:group-hover:text-gray-50">Documents</span>
                            </Link>
                            <Link
                                href="/vendor/dashboard/support"
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
                                                        href="/vendor/dashboard/ticket_system/all_tickets"
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
                                                        href="/vendor/dashboard/ticket_system/chats"
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


                            {/* {
                                urls.map((url) =>
                                    <li key={url.id}>
                                        <Link
                                            href="/admin/dashboard/assignment"
                                            className="rounded-md "
                                        >
                                            <Disclosure
                                                as="div"

                                                className=" px-4 py-3"
                                            >
                                                {({ open }) => (
                                                    <>
                                                        <h3 className="-mx-2 -my-3 flow-root">
                                                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                                <p className="group flex items-center space-x-4  text-gray-600 dark:text-gray-300 ">
                                                                    <span className='mr-2'>
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            className="text-sm"
                                                                            viewBox="0 0 20 20"
                                                                            fill="currentColor"
                                                                        >
                                                                            <path
                                                                                className="fill-current text-gray-300 group-hover:text-cyan-300"
                                                                                d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                                                                            />
                                                                            <path
                                                                                className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                                                                                fillRule="evenodd"
                                                                                d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                                                                                clipRule="evenodd"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {url.name}
                                                                </p>
                                                                <span className="ml-6 flex items-center">
                                                                    {open ? (
                                                                        <BiSolidUpArrow
                                                                            className="text-sm"
                                                                            aria-hidden="true"
                                                                        />

                                                                    ) : (
                                                                        <BiSolidDownArrow
                                                                            className="text-sm"
                                                                            aria-hidden="true"
                                                                        />
                                                                    )}
                                                                </span>
                                                            </Disclosure.Button>
                                                        </h3>
                                                        <Disclosure.Panel className="pt-3">
                                                            <div className="space-y-2">
                                                                {
                                                                    url.options.map((option) =>
                                                                        <Link key={option.id}
                                                                            href={option.link}

                                                                            className="flex items-center"
                                                                        >
                                                                            <label

                                                                                className="ml-3 min-w-0 flex-1 text-gray-500"
                                                                            >
                                                                                {option.name}
                                                                            </label>
                                                                        </Link>)
                                                                }

                                                                <Link
                                                                    href='/'

                                                                    className="flex items-center"
                                                                >
                                                                    <label

                                                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                                                    >
                                                                        Create Invoice
                                                                    </label>
                                                                </Link>
                                                            </div>
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        </Link>
                                    </li>

                                )
                            } */}

                        </ul>
                    </div>

                    <div className="-mx-6 flex items-center justify-between border-t px-6 pt-4 dark:border-gray-700">
                        <button className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
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
                        </button>
                    </div>
                </aside>
                <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                    <div className="sticky top-0 h-16 border-b bg-white dark:bg-gray-800 dark:border-gray-700 lg:py-2.5">
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

                    <div className="px-6 pt-6 2xl:container">
                        <div
                            className=" min-h-[90vh] w-full  rounded-xl "
                        >
                            <span className="dark:text-white">{children}</span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default layout;