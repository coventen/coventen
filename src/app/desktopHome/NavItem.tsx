// components/defaultNavItems.tsx
import React from "react";



import { LuAppWindow, LuCalculator, LuBellRing, LuUser, LuTerminalSquare, LuShieldCheck, LuReplaceAll, LuSchool2, LuQrCode, LuHeadphones, LuCopySlash, LuClipboardCheck } from "react-icons/lu";
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
        icon: <LuAppWindow className="w-6 h-6" />,
    },
    {
        label: "Projects",
        href: "/desktopHome/projects",
        icon: <LuTerminalSquare className="w-6 h-6" />,
    },
    {
        label: "Invoices",
        href: "/desktopHome/invoices",
        icon: <LuCalculator className="w-6 h-6" />,
    },
    {
        label: "Reports",
        href: "/desktopHome/reports",
        icon: <LuClipboardCheck className="w-6 h-6" />,
    },
    {
        label: "Samples",
        href: "/desktopHome/sample",
        icon: <LuCopySlash className="w-6 h-6" />,
    },
    {
        label: "Support",
        href: "/desktopHome/support",
        icon: <LuHeadphones className="w-6 h-6" />,
    },
    {
        label: "Log in",
        href: "/desktopHome/auth/login",
        icon: <LuUser className="w-6 h-6" />,
    },
];