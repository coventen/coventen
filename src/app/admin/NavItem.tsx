// components/defaultNavItems.tsx
import React from "react";

import { LuAppWindow, LuCalculator, LuBellRing, LuUser, LuShieldCheck, LuReplaceAll, LuSchool2, LuQrCode, LuHeadphones, LuMessagesSquare, LuBookKey, LuCopySlash } from "react-icons/lu";
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
                href: "/admin/dashboard",
                icon: <LuAppWindow className="" />,
            },
            {
                label: "Profile",
                href: "/desktopHome/profile",
                icon: <LuUser />,
            },
            {
                label: "Notifications",
                href: "/admin/dashboard/notification",
                icon: <LuBellRing className="" />,
            },
        ]
    },
]



export const controlledNavItems = [

    {
        section: "Communication",
        links: [
            {
                label: "Internal Email",
                href: "/admin/dashboard/internal_email",
                icon: <LuCopySlash />,
            },
            {
                label: "Ongoing Chats",
                href: "/admin/dashboard/ticket_system/chats",
                icon: <LuMessagesSquare className="" />,
            }
        ]
    },
    {
        section: "Services Management",
        links: [
            {
                label: "Estimation",
                href: "/admin/dashboard/invoice",
                icon: <LuCalculator className="" />,
            },
            {
                label: "Estimation Complains",
                href: "/admin/dashboard/complains",
                icon: <LuCalculator className="" />,
            },
            {
                label: "Assignments",
                href: "/admin/dashboard/assignment",
                icon: <LuReplaceAll className="" />,
            },

            {
                label: "All Tickets",
                href: "/admin/dashboard/ticket_system/all_tickets",
                icon: <LuBookKey className="" />,
            },
        ]
    },
    {
        section: "User Management",
        links: [
            {
                label: "Leads",
                href: "/admin/dashboard/leads",
                icon: <LuUser className="" />,
            },
            {
                label: "Users",
                href: "/admin/dashboard/users",
                icon: <LuUser className="" />,
            },
            {
                label: "Vendors",
                href: "/admin/dashboard/vendor",
                icon: <LuSchool2 className="" />,
            },
            {
                label: "Roles",
                href: "/admin/dashboard/roles",
                icon: <LuShieldCheck className="" />,
            },
            {
                label: "Support",
                href: "/admin/dashboard/support/",
                icon: <LuHeadphones className="" />,
            },
        ]
    },
    {
        section: "Website Management",
        links: [
            {
                label: "Services",
                href: "/admin/dashboard/settings/services",
                icon: <LuUser className="" />,
            },
            {
                label: "Sub Services",
                href: "/admin/dashboard/settings/sub_service",
                icon: <LuUser className="" />,
            },
            {
                label: "Products",
                href: "/admin/dashboard/settings/products",
                icon: <LuSchool2 className="" />,
            },
            {
                label: "Products",
                href: "/admin/dashboard/roles",
                icon: <LuShieldCheck className="" />,
            },
            {
                label: "Products",
                href: "/admin/dashboard/support/",
                icon: <LuHeadphones className="" />,
            },
        ]
    },
]
