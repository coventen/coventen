'use client'

import Image from 'next/image'


export default function Hero() {

    return (
        <>
            <div className="relative min-h-screen top-0">
                <Image className="absolute inset-0 w-full h-full object-cover object-top" src="/assets/home/hero.jpg" width={400} height={500} alt="hero background image" />
                <div aria-hidden="true" className="absolute inset-0 w-full h-full bg-gradient-to-t from-primary/50 to-black/30 bg-opacity-40 backdrop-blur-sm"></div>
                <div className="relative container m-auto px-6 md:px-12 lg:px-6">
                    <div className="mb-12 pt-40 space-y-16 md:mb-20 md:pt-56 lg:w-8/12 lg:mx-auto ">
                        <h1 className="text-white text-center text-3xl font-bold sm:text-4xl md:text-5xl -mt-20">
                            We believe in best manufacturing practices will bring out best products
                        </h1>
                        <form action="" className="w-full">
                            <div className="relative flex p-1 rounded-xl bg-white shadow-2xl md:p-2">
                                <div id="catJobBox" className="hidden text-gray-600 relative md:flex justify-between items-center  max-w-40 select-none">
                                    <input type="checkbox" name="" id="toggleJobLstCat" className="peer hidden outline-none border-none" />
                                    <input type="text" name="" id="catJobName" value="Design" className="pl-3 border-none outline-none w-full bg-white text-base font-medium cursor-pointer" />
                                    <label htmlFor="toggleJobLstCat" className="absolute top-0 left-0 w-full h-full"></label>
                                    <span className="min-w-max">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <div id="catJobLst" className="absolute transition-all duration-500 ease-in-out translate-y-10 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-y-1 top-full left-0 w-full bg-white bg-opacity-80 rounded-lg py-2">
                                        <ul className="flex flex-col w-full">
                                            <li className="cursor-default transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">Products</li>
                                            <li className="cursor-default transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">Labs</li>
                                            <li className="cursor-default transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">Marketing</li>
                                        </ul>
                                    </div>
                                </div>
                                <input placeholder="Search products and labs.." className="w-full p-4 outline-none  border-none text-gray-600" type="text" />
                                <button type="button" title="Start buying" className="ml-auto py-3 px-6 rounded-lg text-center transition bg-primary   md:px-12">
                                    <span className="hidden text-white font-semibold md:block">
                                        Search
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 mx-auto text-white md:hidden" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>


                </div>

            </div>





        </>
    )
}