'use client'
import React, { useState } from 'react';
import ClientTable from './ClientTable';
import NotificationCard from './NotificationCard';
import InvoiceCard from './InvoiceCard';
// import NotificationBlck from './NotificationBlock';
// import TicketBlock from './TicketBlock';
// import SlideOver from './SlideOver';

const Dashboard = () => {
    const [slideOverOpen, setSlideOverOpen] = useState(false);
    const statsData = [
        {
            title: "Ongoing Projects",
            value: "120",
        },
        {
            title: "Completed Projects",
            value: "102",
        },
        {
            title: "Total Projects",
            value: "156",
        }
    ]

    return (
        <>

            {/* <!-- status section Start --> */}
            <section className=" w-full max-w-6xl">
                {/* cards */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full max-w-6xl">


                    {
                        statsData.map((item) =>
                            <div key={item.title} className="flex items-center p-4 bg-white rounded">
                                <div className="flex flex-shrink-0 items-center justify-center bg-primary/10 h-16 w-16 rounded">
                                    <svg className="w-6 h-6 fill-current text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="flex-grow flex flex-col ml-4">
                                    <span className="text-xl font-bold">{item.value}</span>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-500">{item.title}</span>

                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2  mt-7 gap-4">

                    {/* <!-- NotificationCard --> */}
                    <NotificationCard />
                    {/* <!-- .NotificationCard--> */}

                    {/* <!-- Recent Activities --> */}
                    <InvoiceCard />
                    {/* <!-- ./Recent Activities --> */}
                </div>
                <ClientTable />
            </section>


        </>
    );
};

export default Dashboard;