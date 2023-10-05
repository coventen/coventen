'use client'

import React, { useState, useCallback, useEffect } from 'react';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useManualQuery, useMutation, useQuery } from 'graphql-hooks';


import Loading from '@/app/loading';
import { data } from 'autoprefixer';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import AuthConfig from '@/firebase/oauth.config';
import HandleFileUpload from '@/shared/HandleFileUpload';
import { HiOutlineTrash } from 'react-icons/hi';
import FilePreview from '@/app/vendor/dashboard/projects/(components)/FilePreview';
import Dropzone from 'react-dropzone';
import { v4 as uuidv4 } from 'uuid';
import { getEmployerEmail } from '@/shared/getEmployerEmail';
import createLog from '@/shared/graphQl/mutations/createLog';
import PageTextEditor from '@/components/PageTextEditor';



const CREATE_NEW_COMMUNICATION = `
mutation Mutation($input: [CommunicationTicketCreateInput!]!) {
    createCommunicationTickets(input: $input) {
      info {
        nodesCreated
        relationshipsCreated
      }
    }
  }

`
const SEND_NOTIFICATION = `
  mutation CreateNotifications($input: [NotificationCreateInput!]!) {
      createNotifications(input: $input) {
        info {
          nodesCreated
        }
      }
    }`


//component
const Main = () => {

    // states
    const [uploading, setUploading] = useState(false)
    const [files, setFiles] = useState<File[]>([]);
    const [fileLinks, setFileLinks] = useState<any>([]);
    const [subject, setSubject] = useState<string>("")
    const [labEmail, setLabEmail] = useState('')
    const [editorState, setEditorState] = useState("")

    // hooks
    const client = useGqlClient()
    const router = useRouter()
    const { user } = AuthConfig()
    const { uploadFile } = HandleFileUpload()

    // mutation query
    const [createCommunicationFn, createState, resetFn] = useMutation(CREATE_NEW_COMMUNICATION, { client })
    const [sendNotificationFn, notificationState] = useMutation(SEND_NOTIFICATION, { client })

    // initializing the  communication creation
    const createCommunication = async () => {
        const dateTime = new Date().toISOString()

        // text editor's content
        const contentString = JSON.stringify(editorState)
        const fileLinks = await handleUpload()

        let { data } = await createCommunicationFn({
            variables: {
                input: [
                    {
                        sub: subject,
                        message: contentString,
                        date: dateTime,
                        files: fileLinks,
                        sender: "SERVICE_PROVIDER",
                        forVendor: {
                            connect: [
                                {
                                    where: {
                                        node: {
                                            userIs: {
                                                email: labEmail
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        })
        if (data.createCommunicationTickets.info.nodesCreated) {
            toast.success("Message sent successfully")
            router.push('/vendor/dashboard/internal_email/sent')
            sendNotification()
            createLog(
                `Internal Email`,
                `Email sent Vendor with email: ${labEmail}`)
        }




    }



    // get lab email when user changes
    useEffect(() => {
        getLabEmail()
    }, [user?.email]);



    // getting lab email if employee is logged in
    const getLabEmail = async () => {
        if (user?.email) {
            const email = await getEmployerEmail(user?.email)
            setLabEmail(email)
        }


    }



    // starts the communication creation
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await handleUpload()
        await createCommunication()
        resetFn()
    }


    // handling files
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





    const sendNotification = async () => {

        const { data: adminData } = await sendNotificationFn({
            variables: {
                "input": [
                    {
                        "title": `You have a new email`,
                        "description": `You have a new email check your inbox.`,
                        "createdAt": new Date().toISOString(),
                        "notificationFor": "ADMIN",
                    }
                ]
            }
        })

    }




    const handleUpload = async () => {
        setUploading(true)
        const uploadPromises = files.map(async (file) => {
            const data = await uploadFile(file, `${file.name}-${uuidv4()}`, "internal emails");
            return data;
        });

        const allFileLinks = await Promise.all(uploadPromises);

        return allFileLinks

    };

    if (createState.loading || uploading) return <Loading />


    //render
    return (
        <form onSubmit={handleSubmit}>

            <div className="mb-5 mt-16">
                <label htmlFor="title" className="block  text-gray-700 text-sm mb-1">
                    Receiver
                </label>
                <input
                    type="text"
                    defaultValue={"Admin"}
                    readOnly
                    className="mt-1 px-4 py-2 border border-gray-200 rounded-md w-full"
                />
            </div>
            <div className="mb-5 mt-5">
                <label htmlFor="title" className="block  text-gray-700 text-sm mb-1">
                    Subject
                </label>
                <input
                    onChange={(e) => setSubject(e.target.value)}
                    type="text"
                    className="mt-1 px-4 py-2 border border-gray-200 rounded-md w-full"
                />
            </div>
            <div className='bg-white'>
                <PageTextEditor setEditorState={setEditorState} editorState={editorState} />
            </div>

            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden  transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6">
                <p className="block  text-gray-700 text-sm mb-">Attachment</p>
                <div className=''>


                    <div>
                        <div>

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
                                                Upload Files
                                            </h2>

                                            <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
                                                Upload or darg & drop your file Images, doc, pdf, excel{' '}
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
                    </div>


                </div>
            </div>

            <div>
                <button type='submit' className='px-4 py-2 bg-primary text-white font-semibold'>Submit</button>
            </div>
        </form>
    );
};

export default Main;