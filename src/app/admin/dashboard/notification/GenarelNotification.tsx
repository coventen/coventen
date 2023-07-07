import React from 'react';

const GenarelNotification = () => {
    return (
        <div>
            <div className="w-full">
                <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                    <div className="mt-7 overflow-x-auto">
                        <table className="w-full whitespace-nowrap">
                            <tbody>
                                {
                                    [1, 2, 3, 4].map(item =>
                                        <div key={item}>
                                            <tr className="focus:outline-none h-16 border border-gray-100 rounded">
                                                <td>
                                                    <div className="ml-5">
                                                        <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                            <input placeholder="checkbox" type="checkbox" className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                            <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                                    <path d="M5 12l5 5l10 -10"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="">
                                                    <div className="flex items-center pl-5">
                                                        <p className="text-base font-medium leading-none text-gray-700 mr-2">Marketing Keynote Presentation</p>

                                                    </div>
                                                </td>
                                                <td className="pl-24">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                            <path d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <circle cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">23/12/12</p>
                                                    </div>
                                                </td>


                                                <td className="pl-5">
                                                    <button className="py-3 px-3 text-sm focus:outline-none leading-none text-primary  bg-primary/10 rounded">Published today at 18:00</button>
                                                </td>
                                                <td className="pl-4">
                                                    <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                                </td>
                                                <td>
                                                    <div className="relative px-5 pt-2">
                                                        <button className="focus:ring-2 rounded-md focus:outline-none" role="button" aria-label="option">
                                                            <svg className="dropbtn" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            </svg>
                                                        </button>
                                                        <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 hidden">
                                                            <div className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                                <p>Edit</p>
                                                            </div>
                                                            <div className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                                <p>Delete</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="h-3"></tr>
                                        </div>)
                                }



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GenarelNotification;