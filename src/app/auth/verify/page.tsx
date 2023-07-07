'use client'

import React from 'react';

const page = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-0 sm:p-12">
            <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
                <h1 className="text-xl font-bold mb-10 text-gray-700 text-center">Please Fillup the form to continue</h1>
                <form id="form" className='space-y-5'>
                    <div>
                        <label className=" text-gray-500">
                            Company Name
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-gray-300 focus:border-primary shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className=" text-gray-500">
                            Company Email
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-gray-300 focus:border-primary shadow-sm rounded-lg"
                        />
                    </div>

                    <div>
                        <label className=" text-gray-500">
                            Registration number
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-gray-300 focus:border-primary shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className=" text-gray-500">
                            Phone
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-gray-300 focus:border-primary shadow-sm rounded-lg"
                        />
                    </div>



                    <button
                        id="button"
                        type="button"
                        className="w-full mt-9 px-6 py-3  text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-primary hover:bg-primary hover:shadow-lg focus:outline-none"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default page;