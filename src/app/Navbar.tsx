'use client';

import Image from 'next/image';

import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import {
    FaCaretDown,
} from 'react-icons/fa';
import Link from 'next/dist/client/link';
import { FaAdjust, FaArrowRight, FaSearch } from 'react-icons/fa';
import Dropdown from '@/components/Navbar/Dropdown/Dropdown';



const features = [
    {
        name: 'About Us',
        url: '/industries/automotive_and_ev',
        description: 'Get college based on Entrance exams',
        href: '/',
        icon: ChartPieIcon,
    },

];

const services = [
    {
        name: 'Non Destuctive Testing',
        url: '/industries/automotive_and_ev',
        description: 'Get college based on Entrance exams',
        href: '/',
        icon: ChartPieIcon,
        subService: []
    },
    {
        name: 'Calibration',
        url: '/industries/automotive_and_ev',
        description: 'Get college based on Entrance exams',
        href: '/',
        icon: ChartPieIcon,
        subService: []

    },
    {
        name: 'Microscopic Testing',
        url: '/industries/automotive_and_ev',
        description: 'Get college based on Entrance exams',
        href: '/',
        icon: ChartPieIcon,
        subService: [
            {
                id: 1,
                name: " Acoustic Emission Testing (AE)",
                link: '/services/non_destructive_testing/1'
            },
            {
                id: 2,
                name: " Eddy Current Testing (ET)",
                link: '/services/non_destructive_testing/1'
            },
            {
                id: 3,
                name: " Infrared Thermography (IRT)",
                link: '/services/non_destructive_testing/1'
            },
            {
                id: 4,
                name: "Liquid Penetrant Testing",
                link: '/services/non_destructive_testing/1'
            },
            {
                id: 5,
                name: " NDT Objective",
                link: '/services/non_destructive_testing/1'
            },
            {
                id: 6,
                name: "Magnetic Particle Testing (MT)",
                link: '/services/non_destructive_testing/1'
            },
        ]
    },


];

const Industries = [
    {
        name: 'Automobiles & EV',
        url: '/industries/automotive_and_ev',
        description: 'Get college based on Entrance exams',
        href: '/',
        icon: ChartPieIcon,
    },
    {
        name: 'Composite Materials',
        url: '/industries/composite_meteials_and_plastics',
        description: 'Get college based on Entrance exams',
        href: '/',
        icon: ChartPieIcon,
    },
    {
        name: 'Conbstruction',
        url: '/industries/construction',
        description: 'Get college based on Entrance exams',
        href: '/',
        icon: ChartPieIcon,
    },
    {
        name: 'Electronics & Electricals',
        url: '/industries/electronics_and_electrical',
        description: 'Get college based on Entrance exams',
        href: '/',
        icon: ChartPieIcon,
    },
    {
        name: 'Food',
        url: '/industries/food',
        description: 'Get college based on Entrance exams',
        href: '/',
        icon: ChartPieIcon,
    },
    {
        name: 'Medical & Mines',
        url: '/industries/metal_and_mining',
        description: 'Get college based on Entrance exams',
        href: '/',
        icon: ChartPieIcon,
    },
    {
        name: 'Oil & Gas',
        url: '/industries/oil_and_gas',
        description: 'Get college based on Entrance exams',
        href: '/',
        icon: ChartPieIcon,
    },

];

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar({ }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [imageError, setImageError] = useState(false)



    return (
        <>
            <header className="bg-white ">
                <nav
                    className=" mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
                    aria-label="Global"
                >
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Typeyournode</span>
                            <Image
                                height={200}
                                width={200}
                                className="block  h-8 w-auto rounded-lg"
                                src="/assets/logo.png"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="flex lg:hidden ">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>


                    <Link
                        href="/"
                        className="text-sm font-semibold leading-6 text-primaryText mr-8"
                    >
                        Home
                    </Link>
                    <Link
                        href="/products"
                        className="text-sm font-semibold leading-6 text-primaryText mr-8"
                    >
                        Products
                    </Link>


                    <Popover.Group className="hidden lg:flex lg:gap-x-12 mr-8">
                        <Popover className="relative">
                            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-primaryText">
                                Features
                                <FaCaretDown
                                    className="text-sm flex-none text-gray-900"
                                    aria-hidden="true"
                                />
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                    <div className="p-4">
                                        {features.map((item) => (
                                            <Link
                                                href={item?.url}
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                            >
                                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    <item.icon
                                                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                <div className="flex-auto">
                                                    <p className="block font-semibold text-primaryText">
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </p>
                                                    <p className="mt-1 text-gray-600">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>

                    </Popover.Group>

                    <Popover.Group className="hidden lg:flex lg:gap-x-12 mr-8">
                        <Popover className="relative">
                            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-primaryText">
                                Industries
                                <FaCaretDown
                                    className="text-sm flex-none text-gray-900"
                                    aria-hidden="true"
                                />
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                    <div className="p-4">
                                        {Industries?.map((item) => (
                                            <Link
                                                href={item?.url}
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                            >
                                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    <item.icon
                                                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                <div className="flex-auto">
                                                    <p className="block font-semibold text-primaryText">
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </p>
                                                    <p className="mt-1 text-gray-600">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>
                    </Popover.Group>
                    {/* service dorpdown */}
                    <Dropdown title='Service' />

                    {/* <div className="toggleable hover:bg-white  hover:text-primaryText px-12">
                        <input type="checkbox" value="selected" id="toggle-one" className="toggle-input" />
                        <label htmlFor="toggle-one" className="block cursor-pointer text-sm font-semibold leading-6 text-primaryText">Click to show</label>
                        <div role="toggle" className="p-6 mega-menu mb-16 sm:mb-0  ">
                            <div className=" bg-white p-8 w-full max-w-3xl mx-auto flex flex-wrap justify-between shadow-lg rounded-md ">
                                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-300 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                    <h3 className="font-bold text-xl text-primaryText text-bold mb-2">Services</h3>
                                    <li>
                                        <a href="/" className="block p-3 hover:bg-gray-100 rounded text-primaryText hover:text-primaryText">Lando Calrissian</a>
                                    </li>
                                    <li>
                                        <a href="/" className="block p-3 hover:bg-gray-100 rounded text-primaryText hover:text-primaryText">Nien Nunb</a>
                                    </li>
                                    <li>
                                        <a href="/" className="block p-3 hover:bg-gray-100 rounded text-primaryText hover:text-primaryText">Mon Mothma</a>
                                    </li>

                                </ul>
                                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-300 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                    <h3 className="font-bold text-xl text-primaryText text-bold mb-2">Sub Services</h3>
                                    <li>
                                        <a href="/" className="block p-3 hover:bg-gray-100 rounded text-primaryText hover:text-primaryText">Lando Calrissian</a>
                                    </li>
                                    <li>
                                        <a href="/" className="block p-3 hover:bg-gray-100 rounded text-primaryText hover:text-primaryText">Nien Nunb</a>
                                    </li>
                                    <li>
                                        <a href="/" className="block p-3 hover:bg-gray-100 rounded text-primaryText hover:text-primaryText">Mon Mothma</a>
                                    </li>


                                </ul>



                            </div>
                        </div>
                    </div> */}

                    <Link
                        href="/learn"
                        className="text-sm font-semibold leading-6 text-primaryText mr-8"
                    >
                        Learn
                    </Link>
                    <Link
                        href="/events"
                        className="text-sm font-semibold leading-6 text-primaryText mr-8"
                    >
                        Events
                    </Link>


                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="text-sm font-semibold leading-6 text-primaryText mx-6"
                        >
                            {' '}
                            <FaSearch />{' '}
                        </button>

                        <Link
                            href="/auth/login"
                            className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-primaryText hover:bg-gray-50"
                        //  onClick={() => signInWithRedirectGoogle()}
                        >
                            Log in
                            <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </nav>
                <Dialog
                    as="div"
                    className="lg:hidden"
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                >
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Typeyournode</span>
                                <Image
                                    height={200}
                                    width={200}
                                    className="block  h-8 w-auto rounded-lg"
                                    src="/assets/logo.png"
                                    alt="Logo"
                                />{' '}
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <Disclosure as="div" className="-mx-3">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                                                    Features
                                                    <FaCaretDown
                                                        className="text-sm flex-none text-gray-900"
                                                        aria-hidden="true"
                                                    />
                                                </Disclosure.Button>
                                            </>
                                        )}
                                    </Disclosure>


                                </div>
                                <div className="py-6">
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-primaryText hover:bg-gray-50"
                                    >
                                        {' '}
                                        <FaSearch />{' '}
                                    </button>

                                    <Link
                                        href="/auth/login"
                                        className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-primaryText hover:bg-gray-50"
                                    //  onClick={() => signInWithRedirectGoogle()}
                                    >
                                        Log in
                                        <span aria-hidden="true">&rarr;</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header >

        </>
    );
}