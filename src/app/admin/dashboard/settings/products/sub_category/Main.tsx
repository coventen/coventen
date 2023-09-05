'use client'
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation, useQuery } from 'graphql-hooks';
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-hot-toast';
import { AiFillEye, AiTwotoneDelete } from 'react-icons/ai';
import Loading from '@/app/loading';
import CreateCategoryModal from './CreateSubCategoryModal';




const GET_CATEGORY = `
query Categories {
    categories {
      id
      name
    }
  }
`




const GET_SUB_CATEGORY = `
query Categories {
    subCategories {
      id
      name
      createdAt
      categoryHas {
        name
      }
    }
  }
`

const CREATE_SUB_CATEGORY = `
mutation CreateSubCategories($input: [SubCategoryCreateInput!]!) {
    createSubCategories(input: $input) {
      info {
        nodesCreated
      }
    }
  }
`
const DELETE_SUB_CATEGORY = `
mutation DeleteSubCategories($where: SubCategoryWhere) {
    deleteSubCategories(where: $where) {
      nodesDeleted
    }
  }
`

const Main = () => {

    //states
    const [isModalOpen, setIsModalOpen] = React.useState(false)
    const [selectedCategory, setSelectedCategory] = React.useState('')


    //hooks 
    const client = useGqlClient()

    // query
    const { data, loading, error, refetch } = useQuery(GET_SUB_CATEGORY, { client })
    const { data: categoriesData, loading: catLoading } = useQuery(GET_CATEGORY, { client })

    //MUTATIONS
    const [createSubCategoryFn, createState] = useMutation(CREATE_SUB_CATEGORY, { client })
    const [deleteFn, deleteState] = useMutation(DELETE_SUB_CATEGORY, { client })


    // INITIALIZING query and mutations


    const createSubCategory = async (name: string) => {
        const { data } = await createSubCategoryFn({
            variables: {
                "input": [
                    {
                        "name": name,
                        "createdAt": new Date().toISOString(),
                        "categoryHas": {
                            "connect": {
                                "where": {
                                    "node": {
                                        "id": selectedCategory || 'no id'
                                    }
                                }
                            }
                        }
                    }
                ]
            }
        })
        if (data?.createSubCategories?.info?.nodesCreated > 0) {
            toast.success("Created Successfully")
            refetch()
            setIsModalOpen(false)
        }
    }

    const deleteService = async (id: string) => {
        const { data } = await deleteFn({
            variables: {
                where: {
                    id: id
                }
            }
        })
        if (data?.deleteSubCategories?.nodesDeleted > 0) {
            toast.error("Deleted")
            refetch()
        }
    }


    if (loading || deleteState.loading || createState.loading) return <Loading />


    // render
    return (
        <>
            <div className='flex items-center justify-end'>
                <div>
                    <button onClick={() => setIsModalOpen(true)} className="focus:ring-2 focus:ring-offset-2 focus:ring-primary mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-primary hover:bg-primary focus:outline-none rounded">
                        <p className="text-sm font-medium leading-none text-white">Create new </p>
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
                                    Sub Category Name
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase ">
                                    Category
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase ">
                                    Created
                                </th>


                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase ">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.subCategories && data?.subCategories?.map((item: any, i: number) =>
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
                                                        {item?.name}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                            <div className="flex items-center">

                                                <div className="">
                                                    <p className="text-gray-700 font-bold  whitespace-nowrap ">
                                                        {item?.categoryHas?.name}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                            <div className="flex items-center">

                                                <div className="">
                                                    <p className="text-gray-700 font-bold  whitespace-nowrap ">
                                                        {item?.createdAt.slice(0, 10)}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                                            <div className="relative flex items-center justify-center  space-x-4 px-8 ">

                                                <button onClick={() => deleteService(item?.id)} className="focus:ring-2 focus:ring-offset-2  text-sm leading-none text-red-600 py-2 px-2 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"><AiTwotoneDelete /></button>
                                            </div>
                                        </td>
                                    </tr>)
                            }





                        </tbody>
                        <CreateCategoryModal
                            isOpen={isModalOpen}
                            setIsOpen={setIsModalOpen}
                            createSubCategory={createSubCategory}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                            categories={categoriesData?.categories}
                        />
                    </table>
                </div>
            </div>

        </>
    );
};

export default Main