// components/defaultNavItems.tsx
import React from "react";

import { LuAppWindow, LuCalculator, LuBellRing, LuUser, LuFlaskConical, LuFolderSymlink, LuFolderPlus, LuShieldCheck, LuReplaceAll, LuSchool2, LuQrCode, LuHeadphones, LuMessagesSquare, LuBookKey, LuCopySlash, LuServer, LuSquareEqual, LuStore, LuTouchpad, LuTrello, LuWallet, LuTable } from "react-icons/lu";
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
        section: "Business Management",
        links: [
            {
                label: "Add product",
                href: "/admin/dashboard/settings/products",
                icon: <LuFlaskConical className="" />,
            },
            {
                label: "Add Events",
                href: "/admin/dashboard/event",
                icon: <LuFolderPlus className="" />,
            }
        ]
    },

]


export const managementNavItems = [


    {
        section: "Website Management",
        links: [
            {
                label: "Homepage Hero",
                href: "/admin/dashboard/settings/homepage/hero",
                icon: <LuTouchpad className="" />,
            },
            {
                label: "Homepage Clients",
                href: "/admin/dashboard/settings/homepage/clients",
                icon: <LuTable className="" />,
            },
            {
                label: "Homepage About Company",
                href: "/admin/dashboard/settings/homepage/about_company",
                icon: <LuTable className="" />,
            },
            {
                label: "Categories",
                href: "/admin/dashboard/settings/category",
                icon: <LuServer className="" />,
            },
            {
                label: "Services",
                href: "/admin/dashboard/settings/services",
                icon: <LuServer className="" />,
            },
            {
                label: "Solution",
                href: "/admin/dashboard/settings/solution",
                icon: <LuServer className="" />,
            },
            {
                label: "Add Industry",
                href: "/admin/dashboard/settings/industry",
                icon: <LuStore className="" />,
            },
            {
                label: "Add Features",
                href: "/admin/dashboard/settings/features",
                icon: <LuStore className="" />,
            },
            {
                label: "Learn items",
                href: "/admin/dashboard/settings/learn_items",
                icon: <LuStore className="" />,
            },
            {
                label: "About us page",
                href: "/admin/dashboard/settings/about_page",
                icon: <LuStore className="" />,
            },
            {
                label: "legal pages",
                href: "/admin/dashboard/settings/terms",
                icon: <LuStore className="" />,
            },
        ]
    },

]
