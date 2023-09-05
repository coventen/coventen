import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import { MdDelete } from 'react-icons/md';


interface Props {
    setOpenModal: any;
    openModal: any;
    createEventFn: any
    loading: any
}

const EventModal: React.FC<Props> = ({
    setOpenModal,
    openModal,
    createEventFn,
    loading
}) => {

    // const { image, setImage, uploadImage, uploading, currentImageRef, deleteImage } = useUploadImage()

    function closeModal() {
        setOpenModal(false);
    }





    const handleSubmit = (e: any) => {
        e.preventDefault();

        const name = e.target.name.value;
        const startAt = e.target.startAt.value;
        const endAt = e.target.endAt.value;
        const description = e.target.description.value;
        const location = e.target.location.value;
        const image = e.target.image.f;
        console.log(e.target.image, 'images')
        const input = {
            name,
            startAt,
            endAt,
            description,
            location,
            image: ""

        }
        console.log(input, 'input', image)

    };

    // console.log(image, 'image')

    return (
        <>
            <Transition appear show={openModal} as={Fragment}>
                <Dialog as="div" className="relative z-[900000000000000000]" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-[650px] py-12 flex items-center justify-center flex-col transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-xl font-medium leading-6 text-gray-900 mb-7"
                                    >
                                        Add New Event
                                    </Dialog.Title>
                                    <form onSubmit={handleSubmit} className="bg-transparent w-full">
                                        <div className="grid grid-cols-1 lg:grid-cols-2  gap-0">
                                            <div className=" p-1  ">
                                                <label className="block text-sm text-gray-500 dark:text-gray-300">  Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Name"
                                                    className="mt-2 w-full block  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:primary/10"
                                                />
                                            </div>


                                            <div className=" p-1  ">

                                                <label htmlFor='startAt' className="block text-sm text-gray-500 dark:text-gray-300">  Start at</label>

                                                <input type="date" id='startAt' name="start At"
                                                    placeholder="startAt" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />


                                            </div>
                                            <div className=" p-1  ">
                                                <label htmlFor='startAt' className="block text-sm text-gray-500 dark:text-gray-300">  End at</label>
                                                <input
                                                    type="date"
                                                    name="endAt"
                                                    placeholder="ends At"
                                                    className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

                                            </div>


                                            <div className=" p-1    ">
                                                <label className="block text-sm text-gray-500 dark:text-gray-300">  Location</label>
                                                <input
                                                    type="text"
                                                    name="location"
                                                    placeholder="location"
                                                    className="mt-2 w-full block  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:primary/10"
                                                />
                                            </div>

                                            <div className=" p-1  col-span-full  ">
                                                <label className="block text-sm text-gray-500 dark:text-gray-300"> Image</label>
                                                <input
                                                    type="file"
                                                    name="location"
                                                    placeholder="image"
                                                    className="mt-2 w-full block  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:primary/10"
                                                />
                                            </div>
                                            <div className=" p-1  col-span-2 ">
                                                <label className="block text-sm text-gray-500 dark:text-gray-300">  description</label>
                                                <textarea
                                                    name="description"
                                                    rows={4}
                                                    placeholder="decription"
                                                    className="mt-2 w-full block  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:primary/10"
                                                />
                                            </div>



                                        </div>
                                        <button className="btn-primary mx-auto block mt-8">
                                            {
                                                loading ? 'Loading...' : 'Add Event'
                                            }
                                        </button>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default EventModal;