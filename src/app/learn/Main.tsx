'use client'

import { useGqlClient } from '@/hooks/UseGqlClient';
import { useManualQuery } from 'graphql-hooks';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import Loading from '../loading';
import Pagination from '@/components/Pagination';
import { AiFillStar } from 'react-icons/ai';
import Modal from './Modal';



const GET_PRODUCTS = `
query LearnItems($where: LearnItemWhere, $options: LearnItemOptions) {
    learnItems(where: $where, options: $options) {
      id
      title
      description
      url
      imageUrl
      mode
      rating
      courseFor
      seats
      price
      credit
      startDate
      endDate
    }
  }
  `


// components
const Main = ({ searchOption, searchTerm }: any) => {
    // states
    const [products, setProducts] = React.useState<any[]>([])
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [currentEvent, setCurrentEvent] = React.useState<any>(null);

    // pagination states
    const [pageLimit, setPageLimit] = React.useState(10)
    const [currentPage, setCurrentPage] = React.useState(1)
    const [totalPages, setTotalPages] = React.useState(0)
    const [totalProduct, setTotalProduct] = React.useState(0)


    // hooks
    const client = useGqlClient()
    const searchParams = useSearchParams()


    console.log(searchOption, ' this is search option', searchTerm, ' this is search term')




    // quires
    const [getProductsFn, dataState] = useManualQuery(GET_PRODUCTS, { client })


    useEffect(() => {
        let where

        if (searchOption === 'accredited') {
            where = {
                "accredited_CONTAINS": searchTerm,
            }
        }
        else if (searchOption === 'duration') {
            where = {
                "duration_CONTAINS": searchTerm,
            }
        }
        else if (searchOption === 'certification') {
            where = {
                "certification_CONTAINS": searchTerm,
            }
        }
        else {
            where = {}
        }

        getProducts(where)

    }, [searchTerm, searchOption])


    useEffect(() => {
        getProducts()
        getItemsCount()
    }, [currentPage])



    const getProducts = async (where: any = {}) => {
        const { data } = await getProductsFn({
            variables: {
                "where": where,
                options: {
                    limit: pageLimit,
                    offset: (currentPage - 1) * pageLimit,
                    sort: [
                        {
                            createdAt: "DESC"
                        }
                    ]
                }
            }
        })

        if (data?.learnItems) {
            setProducts(data?.learnItems)
        }
    }


    const getItemsCount = async () => {
        const { data } = await getProductsFn()

        if (data?.products?.length > 0) {
            setTotalProduct(data?.products?.length)
            setTotalPages(Math.ceil(data?.products?.length / pageLimit))
        }
    }


    useEffect(() => {
        console.log(products, ' this is products')
    }, [products?.length])


    if (dataState.loading) return <Loading />

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pb-24 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">

                        {
                            products?.length && products?.map((item: any) =>
                                <div key={item?.id} className=" relative my-10 flex w-full  flex-col overflow-hidden  border rounded dark:bg-darkBgLight dark:border-darkBorder bg-white/30  ">
                                    <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded group" >
                                        <img className="peer absolute top-0 right-0 h-full w-full object-contain transition-all duration-500 group-hover:scale-125" src={item?.imageUrl || '/assets/no_image.png'} alt="product image" />


                                        <svg className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>

                                    </div>
                                    <div className="mt-4 px-5 pb-3">
                                        <h5 className="text-base tracking-tight font-semibold uppercase mb-2">{item?.title}</h5>
                                        <p className="mt-2 text-[13px] mb-5 text-justify text-dimText dark:text-gray-300">
                                            {item?.description || 'N/A'}
                                        </p>
                                    </div>
                                    <div className=" px-5 pb-5 ">

                                        <div className='flex items-center justify-between'>
                                            <p className='font-semibold text-sm mb-3'>Who can apply:</p>
                                            <p className='font-semibold text-dimText text-sm mb-3'>{item?.courseFor || 'Everyone'}</p>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <p className='font-semibold text-sm mb-3 '>Rating:</p>
                                            <p className='font-semibold text-dimText text-sm mb-3 flex items-center justify-center space-x-2'>{item?.rating || 4.5}
                                                <span className='text-primary'><AiFillStar /></span>
                                            </p>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <p className='font-semibold text-sm mb-3'>Price:</p>
                                            <p className='font-semibold text-dimText text-sm mb-3'>{item?.price}</p>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <p className='font-semibold text-sm mb-3'>Seats:</p>
                                            <p className='font-semibold text-dimText text-sm mb-3'>{item?.seats}</p>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <p className='font-semibold text-sm mb-3'>Credit:</p>
                                            <p className='font-semibold text-dimText text-sm mb-3'>{item?.credit}</p>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <p className='font-semibold text-sm mb-3'>Mode:</p>
                                            <p className='font-semibold text-dimText text-sm mb-3'>{item?.mode}</p>
                                        </div>
                                        <div className='flex items-center justify-between mb-14'>
                                            <p className='font-semibold text-sm mb-3'>Date of apply:</p>
                                            <p className='font-semibold text-dimText text-sm mb-3'>{item?.startDate.slice(0, 10)} - {item?.endDate.slice(0, 10)}
                                            </p>
                                        </div>




                                        <div className=' absolute bottom-4 flex space-x-3'>

                                            <div>
                                                <Link href={item?.url} target="_blank">
                                                    <button className="relative group inline-block flex-shrink-0  py-3.5 px-5 text-sm font-semibold text-orange-50 gradient-bg  overflow-hidden" type="submit">
                                                        <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                                                        <div className="relative flex items-center justify-center">
                                                            <span className="">Learn More</span>

                                                        </div>
                                                    </button>
                                                </Link>
                                            </div>

                                            <button
                                                onClick={() => {
                                                    setIsModalOpen(true)
                                                    setCurrentEvent(item?.title)
                                                }}
                                                className="relative group inline-block flex-shrink-0   py-3 px-5 text-sm font-semibold text-primary hover:text-white bg-transparent border border-primary  overflow-hidden" type="submit">
                                                <div className="absolute top-0 right-full w-full h-full gradient-bg transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                                                <div className="relative flex items-center justify-center">
                                                    <span className="">Interested</span>
                                                </div>
                                            </button>


                                        </div>

                                    </div>
                                </div>
                            )
                        }



                    </div>
                </div>
            </section >

            <div className='w-full mt-12 flex items-center justify-center'>
                {totalProduct > pageLimit &&
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />}

            </div>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} learn={currentEvent} />
        </>
    );
};

export default Main;