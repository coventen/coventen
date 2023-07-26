import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BiSolidEditAlt } from 'react-icons/bi';

const UserTable = () => {
    return (
        <table className="min-w-full leading-normal">
            <thead>
                <tr>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-dimText dark:text-darkDimText uppercase tracking-wider dark:bg-darkBg dark:border-darkBorder">
                        User
                    </th>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-dimText dark:text-darkDimText uppercase tracking-wider dark:bg-darkBg dark:border-darkBorder">
                        Email
                    </th>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-dimText dark:text-darkDimText uppercase tracking-wider dark:bg-darkBg dark:border-darkBorder">
                        Company
                    </th>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-dimText dark:text-darkDimText uppercase tracking-wider dark:bg-darkBg dark:border-darkBorder">
                        Location
                    </th>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-dimText dark:text-darkDimText uppercase tracking-wider dark:bg-darkBg dark:border-darkBorder">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs dark:bg-darkBg dark:border-darkBorder">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                                <img className="w-full h-full rounded-full"
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                    alt="" />
                            </div>
                            <div className="ml-3">
                                <p className=" whitespace-no-wrap">
                                    Vera Carpenter
                                </p>
                            </div>
                        </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs dark:bg-darkBg dark:border-darkBorder">
                        <p className=" whitespace-no-wrap">Admin</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs dark:bg-darkBg dark:border-darkBorder">
                        <p className=" whitespace-no-wrap">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs dark:bg-darkBg dark:border-darkBorder">
                        <span
                            className="relative inline-block px-3 py-1  leading-tight">
                            <span aria-hidden
                                className="absolute inset-0 opacity-50 rounded-full"></span>
                            <span className="relative">Delhi</span>
                        </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs dark:bg-darkBg dark:border-darkBorder">
                        <div className="relative flex items-center justify-around  space-x-3 px-8 ">

                            <button className="focus:ring-2 focus:ring-offset-2  text-sm leading-none text-green-600 py-2 px-2 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"><BiSolidEditAlt /></button>
                            <button className="focus:ring-2 focus:ring-offset-2  text-sm leading-none text-red-600 py-2 px-2 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"><AiTwotoneDelete /></button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs dark:bg-darkBg dark:border-darkBorder">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                                <img className="w-full h-full rounded-full"
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                    alt="" />
                            </div>
                            <div className="ml-3">
                                <p className=" whitespace-no-wrap">
                                    Blake Bowman
                                </p>
                            </div>
                        </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs dark:bg-darkBg dark:border-darkBorder">
                        <p className=" whitespace-no-wrap">Editor</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs dark:bg-darkBg dark:border-darkBorder">
                        <p className=" whitespace-no-wrap">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs dark:bg-darkBg dark:border-darkBorder">
                        <span
                            className="relative inline-block px-3 py-1  leading-tight">
                            <span aria-hidden
                                className="absolute inset-0 opacity-50 rounded-full"></span>
                            <span className="relative">Kolkata</span>
                        </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs dark:bg-darkBg dark:border-darkBorder">
                        <div className="relative flex items-center justify-around  space-x-3 px-8 ">

                            <button className="focus:ring-2 focus:ring-offset-2  text-sm leading-none text-green-600 py-2 px-2 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"><BiSolidEditAlt /></button>
                            <button className="focus:ring-2 focus:ring-offset-2  text-sm leading-none text-red-600 py-2 px-2 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"><AiTwotoneDelete /></button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs dark:bg-darkBg dark:border-darkBorder">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                                <img className="w-full h-full rounded-full"
                                    src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                    alt="" />
                            </div>
                            <div className="ml-3">
                                <p className=" whitespace-no-wrap">
                                    Dana Moore
                                </p>
                            </div>
                        </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs dark:bg-darkBg dark:border-darkBorder">
                        <p className=" whitespace-no-wrap">Editor</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs dark:bg-darkBg dark:border-darkBorder">
                        <p className=" whitespace-no-wrap">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs dark:bg-darkBg dark:border-darkBorder">
                        <span
                            className="relative inline-block px-3 py-1  leading-tight">
                            <span aria-hidden
                                className="absolute inset-0  opacity-50 rounded-full"></span>
                            <span className="relative">Delhi</span>
                        </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs dark:bg-darkBg dark:border-darkBorder">
                        <div className="relative flex items-center justify-around  space-x-3 px-8 ">

                            <button className="focus:ring-2 focus:ring-offset-2  text-sm leading-none text-green-600 py-2 px-2 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"><BiSolidEditAlt /></button>
                            <button className="focus:ring-2 focus:ring-offset-2  text-sm leading-none text-red-600 py-2 px-2 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"><AiTwotoneDelete /></button>
                        </div>
                    </td>
                </tr>


            </tbody>
        </table>
    );
};

export default UserTable;