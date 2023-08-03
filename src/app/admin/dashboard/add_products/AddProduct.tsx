import React, { Fragment, useState } from 'react';
import Editor from '@/components/Editor';


import { EditorState, convertToRaw } from 'draft-js';
import Button from '@/components/Button';

const AddProduct = () => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    return (
        <>
            <div className='min-h-screen'>
                <form className="bg-transparent">
                    <div className="grid grid-cols-1 lg:grid-cols-2  gap-5">
                        <div className=" p-1 flex items-center col-span-2">
                            <input
                                type="text"
                                name="title"

                                placeholder="Blog Title"
                                className="mt-2 w-full block  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:primary/10"
                            />
                        </div>
                        <div className='col-span-2'>
                            <p className='text-dimText mb-4'> Features </p>
                            <Editor setEditorState={setEditorState} editorState={editorState} />
                        </div>
                        <div className='col-span-2'>
                            <p className='text-dimText mb-4'> Others </p>
                            <Editor setEditorState={setEditorState} editorState={editorState} />
                        </div>

                        <div className=" p-1 col-span-2">
                            <>
                                <label htmlFor="dropzone-file" className="flex flex-col items-center w-full  p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-gray-500 dark:text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                    </svg>
                                    <>
                                        <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">Images</h2>

                                        <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">Upload or darg & drop your file SVG, PNG, JPG or GIF. </p>
                                    </>


                                    <input name="image" id="dropzone-file" type="file" className="hidden" />
                                </label>

                            </>



                        </div>


                    </div>
                    <div className='mt-6 flex justify-end'>

                        <Button title='Add Product' />
                    </div>
                </form>
            </div>

        </>

    );
};

export default AddProduct;