'use client'

// components/Sidebar.tsx
import React from "react";
import classNames from "classnames";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import Image from "next/image";
import Link from "next/link";
import { NavItem, defaultNavItems } from "./NavItem";


type Props = {
    collapsed: boolean;
    navItems?: NavItem[];
    setCollapsed(collapsed: boolean): void;
};



const Sidebar = ({
    collapsed,
    navItems = defaultNavItems,
    setCollapsed,
}: Props) => {
    // 👇 use the correct icon depending on the state.
    const Icon = collapsed ? HiChevronDoubleRight : HiChevronDoubleLeft;
    return (
        <div
            className={classNames({
                "bg-white text-desktopText z-20 border-r ": true,
            })}
        >
            <div
                className={classNames({
                    "flex flex-col justify-between": true,
                    "h-full": true,
                })}
            >
                {/* logo and collapse button */}
                <div
                    className={classNames({
                        "flex items-center  ": true,
                        "p-4 justify-between": !collapsed,
                        "py-4 justify-center": collapsed,
                    })}
                >
                    {!collapsed && <span className="whitespace-nowrap">My Logo</span>}
                    <button
                        className={classNames({
                            "grid place-content-center": true,
                            "hover:bg-gray-200 ": true,
                            "w-10 h-10 rounded-full": true,
                        })}
                        // 👇 set the collapsed state on click
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        <Icon className="w-5 h-5" />
                    </button>
                </div>

                {/* nav items part */}
                <nav className="flex-grow">
                    <ul
                        className={classNames({
                            "my-2 flex flex-col gap-2 items-stretch": true,
                        })}
                    >
                        {navItems.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className={classNames({
                                        "text-desktopText hover:bg-gray-200  flex": true, //colors
                                        "transition-colors duration-300": true, //animation
                                        "rounded-md p-2 mx-3 gap-4 ": !collapsed,
                                        "rounded-full p-2 mx-3 w-10 h-10": collapsed,
                                    })}
                                >
                                    <Link href={item.href} className="flex gap-2 ">
                                        <span>  {item.icon}</span> <span className="text-desktopText font-semibold">{!collapsed && item.label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                {/* profile part ...omitted for brevity */}


                {/* prifile */}
                <div
                    className={classNames({
                        "grid place-content-stretch p-4": true,
                    })}
                >
                    <div className="flex gap-4 items-center h-11 overflow-hidden">
                        <Image
                            src={"/assets/no_user.png"}
                            height={36}
                            width={36}
                            alt="profile image"
                            className="rounded-full"
                        />
                        {!collapsed && (
                            <div className="flex flex-col">
                                <span className="text-desktopText my-0">Tom Cook</span>
                                <Link href="/" className="text-desktopText text-sm">
                                    View Profile
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Sidebar;

