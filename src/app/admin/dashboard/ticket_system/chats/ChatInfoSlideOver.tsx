import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ModuleTicket } from '@/gql/graphql'
import Link from 'next/link'
import { HiOutlineDocumentDownload } from 'react-icons/hi'


interface Props {
    open: boolean
    setOpen: (open: boolean) => void
    data: ModuleTicket,
    loading: boolean
}


export default function ChatInfoSlideOver({ open, setOpen, data, loading }: Props) {


    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-[90000000000000000]" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-500"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-500"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                            <button
                                                type="button"
                                                className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                onClick={() => setOpen(false)}
                                            >
                                                <span className="absolute -inset-2.5" />
                                                <span className="sr-only">Close panel</span>
                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                        {
                                            loading ?

                                                <p>
                                                    Loading....
                                                </p>
                                                :
                                                <>
                                                    <div className="px-4 sm:px-6">
                                                        <p className='text-xl font-semibold '>Vendor Details:</p>
                                                        <p className='capitalize'>Company name: {data?.vendorHas?.userIs?.companyName || 'N/A'}</p>
                                                        <p>Email: {data?.vendorHas?.userIs?.email || 'N/A'}</p>
                                                        <p>City: {data?.vendorHas?.userIs?.hasPrimaryaddress?.city || 'N/A'}</p>
                                                        <p>State: {data?.vendorHas?.userIs?.hasPrimaryaddress?.state || 'N/A'}</p>
                                                    </div>

                                                    <div className="px-4 sm:px-6 mt-8">
                                                        <p className='text-xl font-semibold '>Client Details:</p>
                                                        <p className='capitalize'>Company name: {data?.clientHas?.userIs?.companyName || 'N/A'}</p>
                                                        <p>Email: {data?.clientHas?.userIs?.email || 'N/A'}</p>
                                                        <p>City: {data?.clientHas?.userIs?.hasPrimaryaddress?.city || 'N/A'}</p>
                                                        <p>State: {data?.clientHas?.userIs?.hasPrimaryaddress?.state || 'N/A'}</p>
                                                    </div>
                                                    <div className="px-4 sm:px-6 mt-8">
                                                        <p className='text-xl font-semibold '>Module Details:</p>
                                                        <p className='capitalize'>Name: {data?.forModule?.title || 'N/A'}</p>
                                                        <p>Description: {data?.forModule?.description || 'N/A'}</p>
                                                        <p className='
                                                        mt-5'>Documents:</p>
                                                        <div className='grid grid-cols-2 lg:grid-cols-3'>


                                                            {
                                                                data?.forModule?.files ?
                                                                    data?.forModule?.files?.map((item, index) =>
                                                                        <Link href={item || '#'} key={index} className=' h-14 w-full bg-gray-200 rounded-md lg:h-20 lg:w-full '>
                                                                            <div className='flex items-center text-xl  justify-center space-x-2'>
                                                                                <p className='mt-5'><HiOutlineDocumentDownload /></p>

                                                                            </div>
                                                                        </Link>

                                                                    )
                                                                    :

                                                                    <p className='mt-3 text-sm col-span-full'>No Document Found</p>
                                                            }
                                                        </div>
                                                    </div>
                                                </>

                                        }



                                        <div className="relative mt-6 flex-1 px-4 sm:px-6">

                                            {/* Your content */}

                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
