'use client'


import React, { useCallback, useState } from 'react';
import Dropzone from 'react-dropzone';
import { useForm, SubmitHandler } from "react-hook-form"
import { IModuleInput } from './createProject.interface';

//interface props
interface IModuleFrom {
    index: number
    modules: any[]
    setModules: (modules: any[]) => void
}



//component
const ModuleFrom = ({ index, setModules, modules }: IModuleFrom) => {


    //states
    const [files, setFiles] = useState<File[]>([]);


    // hook from 
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<any>()



    // setting the module data
    const handleModule: SubmitHandler<any> = (data) => {
        //getting the dynamic data
        const title = data[`moduleTitle${index}`];
        const description = data[`moduleDescription${index}`];


        // checking if all data is present
        if (title && description) {
            const moduleData: IModuleInput = {
                title,
                description,
                documents: {
                    files: [],
                    images: []

                }
            };

            // checking if the module is already present
            const moduleIndex = modules.findIndex(module => module.hasOwnProperty(`moduleTitle${index}`));

            // updating the module
            if (moduleIndex !== -1) {
                const updatedModules = [...modules];
                updatedModules[moduleIndex][`moduleTitle${index}`] = moduleData;
                setModules(updatedModules);
            } else {
                const newModule = {
                    [`moduleTitle${index}`]: moduleData
                };
                setModules([...modules, newModule]);
            }
        }
    };


    //handlers
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
        <form onChange={handleSubmit(handleModule)}>
            <div className="">
                <label htmlFor="address">Module-{index}</label>
                <input type="text" id="address" className="h-10 border border-gray-300 mt-1 rounded px-4 w-full " placeholder=""   {...register(`moduleTitle${index}`)} />
            </div>

            <div className="">
                <label htmlFor="city">Description</label>
                <textarea rows={4} id="city" className=" border border-gray-300 mt-1 rounded px-4 w-full " placeholder="" {...register(`moduleDescription${index}`)} />
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
        </form>
    );
};

export default ModuleFrom;