'use client'
import React, { Fragment, useState } from 'react';
import Editor from '@/components/Editor';


import { EditorState, convertToRaw } from 'draft-js';



import { useGqlClient } from '@/hooks/UseGqlClient';
import { useQuery } from 'graphql-hooks';
import { addVariables } from './Main';


interface IAddProductProps {
    setTab: (tab: number) => void
    addNewFn: (input: addVariables) => void

}


const GET_SERVICES = `
query Subservices {
    subservices {
      id
      title
      slug
    }
  }`


// component
const AddNew = ({ setTab, addNewFn }: IAddProductProps) => {


    // states
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')


    // hooks
    const client = useGqlClient()

    // query
    const { data, loading, error } = useQuery(GET_SERVICES, { client })


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const inputData = {
            title: title,
            description: description,

        }

        addNewFn(inputData)
    }




    return (
        <>
            <div className='min-h-screen'>
                <form onSubmit={handleSubmit} className="bg-transparent">
                    <div className="grid grid-cols-1 lg:grid-cols-2  gap-5">
                        <div className="mb-5 ">
                            <label htmlFor="title" className="block  text-gray-700 text-sm mb-1">
                                Title
                            </label>
                            <div className="relative inline-flex w-full">
                                <select
                                    required
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    name='title'
                                    className="mt-1 px-4 py-2 border border-gray-200 rounded-md w-full"
                                >
                                    <option value='' >Select Service</option>
                                    {
                                        data?.subservices && data?.subservices.map((service: any) =>
                                            <option key={service?.id} value={service?.title} >{service?.title}</option>
                                        )
                                    }

                                </select>

                            </div>
                        </div>


                        <div className='col-span-2'>
                            <p className='text-dimText mb-4'> Description </p>
                            <textarea
                                rows={5}
                                defaultValue={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className='mt-1 px-4 py-2 border border-gray-200 rounded-md w-full'
                            />
                        </div>

                    </div>
                    <div className='mt-6 '>

                        <button className='px-4 py-1.5 bg-primary text-white font-semibold'>Add New </button>
                    </div>
                </form>
            </div>

        </>

    );
};

export default AddNew;