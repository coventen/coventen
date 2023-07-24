import React from 'react';
import { AiFillEye, AiTwotoneDelete } from 'react-icons/ai';

const LogTable = () => {
    return (
        <table className="w-full leading-normal">


            <thead>
                <tr>

                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase ">
                        Employee
                    </th>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase ">
                        Client
                    </th>

                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase ">
                        Date
                    </th>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase ">
                        Time
                    </th>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase ">
                        Status
                    </th>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase ">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    [...Array(10)].map((_, i) =>
                        <tr key={i}>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                <div className="flex items-center">

                                    <div className="ml-3">
                                        <p className="text-gray-700 font-bold  whitespace-nowrap ">
                                            Employee Name
                                        </p>
                                        <p className="text-gray-700  text-[10px] whitespace-nowrap ">
                                            example@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </td>

                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 w-10 h-10">
                                        <div
                                            className="flex items-center justify-center h-10 w-10 bg-gray-300 text-lg  font-bold rounded-lg"
                                        >
                                            H
                                        </div>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-gray-700 font-bold  whitespace-nowrap ">
                                            User Name
                                        </p>
                                        <p className="text-gray-700  text-[10px] whitespace-nowrap ">
                                            Example  Company Name
                                        </p>
                                    </div>
                                </div>
                            </td>


                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                <p className="text-gray-700  whitespace-nowrap  ">
                                    12-12-2023
                                </p>
                            </td>
                            <td className="px-3 py-5 border-b border-gray-200 bg-white text-xs">
                                <p className="text-gray-700  whitespace-nowrap  ">
                                    23.00
                                </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                <span
                                    className="relative inline-bloc mx-auto px-3 py-1  leading-tight">
                                    <span aria-hidden
                                        className="absolute inset-0 opacity-50 rounded-full"></span>
                                    <span className="relative whitespace-nowrap  bg-green-200 text-green-800 px-5 py-1 rounded-lg font-semibold">Assigned ticket</span>
                                </span>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                <div className="relative flex items-center justify-around  space-x-3 px-8 ">

                                    <button className="focus:ring-2 focus:ring-offset-2  text-sm leading-none text-green-600 py-2 px-2 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"><AiFillEye /></button>
                                    <button className="focus:ring-2 focus:ring-offset-2  text-sm leading-none text-red-600 py-2 px-2 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"><AiTwotoneDelete /></button>
                                </div>
                            </td>
                        </tr>)
                }





            </tbody>
            {/* <TicketModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
        </table>
    );
};

export default LogTable;