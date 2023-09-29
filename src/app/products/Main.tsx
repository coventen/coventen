'use client'

import { useGqlClient } from '@/hooks/UseGqlClient';
import { useManualQuery } from 'graphql-hooks';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { BsCurrencyRupee } from 'react-icons/bs';
import Loading from '../loading';


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

    // hooks
    const client = useGqlClient()
    const searchParams = useSearchParams()


    const search = searchParams.get('query')

    console.log(search)

    // quires
    const [getProductsFn, { data, loading, error }] = useManualQuery(GET_PRODUCTS, { client })


    useEffect(() => {
        let where
        if (search) {
            where = {
                "categoryHas": {
                    "id": search
                }
            }
        } else {
            where = {}
        }

        getProducts(where)

    }, [search])



    const getProducts = async (where: any) => {
        const { data } = await getProductsFn({
            variables: {
                "where": where,
                "options": {
                    "sort": [
                        {
                            "createdAt": "DESC"
                        }
                    ]
                }
            }
        })

        if (data?.products) {
            setProducts(data?.products)
        }
    }


    useEffect(() => {
        console.log(products, ' this is products')
    }, [products?.length])


    if (loading) return <Loading />

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

                                            <div key={index} className="w-full group max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                                <div className='overflow-hidden h-48 '>
                                                    <img className="p-2 rounded-t-lg h-48  w-full group-hover:scale-125" src={product?.image || '/assets/no_image.png'} alt="product image" />
                                                </div>
                                                <div className="px-5 pb-5">
                                                    <div >
                                                        <h5 className="text-lg font-semibold tracking-tight text-gray-700 dark:text-white uppercase">{product?.title}</h5>
                                                    </div>

                                                    <div className="flex items-center mt-10 justify-between">
                                                        <span className="text-xl flex items-center justify-center space-x-2 font-bold text-gray-700 dark:text-white"><BsCurrencyRupee /> {product?.price}</span>
                                                        <Link href={`/products/details/${product?.id}`} className="text-white bg-primary font-medium  text-sm px-5 py-1.5 text-center ">View Details</Link>
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
            </section>
        </>
    );
};

export default Main;