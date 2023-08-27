'use client'

// components/Sidebar.tsx
import React from "react";
import classNames from "classnames";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import Image from "next/image";
import Link from "next/link";
import { NavItem, defaultNavItems } from "./NavItem";
import { Scrollbar } from 'react-scrollbars-custom';
import { usePathname } from 'next/navigation';
import RestrictAdminRoute from "@/components/RestrictAdminRoute";
import { useGqlClient } from "@/hooks/UseGqlClient";
import { currentUser } from "@/firebase/oauth.config";
import { useQuery } from "graphql-hooks";

const GET_USER = `
query Users($where: UserWhere) {
    users(where: $where){
      user_type
      hasRole {
        permissions
      }
    }
  }`



type Props = {
    collapsed: boolean;
    navItems?: NavItem[];
    setCollapsed(collapsed: boolean): void;
    setShowSidebar(showSidebar: boolean): void;
    showSidebar: boolean;
};

// component
const Sidebar = ({
    collapsed,
    navItems = defaultNavItems,
    setCollapsed,
    setShowSidebar,
    showSidebar
}: Props) => {

    //states
    const [accessibleNavItems, setAccessibleNavItems] = React.useState<any[]>([])







    // HOOKS
    const client = useGqlClient()
    const user = currentUser();
    const pathname = usePathname();




    console.log(accessibleNavItems, 'accessibleNavItems000000000000000000000000000')




    // 👇 use the correct icon depending on the state.
    const Icon = collapsed ? HiChevronDoubleRight : HiChevronDoubleLeft;
    return (
        // <RestrictAdminRoute setAccessibleNavItems={setAccessibleNavItems} navItems={defaultNavItems} accessibleNavItems={accessibleNavItems}>
        <div
            className={classNames({
                "bg-white text-primaryText z-20 border-r hidden lg:block": true,
                "block": showSidebar,

            })}
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
                        // "p-4 justify-between": !collapsed,
                        // "py-4 justify-center": collapsed,
                    })}
                >
                    {!collapsed && <span className="whitespace-nowrap  font-bold">Brand Name</span>}
                    {/* <button
                        className={classNames({
                            "grid place-content-center": true,
                            "hover:bg-gray-200 ": true,
                            "w-10 h-10 rounded-full": true,
                        })}
                        // 👇 set the collapsed state on click
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        <Icon className="w-5 h-5" />
                    </button> */}
                </div>

                {/* nav items part */}

                <nav className="flex-grow overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                    <ul
                        className={classNames({
                            "my-2 flex flex-col gap-2 items-stretch": true,
                        })}
                    >
                        {navItems?.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className={classNames({
                                        "text-primaryText hover:bg-gray-200 cursor-pointer flex": true, //colors
                                        "transition-colors duration-300": true, //animation
                                        "rounded-md p-2 mx-3 gap-4 ": !collapsed,
                                        "rounded-full p-2 mx-3 w-10 h-10": collapsed,
                                        "bg-primary text-white ": pathname === item.href,
                                    })}
                                >
                                    <Link href={item.href} className="flex gap-2 items-center justify-center ">
                                        <span
                                            className={classNames({
                                                "text-xl text-primaryText flex items-center justify-center": true, //colors
                                                "bg-primary text-white ": pathname === item.href,
                                            })}
                                        >
                                            {item.icon}
                                        </span>
                                        <span className=" font-semibold">{!collapsed && item.label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* profile part ...omitted for brevity */}


                {/* prifile */}
                {/* <div
                    className={classNames({
                        "grid place-content-stretch p-4": true,
                    })}
                >
                    <Link href="/desktopHome/profile" className="flex gap-4 cursor-pointer items-center h-11 overflow-hidden">
                        <Image
                            src={"/assets/no_user.png"}
                            height={36}
                            width={36}
                            alt="profile image"
                            className="rounded-full"
                        />
                        {!collapsed && (
                            <Link href="/user/dashboard/profile" className="flex flex-col">
                                <span className="text-primaryText my-0">Tom Cook</span>
                                <span className="text-primaryText text-sm">
                                    View Profile
                                </span>
                            </Link>
                        )}
                    </Link>
                </div> */}
            </div>
        </div>
        // </RestrictAdminRoute >
    );
};
export default Sidebar;

