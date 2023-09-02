
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';
import React, { Fragment } from 'react';
import ServiceBody from './ServiceBody';





const getServices = async () => {

    const res = fetch('https://coventenapp.el.r.appspot.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `query ServicePages {
                servicePages {
                  id
                  title
                  hasSubservice {
                    id
                    title
                    slug
                  }
                }
              }`
        })
    })
    const { data } = await res.then(res => res.json())
    return data.servicePages
}





const Services = async () => {
    const services = await getServices()

    console.log(services, 'services 00000000000000')


    return (
        <Popover.Group className="hidden lg:flex lg:gap-x-12 mr-8">
            <Popover className="relative">
                <Popover.Button className="flex items-center outline-none border-none focus:outline-none gap-x-1 text-sm font-semibold leading-6 text-primaryText">
                    Services
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
                    <Popover.Panel className="absolute mt-10 lg:-ml-24 top-full z-10 w-screen max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">

                        {/* main content */}
                        <div className='h-20'>
                            hello
                        </div>
                        <ServiceBody services={services} />
                    </Popover.Panel>
                </Transition>
            </Popover>

        </Popover.Group>
    );
};

export default Services;