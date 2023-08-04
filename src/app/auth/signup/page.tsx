'use client'

import Link from "next/link"
import { useState } from "react";

export default function Login() {
    const [selectedOption, setSelectedOption] = useState('');


    const options = [
        'Freelancer',
        'Testing Agent',
        'Manufacturer',
        'Academics / Insitute',
        'For my company',
        'Foregin Client',
        'Importer',
        'Consumer',
        'Testing Lab / Service Provider',
    ];

    const handleSelect = (e: any) => {
        setSelectedOption(e.target.value);
    };
    return (
        <main className="w-full flex">
            <div className="relative flex-1 hidden items-center justify-center h-screen bg-white lg:flex">
                <div className="relative z-10 w-full max-w-md">
                    {/* <img src="https://floatui.com/logo-dark.svg" width={150} /> */}
                    <p className="text-gray-900 font-bold text-xl">Company Logo</p>
                    <div className=" mt-16 space-y-3">
                        <h3 className="text-gray-900 text-3xl font-bold">Start growing your business quickly</h3>
                        <p className="text-gray-800">
                            Create an account and get access to all features for 30-days, No credit card required.
                        </p>
                        <div className="flex items-center -space-x-2 overflow-hidden">
                            <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://randomuser.me/api/portraits/men/86.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e" className="w-10 h-10 rounded-full border-2 border-white" />
                            <p className="text-sm text-gray-800 font-medium translate-x-5">
                                Join 5.000+ users
                            </p>
                        </div>
                    </div>
                </div>
                <div


                    className="absolute inset-0 my-auto h-[500px]"
                    style={{
                        background: "linear-gradient(152.92deg, rgba(0, 177, 253, 0.2) 4.54%, rgba(0, 177, 253, 0.26) 34.2%, rgba(113, 250, 202, 0.1) 77.55%)", filter: "blur(85px)"
                    }}
                >

                </div>
            </div>
            <div className="flex-1 flex items-center justify-center h-screen">
                <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
                    <div className="">
                        {/* <img src="https://floatui.com/logo.svg" width={150} className="lg:hidden" /> */}
                        <div className="mt-5 space-y-2">
                            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Sign up</h3>
                            <p className="">Already have an account? <Link href="/auth/login" className="font-medium text-primary hover:text-primary">Log in</Link></p>
                        </div>
                    </div>

                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-5"
                    >
                        <div>
                            <label className="font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
                            />
                        </div>
                        {/* select options  */}
                        <div>
                            <label className="font-medium">
                                User type
                            </label>
                            <div className="relative inline-flex w-full">
                                <select
                                    value={selectedOption}
                                    onChange={handleSelect}
                                    className="appearance-none relative w-full mt-2 px-3 py-2 text-gray-700 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
                                >
                                    <option value="" disabled>Select an option</option>
                                    {options.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>

                            </div>
                        </div>

                        {/* ------- */}
                        <div>
                            <label className="font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
                            />
                        </div>
                        <Link href='/auth/verify '>
                            <button
                                className="w-full px-4 mt-8 py-2 text-white font-medium bg-primary hover:bg-primary active:bg-primary rounded-lg duration-150"
                            >
                                Create account
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </main>
    )
}