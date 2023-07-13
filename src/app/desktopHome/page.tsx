'use client'

import React from 'react';

const DesktopHome = () => {


    const electron = (window as any).electron;
    const ipcRenderer = (window as any).ipcRenderer;


    console.log(electron, 'ele')
    const handlechange = (e: any) => {
        e.preventDefault();
        console.log(e.target.name.value, 'value')
        ipcRenderer.send('change', "this is from next js");
    }



    return (
        <div>hello

            <button onClick={handlechange} className='px-8 py-2 bg-primary text-white'>Notify</button>
            <h1>helloo</h1>
        </div>
    );
};

export default DesktopHome;