import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (

        <div className="absolute left-0 z-[11111111111111111] w-full  min-h-screen max-h-screen overflow-hidden bg-white">
            <div className="bg-gray-100 text-gray-500  w-full overflow-hidden" >
                <div className="md:flex w-full">
                    <div className="hidden md:block w-1/2 bg-white py-10 px-10">
                        <Image src='/assets/login.png' width={800} height={900} alt='login' />
                    </div>
                    <div className="w-full md:w-1/2 h-screen flex flex-col  items-center justify-center space-y-9 py-10 px-5 md:px-10">
                        <div className="text-center mb-10">
                            <h1 className="font-bold text-4xl text-desktopPrimary">Welcome Back!</h1>

                        </div>
                        <div className='w-full lg:px-10'>
                            <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 f-full">
                                <label className="block">
                                    <span className="mb-1">Full name</span>
                                    <input type="text" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800 py-4" />
                                </label>
                                <label className="block">
                                    <span className="mb-1">Email address</span>
                                    <input type="email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800 py-4" />
                                </label>
                                <label className="block">
                                    <span className="mb-1">Password</span>
                                    <input type="email" placeholder="**********" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800 py-4" />
                                </label>

                                <div className="flex  w-full mt-8">
                                    <div className="w-full px-3 mb-5 mt-6">
                                        <Link href='/desktopHome' className="block text-xl w-full  bg-desktopPrimary/80 hover:bg-desktopPrimary focus:bg-desktopPrimary text-white text-center rounded-lg px-3 py-4 font-semibold">Log in now</Link>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default page;