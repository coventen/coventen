'use client';

import { Fragment, useState } from 'react';
import { Tab } from '@headlessui/react';

import { FaPlusCircle } from 'react-icons/fa';
import RolesTable from './RolesTable';
import RolesPeopleTable from './RolesPeopleTable';
import CreateRoleModal from './CreateRoleModal';
import AddPeopleModal from './AddPeopleModal';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const RolesPage = () => {
    const [openModal, setOpenModal] = useState(false);
    const [value, setValue] = useState(0);
    const [openPeopleModal, setOpenPeopleModal] = useState(false);



    // const handleChange = (newValue) => {
    //   setValue(newValue);
    // };

    return (
        <div className="w-full overflow-hidden bg-white p-7 rounded-lg dark:bg-darkBgLight h-full min-h-[80vh]">
            <div className="flex items-center justify-between h-full">
                <div className=" py-4 md:py-7">
                    <div className="flex items-center justify-between">
                        <p className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal ">Roles</p>

                    </div>
                </div>
            </div>
            <div className="w-full mt-16">
                <Tab.Group>
                    <Tab.List className="sm:flex items-center justify-between">
                        <div className=''>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        ' py-2 px-8   mr-3',
                                        '',
                                        selected
                                            ? ' border-b-2  border-primary '
                                            : ' hover:border-b-2   hover:border-primary'
                                    )
                                }
                            >
                                Roles
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        ' py-2 px-8   mr-3',
                                        '',
                                        selected
                                            ? ' border-b-2  border-primary '
                                            : ' hover:border-b-2  hover:border-primary'
                                    )
                                }
                            >
                                Employee
                            </Tab>
                        </div>
                        <div className='space-x-3'>
                            <button onClick={() => setOpenModal(true)} className="focus:ring-2 focus:ring-offset-2 focus:ring-primary/95 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-primary hover:bg-primary/95 focus:outline-none rounded">
                                <div className="text-sm font-medium leading-none flex items-center justify-center space-x-2 text-white">
                                    <span className='mr-1'><FaPlusCircle /> </span>
                                    <span>Add Roles</span>
                                </div>
                            </button>
                            <button onClick={() => setOpenPeopleModal(true)} className="focus:ring-2 focus:ring-offset-2 focus:ring-primary/95 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-primary hover:bg-primary/95 focus:outline-none rounded">
                                <div className="text-sm font-medium leading-none flex items-center justify-center space-x-2 text-white">
                                    <span className='mr-1'><FaPlusCircle /> </span>
                                    <span>Add Employee</span>
                                </div>
                            </button>
                        </div>

                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>
                            <RolesTable />
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className="w-full bg-white rounded-xl mt-2 py-2 shadow-md">
                                <RolesPeopleTable />
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
            {openModal && (
                <CreateRoleModal setOpenModal={setOpenModal} openModal={openModal} />
            )}
            {openPeopleModal && (
                <AddPeopleModal
                    setOpenPeopleModal={setOpenPeopleModal}
                    openPeopleModal={openPeopleModal}
                />
            )}
        </div>
    );
};

export default RolesPage;