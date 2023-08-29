'use client'

import React from 'react';
import HomeCard from './HomeCard';
import NotificationCard from './NotificationCard';
import { FaArrowUp } from 'react-icons/fa';
import Main from './Main';

const DesktopHome = () => {

    const cardsData = [
        {
            id: 1,
            title: 'Total tasks',
            value: 200
        },
        {
            id: 2,
            title: 'Completed',
            value: 100

        },
        {
            id: 3,
            title: 'On gonig',
            value: 100
        },
        {
            id: 4,
            title: 'Tickets',
            value: 300
        },
        {
            id: 5,
            title: 'New',
            value: 200
        }
    ]

    // const ipcRenderer = (window as any).ipcRenderer;
    // const example = () => {
    //     const data = {
    //         title: 'My Title',
    //         body: 'My body',
    //         icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
    //     }
    //     if (ipcRenderer) {
    //         ipcRenderer.send('push:notification', data);
    //     }
    // }

    // example()


    return (
        <div className=''>
            <Main />
        </div>
    );
};

export default DesktopHome;