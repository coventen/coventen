'use client'
import React from "react";

import { LuAppWindow, LuCalculator, LuBellRing, LuUser, LuTerminalSquare, LuShieldCheck, LuReplaceAll, LuSchool2, LuQrCode, LuHeadphones, LuMessagesSquare, LuBookKey, LuCopySlash } from "react-icons/lu";
// define a NavItem prop
export type NavItem = {
    label: string;
    href: string;
    icon: React.ReactNode;
};

export const defaultNavItems = [
    {
        section: "General",
        links: [
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
        ]
    },
]



export const controlledNavItems = [


    {
        section: "Services Management",
        links: [
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
            // {
            //     label: "Tests",
            //     href: "/vendor/dashboard/tests",
            //     icon: <LuSchool2 className="" />,
            // },
            // {
            //     label: "Reports",
            //     href: "/vendor/dashboard/reports",
            //     icon: <LuSchool2 className="" />,
            // },
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
                label: "Leads",
                href: "/vendor/dashboard/leads",
                icon: <LuUser className="" />,
            },
            // {
            //     label: "All Tickets",
            //     href: "/vendor/dashboard/ticket_system/all_tickets",
            //     icon: <LuBookKey className="" />,
            // },
        ]
    },
    {
        section: "Communication",
        links: [
            {
                label: "Internal Email",
                href: "/vendor/dashboard/internal_email",
                icon: <LuCopySlash />,
            },
            {
                label: "Ongoing Chats",
                href: "/vendor/dashboard/chats",
                icon: <LuMessagesSquare className="" />,
            },
        ]
    },
    {
        section: "Business Management",
        links: [
            {
                label: "Employees",
                href: "/vendor/dashboard/employees",
                icon: <LuSchool2 className="" />,
            },
            {
                label: "Estimations",
                href: "/vendor/dashboard/invoice",
                icon: <LuSchool2 className="" />,
            },
        ]
    },
    {
        section: "Grievances",
        links: [
            {
                label: "Support",
                href: "/vendor/dashboard/support/",
                icon: <LuHeadphones className="" />,
            },

        ]
    },
]
