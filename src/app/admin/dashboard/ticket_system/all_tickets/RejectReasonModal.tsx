'use client'
import { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Dialog, Transition } from '@headlessui/react';
import AutoSelect from '@/components/AutoSelect';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useManualQuery, useMutation, useQuery } from 'graphql-hooks';
import { toast } from 'react-hot-toast';
import { generateUniqueId } from '@/shared/genarateUniqueId';
import AutoSelectVendor from '@/components/AutoSelectVendor';
import Link from 'next/link';




//props interface
interface IModalProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    reason: string
}




//component
function RejectReasonModal({ isOpen, setIsOpen, reason }: IModalProps) {



    //handle close modal
    function closeModal() {
        setIsOpen(false);
    }


    //render
    return (
        <div>


            <Transition.Root show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed z-[5000000000] inset-0 overflow-y-auto"
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

                            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full sm:p-6">
                                <p className="focus:outline-none pt-4 pb-8 text-base text-center sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Reject Reason</p>

                                <div className='flex items-center justify-center flex-wrap'>
                                    <p className='text-gray-800 font-semibold'>
                                        Reason: {reason}
                                    </p>
                                </div>


                                <div className="mt-10 flex justify-end">

                                    <button
                                        type="button"
                                        className="ml-2 px-4 py-2 text-gray-500  hover:bg-gray-200"
                                        onClick={closeModal}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );
}

export default RejectReasonModal;
