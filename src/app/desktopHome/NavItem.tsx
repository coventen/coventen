// components/defaultNavItems.tsx
import React from "react";




import { LuAppWindow, LuCalculator, LuBellRing, LuVoicemail, LuUser, LuTerminalSquare, LuShieldCheck, LuReplaceAll, LuSchool2, LuQrCode, LuHeadphones, LuCopySlash, LuClipboardCheck } from "react-icons/lu";
// define a NavItem prop

type Links =
    {
        label: string;
        href: string;
        icon: React.ReactNode
    }



export type NavItem = {
    section: string;
    links: Links[]
};
// export const defaultNavItems: NavItem[] = [
//     {
//         label: "Dashboard",
//         href: "/desktopHome",
//         icon: <LuAppWindow className="w-6 h-6" />,
//     },
//     {
//         label: "Projects",
//         href: "/desktopHome/projects",
//         icon: <LuTerminalSquare className="w-6 h-6" />,
//     },
//     {
//         label: "Invoices",
//         href: "/desktopHome/invoices",
//         icon: <LuCalculator className="w-6 h-6" />,
//     },
//     {
//         label: "Reports",
//         href: "/desktopHome/reports",
//         icon: <LuClipboardCheck className="w-6 h-6" />,
//     },
//     {
//         label: "Samples",
//         href: "/desktopHome/sample",
//         icon: <LuCopySlash className="w-6 h-6" />,
//     },
//     {
//         label: "Support",
//         href: "/desktopHome/support",
//         icon: <LuHeadphones className="w-6 h-6" />,
//     },
//     {
//         label: "Log in",
//         href: "/desktopHome/auth/login",
//         icon: <LuUser className="w-6 h-6" />,
//     },
// ];


export const defaultNavItems = [
    {
        section: "General",
        links: [
            {
                label: "Dashboard",
                href: "/desktopHome",
                icon: <LuAppWindow className="w-6 h-6" />,
            },
            {
                label: "Profile",
                href: "/desktopHome/profile",
                icon: <LuUser className="w-6 h-6" />,
            }
        ]
    },
    {
        section: "Communication",
        links: [
            {
                label: "Internal Email",
                href: "/desktopHome",
                icon: <LuCopySlash className="w-6 h-6" />,
            },
            {
                label: "Chats",
                href: "/desktopHome",
                icon: <LuReplaceAll className="w-6 h-6" />,
            }
        ]
    },
    {
        section: "Services",
        links: [
            {
                label: "Projects",
                href: "/desktopHome/projects",
                icon: <LuTerminalSquare className="w-6 h-6" />,
            },
            {
                label: "Reports",
                href: "/desktopHome/reports",
                icon: <LuClipboardCheck className="w-6 h-6" />,
            },
            {
                label: "Invoices",
                href: "/desktopHome/invoices",
                icon: <LuCalculator className="w-6 h-6" />,
            },
        ]
    },
    {
        section: "Grievances",
        links: [
            {
                label: "Customer Support",
                href: "/desktopHome/support",
                icon: <LuHeadphones className="w-6 h-6" />,
            },
        ]
    },
]