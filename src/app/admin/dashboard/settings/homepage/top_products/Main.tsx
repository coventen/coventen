'use client'
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation, useQuery } from 'graphql-hooks';
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-hot-toast';
import { AiFillEye, AiTwotoneDelete } from 'react-icons/ai';

import Loading from '@/app/loading';
import AddProductModal from './AddProductModal';


const GET_PRODUCTS = `
query HomePages {
  homePages {
    hasProduct {
      id
      title
    }
  }
}
`

const ADD_PRODUCTS = `
mutation UpdateHomePages($update: HomePageUpdateInput) {
  updateHomePages(update: $update) {
    homePages {
      id
    }
  }
}
`
const DELETE_PRODUCTS = `
mutation UpdateHomePages($disconnect: HomePageDisconnectInput) {
  updateHomePages(disconnect: $disconnect) {
    homePages {
      id
    }
  }
}
`

const Main = () => {

  //states
  const [isModalOpen, setIsModalOpen] = React.useState(false)



  //hooks 
  const client = useGqlClient()

  const { data, loading, error, refetch } = useQuery(GET_PRODUCTS, { client })

  //MUTATIONS
  const [addProductFn, createState] = useMutation(ADD_PRODUCTS, { client })
  const [deleteProductsFn, deleteState] = useMutation(DELETE_PRODUCTS, { client })


  // INITIALIZING query and mutations


  const addProduct = async (ids: string[]) => {
    const { data } = await addProductFn({
      variables: {
        "update": {
          "hasProduct": [
            {
              "connect": ids.map((id: string) => {
                return {
                  "where": {
                    "node": {
                      "id": id
                    }
                  }
                }
              })
            }
          ]
        }
      }
    })
    if (data.updateHomePages.homePages[0].id) {
      toast.success("Products added Successfully")
      refetch()
      setIsModalOpen(false)
    }
  }

  const deleteProducts = async (id: string) => {
    const { data } = await deleteProductsFn({
      variables: {
        "disconnect": {
          "hasProduct": [
            {
              "where": {
                "node": {
                  "id": id
                }
              }
            }
          ]
        }
      }
    })
    if (data.updateHomePages.homePages[0].id) {
      toast.error("Products Deleted")
      refetch()
    }
  }


  if (loading || deleteState.loading || createState.loading) return <Loading />

  return (
    <>
      <div className='flex items-center justify-end'>
        <div>
          <button onClick={() => setIsModalOpen(true)} className="focus:ring-2 focus:ring-offset-2 focus:ring-primary mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-primary hover:bg-primary focus:outline-none rounded">
            <p className="text-sm font-medium leading-none text-white">Update </p>
          </button>
        </div>
      </div>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full  rounded-sm overflow-hidden">

          <table className="w-full leading-normal">


            <thead>
              <tr>

                <th
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase ">
                  Serial No.
                </th>
                <th
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase ">
                  Name
                </th>


                <th
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                data?.homePages[0].hasProduct.length && data?.homePages[0].hasProduct?.map((item: any, i: number) =>
                  <tr key={i}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                      <div className="flex items-center justify-center font-semibold text-base">

                        {i + 1}
                      </div>
                    </td>

                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                      <div className="flex items-center">

                        <div className="">
                          <p className="text-gray-700 font-bold  whitespace-nowrap ">
                            {item?.title}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                      <div className="relative flex items-center justify-center  space-x-4 px-8 ">

                        <button onClick={() => deleteProducts(item?.id)} className="focus:ring-2 focus:ring-offset-2  text-sm leading-none text-red-600 py-2 px-2 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"><AiTwotoneDelete /></button>
                      </div>
                    </td>
                  </tr>)
              }





            </tbody>
            <AddProductModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} addProduct={addProduct} />
          </table>
        </div>
      </div>

    </>
  );
};

export default Main