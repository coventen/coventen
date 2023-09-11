'use client'

import { useGqlClient } from '@/hooks/UseGqlClient';
import { useQuery } from 'graphql-hooks';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { BsPinterest } from 'react-icons/bs';
import { FaFacebook, FaReddit } from 'react-icons/fa';


const GET_TERMS = `
query TermsPages {
    termsPages {
      slug
      title
    }
  }
`


// component
const Footer = () => {

    // states
    const [terms, setTerms] = React.useState<any>([])


    // hooks
    const client = useGqlClient()

    // QUERY
    const { data, error, loading } = useQuery(GET_TERMS, { client })


    useEffect(() => {
        if (data?.termsPages) {
            const chunked = splitArrayIntoChunks(data?.termsPages, 4)
            setTerms(chunked)
        }
    }, [data?.termsPages])




    function splitArrayIntoChunks(array: any, chunkSize: number) {
        return Array.from({ length: Math.ceil(array.length / chunkSize) }, (v, index) =>
            array.slice(index * chunkSize, index * chunkSize + chunkSize)
        );
    }



    return (


        <footer className="relative bg-blueGray-200 pt-8 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-[40%] px-4">
                        <img src="/assets/log.png" alt=" " className='w-40' />
                        <h5 className="text-sm mt-0 mb-2 text-blueGray-600">
                            Empowering Automotive Excellence Through Meticulous <br /> Machinery Forensic Testing
                        </h5>
                        <div className='flex items-center mt-5 space-x-3 text-xl'>
                            <p className='text-gray-500 hover:text-blue-600'><FaFacebook /></p>
                            <p className='text-gray-500 hover:text-blue-600'><AiFillTwitterCircle /></p>
                            <p className='text-gray-500 hover:text-pink-600 text-[25px]'><BiLogoInstagramAlt /></p>
                            <p className='text-gray-500 hover:text-red-600' ><BsPinterest /></p>

                        </div>

                    </div>
                    <div className="w-full lg:w-[60%] px-4  ">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4  mb-12">
                                <ul className="list-unstyled">
                                    <li>
                                        <Link className="text-dimText hover:underline cursor-pointer block pb-2 text-sm" href="/about_us">About Us</Link>
                                    </li>
                                    <li>
                                        <Link className="text-dimText cursor-pointer hover:underline block pb-2 text-sm" href="/products">Products</Link>
                                    </li>
                                    <li>
                                        <a className="text-dimText cursor-pointer  hover:underline  block pb-2 text-sm" href="/learn">Learn</a>
                                    </li>
                                    <li>
                                        <a className="text-dimText cursor-pointer  hover:underline  block pb-2 text-sm" href="/events">Events</a>
                                    </li>

                                </ul>
                            </div>
                            {
                                terms?.map((term: any, index: number) =>
                                    <div key={index} className="w-full lg:w-4/12 px-4  mb-12">
                                        <ul className="list-unstyled">

                                            {
                                                term?.map((item: any, index: number) =>
                                                    <li key={index}>
                                                        <Link className="text-dimText capitalize cursor-pointer  hover:underline  block pb-2 text-sm" href={`/terms/${item.slug}`}>{item?.title}</Link>
                                                    </li>

                                                )
                                            }
                                        </ul>
                                    </div>

                                )
                            }
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                            Copyright © <span id="get-current-year">2023 Coveten All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;