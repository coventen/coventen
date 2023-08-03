'use client'

import Link from 'next/link';
import React, { useState } from 'react';

interface IDeopdown {
    title: string;
    subTitle?: string;
    menu: any[];
    subMenu?: any[];
}

const services = [
    {
        name: 'Non Destuctive Testing',
        url: '/industries/automotive_and_ev',
        description: 'Get college based on Entrance exams',
        href: '#',
        // icon: ChartPieIcon,
        subService: []
    },
    {
        name: 'Calibration',
        url: '/industries/automotive_and_ev',
        description: 'Get college based on Entrance exams',
        href: '#',
        // icon: ChartPieIcon,
        subService: []

    },
    {
        name: 'Microscopic Testing',
        url: '/industries/automotive_and_ev',
        description: 'Get college based on Entrance exams',
        href: '#',
        // icon: ChartPieIcon,
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
                name: "Liquid Penetrant Testing (PT)",
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


const Dropdown = ({ title, subTitle, menu, subMenu }: IDeopdown) => {

    const [currentService, setCurrentService] = useState('Non Destuctive Testing');




    return (
        <div className="toggleable hover:bg-white  hover:text-primaryText mr-5">
            <input type="checkbox" value="selected" id="toggle-one" className="toggle-input " />
            <label htmlFor="toggle-one" className="block cursor-pointer text-sm font-semibold leading-6 text-primaryText">{title}</label>
            <div role="toggle" className="p-6 mega-menu mb-16 sm:mb-0  ">
                <div className=" bg-white p-8 w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 shadow-lg rounded-md ">
                    <ul className="px-4 w-full  border-gray-300 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                        <h3 className="font-bold text-xl text-primaryText text-bold mb-2">{title}</h3>
                        {
                            menu?.map((item, index) => (
                                <li
                                    onClick={() => setCurrentService(item.name)}
                                    onMouseOver={() => setCurrentService(item.name)}
                                    key={item.id}
                                    className='cursor-pointer'
                                >
                                    <p className="block p-3 hover:bg-gray-100 rounded text-primaryText hover:text-primaryText">{item.name}</p>
                                </li>
                            ))
                        }


                    </ul>
                    <ul className="px-4 w-full md:col-span-2  border-gray-300  pb-6 pt-6 lg:pt-3">
                        {/* <h3 className="font-bold text-xl text-primaryText text-bold mb-2">Sub Services</h3> */}
                        <div className='grid grid-cols-2 text-sm capitalize'>
                            {
                                menu?.find(service => service.name === currentService)?.subService?.length
                                    ?
                                    menu?.find(service => service.name === currentService)?.subService?.map((sebserivce: any) =>
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
            </div >
        </div >
    );
};

export default Dropdown;