// components/defaultNavItems.tsx
import React from "react";

import { LuAppWindow, LuCalculator, LuBellRing, LuUser, LuTerminalSquare, LuShieldCheck, LuReplaceAll, LuSchool2, LuQrCode, LuHeadphones, LuMessagesSquare, LuBookKey } from "react-icons/lu";
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
        icon: <LuAppWindow className="" />,
    },

    {
        label: "Users",
        href: "/admin/dashboard/users",
        icon: <LuUser className="" />,
    },
    {
        label: "Notifications",
        href: "/admin/dashboard/notification",
        icon: <LuBellRing className="" />,
    },
    {
        label: "Vendors",
        href: "/admin/dashboard/vendor",
        icon: <LuSchool2 className="" />,
    },
    {
        label: "Assignments",
        href: "/admin/dashboard/assignment",
        icon: <LuReplaceAll className="" />,
    },
    {
        label: "Logs",
        href: "/admin/dashboard/logs",
        icon: <LuQrCode className="" />,
    },
    {
        label: "Roles",
        href: "/admin/dashboard/roles",
        icon: <LuShieldCheck className="" />,
    },
    {
        label: "Invoices",
        href: "/admin/dashboard/invoice",
        icon: <LuCalculator className="" />,
    },
    {
        label: "All Tickets",
        href: "/admin/dashboard/ticket_system/all_tickets",
        icon: <LuBookKey className="" />,
    },
    {
        label: "Ongoing Chats",
        href: "/admin/dashboard/ticket_system/chats",
        icon: <LuMessagesSquare className="" />,
    },

    {
        label: "Support",
        href: "/admin/dashboard/support/",
        icon: <LuHeadphones className="" />,
    },
];