'use client';

import React, { useEffect, useState } from 'react';


import EventFilterCard from './EventFilterCard';
import SideBarFilter from './SideBarFilter';




const filters = [
    {
        id: 1,
        name: 'Date',
        options: [
            { value: 'Today', label: 'Today', checked: false },
            { value: 'thisWeek', label: 'This Week', checked: false },
            { value: 'thisMonth', label: 'This Month', checked: false },
        ],
    },
    {
        id: 2,
        name: 'Location',
        options: [
            { value: 'Chandigarh', label: 'Chandigarh', checked: false },
            { value: 'Himachal Pradesh', label: 'Himachal Pradesh', checked: false },
            { value: 'chhattAhmadabadisgarh', label: 'Ahmadabad', checked: false },
            { value: 'Bhopal', label: 'Bhopal', checked: false },
            { value: 'Bengaluru', label: 'Bengaluru', checked: false },
        ],
    },
    {
        id: 3,
        name: 'Price',
        options: [
            { value: 0, label: 'Free', checked: false },
            { value: 50, label: 'Less than 50$', checked: false },
            { value: 100, label: 'Less than 100$', checked: false },
            { value: 200, label: 'Less than 200$', checked: false },
        ],
    },
];

const Main = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [filterQuery, setFilterQuery] = useState<any>({
        Cities: '',
        Exams: '',
    });


    return (
        <>
            <div className="max-w-screen-2xl mx-auto mt-0 lg:px-3">
                <SideBarFilter
                >
                    <div
                        className={`grid grid-cols-1 gap-3 ${isOpen ? 'hidden' : 'block'}`}
                    >

                        {
                            [...Array(5)].map((item: any, i) => (
                                <div key={i} className="">
                                    <EventFilterCard data={item}></EventFilterCard>
                                </div>
                            ))}
                    </div>
                </SideBarFilter>
            </div>
        </>
    );
};

export default Main;