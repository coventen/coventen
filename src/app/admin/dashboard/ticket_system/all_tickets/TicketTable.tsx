'use client'

import React, { useState } from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BiSolidEditAlt } from 'react-icons/bi';
import TicketModal from './TicketReassignModal';
import { ModuleTicket } from '@/gql/graphql';


interface ITicketTable {
    data: ModuleTicket[],
    setIsOpen: (value: boolean) => void,
    setCurrentModuleTicket: (value: any) => void
}


const TicketTable = ({ data, setIsOpen, setCurrentModuleTicket }: ITicketTable) => {


    return (
        <table className="min-w-full leading-normal">
            <thead>
                <tr>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        User
                    </th>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Vendor
                    </th>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Ticket Id
                    </th>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Status
                    </th>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>

                {
                    data && data.map((item, index) =>
                        <tr key={item.id}>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                <div className="flex items-center">

                                    <div className="ml-3">
                                        <p className="text-gray-700 font-bold whitespace-no-wrap">
                                            {item.clientHas?.userIs?.companyName || "N/A"}
                                        </p>
                                        <p className="text-gray-700  text-[10px">
                                            {item.clientHas?.userIs?.email || "N/A"}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                <div className="flex items-center">

                                    <div className="">
                                        <p className="text-gray-700 ">
                                            {item.vendorHas?.userIs?.companyName || "N/A"}
                                        </p>

                                    </div>
                                </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                <p className="text-gray-700 whitespace-no-wrap font-bold">
                                    {item.ticket}
                                </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                <span
                                    className="relative inline-block px-3 py-1  leading-tight">
                                    <span aria-hidden
                                        className="absolute inset-0 opacity-50 rounded-full"></span>
                                    <span className="relative bg-green-200 text-green-800 px-2 p-1 rounded font-semibold">{item.status || 'PENDING'}</span>
                                </span>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                <div className="relative flex items-center justify-around  space-x-3 px-8 ">
                                    {
                                        ((item?.status as string) === 'ACCEPTED' || (item?.status as string) === 'COMPLAINED' || (item?.status as string) === 'UNDER_REVIEW' || (item?.status as string) === 'DRAFT')
                                            ? (
                                                <button
                                                    disabled
                                                    onClick={() => setIsOpen(true)}
                                                    className="py-1.5 bg-gray-600 px-3 text-white duration-150 uppercase border rounded"
                                                >
                                                    Reassign
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => {
                                                        setIsOpen(true)
                                                        setCurrentModuleTicket({
                                                            moduleTicketId: item.id,
                                                            vendorId: item.vendorHas?.userIs?.id
                                                        })
                                                    }}
                                                    className="py-1.5 bg-red-600 px-3 text-white duration-150 uppercase border rounded"
                                                >
                                                    Reassign
                                                </button>
                                            )
                                    }



                                </div>
                            </td>
                        </tr>

                    )
                }





            </tbody>
            {/* <TicketModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
        </table>
    );
};

export default TicketTable;