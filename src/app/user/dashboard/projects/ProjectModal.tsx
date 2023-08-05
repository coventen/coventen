'use client'
import { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Dialog, Transition } from '@headlessui/react';
import { toast } from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Image from 'next/image';
import { RiCloseCircleFill } from 'react-icons/ri';

//props interface
interface INotificationModal {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}


//component
function ProjectModal({ isOpen, setIsOpen }: INotificationModal) {

    //states



    //handle close modal
    function closeModal() {
        setIsOpen(false);
    }

    //handle open modal
    function openModal() {
        setIsOpen(true);
    }


    //creating notification


    //render
    return (
        <div>


            <Transition.Root show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed z-[120000000000] inset-0 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
                        </Transition.Child>

                        <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >

                            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6">
                                {/* close btn */}
                                <button
                                    type="button"
                                    className="absolute top-6 right-5 px-4 py-3 text-xl  text-gray-700 rounded-full hover:bg-gray-200"
                                    onClick={closeModal}
                                >
                                    <RiCloseCircleFill />
                                </button>

                                {/* modal main body */}
                                <div className='py-8  px-2 lg:px-12 rounded-lg'>
                                    <div className="">
                                        <div className="pb-10 relative">
                                            <h5 className="text-gray-600 font-bold text-xs lg:text-base mb-3">
                                                Example Project Name Lorem ipsum dolor
                                            </h5>
                                            <p className="text-xs lg:text-sm ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem iste incidunt asperiores porro eaque veniam tenetur atque debitis magnam culpa reiciendis excepturi voluptas vitae.</p>
                                        </div>
                                        <div className="grid grid-cols-1 lg:grid-cols-3">
                                            <div>
                                                <ul className="list-none">
                                                    <li>
                                                        <p className="text-xs lg:text-sm font-bold text-gray-600">
                                                            Contact Person
                                                        </p>
                                                        <p className="text-xs lg:text-sm ">John Doe</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-xs lg:text-sm font-bold text-gray-600">
                                                            company
                                                        </p>
                                                        <p className="text-xs lg:text-sm ">John Doe Prvt Ltd.</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-xs lg:text-sm font-bold text-gray-600">
                                                            Email
                                                        </p>
                                                        <p className="text-xs lg:text-sm ">john@doe.com</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-xs lg:text-sm font-bold text-gray-600">
                                                            Location
                                                        </p>
                                                        <p className="text-xs lg:text-sm ">John Does address Lorem, ipsum.</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-span-2">
                                                <ul className="list-none">
                                                    {
                                                        [...Array(4)].map((item, i) =>
                                                            <li key={i} className='py-1'>
                                                                <p className="text-xs lg:text-sm font-semibold text-gray-600">
                                                                    Module-{i + 1} :  Lorem ipsum dolor sit. Lorem, ipsum dolor.
                                                                </p>                          </li>

                                                        )
                                                    }


                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-5'>
                                        <p className='text-xs lg:text-sm font-bold text-gray-700'>Documents</p>
                                        <PhotoProvider>
                                            <div className='mt-3 grid grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-6'>
                                                <div className=' h-14 w-full lg:h-20 lg:w-full '>
                                                    <PhotoView src="/assets/home/lab1.jpg">
                                                        <Image height={500} width={500} src="/assets/home/lab1.jpg" alt="" className='w-full h-full object-cover' />
                                                    </PhotoView>
                                                </div>
                                                <div className=' h-14 w-full lg:h-20 lg:w-full '>
                                                    <PhotoView src="/assets/home/lab2.jpg">
                                                        <Image height={500} width={500} src="/assets/home/lab2.jpg" alt="" className='w-full h-full object-cover' />
                                                    </PhotoView>
                                                </div>
                                                <div className=' h-14 w-full lg:h-20 lg:w-full '>
                                                    <PhotoView src="/assets/home/lab3.jpg">
                                                        <Image height={500} width={500} src="/assets/home/lab3.jpg" alt="" className='w-full h-full object-cover' />
                                                    </PhotoView>
                                                </div>
                                                <div className=' h-14 w-full lg:h-20 lg:w-full '>
                                                    <PhotoView src="/assets/home/lab4.jpg">
                                                        <Image height={500} width={500} src="/assets/home/lab4.jpg" alt="" className='w-full h-full object-cover' />
                                                    </PhotoView>
                                                </div>

                                            </div>

                                        </PhotoProvider>

                                    </div>
                                </div>

                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );
}

export default ProjectModal;
