import FilePreview from '@/app/vendor/dashboard/projects/(components)/FilePreview';
import React, { useCallback, useEffect, useState } from 'react';
import Dropzone, { useDropzone } from 'react-dropzone';
import { HiOutlineTrash } from 'react-icons/hi';
import MultiSelectIndustry from './MultiSelectIndustry';
import MultiSelectService from './MultiSelectService';
import HandleFileUpload from '@/shared/HandleFileUpload';
import Equipment from './Equipment';

interface IProps {
    setUserInfo: any,
    userInfo: any,
    setCurrentTab: any,
    updateUser: any
}



const CompanyInfo = ({ setUserInfo, userInfo, setCurrentTab, updateUser }: IProps) => {

    //states
    // const [files, setFiles] = useState<File[]>([]);
    // const [attachment, setAttachment] = useState<File[]>([]);
    const [error, setError] = useState<string>('');
    // const [selectedIndustry, setSelectedIndustry] = useState([])
    // const [selectedService, setSelectedService] = useState([])
    const [equipmentCount, setEquipmentCount] = useState<number>(1)
    const [equipments, setEquipments] = useState<any[]>([])






    //hooks 

    const { uploadFile } = HandleFileUpload()



    const handleSubmit = (e: any) => {
        e.preventDefault();

        const { companyName, companyEmail, companyPhone, otherPhone, linkedin, twitter, skypeId, aboutCompany, gst, panCardNo } = e.target

        setUserInfo({
            ...userInfo, companyName: companyName.value, companyEmail: companyEmail.value, companyPhone: companyPhone.value, otherPhone: otherPhone.value, linkedin: linkedin.value, twitter: twitter.value, skypeId: skypeId.value, aboutCompany: aboutCompany.value, gst: gst.value, panCardNo: panCardNo.value,
            equipments: equipments?.map((item: any, idx: number) => item[`name${idx + 1}`])
        })



        updateUser()
    };


    useEffect(() => {

        if (userInfo?.equipments?.length > 0) {
            setEquipmentCount(userInfo?.equipments?.length)
            setEquipments(userInfo?.equipments)
        } else {
            setEquipmentCount(1)
            setEquipments([])
        }

    }, [userInfo?.equipments])






    // console.log(equipments)
    // console.log(userInfo, ' this is form data')

    // // handling files
    // const handleDrop = useCallback((acceptedFiles: File[], fileRejections: any) => {
    //     // Handle accepted files
    //     setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);

    //     // Handle rejected files (due to size or other reasons)
    //     if (fileRejections.length > 0) {
    //         const fileSizeError = fileRejections.some((file: any) => file.file.size > 1 * 1024 * 1024);
    //         if (fileSizeError) {
    //             setError('File size is too large. Please select files smaller than 10MB.');
    //         } else {
    //             setError('Please check the file types or try again.');
    //         }
    //     } else {
    //         setError('')
    //     }
    // }, []);

    // const handleRemove = useCallback((index: number) => {
    //     setFiles(prevFiles => {
    //         const newFiles = [...prevFiles];
    //         newFiles.splice(index, 1);
    //         return newFiles;
    //     });
    // }, [setFiles]);

    // // handling attachment
    // const handleDropAttachment = useCallback((acceptedFiles: File[], fileRejections: any) => {
    //     // Handle accepted files
    //     setAttachment(prevFiles => [...prevFiles, ...acceptedFiles]);

    //     // Handle rejected files (due to size or other reasons)
    //     if (fileRejections.length > 0) {
    //         const fileSizeError = fileRejections.some((file: any) => file.file.size > 1 * 1024 * 1024);
    //         if (fileSizeError) {
    //             setError('File size is too large. Please select files smaller than 10MB.');
    //         } else {
    //             setError('Please check the file types or try again.');
    //         }
    //     } else {
    //         setError('')
    //     }
    // }, []);

    // const handleRemoveAttachment = useCallback((index: number) => {
    //     setAttachment(prevFiles => {
    //         const newFiles = [...prevFiles];
    //         newFiles.splice(index, 1);
    //         return newFiles;
    //     });
    // }, [setAttachment]);








    return (
        <section className='mt-6'>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 lg:grid-cols-3 gap-4'>

                <div className="mb-5">
                    <label className="block  text-gray-700 text-sm mb-1">
                        Company Name
                    </label>
                    <input
                        defaultValue={userInfo.companyName}
                        name="companyName"
                        type="text"
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                    />
                </div>
                <div className="mb-5">
                    <label className="block  text-gray-700 text-sm mb-1">
                        Company Email
                    </label>
                    <input
                        defaultValue={userInfo.companyEmail}
                        name="companyEmail"
                        type="text"
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                    />
                </div>
                <div className="mb-5">
                    <label className="block  text-gray-700 text-sm mb-1">
                        Company Phone
                    </label>
                    <input
                        defaultValue={userInfo.companyPhone}
                        name="companyPhone"
                        type="text"
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                    />
                </div>
                <div className="mb-5">
                    <label className="block  text-gray-700 text-sm mb-1">
                        Other Phone
                    </label>
                    <input
                        defaultValue={userInfo.otherPhone}
                        name="otherPhone"
                        type="text"
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                    />
                </div>
                <div className="mb-5">
                    <label className="block  text-gray-700 text-sm mb-1">
                        Pan card No
                    </label>
                    <input
                        defaultValue={userInfo.otherPhone}
                        name="panCardNo"
                        type="text"
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                    />
                </div>
                <div className="mb-5">
                    <label className="block  text-gray-700 text-sm mb-1">
                        GST No
                    </label>
                    <input
                        defaultValue={userInfo.otherPhone}
                        name="gst"
                        type="text"
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                    />
                </div>
                <div className="mb-5">
                    <label className="block  text-gray-700 text-sm mb-1">
                        Linkedin ID
                    </label>
                    <input
                        defaultValue={userInfo.linkedin}
                        name="linkedin"
                        type="text"
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                    />
                </div>
                <div className="mb-5">
                    <label className="block  text-gray-700 text-sm mb-1">
                        twitter
                    </label>
                    <input
                        defaultValue={userInfo.twitter}
                        name="twitter"
                        type="text"
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                    />
                </div>
                <div className="mb-5">
                    <label className="block  text-gray-700 text-sm mb-1">
                        Skype Id
                    </label>
                    <input
                        defaultValue={userInfo.skypeId}
                        name="skypeId"
                        type="text"
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                    />
                </div>
                {/* <div className="mb-5 col-span-full">
                    <label className="block  text-gray-700 text-sm mb-1">
                        Industry
                    </label>
                    <div className='relative'>

                        <MultiSelectIndustry selectedIndustry={selectedIndustry} setSelectedIndustry={setSelectedIndustry} />
                    </div>
                </div> */}

                {/* 
                <div className='col-span-full h-full'>
                    <label className="block  text-gray-700 text-sm mb-1">
                        Documents
                    </label>
                    <div>

                        <Dropzone maxSize={10485760}

                            onDrop={handleDrop}>
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
                                            Upload Files
                                        </h2>

                                        <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
                                            Documents: GST, Accreditation body and other Certifications{' '}
                                        </p>

                                        <input {...getInputProps()}

                                            accept=".pdf, .docx, .doc, .xlsx, .xls, image/*" />
                                    </label>
                                </div>
                            )}
                        </Dropzone>

                        <div className="border-0 flex flex-wrap mt-2">
                            {files.map((file, index) => (
                                <div key={file.name} className="border-0 w-40 h-40 m-1 relative bg-gray-300 " >

                                    {
                                        file.type === 'application/pdf' ?
                                            <FilePreview name={file.name} />
                                            :

                                            file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                                                || file.type === 'application/msword'
                                                ?
                                                <FilePreview name={file.name} />
                                                :
                                                file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type === 'application/vnd.ms-excel'
                                                    ?
                                                    <FilePreview name={file.name} />
                                                    :
                                                    file.type.startsWith('image/')
                                                        ?
                                                        <img //eslint-disable-line
                                                            src={URL.createObjectURL(file)}
                                                            alt={file.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                        :
                                                        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center rounded-xl">
                                                            Invalid File
                                                        </div>


                                    }


                                    <button
                                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-2"
                                        onClick={() => handleRemove(index)}
                                    >
                                        <HiOutlineTrash className="text-lg" />
                                    </button>
                                </div>
                            ))}
                        </div>

                    </div>
                </div> */}
                {/* <div className="mb-5 col-span-full">
                    <label className="block  text-gray-700 text-sm mb-1">
                        Services
                    </label>
                    <div className='relative'>

                        <MultiSelectService selectedService={selectedService} setSelectedService={setSelectedService} />
                    </div>
                </div> */}

                <div className="mb-5 col-span-full">
                    <label className="block  text-gray-700 text-sm mb-1">
                        About Company
                    </label>
                    <textarea
                        defaultValue={userInfo.aboutCompany}
                        name="aboutCompany"
                        rows={7}
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"

                    />
                </div>

                {/* <div className='col-span-full h-full'>
                    <label className="block  text-gray-700 text-sm mb-1">
                        Attachment
                    </label>
                    <div>

                        <Dropzone maxSize={10485760}

                            onDrop={handleDropAttachment}>
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
                                            Upload Files
                                        </h2>

                                        <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
                                            Documents: GST, Accreditation body and other Certifications{' '}
                                        </p>

                                        <input {...getInputProps()}

                                            accept=".pdf, .docx, .doc, .xlsx, .xls, image/*" />
                                    </label>
                                </div>
                            )}
                        </Dropzone>

                        <div className="border-0 flex flex-wrap mt-2">
                            {files.map((file, index) => (
                                <div key={file.name} className="border-0 w-40 h-40 m-1 relative bg-gray-300 " >

                                    {
                                        file.type === 'application/pdf' ?
                                            <FilePreview name={file.name} />
                                            :

                                            file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                                                || file.type === 'application/msword'
                                                ?
                                                <FilePreview name={file.name} />
                                                :
                                                file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type === 'application/vnd.ms-excel'
                                                    ?
                                                    <FilePreview name={file.name} />
                                                    :
                                                    file.type.startsWith('image/')
                                                        ?
                                                        <img //eslint-disable-line
                                                            src={URL.createObjectURL(file)}
                                                            alt={file.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                        :
                                                        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center rounded-xl">
                                                            Invalid File
                                                        </div>


                                    }


                                    <button
                                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-2"
                                        onClick={() => handleRemoveAttachment(index)}
                                    >
                                        <HiOutlineTrash className="text-lg" />
                                    </button>
                                </div>
                            ))}
                        </div>

                    </div>
                </div> */}





                <div className="mt-6">
                    <button
                        onClick={() => setCurrentTab(0)}
                        className="px-10 py-2 bg-gary-300 text-gray-700 "
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        className="px-10 py-2 bg-primary text-white hover:bg-blue-600"
                    >
                        Update
                    </button>
                </div>
            </form>
        </section>
    );
};

export default CompanyInfo;