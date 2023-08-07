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
        href: "/admin/dashboard",
        icon: <LuLayoutDashboard className="" />,
    },

    {
        label: "Users",
        href: "/admin/dashboard/users",
        icon: <HiFolder className="" />,
    },
    {
        label: "Notifications",
        href: "/admin/dashboard/notification",
        icon: <HiChat className="" />,
    },
    {
        label: "Vendors",
        href: "/admin/dashboard/vendor",
        icon: <HiChat className="" />,
    },
    {
        label: "Assignments",
        href: "/admin/dashboard/assignment",
        icon: <HiChat className="" />,
    },
    {
        label: "Logs",
        href: "/admin/dashboard/logs",
        icon: <HiChat className="" />,
    },
    {
        label: "Roles",
        href: "/admin/dashboard/roles",
        icon: <HiChat className="" />,
    },
    {
        label: "Notifications",
        href: "/admin/dashboard/notification",
        icon: <HiChat className="" />,
    },
    {
        label: "Notifications",
        href: "/admin/dashboard/notifications",
        icon: <HiChat className="" />,
    },
    {
        label: "Support",
        href: "/admin/dashboard/support",
        icon: <HiCalendar className="" />,
    },
];