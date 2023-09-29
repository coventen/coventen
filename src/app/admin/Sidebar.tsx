'use client'

// components/Sidebar.tsx
import React, { useEffect } from "react";
import classNames from "classnames";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import Image from "next/image";
import Link from "next/link";
import { managementNavItems, controlledNavItems, defaultNavItems, } from "./NavItem";
import { usePathname, useRouter } from 'next/navigation';
import RestrictAdminRoute from "@/components/RestrictAdminRoute";
import { useGqlClient } from "@/hooks/UseGqlClient";

import { useQuery } from "graphql-hooks";
import { LuLogOut } from "react-icons/lu";
import AuthConfig from "@/firebase/oauth.config";





type Props = {
    collapsed: boolean;
    setCollapsed(collapsed: boolean): void;
    setShowSidebar(showSidebar: boolean): void;
    showSidebar: boolean;
};

// component
const Sidebar = ({
    collapsed,
    setCollapsed,
    setShowSidebar,
    showSidebar
}: Props) => {

    //states
    const [accessibleNavItems, setAccessibleNavItems] = React.useState<any[]>([])
    const [managementNavItemsAccess, setManagementNavItemsAccess] = React.useState<any[]>([])




    useEffect(() => { }, [accessibleNavItems, managementNavItems])


    // HOOKS
    const client = useGqlClient()
    const { user, logout } = AuthConfig();
    const pathname = usePathname();
    const router = useRouter()




    // 👇 use the correct icon depending on the state.
    const Icon = collapsed ? HiChevronDoubleRight : HiChevronDoubleLeft;
    return (
        <RestrictAdminRoute setAccessibleNavItems={setAccessibleNavItems} navItems={controlledNavItems} accessibleNavItems={accessibleNavItems} managementNavItems={managementNavItems} setManagementNavItemsAccess={setManagementNavItemsAccess}>
            <div
                className={`bg-white text-primaryText z-[99999999999999565]  border-r   lg:block ${showSidebar ? 'block' : 'hidden'}`}
            >
                <div
                    className={classNames({
                        "flex flex-col justify-between ": true,
                        "h-full": true,
                    })}
                >
                    {/* logo and collapse button */}
                    <div
                        className={classNames({
                            "flex items-center  border-b border-gray-200 dark:border-darkBorder mb-5 p-4 justify-between": true,

                        })}
                    >
                        {!collapsed && <Link href='/' className="whitespace-nowrap  font-bold w-full ">
                            <img src="/assets/log.png" className="h-8 " alt="logo" />
                        </Link>}

                    </div>

                    {/* nav items part */}

                    <nav className="flex-grow overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                        {
                            defaultNavItems.map((item, index) =>

                                <div key={index}>
                                    <p className={classNames({
                                        " text-xs font-semibold ": true, //colors
                                        "transition-colors duration-300": true, //animation
                                        " p-1 mx-3 block ": !collapsed,
                                        " p-1 mx-3 hidden": collapsed,
                                    })}>{item?.section}</p>
                                    <ul
                                        className={classNames({
                                            "my-2 flex flex-col gap-2 items-stretch": true,
                                        })}
                                    >
                                        {item?.links?.map((item, index) => {
                                            return (
                                                <Link href={item?.href} key={index}>
                                                    <li

                                                        className={classNames({
                                                            " hover:bg-gray-200  flex": true, //colors
                                                            "transition-colors duration-300": true, //animation
                                                            " p-2 mx-3 gap-4 ": !collapsed,
                                                            " p-2 mx-3 w-10 h-10": collapsed,
                                                            "bg-primary text-white hover:bg-primary": pathname === item.href,
                                                        })}
                                                    >
                                                        <p className="flex gap-2 items-center justify-center ">
                                                            <span className="text-xl">  {item.icon}</span> <span className=" font-semibold text-sm">{!collapsed && item.label}</span>
                                                        </p>
                                                    </li>
                                                </Link>
                                            );
                                        })}
                                    </ul>
                                </div>
                            )

                        }
                        {
                            accessibleNavItems && accessibleNavItems.map((item, index) =>

                                <div key={index}>
                                    <p className={classNames({
                                        " text-xs font-semibold ": true, //colors
                                        "transition-colors duration-300": true, //animation
                                        " p-1 mx-3 block ": !collapsed,
                                        "rounded-full p-1 mx-3 hidden": collapsed,
                                    })}>{item?.section}</p>
                                    <ul
                                        className={classNames({
                                            "my-2 flex flex-col gap-2 items-stretch": true,
                                        })}
                                    >
                                        {item?.links?.map((item: any, index: number) => {
                                            return (
                                                <Link href={item.href} key={index}>
                                                    <li

                                                        className={classNames({
                                                            " hover:bg-gray-200  flex": true, //colors
                                                            "transition-colors duration-300": true, //animation
                                                            " p-2 mx-3 gap-4 ": !collapsed,
                                                            "rounded-full p-2 mx-3 w-10 h-10": collapsed,
                                                            "bg-primary text-white hover:bg-primary": pathname === item.href,
                                                        })}
                                                    >
                                                        <p className="flex gap-2 items-center justify-center ">
                                                            <span className="text-lg">  {item.icon}</span> <span className=" font-semibold text-sm">{!collapsed && item.label}</span>
                                                        </p>
                                                    </li>
                                                </Link>
                                            );
                                        })}
                                    </ul>
                                </div>
                            )

                        }
                        {
                            managementNavItemsAccess && managementNavItemsAccess.map((item, index) =>

                                <div key={index}>
                                    <p className={classNames({
                                        " text-xs font-semibold ": true, //colors
                                        "transition-colors duration-300": true, //animation
                                        " p-1 mx-3 block ": !collapsed,
                                        " p-1 mx-3 hidden": collapsed,
                                    })}>{item?.section}</p>
                                    <ul
                                        className={classNames({
                                            "my-2 flex flex-col gap-2 items-stretch": true,
                                        })}
                                    >
                                        {item?.links?.map((item: any, index: number) => {
                                            return (
                                                <Link href={item?.href} key={index}>
                                                    <li

                                                        className={classNames({
                                                            " hover:bg-gray-200  flex": true, //colors
                                                            "transition-colors duration-300": true, //animation
                                                            " p-2 mx-3 gap-4 ": !collapsed,
                                                            " p-2 mx-3 w-10 h-10": collapsed,
                                                            "bg-primary text-white hover:bg-primary": pathname === item.href,
                                                        })}
                                                    >
                                                        <p className="flex gap-2 items-center justify-center ">
                                                            <span className="text-xl">  {item.icon}</span> <span className=" font-semibold text-sm">{!collapsed && item.label}</span>
                                                        </p>
                                                    </li>
                                                </Link>
                                            );
                                        })}
                                    </ul>
                                </div>
                            )

                        }
                    </nav>

                    {/* profile part ...omitted for brevity */}


                    {/* log out */}

                </div>
            </div>
        </RestrictAdminRoute >
    );
};
export default Sidebar;

