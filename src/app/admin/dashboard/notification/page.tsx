'use client'
import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import GenarelNotification from './GenarelNotification';
import NotificationModal from './NotificationModal';
import PersonalizeNotification from './PersonalizeNotification';



function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}



const NotificationPage = () => {

    // States
    const [isOpen, setIsOpen] = useState(false);
    const [newNotification, setNewNotification] = useState(false);



    return (
        <>
            <div className="w-full  bg-white rounded-lg py-4 md:py-7 px-4 md:px-8 xl:px-10 ">
                <div className=" py-4 md:py-7">
                    <div className="flex items-center justify-between">
                        <p className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Notifications</p>

                    </div>
                </div>
                <div className="w-full mt-7">
                    <Tab.Group>
                        <Tab.List className="sm:flex items-center justify-between">
                            <div className=''>
                                <Tab
                                    className={({ selected }) =>
                                        classNames(
                                            ' py-2 px-8   mr-3',
                                            '',
                                            selected
                                                ? ' border-b-2  border-primary text-gray-900'
                                                : 'text-gray-900 hover:border-b-2   hover:border-primary'
                                        )
                                    }
                                >
                                    Genarel
                                </Tab>
                                <Tab
                                    className={({ selected }) =>
                                        classNames(
                                            ' py-2 px-8   mr-3',
                                            '',
                                            selected
                                                ? ' border-b-2  border-primary text-gray-900'
                                                : 'text-gray-900 hover:border-b-2  hover:border-primary'
                                        )
                                    }
                                >
                                    Personalized
                                </Tab>
                            </div>

                            <button onClick={() => setIsOpen(true)} className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-primary hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-white">Add Notification</p>
                            </button>
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel>
                                <GenarelNotification newNotification={newNotification} />
                            </Tab.Panel>
                            <Tab.Panel>
                                <PersonalizeNotification newNotification={newNotification} />
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>

            </div>
            <NotificationModal setIsOpen={setIsOpen} isOpen={isOpen} setNewNotification={setNewNotification} />
        </>
    );
};

export default NotificationPage;