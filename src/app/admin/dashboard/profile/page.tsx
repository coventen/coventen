import React from 'react';

const page = () => {
    return (
        <>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
                <form className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <div className="flex flex-col justify-center bg-white max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
                                <img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                                <div className="space-y-4 text-center divide-y divide-gray-700">
                                    <div className="my-2 space-y-1">
                                        <h2 className="text-xl font-semibold sm:text-2xl">Leroy Jenkins</h2>
                                        <p className="px-5 text-xs sm:text-base dark:text-gray-400">Admin</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-2">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">First name</label>
                                <input id="firstname" type="text" placeholder="First name" className="w-full rounded-md focus:ring ring-primary dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-sm">Last name</label>
                                <input id="lastname" type="text" placeholder="Last name" className="w-full rounded-md focus:ring ring-primary dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring ring-primary dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="website" className="text-sm">Website</label>
                                <input id="website" type="text" placeholder="https://" className="w-full rounded-md focus:ring ring-primary dark:border-gray-700 dark:text-gray-900" />
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="address" className="text-sm">Address</label>
                                <input id="address" type="text" placeholder="" className="w-full rounded-md focus:ring ring-primary dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="city" className="text-sm">City</label>
                                <input id="city" type="text" placeholder="" className="w-full rounded-md focus:ring ring-primary dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="state" className="text-sm">State / Province</label>
                                <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring ring-primary dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
                                <input id="zip" type="text" placeholder="" className="w-full rounded-md focus:ring ring-primary dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="bio" className="text-sm">Bio</label>
                                <textarea id="bio" placeholder="" className="w-full rounded-md focus:ring ring-primary dark:border-gray-700 dark:text-gray-900"></textarea>
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <button className=''>Update </button>
                            </div>
                        </div>
                    </fieldset>

                </form>
            </section>
        </>
    );
};

export default page;