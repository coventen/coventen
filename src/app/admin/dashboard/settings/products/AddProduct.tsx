import React, { Fragment, useState } from 'react';
import Editor from '@/components/Editor';


import { EditorState, convertToRaw } from 'draft-js';
import Button from '@/components/Button';
import { addProductVariables } from './Main';
import HandleFileUpload from '@/shared/HandleFileUpload';
import { v4 as uuidv4 } from 'uuid'
import toast from 'react-hot-toast';

interface IAddProductProps {
    setTab: (tab: number) => void
    addNewProductFn: (input: addProductVariables) => void

}






const AddProduct = ({ setTab, addNewProductFn }: IAddProductProps) => {
    // states
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState<number>(0)
    const [shortDescription, setShortDescription] = useState('')
    const [image, setImage] = useState<File | null>(null)


    // hooks 
    const { uploadFile } = HandleFileUpload()



    const [featureEditorState, setFeatureEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    const [othersEditorState, setOthersEditorState] = useState(() =>
        EditorState.createEmpty()
    );





    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const imageLink = await uploadFile(image, `product-${uuidv4()}`, 'product_Images')
        if (!imageLink) return toast.error('Something went wrong  please try again later ')

        const inputData = {
            title,
            shortDescription,
            features: JSON.stringify(convertToRaw(featureEditorState.getCurrentContent())),
            others: JSON.stringify(convertToRaw(othersEditorState.getCurrentContent())),
            image: imageLink,
            price
        }



        addNewProductFn(inputData)
    }




    return (
        <>
            <div className='min-h-screen'>
                <form onSubmit={handleSubmit} className="bg-transparent">
                    <div className="grid grid-cols-1 lg:grid-cols-2  gap-5">
                        <div className=" p-1 flex items-center col-span-2">
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
                        <div className=" p-1 flex items-center col-span-2">
                            <input
                                required
                                type="text"
                                name="price"
                                defaultValue={price}
                                onChange={(e) => setPrice(parseInt(e.target.value))}
                                placeholder="price"
                                className="mt-2 w-full block  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:primary/10"
                            />
                        </div>
                        <div className=" p-1 flex items-center col-span-2">
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
                        <div className=" p-1 flex items-center col-span-2">
                            <textarea
                                required
                                rows={5}
                                defaultValue={shortDescription}
                                onChange={(e) => setShortDescription(e.target.value)}
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

                        <button className='px-4 py-1.5 bg-primary text-white font-semibold'>Add New Product</button>
                    </div>
                </form>
            </div>

        </>

    );
};

export default AddProduct;