'use client'

import { useGqlClient } from '@/hooks/UseGqlClient';
import { useManualQuery } from 'graphql-hooks';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import Loading from '../loading';
import Pagination from '@/components/Pagination';



const GET_PRODUCTS = `
query Query($where: ProductWhere, $options: ProductOptions) {
    products(where: $where, options: $options)  {
      title
      shortDescription
      price
      id
      image
    }
  }`


// components
const Main = () => {
    // states
    const [products, setProducts] = React.useState<any[]>([])
    // pagination states
    const [pageLimit, setPageLimit] = React.useState(10)
    const [currentPage, setCurrentPage] = React.useState(1)
    const [totalPages, setTotalPages] = React.useState(0)
    const [totalProduct, setTotalProduct] = React.useState(0)

    // hooks
    const client = useGqlClient()
    const searchParams = useSearchParams()


    const search = searchParams.get('query')



    // quires
    const [getProductsFn, dataState] = useManualQuery(GET_PRODUCTS, { client })


    useEffect(() => {
        let where
        if (search) {
            where = {
                "categoryHas": {
                    "id": search,
                    "isPopular": true
                }
            }
        } else {
            where = {}
        }

        getProducts(where)

    }, [search])


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

        if (data?.products) {
            setProducts(data?.products)
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                        {
                            products.length ?
                                <>
                                    {
                                        products.map((product, index) =>

                                            <div key={index} className="group relative my-10 flex w-full  flex-col overflow-hidden  border rounded dark:bg-darkBgLight dark:border-darkBorder bg-white/30 cursor-pointer ">
                                                <div className="relative mx-3 mt-3 flex  h-48 overflow-hidden rounded group" >
                                                    <img className="peer absolute top-0 right-0  h-48 w-full  rounded overflow-hidden transition-all duration-500 group-hover:scale-125" src={product?.image || '/assets/no_image.png'} alt="product image" />


                                                    <svg className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>

                                                </div>
                                                <div className="mt-4 px-5 pb-3 mb-12 ">
                                                    <h5 className="text-base text-gray-900 tracking-tight font-semibold uppercase mb-2">{product?.title}</h5>

                                                </div>
                                                <div className=" px-5 pb-5  absolute bottom-2 w-full">
                                                    <div className="flex items-center w-full mt-3 justify-between">
                                                        <span className="text-lg flex items-center justify-center space-x-2 font-semibold  dark:text-white  text-gray-900">Price: {product?.price}</span>

                                                        <Link href={`/products/details/${product?.id}`} className="text-white gradient-bg font-semibold rounded  text-sm px-4 py-1.5 text-center ">View Details</Link>
                                                    </div>



                                                </div>

                                            </div>





                                            // <Link key={product?.id} href={`/products/details/${product?.id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                            //     <a className="block relative h-48 rounded overflow-hidden group overflow-hidden">
                                            //         <Image height={430} width={265} alt="ecommerce" className="transition-all duration-500 object-cover object-center w-full h-full block group-hover:scale-125" src={product?.image || '/assets/no_image.png'} />
                                            //     </a>
                                            //     <div className="mt-4">
                                            //         <h2 className="text-gray-900 title-font text-base font-medium">{product?.title}</h2>

                                            //     </div>
                                            // </Link>
                                        )
                                    }



                                </>

                                :

                                <>
                                    <div>
                                        <p className=' text-dimText'>No Products Found</p>
                                    </div>
                                </>
                        }



                    </div>
                </div>
            </section >

            <div className='w-full mt-12 flex items-center justify-center'>
                {totalProduct > pageLimit &&
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />}

            </div>
        </>
    );
};

export default Main;