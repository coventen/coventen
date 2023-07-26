'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react'

interface DropdownNavItem {
    label: string;
    navs: {
        title: string;
        path: string;
        desc: string;
        icon: JSX.Element;
    }[];
}

interface NavigationItem {
    title: string;
    path: string;
    isDrapdown: boolean;
    navs?: DropdownNavItem[];
}





const Navbar: React.FC = () => {
    const [state, setState] = useState(false);
    const [drapdownState, setDrapdownState] = useState<{
        isActive: boolean;
        idx: number | null;
    }>({ isActive: false, idx: null });

    // Replace javascript:void(0) paths with your paths
    const dropdownNavs: DropdownNavItem[] = [
        {
            label: "Dropdown 1",
            navs: [
                {
                    title: "Dropdown Item 1",
                    path: "javascript:void(0)",
                    desc: "Description 1",
                    icon: <div>Icon 1</div>,
                },
                {
                    title: "Dropdown Item 2",
                    path: "javascript:void(0)",
                    desc: "Description 2",
                    icon: <div>Icon 2</div>,
                },
            ],
        },
        {
            label: "Dropdown 2",
            navs: [
                {
                    title: "Dropdown Item 3",
                    path: "javascript:void(0)",
                    desc: "Description 3",
                    icon: <div>Icon 3</div>,
                },
                {
                    title: "Dropdown Item 4",
                    path: "javascript:void(0)",
                    desc: "Description 4",
                    icon: <div>Icon 4</div>,
                },
            ],
        },
    ];

    const navigation: NavigationItem[] = [
        { title: "Features", path: "/", isDrapdown: true, navs: dropdownNavs },
        { title: "Products", path: "/products", isDrapdown: false },
        { title: "Dashboard", path: "/admin/dashboard", isDrapdown: false },
        { title: "Services", path: "/services/design", isDrapdown: false },
        { title: "Learn", path: "/", isDrapdown: false },
    ];

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target as HTMLElement;
            if (!target.closest(".nav-menu")) setDrapdownState({ isActive: false, idx: null });
        };
    }, []);

    return (
        <>
            <nav className={`relative z-[9000] bg-white/20  backdrop-blur-lg w-full md:static md:text-sm md:border-none ${state ? "shadow-lg rounded-b-xl md:shadow-none" : ""}  dark:bg-darkBg dark:text-white`}>
                <div className="items-center gap-x-14 px-4 py-3 top-0 max-w-screen-xl mx-auto md:flex md:px-8">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <div >
                            {/* <img src="https://www.floatui.com/logo.svg" width={120} height={50} alt="Float UI logo" /> */}
                            <Link href='/' className='text-xl font-bold text-gray-900 dark:text-white'>Company Logo</Link>
                        </div>
                        <div className="md:hidden">
                            <button className="text-gray-500 hover:text-gray-800 dark:text-white" onClick={() => setState(!state)}>
                                {state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path
                                            fillRule="evenodd"
                                            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <div className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                        <ul className="items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                            {navigation.map((item, idx) => (
                                <li key={idx}>
                                    {item.isDrapdown ? (
                                        <button
                                            className="w-full flex items-center justify-between gap-1 text-gray-700 hover:text-primary dark:text-white"
                                            onClick={() => setDrapdownState({ idx, isActive: !drapdownState.isActive })}
                                        >
                                            {item.title}
                                            {drapdownState.idx === idx && drapdownState.isActive ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            )}
                                        </button>
                                    ) : (
                                        <a href={item.path} className="block text-gray-700 dark:text-white hover:text-primary">
                                            {item.title}
                                        </a>
                                    )}
                                    {item.isDrapdown && drapdownState.idx === idx && drapdownState.isActive ? (
                                        <div className="mt-6 bg-white inset-x-0 top-20 w-full md:absolute md:border-y md:shadow-md md:mt-0 z-[999999999999] dark:bg-darkBgLight dark:text-white">
                                            <ul className="max-w-screen-xl bg-white mx-auto grid items-center gap-6 md:p-8 md:grid-cols-2 lg:grid-cols-3">
                                                {item.navs?.map((dropdownItem, idx) => (
                                                    <li key={idx}>
                                                        <p className="text-primary text-sm">{dropdownItem.label}</p>
                                                        <ul className="mt-5 space-y-6">
                                                            {dropdownItem.navs.map((navItem, idx) => (
                                                                <li key={idx} className="group">
                                                                    <a href={navItem.path} className="flex gap-3 items-center">
                                                                        <div className="w-12 h-12 rounded-full bg-indigo-50 text-primary flex items-center justify-center duration-150 group-hover:bg-primary group-hover:text-white md:w-14 md:h-14">
                                                                            {navItem.icon}
                                                                        </div>
                                                                        <div>
                                                                            <span className="text-gray-800 duration-200 group-hover:text-primary text-sm font-medium md:text-base">
                                                                                {navItem.title}
                                                                            </span>
                                                                            <p className="text-sm text-gray-600 group-hover:text-gray-800 mt-1">{navItem.desc}</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : null}
                                </li>
                            ))}
                            <div className="flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0">
                                <li>
                                    <Link href="/auth/login" className="block py-3 text-center  hover:text-primary border rounded-lg md:border-none">
                                        Log in
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/auth/signup"
                                        className="block py-3 px-4 font-medium text-center text-white bg-primary active:shadow-none rounded-lg shadow md:inline"
                                    >
                                        Sign up
                                    </Link>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
            {state ? (
                <div className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden" onClick={() => setState(false)}></div>
            ) : null}
        </>
    );
}

export default Navbar;