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
        href: "/",
        icon: <LuLayoutDashboard className="w-6 h-6" />,
    },
    {
        label: "Notifications",
        href: "/team",
        icon: <LuBellRing className="w-6 h-6" />,
    },
    {
        label: "Projects",
        href: "/projects",
        icon: <HiFolder className="w-6 h-6" />,
    },
    {
        label: "Calendar",
        href: "/calendar",
        icon: <HiCalendar className="w-6 h-6" />,
    },
];