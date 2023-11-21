'use client'

import { Invoice } from '@/gql/graphql';
import convertISODateToDDMMYear from '@/shared/convertISODateToDDMMYear';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillEye, AiTwotoneDelete } from 'react-icons/ai';
import { useCounterData } from '../../CounterProvider';
interface ITableItem {
    data: any[]
    deleteInvoice: (id: any) => void
}


const InvoiceTable = ({ data, deleteInvoice }: ITableItem) => {
    const [isOpen, setIsOpen] = useState(false);

    const counterData = useCounterData()

    const handleClick = async (id: string, isViewed: boolean) => {
        if (!isViewed) {
            counterData?.handleUpdateView(id, "invoice")
            counterData?.invoiceRefetch()
        }
    }



    return (
        <table className="w-full table-auto text-sm text-left">
            <thead className="text-gray-600 font-medium border-b">
                <tr>
                    <th className="py-3 pr-6">Serial No.</th>
                    <th className="py-3 pr-6">Id</th>
                    <th className="py-3 pr-6">User Id</th>
                    <th className="py-3 pr-6">Quotation For</th>
                    <th className="py-3 pr-6">Type</th>
                    <th className="py-3 pr-6">Status</th>
                    <th className="py-3 pr-6">Expiry Date</th>
                    <th className="py-3 pr-6 text-right">Action</th>
                </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
                {
                    data && data.map((item, idx) => (
                        <tr key={item?.id} className=''>
                            <td className="pr-6 py-4 whitespace-nowrap">{idx + 1}</td>
                            <td className="pr-6 py-4 whitespace-nowrap">
                                {
                                    `CIS/QN${item?.ticket}`
                                }

                            </td>
                            <td className="pr-6 py-4 whitespace-nowrap capitalize">
                                <Link target='_blank' href={`/admin/dashboard/users/${item?.hasClient?.userIs?.id}`}>
                                    {item?.hasClient?.userIs?.userId || 'N/A'}
                                </Link>
                            </td>
                            <td className="pr-6 py-4 whitespace-nowrap">
                                {item?.sentBy === 'ADMIN' ? 'Sent to Client' : 'Received from Vendor'}
                            </td>
                            <td className="pr-6 py-4 whitespace-nowrap">{item?.type}</td>

                            <td className="pr-6 py-4 whitespace-nowrap capitalize">
                                {
                                    item?.status === 'SENT' && item?.sentBy === 'VENDOR' ? "Received" : item?.status === "SENT" ? "Under Review" : item?.status === "CONFIRMED" ? "Confirmed" : item?.status === "COMPLAINED" ? "Complained" : 'N/A'

                                }
                            </td>
                            <td className="pr-6 py-4 whitespace-nowrap">{convertISODateToDDMMYear(item?.expiryDate) || 'N/A'}</td>
                            <td className=" whitespace-nowrap ">
                                <div className="relative flex items-center justify-end  space-x-4 px-8 ">
                                    <div onClick={() => handleClick(item?.id, item?.isViewed as boolean)} >
                                        <Link href={`/admin/dashboard/quotation/preview/${item?.id}`} className="focus:ring-2 block focus:ring-offset-2  text-sm leading-none text-green-600 py-2 px-2 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"><AiFillEye />
                                        </Link>
                                    </div>
                                    <button
                                        onClick={() => deleteInvoice(item?.id)}
                                        className="focus:ring-2 focus:ring-offset-2  text-sm leading-none text-red-600 py-2 px-2 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">
                                        <AiTwotoneDelete />
                                    </button>
                                </div>

                                {/* <Link href={`/admin/dashboard/invoice/preview/${item?.id}`} className="py-1.5 px-3 text-gray-600 hover:text-gray-500 duration-150 hover:bg-gray-50 border rounded-lg">
                                    View
                                </Link>
                                <button onClick={() => deleteInvoice(item?.id)} className="py-1.5 px-3 text-gray-600 hover:text-gray-500 duration-150 hover:bg-gray-50 border rounded-lg">
                                    Delete
                                </button> */}
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default InvoiceTable;    