'use client'

import { Invoice } from '@/gql/graphql';
import convertISODateToDDMMYear from '@/shared/convertISODateToDDMMYear';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiFillEye, AiTwotoneDelete } from 'react-icons/ai';
import { useCounterData } from '../../CounterProvider';
import { useMutation } from 'graphql-hooks';
import { useGqlClient } from '@/hooks/UseGqlClient';
import Loading from '@/app/loading';
import toast from 'react-hot-toast';
interface ITableItem {
    data: any[]
    deleteInvoice: (id: any) => void
    getInvoiceData: any
    setRefetch: any
}


const UPDATE_INVOICE = `
mutation UpdateInvoices($where: InvoiceWhere, $update: InvoiceUpdateInput) {
    updateInvoices(where: $where, update: $update) {
      info {
        nodesCreated
      }
    }
  }
`


const InvoiceTable = ({ data, deleteInvoice, getInvoiceData, setRefetch }: ITableItem) => {
    const [isOpen, setIsOpen] = useState(false);


    // HOOKS
    const counterData = useCounterData()
    const client = useGqlClient()



    const [updateInvoiceFn, updateInvoiceState] = useMutation(UPDATE_INVOICE, { client })


    const updateInvoice = async (id: string, status: string) => {

        const { data } = await updateInvoiceFn({
            variables: {
                "where": {
                    "id": id
                },
                "update": {
                    "paymentStatus": status
                }
            }
        })
        if (data) {
            toast.success('updated successfully')
            setRefetch(true)
            getInvoiceData()
        }

    }


    useEffect(() => { }, [updateInvoiceState.data])



    const handleClick = async (id: string, isViewed: boolean) => {
        if (!isViewed) {
            counterData?.handleUpdateView(id, "invoice")
            counterData?.invoiceRefetch()
        }
    }


    if (updateInvoiceState?.loading) return <Loading />

    console.log(data, 'this is data')

    return (
        <table className="w-full table-auto text-sm text-left">
            <thead className="text-gray-600 font-medium border-b">
                <tr>
                    <th className="py-3 pr-6">Serial No.</th>
                    <th className="py-3 pr-6">Invoice Id</th>
                    <th className="py-3 pr-6">User Id</th>
                    <th className="py-3 pr-6">Type</th>
                    <th className="py-3 pr-6">Expiry Date</th>
                    <th className="py-3 pr-6">Payment Status</th>
                    <th className="py-3 pr-6  text-center">Action</th>
                </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
                {
                    data && data.map((item, idx) => (
                        <tr key={item?.id} className=''>
                            <td className="pr-6 py-4 whitespace-nowrap">{idx + 1}</td>
                            <td className="pr-6 py-4 whitespace-nowrap">
                                {
                                    `CIS/IN${item?.ticket}`
                                }

                            </td>
                            <td className="pr-6 py-4 whitespace-nowrap uppercase">
                                <Link target='_blank' href={`/admin/dashboard/users/${item?.hasClient?.userIs?.id}`}>
                                    {item?.hasClient?.userIs?.userId || 'N/A'}
                                </Link>
                            </td>
                            <td className="pr-6 py-4 whitespace-nowrap uppercase">{item?.type}</td>

                            <td className="pr-6 py-4 whitespace-nowrap">{convertISODateToDDMMYear(item?.expiryDate) || 'N/A'}</td>
                            <td className="pr-2 py-2 whitespace-nowrap uppercase ">
                                <select
                                    onChange={(e) => updateInvoice(item?.id, e.target.value)}
                                    value={item?.paymentStatus}
                                    name=""
                                    className='p-0 m-0'
                                    id=""
                                >
                                    <option value="">Select</option>
                                    <option value="Paid">Paid</option>
                                    <option value="Unpaid">Unpaid</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Partially Paid">Partially Paid</option>
                                    <option value="Over Due">Over Due</option>
                                    <option value="Overdue">Overdue</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Processed">Processed</option>
                                    <option value="Canceled">Canceled</option>
                                    <option value="Cancelled">Cancelled</option>
                                    <option value="Refunded">Refunded</option>
                                    <option value="Disputed">Disputed</option>
                                    <option value="Authorized">Authorized</option>
                                    <option value="On Hold">On Hold</option>
                                    <option value="Delinquent">Delinquent</option>
                                    <option value="Settled">Settled</option>
                                    <option value="Cleared">Cleared</option>
                                    <option value="Sent To Collections">Sent To Collections</option>
                                    <option value="Chargeback">Chargeback</option>
                                    <option value="Void">Void</option>
                                    <option value="Pending Review">Pending Review</option>
                                    <option value="Not Applicable">Not Applicable</option>
                                </select>
                            </td>


                            <td className=" whitespace-nowrap ">
                                <div className="relative flex items-center justify-end  space-x-4 px-8 ">
                                    <div onClick={() => handleClick(item?.id, item?.isViewed as boolean)} >
                                        <Link target='_blank' href={`/admin/dashboard/invoice/preview/${item?.id}`} className="focus:ring-2 focus:ring-offset-2 block  text-sm leading-none text-green-600 py-2 px-2 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"><AiFillEye />
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
        </table >
    );
};

export default InvoiceTable;    