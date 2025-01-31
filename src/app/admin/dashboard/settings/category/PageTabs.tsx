
'use client';

import { Fragment, useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';

import DataTable from './DataTable';
import AddNewPage from './AddNew';





function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

// component
const PageTabs = ({ addNewItem, categoryData, deleteItem, selectedType, setSelectedType }: any) => {



    //render
    return (
        <div className="w-full  bg-white  dark:bg-darkBg p-2 lg:p-7 rounded ">

            <Tab.Group >
                <div className="flex items-center justify-between mb-3">
                    <div className="mb-3">
                        <h4 className="text-primary-main font-semibold text-xl">
                            Categories
                        </h4>
                    </div>
                    <div className=''>
                        <Tab.List className="flex space-x-1 rounded-sm bg-gray-100 p-1 max-w-xs mx-auto">
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-52 rounded-sm py-2.5 text-sm font-medium leading-5 text-gray-900',
                                        '',
                                        selected
                                            ? 'bg-white  '
                                            : 'text-gray hover:bg-blue/[0.12] hover:text-blue'
                                    )
                                }
                            >
                                Data
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-52 rounded-sm py-2.5 text-sm font-medium leading-5 text-gray-900',
                                        '',
                                        selected
                                            ? 'bg-white  '
                                            : 'text-gray hover:bg-blue/[0.12] hover:text-blue'
                                    )
                                }
                            >
                                Add New
                            </Tab>
                        </Tab.List>
                    </div>
                </div>
                <div className="w-full mt-16">


                    <Tab.Panels>
                        <Tab.Panel>
                            <div className="w-full min-h-screen bg-white rounded-xl mt-2 py-2  -md">
                                <div className="flex items-center justify-end my-5 w-full
                                ">
                                    <select
                                        value={selectedType}
                                        onChange={(e) => setSelectedType(e.target.value)}
                                        className=" h-full  border  block    bg-white border-gray-300  py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r text-md  focus:border-gray-500  dark:bg-darkBg dark:border-darkBorder">
                                        <option >All</option>
                                        <option >SERVICE</option>
                                        <option >
                                            SOLUTION</option>
                                        <option >
                                            PRODUCT</option>
                                        <option >
                                            EVENT</option>
                                    </select>

                                </div>
                                <DataTable categoryData={categoryData} deleteItem={deleteItem} />
                            </div>

                        </Tab.Panel>
                        <Tab.Panel>
                            <div className="w-full min-h-screen bg-white rounded-xl mt-2 py-2  -md">
                                <AddNewPage addNewItem={addNewItem} />
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>

                </div>
            </Tab.Group>

        </div >
    );
};

export default PageTabs;