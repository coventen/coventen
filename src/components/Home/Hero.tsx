'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import ServiceData from '@/utlts/service_data/nonDestructiveTesting.json';
import Link from 'next/link';


export default function Hero() {

    const [selectSearchType, setSelectSearchType] = useState<string>('Solutions')
    const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false)
    const [searchText, setSearchText] = useState<string>('')
    const [searchResult, setSearchResult] = useState<any[]>([])


    useEffect(() => {

        const search = ServiceData.filter((item: any) => item.title.toLowerCase().includes(searchText.toLowerCase()))
        setSearchResult(search)
        console.log(search)
    }, [searchText])








    return (
        <div className="relative min-h-[50vh] lg:min-h-[110vh]">

            <img className="absolute inset-0 w-full h-full object-cover object-top" src="/assets/home/hero.jpg" width="400" height="500" alt="hero background image" />
            <div aria-hidden="true" className="absolute inset-0 w-full h-full bg-gray-800 bg-opacity-30 backdrop-blur-[8px]"></div>
            <div className="relative container m-auto px-6 md:px-12 lg:px-6">
                <div className="mb-12 pt-7 space-y-16 md:mb-20 md:pt-56 lg:w-8/12 lg:mx-auto">
                    <h1 className="text-white text-center text-3xl font-bold sm:text-4xl md:text-5xl">
                        Welcome to the world of quality. Lorem ipsum dolor sit amet consectetur.
                    </h1>

                    <form onBlur={() => setIsDropDownOpen(false)} className="w-full">
                        <div className="relative flex p-1 rounded-xl bg-white shadow-2xl md:p-2">
                            <div id="catJobBox" className="hidden text-gray-600 relative md:flex justify-between items-center select-none">
                                <input type="checkbox" name="" id="toggleJobLstCat" className="peer hidden outline-none border-none" />
                                <input type="text" name="" id="catJobName" value={selectSearchType} className="pl-3 w-full bg-white text-base font-medium cursor-pointer outline-none border-none" />
                                <label htmlFor="toggleJobLstCat" className="absolute top-0 left-0 w-full h-full"></label>
                                <span className="min-w-max">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                                <div id="catJobLst" className="absolute transition-all duration-500 ease-in-out translate-y-10 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-y-1 top-full left-0 w-full bg-white bg-opacity-80 rounded py-2">
                                    <ul className="flex flex-col w-full">
                                        <li onClick={() => setSelectSearchType("Solutions")} className="cursor-default transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">Solutions</li>
                                        <li onClick={() => setSelectSearchType("Products")} className="cursor-default transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">Products</li>
                                        <li onClick={() => setSelectSearchType("Calibration")}
                                            className="cursor-default transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">Calibration</li>
                                        <li onClick={() => setSelectSearchType("Testing")} className="cursor-default transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">Testing</li>
                                    </ul>
                                </div>
                            </div>
                            {/*  search bar */}
                            <div className='w-full relative flex items-center'>
                                <input
                                    onFocus={() => setIsDropDownOpen(true)}

                                    onChange={(e) => setSearchText(e.target.value)}
                                    defaultValue={searchText}
                                    placeholder="search.." className="w-full p-4 outline-none text-gray-600 border-none focus:outline-none focus:ring-0" type="text" />
                                <button type="button" title="Start buying" className="ml-auto py-3 px-6 rounded text-center transition bg-primary md:px-12">
                                    <span className="hidden text-white font-semibold md:block">
                                        Search
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 mx-auto text-white md:hidden" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </button>


                            </div>
                            <div className={`absolute w-full min-w-max hidden ${isDropDownOpen ? "lg:block " : "lg:hidden"} -bottom-52 rounded lg:p-7 bg-white text-primaryText h-48 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch`}>
                                {/* <div className='grid grid-cols-3 gap-3'> */}


                                {
                                    searchResult && searchResult.map((item: any, index: number) =>

                                        <Link href={`/services/non_destructive_testing/${item?.id}`} key={item.id} >
                                            <h1 className=' w-full  p-2 text-primaryText hover:underline'>{item.title}</h1>
                                        </Link>
                                    )
                                }
                                {/* </div> */}
                            </div>

                        </div>
                    </form>
                </div>

            </div>


        </div >
    )
}