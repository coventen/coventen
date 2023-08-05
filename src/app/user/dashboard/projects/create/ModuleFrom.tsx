'use client'


import React, { useCallback, useState } from 'react';
import Dropzone from 'react-dropzone';

const ModuleFrom = () => {
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
        <>
            <div className="">
                <label htmlFor="address">Module Title</label>
                <input type="text" name="address" id="address" className="h-10 border border-gray-300 mt-1 rounded px-4 w-full " value="" placeholder="" />
            </div>

            <div className="">
                <label htmlFor="city">Description</label>
                <textarea rows={4} name="city" id="city" className=" border border-gray-300 mt-1 rounded px-4 w-full " value="" placeholder="" />
            </div>
            <div className="">
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
                                    Documents
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
        </>
    );
};

export default ModuleFrom;