import { Service, ServicePage } from '@/gql/graphql';
import React, { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';


interface ServiceBodyProps {
    services: ServicePage[]
}

// component
const ServiceBody = ({ services }: ServiceBodyProps) => {
    //states
    const [currentService, setCurrentService] = useState('Non Destuctive Testing');

    console.log(services, 'services')

    //render
    return (
        <div className=" bg-white p-8 w-full  mx-auto grid grid-cols-1 md:grid-cols-3 shadow-lg rounded-md ">
            <ul className="px-4 w-full  border-gray-300 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                {/* <h3 className="font-bold text-xl text-primaryText text-bold mb-2">{title}</h3> */}
                {
                    services?.map((item, index) => (
                        <li
                            onClick={() => setCurrentService(item?.title || '')}
                            onMouseOver={() => setCurrentService(item?.title || '')}
                            key={item.id}
                            className='cursor-pointer'
                        >
                            <div
                                className={
                                    `${currentService === item.title ?
                                        'bg-gray-100 text-primary' : ''}    
                            flex items-center text-sm transition-all duration-300`}>
                                <p className="block p-3   rounded ">{item.title}</p>
                                <span className={`${currentService === item.title ? 'block' : 'hidden'} transition-all duration-200`}><MdKeyboardArrowRight /></span>
                            </div>
                        </li>
                    ))
                }


            </ul>
            <ul className="px-4 w-full md:col-span-2  border-gray-300  pb-6 pt-6 lg:pt-3">
                {/* <h3 className="font-bold text-xl text-primaryText text-bold mb-2">Sub Services</h3> */}
                <div className='grid grid-cols-2 text-sm capitalize '>
                    {/* {
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
                    } */}


                </div>



            </ul>

        </div>
    );
};

export default ServiceBody;