'use client'

import { Invoice } from '@/gql/graphql';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillEye, AiTwotoneDelete } from 'react-icons/ai';
import ViewModal from './ViewModal';
interface ITableItem {
    data: Invoice[]
    deleteInvoice: (id: any) => void
    setIsOpen: (isOpen: boolean) => void
    setCurrentComplain: (complain: any) => void
}


const InvoiceTable = ({ data, deleteInvoice, setIsOpen, setCurrentComplain }: ITableItem) => {


    return (
        <table className="w-full table-auto text-sm text-left">
            <thead className="text-gray-600 font-medium border-b">
                <tr>
                    <th className="py-3 pr-6">Serial No.</th>
                    <th className="py-3 pr-6">Invoice Id</th>
                    <th className="py-3 pr-6">Status</th>
                    <th className="py-3 pr-6">Price</th>
                    <th className="py-3 pr-6 text-right">Action</th>
                </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
                {
                    data && data.map((item, idx) => (
                        <tr key={item?.id} className=''>
                            <td className="pr-6 py-4 whitespace-nowrap">{idx + 1}</td>
                            <td className="pr-6 py-4 whitespace-nowrap">
                                {item?.id}
                            </td>
                            <td className="pr-6 py-4 whitespace-nowrap">
                                {item?.status}
                            </td>
                            <td className="pr-6 py-4 whitespace-nowrap">{item?.totalPrice || 0}</td>
                            <td className="text-right whitespace-nowrap space-x-3">

                                <button onClick={() => {
                                    setIsOpen(true)
                                    setCurrentComplain(item?.complain)
                                }} className="py-1.5 px-3 text-gray-600 hover:text-gray-500 duration-150 hover:bg-gray-50 border rounded-lg">
                                    View Complain
                                </button>
                                <Link href={`/admin/dashboard/complains/preview/${item?.id}`} className="py-1.5 px-3 text-gray-600 hover:text-gray-500 duration-150 hover:bg-gray-50 border rounded-lg">
                                    Edit
                                </Link>
                                <button onClick={() => deleteInvoice(item?.id)} className="py-1.5 px-3 text-gray-600 hover:text-gray-500 duration-150 hover:bg-gray-50 border rounded-lg">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>

        </table>
    );
};

export default InvoiceTable;    