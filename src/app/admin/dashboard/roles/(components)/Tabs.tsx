import { Fragment, useState } from 'react';
import { Tab } from '@headlessui/react';

import { FaPlusCircle } from 'react-icons/fa';
import RolesTable from './RolesTable';
import RolesPeopleTable from './RolesPeopleTable';
import CreateRoleModal from '../CreateRoleModal';
import AssignRole from './AssignRole';


interface ITabsProps {
    employeeList: any
    updateEmployeeStatus: any
    createRole: (name: string, permissions: string[]) => void;
    rolesData: any
}




function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}


// component
const Tabs = ({ employeeList, updateEmployeeStatus, createRole, rolesData }: ITabsProps) => {

    // states 
    const [openModal, setOpenModal] = useState(false);
    const [value, setValue] = useState(0);
    const [openPeopleModal, setOpenPeopleModal] = useState(false);



    return (
        <>
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
                                    <span>Assign Employee</span>
                                </div>
                            </button>
                        </div>

                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>
                            <RolesTable rolesData={rolesData} />
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className="w-full bg-white rounded-xl mt-2 py-2 ">
                                <RolesPeopleTable employeeList={employeeList} updateEmployeeStatus={updateEmployeeStatus} />
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
            {openModal && (
                <CreateRoleModal setOpenModal={setOpenModal} openModal={openModal} createRole={createRole} />
            )}
            {openPeopleModal && (
                <AssignRole
                    setOpenPeopleModal={setOpenPeopleModal}
                    openPeopleModal={openPeopleModal}
                    employeeList={employeeList}
                />
            )}
        </>
    );
};

export default Tabs;