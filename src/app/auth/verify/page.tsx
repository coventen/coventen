'use client'

import AnimatedButton from '@/components/AnimatedButton';
import React, { useCallback, useState } from 'react';
import Dropzone from 'react-dropzone';

const VerifyPage = () => {

    const [files, setFiles] = useState<File[]>([]);
    const handleDrop = useCallback((acceptedFiles: File[]) => {
        setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
    }, [setFiles]);

    const handleRemove = useCallback((index: number) => {
        setFiles(prevFiles => {
            const newFiles = [...prevFiles];
            newFiles.splice(index, 1);
            return newFiles;
        });
    }, [setFiles]);
    return (
        <div className="min-h-screen bg-gray-100 p-0 sm:p-12">
            <div className="mx-auto max-w-xl px-6 py-12 bg-white border-0 shadow-md rounded">
                <h1 className="text-xl font-bold mb-10 text-gray-700 text-center">Please Fillup the form to continue</h1>
                <form id="form" className=' grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <div>
                        <label className=" text-gray-500">
                            Company Name
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-gray-300 focus:border-primary shadow-sm rounded"
                        />
                    </div>
                    <div>
                        <label className=" text-gray-500">
                            Company Email
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-gray-300 focus:border-primary shadow-sm rounded"
                        />
                    </div>

                    <div>
                        <label className=" text-gray-500">
                            Registration number
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-gray-300 focus:border-primary shadow-sm rounded"
                        />
                    </div>
                    <div>
                        <label className=" text-gray-500">
                            Phone
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-gray-300 focus:border-primary shadow-sm rounded"
                        />
                    </div>
                    <div className='col-span-2'>
                        <label className=" text-gray-500">
                            Documents
                        </label>
                        <Dropzone onDrop={handleDrop}>
                            {({ getRootProps, getInputProps }) => (
                                <div {...getRootProps()}>
                                    <label
                                        htmlFor="dropzone-file"
                                        className="flex flex-col items-center w-full  p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-8 h-8 text-gray-500 dark:text-gray-400"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                            />
                                        </svg>

                                        <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
                                            Company Documents
                                        </h2>

                                        <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
                                            Upload or darg & drop your file SVG, PNG, JPG , doc, pdf or GIF.{' '}
                                        </p>

                                        <input {...getInputProps()} />
                                    </label>
                                </div>
                            )}
                        </Dropzone>
                    </div>




                    <div className='col-span-2 mt-8 '>
                        <AnimatedButton title='Submit' />
                    </div>


                </form>
            </div>
        </div>
    );
};

export default VerifyPage;