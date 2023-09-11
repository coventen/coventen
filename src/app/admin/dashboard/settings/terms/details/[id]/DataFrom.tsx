'use client'

import React, { Fragment, useState } from 'react';
import Editor from '@/components/Editor';


import { EditorState, convertToRaw } from 'draft-js';
import Button from '@/components/Button';
import HandleFileUpload from '@/shared/HandleFileUpload';
import { v4 as uuidv4 } from 'uuid'
import toast from 'react-hot-toast';
import deleteImage from '@/shared/deleteImage';

interface IAddProductProps {
    termsData: any,
    settermsData: any,
    descriptionEditorState: any,
    setDescriptionEditorState: any,
    updatetermsFn: any
}






const DataFrom = ({ termsData, settermsData, descriptionEditorState, setDescriptionEditorState, updatetermsFn }: IAddProductProps) => {





    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const inputData = {
            title: termsData?.title,
            content: JSON.stringify(convertToRaw(descriptionEditorState.getCurrentContent())),
        }
        updatetermsFn(inputData)


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
                                defaultValue={termsData?.title}
                                onChange={(e) => settermsData({ ...termsData, title: e.target.value })}
                                placeholder="title"
                                className="mt-2 w-full block  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:primary/10"
                            />
                        </div>


                        <div className='col-span-2'>
                            <p className='text-dimText mb-4'> Description </p>
                            <Editor setEditorState={setDescriptionEditorState} editorState={descriptionEditorState} />
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