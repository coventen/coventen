'use client'

import { useGqlClient } from '@/hooks/UseGqlClient';
import { useManualQuery, useQuery } from 'graphql-hooks';
import React, { useState, useEffect } from 'react';

const GET_SERVICES = `
query Subservices($where: SubserviceWhere) {
    subservices(where: $where) {
      id
      title
    }
  }
`

const GET_PRODUCTS = `
query Products($where: ProductWhere) {
    products(where: $where) {
      title
      id
    }
  }
`
const GET_CALIBRATION = ``
const GET_TESTING = ``



const SearchInput = () => {
    const [isResultBoxOpen, setIsResultBoxOpen] = useState<boolean>(false)
    const [selectedValue, setSelectedValue] = useState('Solutions');
    const [searchText, setSearchText] = useState('')
    const [searchResult, setSearchResult] = useState<any[]>([])
    const [searchQueryType, setSearchQueryType] = useState<any>(GET_SERVICES)

    //hooks
    const client = useGqlClient()

    //query
    const [searchFn, { data, loading }] = useManualQuery(searchQueryType, {
        client,
        variables: {
            OR: [
                {
                    title_CONTAINS: searchText.toLowerCase()
                },
                {
                    title_CONTAINS: searchText.toUpperCase()
                },
                {
                    title_CONTAINS: searchText.replace(/\b\w/g, match => match.toUpperCase())
                }
            ]
        }
    })


    useEffect(() => {
        searchData()
        console.log('searching')
    }, [selectedValue, searchText])



    console.log(searchResult, 'this is result')


    // initializing search 

    const searchData = async () => {
        if (selectedValue === 'Solutions') {
            setSearchQueryType(GET_SERVICES)
            const { data } = await searchFn()
            setSearchResult(data?.subservices)
        } else if (selectedValue === 'Products') {
            setSearchQueryType(GET_PRODUCTS)
            const { data } = await searchFn()
            setSearchResult(data?.products)
        }
        else if (selectedValue === 'Calibration') {
            setSearchQueryType(GET_CALIBRATION)
            const { data } = await searchFn()
            setSearchResult([])
        } else if (selectedValue === 'Testing') {
            setSearchQueryType(GET_TESTING)
            const { data } = await searchFn()
            setSearchResult([])
        }
    }




    return (
        <>
            <form action="" className="  max-w-3xl mx-auto relative">
                <div className="relative flex p-1 rounded-full h-20 bg-white dark:bg-gray-800 dark:border-gray-600  shadow-md md:p-2">
                    <select
                        className="w-32   bg-transparent text-xs lg:text-base pl-5 py-2 border-none focus:ring-0   font-semibold rounded-l-md focus:outline-none focus:border-none"
                        value={selectedValue}
                        onChange={(e) => setSelectedValue(e.target.value)}
                    >
                        <option >Solutions</option>
                        <option >Products</option>
                        <option >Calibration</option>
                        <option >Testing</option>
                    </select>

                    <input
                        onFocus={() => setIsResultBoxOpen(true)}
                        defaultValue={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Search" className="w-full p-4 border-none outline-none rounded-full  bg-transparent dark:text-white dark:placeholder-gray-300 focus:ring-0" type="text" />
                    <button type="button" title="Start buying" className="ml-auto py-3 px-6 rounded-full text-center transition bg-primary  md:px-12 ">
                        <span className="hidden text-white font-semibold md:block">
                            Search
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 mx-auto text-white md:hidden" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </button>
                </div>

                <div
                    onBlur={() => setIsResultBoxOpen(false)}
                    // onMouseOut={() => setIsResultBoxOpen(false)}
                    className={`${isResultBoxOpen ? 'block' : 'hidden'}   w-full h-44  bg-white shadow-md rounded-md p-7 absolute -bottom-52 z-50`}>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        {
                            searchResult?.map((item: any) =>

                                <p key={item.id} className='text-dimText font-semibold underline'>{item?.title}</p>
                            )
                        }
                    </div>
                </div>
            </form>
        </>

    );
};

export default SearchInput;