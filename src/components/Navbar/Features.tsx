'use client'
import React, { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import { FaCaretDown } from 'react-icons/fa';
import { ChartPieIcon } from '@heroicons/react/24/outline';

// type Items = {
//     name: string;
//     description: string;
//     url: string;
//     icon?: any;

// }


// interface IDropdownProps {
//     data: Items[]
//     title: string
// }

export const features = [
    {
        name: 'About Us',
        url: '/about_us',
        description: 'know About Our company',
        href: '/',
        icon: ChartPieIcon,
    },
    {
        name: 'I wanna take up testing ',
        url: '/features#tekeUptesting',
        description: 'Coveten Technologies is a unified ...',
        href: '/',
        icon: ChartPieIcon,
    },
    {
        name: 'I wanna partner with coveten',
        url: '/features#bePartner',
        description: 'If you’re an engineering and..',
        href: '/',
        icon: ChartPieIcon,
    },
    {
        name: 'I wanna work as freelancer ',
        url: '/features#freelancer',
        description: 'If you belong to industrial designing..',
        href: '/',
        icon: ChartPieIcon,
    },
    {
        name: 'Certification bodies ',
        url: '/features#certification',
        description: 'If you’re running a certification',
        href: '/',
        icon: ChartPieIcon,
    },
    {
        name: 'Service providers ',
        url: '/features#providers',
        description: 'Are you a business owner?..',
        href: '/',
        icon: ChartPieIcon,
    },
    {
        name: 'What if I don’t find a test in app',
        url: '/features#testInApp',
        description: 'Don’t worry, our app can help..',
        href: '/',
        icon: ChartPieIcon,
    },
    {
        name: 'What if I wanted to test abroad',
        url: '/features#testAboard',
        description: ' Why not you can specify actual..',
        href: '/',
        icon: ChartPieIcon,
    },

];




const Features = () => {

    return (
        <Popover.Group className="hidden lg:flex lg:gap-x-12 mr-8">
            <Popover className="relative">
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-primaryText">
                    Features
                    {/* <FaCaretDown
                        className="text-sm flex-none text-gray-900"
                        aria-hidden="true"
                    /> */}
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
                    <Popover.Panel className="absolute -left-8 top-full z-10 mt-10 w-screen max-w-2xl  overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4 grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
                            {features?.map((item: any) => (
                                <Link
                                    href={item?.url}
                                    key={item.name}
                                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                >

                                    <div className="flex-auto">
                                        <p className="block font-semibold text-primaryText">
                                            {item.name}
                                            <span className="absolute inset-0" />
                                        </p>
                                        <p className="mt-1 text-xs text-gray-600">
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
    );
};

export default Features;