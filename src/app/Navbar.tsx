'use client';

import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition, Menu } from '@headlessui/react';

import {
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import {
    FaCaretDown,
} from 'react-icons/fa';
import Link from 'next/dist/client/link';
import Dropdown from '@/components/Navbar/Dropdown/Dropdown';
import Services from '@/components/Navbar/Dropdown/Services';
import Features from '@/components/Navbar/Features';


import { toast } from 'react-hot-toast';
import getUserStatus from '@/shared/graphQl/queries/getUserStatus';
import Error from '@/components/Error';
import Loading from './loading';
import AuthConfig from '@/firebase/oauth.config';
import { useRouter } from 'next/navigation';
import DropdownIndustry from '@/components/Navbar/Dropdown/DropdownIndusty';
import Solution from '@/components/Navbar/Dropdown/Solution';










function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar({ services, industries, solutions, features }: any) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [userStatus, setUserStatus] = useState('')
    const [currentUserType, setCurrentUserType] = useState('')


    //hooks
    const { user, logout, authLoading } = AuthConfig()
    const router = useRouter()



    useEffect(() => {

        getUserData()
    }, [user?.email, authLoading])


    console.log(industries, 'from navbar')



    const getUserData = async () => {
        const userDta = await getUserStatus(user?.email || 'no email')
        console.log(userDta, userDta[0]?.status, ' thjis is user data')
        if (userDta) {
            setUserStatus(userDta[0]?.status)
            setCurrentUserType(userDta[0]?.user_type)
        }
    }


    const handleDifferentUserRouting = (dest: string) => {
        if (userStatus !== 'APPROVED') {
            return '/not_approved'
        }
        else if (currentUserType === 'ADMIN' || currentUserType === 'COVENTEN_EMPLOYEE') {
            return `/admin/${dest}`
        }
        else if (currentUserType === 'CONSUMER') {
            return `/user/${dest}`
        }
        else if (currentUserType === 'SERVICE_PROVIDER' || currentUserType === 'LAB_ASSISTANT') {
            return `/vendor/${dest}`
        } else {
            return '/'
        }

    }


    if (authLoading) return <Loading />


    return (
        <>
            <header className="bg-white relative z-[90005] ">
                <nav
                    className=" mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
                    aria-label="Global"
                >
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5">
                            {/* <span className="sr-only">Company name</span> */}
                            <Image
                                height={200}
                                width={200}
                                className="block  h-8 w-auto rounded-lg"
                                src="/assets/log.png"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="flex lg:hidden ">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-center">

                        <Link
                            href="/"
                            className="text-sm font-semibold leading-6 text-primaryText mr-8"
                        >
                            Home
                        </Link>
                        <Features features={features} />
                        <DropdownIndustry data={industries} />
                        <Services servicesData={services} />
                        <Link
                            href="/products"
                            className="text-sm font-semibold leading-6 text-primaryText mr-8"
                        >
                            Products
                        </Link>
                        <Solution solutionData={solutions} />

                        <Link
                            href="/learn"
                            className="text-sm font-semibold leading-6 text-primaryText mr-8"
                        >
                            Learn
                        </Link>
                        <Link
                            href="/events/search"
                            className="text-sm font-semibold leading-6 text-primaryText mr-8"
                        >
                            Events
                        </Link>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        {
                            user?.email ?
                                <>

                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="">
                                                <div className="w-8 h-8 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
                                                    <img src="/assets/no_user.png" alt="" className="w-full h-full object-cover" />
                                                </div>
                                            </Menu.Button>
                                        </div>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="py-1">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                href={handleDifferentUserRouting("dashboard")}
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                                Dashboard
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                href={handleDifferentUserRouting("dashboard/profile")}
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                                Profile
                                                            </Link>
                                                        )}
                                                    </Menu.Item>

                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                type="submit"
                                                                onClick={() => {
                                                                    logout()
                                                                    router.push('/')
                                                                }}
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block w-full px-4 py-2 text-left text-sm'
                                                                )}
                                                            >
                                                                Sign out
                                                            </button>
                                                        )}
                                                    </Menu.Item>

                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>


                                </>
                                :
                                <Link
                                    href="/auth/login"
                                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-primaryText hover:bg-gray-50"
                                //  onClick={() => signInWithRedirectGoogle()}
                                >
                                    Log in
                                    <span aria-hidden="true">&rarr;</span>
                                </Link>
                        }


                    </div>
                </nav>
                <Dialog
                    as="div"
                    className="lg:hidden"
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                >
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="/" className="-m-1.5 p-1.5">

                                <Image
                                    height={200}
                                    width={200}
                                    className="block  h-8 w-auto rounded-lg"
                                    src="/assets/log.png"
                                    alt="Logo"
                                />{' '}
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        {/* small device */}
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <Link
                                        href="/"
                                        className="text-md font-semibold leading-6 text-primaryText mr-8"
                                    >
                                        Home
                                    </Link>
                                    <div>
                                        <Disclosure as="div" className="-mx-3">
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-primaryText hover:bg-gray-50">
                                                        Features
                                                        <FaCaretDown
                                                            className="text-sm flex-none text-gray-900"
                                                            aria-hidden="true"
                                                        />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="mt-2 ">
                                                        <div className='space-y-2'>
                                                            {
                                                                features?.map((item: any) =>
                                                                    <Link
                                                                        href={item?.url}
                                                                        key={item?.name}
                                                                        className=' block bg-gray-50 underline text-sm leading-6  p-3'
                                                                    >
                                                                        {item?.name}
                                                                    </Link>
                                                                )
                                                            }
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    </div>
                                    <div>
                                        <Link
                                            href="/products"
                                            className="text-md block pb-3 font-semibold leading-6 text-primaryText mr-8"
                                        >
                                            Products
                                        </Link>
                                        <Link
                                            href="/learn"
                                            className="text-md  block pb-3 font-semibold leading-6 text-primaryText mr-8"
                                        >
                                            Learn
                                        </Link>
                                        <Link
                                            href="/events"
                                            className="text-md block pb-3 font-semibold leading-6 text-primaryText mr-8"
                                        >
                                            Events
                                        </Link>
                                    </div>



                                </div>
                                <div className="py-6">

                                    {
                                        user?.email ?
                                            <Link
                                                href="/auth/login"
                                                className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-primaryText hover:bg-gray-50"
                                            >
                                                Log in
                                                <span aria-hidden="true">&rarr;</span>
                                            </Link>

                                            :

                                            <p
                                                onClick={() => {
                                                    logout()
                                                    router.push('/')
                                                }}
                                                className="text-sm font-semibold leading-6 text-primaryText mr-8"
                                            >
                                                SignOut
                                            </p>
                                    }
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header >

        </>
    );
}