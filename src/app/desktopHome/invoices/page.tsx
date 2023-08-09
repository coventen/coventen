import React from 'react';
import HomeCard from '../HomeCard';

const cardsData = [
    {
        id: 1,
        title: 'Billings created',
        value: 200
    },
    {
        id: 2,
        title: 'In-Progress',
        value: 100

    },
    {
        id: 3,
        title: 'Total projects',
        value: 100
    },
    {
        id: 4,
        title: 'Completed',
        value: 300
    },

]



const InvoicePage = () => {
    return (
        <div className='p-4 h-full max-h-screen  flex flex-col space-y-4'>
            {/* top cards section */}
            <section className='grid grid-cols-4 xl:grid-cols-4 gap-4 h-[120px]'>
                {
                    cardsData.map((card) =>
                        <div key={card.id}>
                            <HomeCard title={card.title} value={card.value} />
                        </div>
                    )
                }
            </section>

            {/* table sections  */}

            <section className='overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch'>
                <div className='bg-desktopBgLight text-desktopPrimary py-3 text-sm font-semibold px-4 flex items-center justify-between rounded'>
                    <p>Bill No.</p>
                    <p>Project Name</p>
                    <p>Completion Date</p>
                    <p>Quick Actions</p>
                </div>
                <div >
                    {
                        [...Array(10)].map((_, i) =>
                            <div key={i} className='bg-white border-b px-4 py-5 text-sm border-gray-200  text-desktopPrimary flex items-center justify-between'>
                                <p>123</p>
                                <p>XYZ Motors - New Car Launch</p>
                                <p>12 Jan 2023 - 12:37 AM</p>
                                <button className='font-semibold border border-desktopPrimary px-3 py-1.5 rounded'>Download</button>
                            </div>

                        )

                    }
                </div>

                <div>

                </div>
            </section>


        </div>
    );
};

export default InvoicePage;