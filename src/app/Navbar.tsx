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
import Dropdown from '@/components/Navbar/Dropdown/Dropdown';
import Services from '@/components/Navbar/Dropdown/Services';
import Features from '@/components/Navbar/Features';



const features = [
    {
        name: 'About Us',
        url: '/about_us',
        description: 'know About Our company',
        href: '/',
        icon: ChartPieIcon,
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


    return (
        <>
            <header className="bg-white ">
                <nav
                    className=" mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
                    aria-label="Global"
                >
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Company name</span>
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
                    <Features />
                    <Services />
                    <Link
                        href="/products"
                        className="text-sm font-semibold leading-6 text-primaryText mr-8"
                    >
                        Products
                    </Link>
                    <Dropdown title='Industries' data={Industries} />
                    <Link
                        href="/learn"
                        className="text-sm font-semibold leading-6 text-primaryText mr-8"
                    >
                        Learn
                    </Link>
                    <Link
                        href="/events/search"
                        className="text-sm font-semibold leading-6 text-primaryText mr-8"
                    >
                        Events
                    </Link>


                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">

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