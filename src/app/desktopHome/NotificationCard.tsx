import React from 'react';

const NotificationCard = () => {
    return (
        <div className='h-28 p-2 flex flex-col justify-between border' >
            <h1 className='text-lg font-semibold text-desktopPrimary'>Project Update</h1>
            <div>
                <div className='flex items-center justify-between text-desktopText text-sm mb-2'>
                    <p>JohnDoe123</p>
                    <p>Project: ABC123</p>
                    <p className='bg-yellow-100 text-yellow-500 font-normal px-2 py-1 rounded-full'>In-progress</p>

                </div>
                <p className='text-xs text-desktopTextLight'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>

        </div>
    );
};

export default NotificationCard;