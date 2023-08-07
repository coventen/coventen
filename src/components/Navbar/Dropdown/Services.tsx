import React, { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';

const services = [
    {
        id: 1,
        name: 'Non Destuctive Testing',
        url: '/industries/automotive_and_ev',
        description: 'Get college based on Entrance exams',
        href: '#',
        subService: [
            {
                id: 1,
                name: "Acoustic Emission Testing",
                link: '/services/non_destructive_testing/1'
            },
            {
                id: 2,
                name: "Eddy Current Testing",
                link: '/services/non_destructive_testing/2'
            },
            {
                id: 3,
                name: " Infrared Thermography",
                link: '/services/non_destructive_testing/3'
            },
            {
                id: 4,
                name: "Liquid Penetrant Testing",
                link: '/services/non_destructive_testing/4'
            },
            {
                id: 5,
                name: "Magnetic Particle Testing",
                link: '/services/non_destructive_testing/5'
            },
            {
                id: 6,
                name: "NDT Objective",
                link: '/services/non_destructive_testing/6'
            },
            {
                id: 7,
                name: "PMI -Positive Material Identification",
                link: '/services/non_destructive_testing/7'
            },
            {
                id: 8,
                name: "Ultrasonic Testing",
                link: '/services/non_destructive_testing/8'
            },
            {
                id: 9,
                name: "X-ray testing or Radiographic testing",
                link: '/services/non_destructive_testing/9'
            },
            {
                id: 10,
                name: "XRD (X-ray Diffraction)",
                link: '/services/non_destructive_testing/10'
            },
            {
                id: 11,
                name: "XRF (X-ray Fluorescence)",
                link: '/services/non_destructive_testing/11'
            },
        ]
    },
    {
        id: 2,
        name: 'Calibration',
        url: '/industries/automotive_and_ev',
        description: 'Get college based on Entrance exams',
        href: '#',
        // icon: ChartPieIcon,


    },
    {
        id: 3,
        name: 'Microscopic Testing',
        url: '/industries/automotive_and_ev',
        description: 'Get college based on Entrance exams',
        href: '#',
        subService: []

    },


];







const Services = () => {
    const [currentService, setCurrentService] = useState('Non Destuctive Testing');
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
                        <div className=" bg-white p-8 w-full  mx-auto grid grid-cols-1 md:grid-cols-3 shadow-lg rounded-md ">
                            <ul className="px-4 w-full  border-gray-300 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                {/* <h3 className="font-bold text-xl text-primaryText text-bold mb-2">{title}</h3> */}
                                {
                                    services?.map((item, index) => (
                                        <li
                                            onClick={() => setCurrentService(item.name)}
                                            onMouseOver={() => setCurrentService(item.name)}
                                            key={item.id}
                                            className='cursor-pointer'
                                        >
                                            <div
                                                className={
                                                    `${currentService === item.name ?
                                                        'bg-gray-100 text-primary' : ''}    
                                                flex items-center text-sm transition-all duration-300`}>
                                                <p className="block p-3   rounded ">{item.name}</p>
                                                <span className={`${currentService === item.name ? 'block' : 'hidden'} transition-all duration-200`}><MdKeyboardArrowRight /></span>
                                            </div>
                                        </li>
                                    ))
                                }


                            </ul>
                            <ul className="px-4 w-full md:col-span-2  border-gray-300  pb-6 pt-6 lg:pt-3">
                                {/* <h3 className="font-bold text-xl text-primaryText text-bold mb-2">Sub Services</h3> */}
                                <div className='grid grid-cols-2 text-sm capitalize '>
                                    {
                                        services?.find(service => service.name === currentService)?.subService?.length
                                            ?
                                            services?.find(service => service.name === currentService)?.subService?.map((sebserivce: any) =>
                                                <li key={sebserivce.id}>
                                                    <Link href={sebserivce.link} className="block p-3 hover:bg-gray-100 rounded text-primaryText hover:text-primaryText hover:underline" > {sebserivce.name}</Link>
                                                </li>
                                            )
                                            :
                                            <li>
                                                <p className="block p-3 hover:bg-gray-100 rounded text-primaryText hover:text-primaryText">No Sub Service Available yet.</p>
                                            </li>
                                    }


                                </div>



                            </ul>

                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>

        </Popover.Group>
    );
};

export default Services;