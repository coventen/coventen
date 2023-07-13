'use client'
import React, { useState } from 'react';
import NotificationBlck from './NotificationBlock';
import TicketBlock from './TicketBlock';
import SlideOver from './SlideOver';

const Dashboard = () => {
    const [slideOverOpen, setSlideOverOpen] = useState(false);
    const statsData = [
        {
            title: "Ongoing Projects",
            value: "12",
        },
        {
            title: "Completed Projects",
            value: "12",
        },
        {
            title: "Total Projects",
            value: "12",
        },

    ]

    return (
        <>

            {/* <!-- status section Start --> */}
            <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full max-w-6xl">
                {
                    statsData.map((item) =>
                        <div key={item.title} className="flex items-center p-4 bg-white rounded">
                            <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
                                <svg className="w-6 h-6 fill-current text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex-grow flex flex-col ml-4">
                                <span className="text-xl font-bold">{item.value}</span>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500">{item.title}</span>
                                    <span className="text-green-500 text-sm font-semibold ml-2">+12.6%</span>
                                </div>
                            </div>
                        </div>
                    )
                }
            </section>
            {/* <!-- status section End  --> */}

            {/* <!-- chart section Start --> */}
            <section className="grid lg:grid-cols-2 gap-6 w-full my-8 rounded">
                <div className="bg-white rounded shadow">
                    <p className="focus:outline-none px-5 pt-5 text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Notifications</p>
                    <NotificationBlck setSlideOverOpen={setSlideOverOpen} />
                </div>
                <div className="bg-white rounded shadow">
                    <p className="focus:outline-none px-5 pt-5 text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Tickts</p>
                    <TicketBlock />
                </div>
            </section>
            <SlideOver slideOverOpen={slideOverOpen} setSlideOverOpen={setSlideOverOpen} />

        </>
    );
};

export default Dashboard;