'use client'

// components/Layout.tsx
import classNames from "classnames";
import React, { PropsWithChildren, useState } from "react";
import { FaBars } from 'react-icons/fa';
import Sidebar from "./Sidebar";
const Layout = (props: PropsWithChildren) => {
    const [collapsed, setSidebarCollapsed] = useState(false);
    return (
        <div
            className={classNames({
                "grid min-h-screen": true,
                // 👇 toggle the width of the sidebar depending on the state
                "grid-cols-sidebar": !collapsed,
                "grid-cols-sidebar-collapsed": collapsed,
                // 👇 transition animation classes
                "transition-[grid-template-columns] duration-300 ease-in-out": true,
            })}
        >

            <Sidebar
                collapsed={collapsed}
                setCollapsed={() => setSidebarCollapsed((prev) => !prev)}
            />
            {/* content */}
            <div className=""> {props.children}</div>
        </div>
    );
};
export default Layout;