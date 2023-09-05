import { Switch } from '@headlessui/react';
import React, { useState } from 'react';
import { AiFillEye, } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';


interface Props {
    data: any;
    setCurrentEvent: any;
    loading: boolean;
    setOpenUpdateModal: any;
    setOpenPreviewModal: any;
    setDeleteId: any;

}




const EventTable: React.FC<Props> = ({ data, setCurrentEvent, loading, setOpenUpdateModal, setDeleteId, setOpenPreviewModal }) => {
    if (loading) return <div>Loading...</div>;
    return (
        <div className="container mx-auto px-4 overflow-x-auto">
            <table className="min-w-[800px] w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Serial no.
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Name
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Location
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Status
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data && data.map((item: any, i: number) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {i + 1}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {item?.name?.slice(0, 50) + '...'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {item.location}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div>
                                    <Switch
                                        checked={data?.status}
                                        // onChange={setEnabled}
                                        className={`${data?.status ? 'bg-primary' : 'bg-gray-200'}
          relative inline-flex h-[20px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                                    >
                                        <span className="sr-only">Use setting</span>
                                        <span
                                            aria-hidden="true"
                                            className={`${data?.status ? 'translate-x-8' : 'translate-x-0'
                                                }
            pointer-events-none inline-block h-[15px] w-[15px] mr-1 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                        />
                                    </Switch>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center text-md font-medium flex items-center space-x-2" >
                                <BsPencilSquare className='text-green-500' onClick={() => {
                                    setOpenUpdateModal(true)
                                    setCurrentEvent(item.id)
                                }} />

                                <AiFillEye onClick={() => {
                                    setOpenPreviewModal(true)
                                    setCurrentEvent(item.id)
                                }} className='text-xl text-primary' />

                                <MdDelete onClick={() => {
                                    setDeleteId(item.id)
                                }} className='text-xl text-red-500' />

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EventTable;