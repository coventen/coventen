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
        href: "/vendor/dashboard",
        icon: <LuAppWindow className="" />,
    },
    {
        label: "Notifications",
        href: "/vendor/dashboard/notification",
        icon: <LuBellRing className="" />,
    },

    {
        label: "Leads",
        href: "/vendor/dashboard/leads",
        icon: <LuUser className="" />,
    },

    {
        label: "Projects",
        href: "/vendor/dashboard/projects",
        icon: <LuSchool2 className="" />,
    },
    {
        label: "Approve Projects",
        href: "/vendor/dashboard/approve_Reports",
        icon: <LuSchool2 className="" />,
    },
    {
        label: "Project Samples",
        href: "/vendor/dashboard/sample",
        icon: <LuSchool2 className="" />,
    },
    {
        label: "Complains",
        href: "/vendor/dashboard/complains",
        icon: <LuSchool2 className="" />,
    },
    {
        label: "Employees",
        href: "/vendor/dashboard/employees",
        icon: <LuSchool2 className="" />,
    },
    {
        label: "Internal Emails",
        href: "/vendor/dashboard/internal_email",
        icon: <LuSchool2 className="" />,
    },

    {
        label: "Estimation",
        href: "/vendor/dashboard/invoice",
        icon: <LuCalculator className="" />,
    },
    {
        label: "All Tickets",
        href: "/vendor/dashboard/ticket_system/all_tickets",
        icon: <LuBookKey className="" />,
    },
    {
        label: "Ongoing Chats",
        href: "/vendor/dashboard/ticket_system/messages",
        icon: <LuMessagesSquare className="" />,
    },

    {
        label: "Support",
        href: "/vendor/dashboard/support/",
        icon: <LuHeadphones className="" />,
    },

    {
        label: "Logs",
        href: "/vendor/dashboard/logs",
        icon: <LuQrCode className="" />,
    },
];