'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import ServiceData from '@/utlts/service_data/nonDestructiveTesting.json';
import Link from 'next/link';
import SearchInput from './SearchInput';


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

            <img className="absolute inset-0 w-full h-full object-cover object-top" src="/assets/hero.jpg" width="400" height="500" alt="hero background image" />
            <div aria-hidden="true" className="absolute inset-0 w-full h-full bg-gray-800 bg-opacity-30 backdrop-blur-[0px] bg-gradient-to-b from-black/80 to-black/10"></div>
            <div className="relative container m-auto px-6 md:px-12 lg:px-6">
                <div className="mb-12 pt-7 space-y-16 md:mb-20 md:pt-56 lg:w-8/12 lg:mx-auto">
                    <h1 className="text-white text-center text-3xl font-bold sm:text-4xl md:text-5xl leading-loose ">
                        Empowering Automotive Excellence Through Meticulous Machinery Forensic Testing
                    </h1>
                    <SearchInput />
                </div>

            </div>


        </div >
    )
}