'use client'

import { useGqlClient } from '@/hooks/UseGqlClient';
import { useManualQuery } from 'graphql-hooks';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';


const GET_PRODUCTS = `
query Query($where: ProductWhere) {
    products(where: $where)  {
      title
      shortDescription
      price
      id
    }
  }`


// components
const Main = ({ params }: { params: string | null }) => {
    // states
    const [products, setProducts] = React.useState<any[]>([])

    // hooks
    const client = useGqlClient()

    // quires
    const [getProductsFn, { data, loading, error }] = useManualQuery(GET_PRODUCTS, { client })


    useEffect(() => {
        let where
        if (params) {
            where = {
                "hasSubcategory": {
                    "id": params
                }
            }
        } else {
            where = {}
        }

        getProducts(where)

    }, [params])



    const getProducts = async (where: any) => {
        const { data } = await getProductsFn({
            variables: {
                "where": where
            }
        })

        if (data?.products?.length) {
            console.log(data?.products)
            setProducts(data?.products)
        }
    }


    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pb-24 mx-auto">
                    <div className="flex flex-wrap -m-4">

                        {
                            products && products.map((product, index) =>

                                <Link key={product?.id} href={`/products/details/${product?.id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                    <a className="block relative h-48 rounded overflow-hidden">
                                        <Image height={430} width={265} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/assets/home/lab1.jpg" />
                                    </a>
                                    <div className="mt-4">
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{product?.title}</h2>
                                        <p className="mt-1">{product?.price}</p>
                                    </div>
                                </Link>
                            )
                        }



                    </div>
                </div>
            </section>
        </>
    );
};

export default Main;