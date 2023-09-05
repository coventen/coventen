'use client'
import React, { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import { FaCaretDown } from 'react-icons/fa';




interface IProps {
    data: any[]
}



const DropdownIndustry = ({ data }: IProps) => {

    return (
        <Popover.Group className="hidden lg:flex lg:gap-x-12 mr-8">
            <Popover className="relative">
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-primaryText outline-none border-none">
                    Industry

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
                    <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                            {
                                data && data?.map((item: any) =>

                                    <div key={item?.id}>
                                        <Link href={`/industries/${item?.id}`} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                            <div className="flex-auto">
                                                <p className="block font-semibold uppercase text-primaryText">
                                                    {item?.title}
                                                    <span className="absolute inset-0" />
                                                </p>
                                                <p className="mt-1 text-gray-600">
                                                    Learn more about {item?.title} industry
                                                </p>
                                            </div>
                                        </Link>
                                    </div>

                                )
                            }
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </Popover.Group>
    );
};

export default DropdownIndustry;