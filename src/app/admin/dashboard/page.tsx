'use client'
import React, { useState } from 'react';
import NotificationBlck from '../../../components/NotificationBlock';
import TicketBlock from './TicketBlock';
import SlideOver from './SlideOver';
import Main from './Main';


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
    },
    {
        title: "Rejected Projects",
        value: "12",
    },
    {
        title: "Total revenue",
        value: "120",
    },
    {
        title: "Total revenue",
        value: "120",
    }
]

//component
const Dashboard = () => {
    //states
    const [slideOverOpen, setSlideOverOpen] = useState(false);


    return (
        <>
            <Main />

        </>
    );
};

export default Dashboard;