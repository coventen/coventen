'use client'

import React, { Fragment, useState } from 'react';
import Editor from '@/components/Editor';


import { EditorState, convertToRaw } from 'draft-js';
import Button from '@/components/Button';
import HandleFileUpload from '@/shared/HandleFileUpload';
import { v4 as uuidv4 } from 'uuid'
import toast from 'react-hot-toast';
import { Product } from '@/gql/graphql';

interface IAddProductProps {
    productData: any,
    setProductData: any,
    featureEditorState: any,
    setFeatureEditorState: any,
    othersEditorState: any,
    setOthersEditorState: any,
    updateProductFn: (inputData: any) => void
}






const DataFrom = ({ productData, setProductData, featureEditorState, setFeatureEditorState, othersEditorState, setOthersEditorState, updateProductFn }: IAddProductProps) => {

    // states
    const [image, setImage] = useState<File | null>(null)


    // hooks 
    const { uploadFile } = HandleFileUpload()




    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const imageLink = await uploadFile(image, `product-${uuidv4()}`, 'product_Images')
        if (!imageLink) return toast.error('Something went wrong  please try again later ')

        const inputData = {
            title: productData?.title,
            video: productData?.video,
            file: productData?.file,
            shortDescription: productData?.shortDescription,
            image: imageLink,
            price: parseInt(productData?.price),
            features: JSON.stringify(convertToRaw(featureEditorState.getCurrentContent())),
            others: JSON.stringify(convertToRaw(othersEditorState.getCurrentContent())),

        }


        updateProductFn(inputData)

    }




    return (
        <>
            <div className='min-h-screen'>
                <form onSubmit={handleSubmit} className="bg-transparent">
                    <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 text-dimText">
                        <div className=" p-1 col-span-2">
                            <label htmlFor="">Title</label>
                            <input
                                required
                                type="text"
                                name="title"
                                defaultValue={productData?.title}
                                onChange={(e) => setProductData({ ...productData, title: e.target.value })}
                                placeholder="title"
                                className="mt-2 w-full block  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:primary/10"
                            />
                        </div>
                        <div className=" p-1  col-span-2">
                            <label htmlFor="">Price</label>
                            <input
                                required
                                type="text"
                                name="price"
                                defaultValue={productData?.price || 0}
                                onChange={(e) => setProductData({ ...productData, price: e.target.value })}
                                placeholder="price"
                                className="mt-2 w-full block  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:primary/10"
                            />
                        </div>
                        <div className=" p-1  col-span-2">
                            <label htmlFor="">Image</label>
                            <input

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
                        <div className=" p-1 col-span-2">
                            <label htmlFor="">file Url</label>
                            <input
                                required
                                type="text"
                                name="file"
                                defaultValue={productData?.file}
                                onChange={(e) => setProductData({ ...productData, file: e.target.value })}
                                placeholder="file url"
                                className="mt-2 w-full block  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:primary/10"
                            />
                        </div>
                        <div className=" p-1 col-span-2">
                            <label htmlFor="">Video Url</label>
                            <input
                                required
                                type="text"
                                name="video"
                                defaultValue={productData?.video}
                                onChange={(e) => setProductData({ ...productData, video: e.target.value })}
                                placeholder="video url"
                                className="mt-2 w-full block  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:primary/10"
                            />
                        </div>
                        <div className=" p-1  col-span-2 ">
                            <label htmlFor="">Short Description</label>
                            <textarea
                                required
                                rows={5}
                                defaultValue={productData?.shortDescription}
                                onChange={(e) => setProductData({ ...productData, shortDescription: e.target.value })}
                                name="sDescription"
                                placeholder="short description"
                                className="mt-2 w-full block  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:primary/10"
                            />
                        </div>
                        <div className='col-span-2'>
                            <p className='text-dimText mb-4'> Features </p>
                            <Editor setEditorState={setFeatureEditorState} editorState={featureEditorState} />
                        </div>
                        <div className='col-span-2'>
                            <p className='text-dimText mb-4'> Others </p>
                            <Editor setEditorState={setOthersEditorState} editorState={othersEditorState} />
                        </div>



                    </div>
                    <div className='mt-6 '>

                        <button className='px-4 py-1.5 bg-primary text-white font-semibold'>Update</button>
                    </div>
                </form>
            </div>

        </>

    );
};

export default DataFrom;