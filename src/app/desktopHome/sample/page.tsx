import React from 'react';
import Main from './Main';
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


const page = () => {
    return (
        <>
            <div className="antialiased rounded-md bg-white dark:bg-darkBgLight h-full min-h-[80vh]">
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="py-8">
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
                        {/* table start */}
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full  rounded-sm overflow-hidden">
                                <Main />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;