

// components/Layout.tsx
import classNames from "classnames";
import React, { PropsWithChildren } from "react";
import { FaBars } from 'react-icons/fa';
import Sidebar from "./Sidebar";
import { Toaster } from "react-hot-toast";
import DashboardBody from "./DashboardBody";
import CounterProvider from "./CounterProvider";


// component
const Layout = (props: PropsWithChildren) => {




    //render
    return (
        <div className="absolute top-0 w-full z-[9999999999999] bg-gray-200 overflow-hidden ">
            <div className="max-w-screen-2xl mx-auto bg-white">

                <CounterProvider>
                    <DashboardBody>
                        {props.children}
                    </DashboardBody>
                </CounterProvider>

            </div>


            <Toaster
                position="bottom-right"
            />
        </div>
    );
};
export default Layout;