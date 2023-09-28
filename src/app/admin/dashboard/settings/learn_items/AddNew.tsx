'use client'

import React, { Fragment, useState } from 'react';







import { useGqlClient } from '@/hooks/UseGqlClient';
import { useQuery } from 'graphql-hooks';
import { addVariables } from './Main';
import { v4 as uuidv4 } from 'uuid'
import HandleFileUpload from '@/shared/HandleFileUpload';
import { set } from 'react-hook-form';
import Loading from '@/app/loading';


interface IAddProductProps {
    setTab: (tab: number) => void
    addNewFn: (input: addVariables) => void

}




// component
const AddNew = ({ setTab, addNewFn }: IAddProductProps) => {


    // states
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState<File | null>(null)
    const [uploading, setUploading] = useState(false)
    const [mode, setMode] = useState('')
    const [seats, setSeats] = useState(0)
    const [price, setPrice] = useState(0)
    const [credit, setCredit] = useState('')
    const [startAt, setStartAt] = useState('')
    const [endAt, setEndAt] = useState('')



    // hooks
    const client = useGqlClient()
    const { uploadFile } = HandleFileUpload()




    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let imageLink
        if (image) {
            setUploading(true)
            imageLink = await uploadFile(image, `learn-${uuidv4()}`, 'Learn_Images')
            setUploading(false)
        }
        const inputData = {
            title: title.toLowerCase(),
            description: description,
            url: url,
            imageUrl: imageLink || '',
            mode: mode,
            seats: seats,
            price: price,
            credit: credit,
            startDate: startAt,
            endDate: endAt,

        }

        addNewFn(inputData)
    }


    if (uploading) return <Loading />

    return (
        <>
            <div className='min-h-screen'>
                <form onSubmit={handleSubmit} className="bg-transparent">
                    <div className="grid grid-cols-1 lg:grid-cols-2  gap-5">
                        <div className=" p-1  col-span-2">
                            <label htmlFor="title" className="block  text-gray-700 text-sm mb-1">
                                Title
                            </label>
                            <input
                                required
                                type="text"
                                name="title"
                                defaultValue={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="title"
                                className="mt-2 w-full block  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:primary/10"
                            />
                        </div>
                        <div className=" p-1  col-span-2">
                            <label htmlFor="title" className="block  text-gray-700 text-sm mb-1">
                                Url
                            </label>
                            <input
                                required
                                type="text"
                                name="url"
                                defaultValue={url}
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="url"
                                className="mt-2 w-full block  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:primary/10"
                            />
                        </div>
                        <div className=" p-1  col-span-2">
                            <label htmlFor="title" className="block  text-gray-700 text-sm mb-1">
                                Image
                            </label>
                            <input
                                required
                                type="file"
                                name="Image"
                                onChange={(e) => {
                                    if (e?.target?.files && e.target.files.length > 0) {
                                        setImage(e.target.files[0]);
                                    }
                                }}
                                placeholder="Image"
                                className="mt-2 w-full block  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:primary/10"
                            />
                        </div>
                        <div className=" p-1  col-span-2">
                            <label htmlFor="title" className="block  text-gray-700 text-sm mb-1">
                                mode
                            </label>
                            <input
                                required
                                type="text"
                                name="url"
                                defaultValue={mode}
                                onChange={(e) => setMode(e.target.value)}
                                placeholder="url"
                                className="mt-2 w-full block  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:primary/10"
                            />
                        </div>
                        <div className=" p-1  col-span-2">
                            <label htmlFor="title" className="block  text-gray-700 text-sm mb-1">
                                seats
                            </label>
                            <input
                                required
                                type="text"
                                name="url"
                                defaultValue={seats}
                                onChange={(e) => setSeats(parseInt(e.target.value))}
                                placeholder="url"
                                className="mt-2 w-full block  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:primary/10"
                            />
                        </div>
                        <div className=" p-1  col-span-2">
                            <label htmlFor="title" className="block  text-gray-700 text-sm mb-1">
                                price
                            </label>
                            <input
                                required
                                type="text"
                                name="url"
                                defaultValue={price}
                                onChange={(e) => setPrice(parseInt(e.target.value))}
                                placeholder="url"
                                className="mt-2 w-full block  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:primary/10"
                            />
                        </div>
                        <div className=" p-1  col-span-2">
                            <label htmlFor="title" className="block  text-gray-700 text-sm mb-1">
                                credit
                            </label>
                            <input
                                required
                                type="text"
                                name="url"
                                defaultValue={credit}
                                onChange={(e) => setCredit(e.target.value)}
                                placeholder="url"
                                className="mt-2 w-full block  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:primary/10"
                            />
                        </div>
                        <div className=" p-1  ">
                            <label htmlFor='startAt' className="block text-sm text-gray-500 dark:text-gray-300">Registration Start</label>
                            <input
                                type="date"
                                name="endAt"
                                defaultValue={startAt}
                                onChange={(e) => setStartAt(e.target.value)}
                                placeholder="ends At"
                                className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

                        </div>
                        <div className=" p-1  ">
                            <label htmlFor='startAt' className="block text-sm text-gray-500 dark:text-gray-300">Registration End</label>
                            <input
                                type="date"
                                name="endAt"
                                defaultValue={endAt}
                                onChange={(e) => setEndAt(e.target.value)}
                                placeholder="ends At"
                                className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

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