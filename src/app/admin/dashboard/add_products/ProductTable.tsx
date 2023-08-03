import React from 'react';
import { AiFillEye, AiTwotoneDelete } from 'react-icons/ai';

const ProductTable = () => {
    return (
        <table className="w-full leading-normal">


            <thead>
                <tr>

                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase ">
                        Serial No.
                    </th>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase ">
                        Name
                    </th>

                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase ">
                        Added Date
                    </th>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase ">
                        Price
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
                                <div className="flex items-center justify-center font-semibold text-base">

                                    {i + 1}
                                </div>
                            </td>

                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                <div className="flex items-center">

                                    <div className="">
                                        <p className="text-gray-700 font-bold  whitespace-nowrap ">
                                            Product name
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
                                    $456
                                </p>
                            </td>
                            <td className="ml-3 border-b border-gray-200 bg-white text-xs">
                                <span
                                    className="relative inline-bloc mx-auto px-3 py-1  leading-tight">
                                    <span aria-hidden
                                        className="absolute inset-0 opacity-50 rounded-full"></span>
                                    <span className="relative whitespace-nowrap  bg-green-200 text-green-800 px-5 py-1 rounded-lg font-semibold">Live</span>
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

export default ProductTable