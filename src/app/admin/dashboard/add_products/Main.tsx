
'use client';

import { Fragment, useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';

import Link from 'next/link';
import ProductTable from './ProductTable';
import AddProduct from './AddProduct';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}


const Main = () => {
    const [tab, setTab] = useState(0);
    return (
        <div className="w-full  bg-white  dark:bg-darkBg p-2 lg:p-7 rounded ">
            <Tab.Group selectedIndex={tab} onChange={setTab}>
                <div className="flex items-center justify-between mb-3">
                    <div className="mb-3">
                        <h4 className="text-primary-main font-semibold text-xl">
                            Blogs
                        </h4>
                        <p className="text-text_color-main font-normal mt-2">
                            Lorem ipsum dolor sit amet, consectetur.
                        </p>
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
                                Products
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
                                Create Products
                            </Tab>
                        </Tab.List>
                    </div>
                </div>
                <div className="w-full mt-16">


                    <Tab.Panels>
                        <Tab.Panel>
                            <div className="w-full min-h-screen bg-white rounded-xl mt-2 py-2  -md">
                                <ProductTable />
                            </div>

                        </Tab.Panel>
                        <Tab.Panel>
                            <div className="w-full min-h-screen bg-white rounded-xl mt-2 py-2  -md">
                                <AddProduct />
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>

                </div>
                {/* {openModal && (
        <CreateRoleModal setOpenModal={setOpenModal} openModal={openModal} />
      )}
      {openPeopleModal && (
        <AddPeopleModal
          setOpenPeopleModal={setOpenPeopleModal}
          openPeopleModal={openPeopleModal}
        />
      )} */}
            </Tab.Group>

        </div >
    );
};

export default Main;