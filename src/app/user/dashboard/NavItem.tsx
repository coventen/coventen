// components/defaultNavItems.tsx
import React from "react";

import { HiCalendar, HiFolder, HiHome, HiUserGroup, HiChat } from 'react-icons/hi';
import { LuLayoutDashboard, LuBellRing } from 'react-icons/lu';
// define a NavItem prop
export type NavItem = {
    label: string;
    href: string;
    icon: React.ReactNode;
};
export const defaultNavItems: NavItem[] = [
    {
        label: "Dashboard",
        href: "/user/dashboard",
        icon: <LuLayoutDashboard className="w-6 h-6 " />,
    },

    {
        label: "Projects",
        href: "/user/dashboard/projects",
        icon: <HiFolder className="w-6 h-6" />,
    },
    {
        label: "Chats",
        href: "/user/dashboard/chats",
        icon: <HiChat className="w-6 h-6" />,
    },
    {
        label: "Support",
        href: "/user/dashboard/support/chats",
        icon: <HiCalendar className="w-6 h-6" />,
    },
];