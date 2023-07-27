// components/defaultNavItems.tsx
import React from "react";

import { HiCalendar, HiFolder, HiHome, HiUserGroup } from 'react-icons/hi';
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
        href: "/desktopHome",
        icon: <LuLayoutDashboard className="w-6 h-6" />,
    },
    // {
    //     label: "Notifications",
    //     href: "/team",
    //     icon: <LuBellRing className="w-6 h-6" />,
    // },
    {
        label: "Projects",
        href: "/desktopHome/projects",
        icon: <HiFolder className="w-6 h-6" />,
    },
    {
        label: "Log in",
        href: "/desktopHome/auth/login",
        icon: <HiCalendar className="w-6 h-6" />,
    },
];