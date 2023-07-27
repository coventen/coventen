import React from 'react';

const ProfilePage = () => {
    return (
        <div className='w-full h-full lg:p-12'>
            <h1 className='text-desktopPrimary text-5xl font-bold mb-8'>Profile</h1>
            <form className="grid grid-cols-1 md:grid-cols-2 w-full lg:w-3/4 gap-6">
                <label className="block">
                    <span className="mb-1">Full name</span>
                    <input type="text" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800 py-4" />
                </label>
                <label className="block">
                    <span className="mb-1">Email address</span>
                    <input type="email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800 py-4" />
                </label>
                <label className="block">
                    <span className="mb-1">Company name</span>
                    <input type="email" placeholder="Company name" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800 py-4" />
                </label>
                <label className="block">
                    <span className="mb-1">Gst No.</span>
                    <input type="email" placeholder="45679" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800 py-4" />
                </label>
                <label className="block col-span-2">
                    <span className="mb-1">Bio</span>
                    <textarea rows={5} placeholder="Bio" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800 py-4" />
                </label>

                <div className="flex  w-full">
                    <div className="w-full mb-5 mt-6">
                        <button className="block text-xl w-full  bg-desktopPrimary/80 hover:bg-desktopPrimary focus:bg-desktopPrimary text-white rounded-lg px-3 py-4 font-semibold">Update Now</button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default ProfilePage;