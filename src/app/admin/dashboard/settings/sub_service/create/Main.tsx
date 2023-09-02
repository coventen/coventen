'use client'

import React, { useState, useCallback, useEffect } from 'react';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation, useQuery } from 'graphql-hooks';
import { EditorState, convertToRaw } from 'draft-js';
import Loading from '@/app/loading';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import HandleFileUpload from '@/shared/HandleFileUpload';
import { v4 as uuidv4 } from 'uuid';
import Editor from '@/components/Editor';
import slugify from 'slugify';


const GET_SERVICES = `
query ServicePages {
    servicePages {
      id
      title
    }
  }`




const CREATE_NEW_SUB_SERVICE = `
mutation CreateSubservices($input: [SubserviceCreateInput!]!) {
    createSubservices(input: $input) {
      info {
        nodesCreated
        relationshipsCreated
      }
    }
  }
`



// COMPONENT
const Main = () => {

    // states
    const [title, setTitle] = useState('')
    const [image, setImage] = useState<any>(null)
    const [selectedType, setSelectedType] = useState('')
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    // hooks
    const client = useGqlClient()
    const router = useRouter()
    const { uploadFile } = HandleFileUpload()

    // query
    const { data, loading, error } = useQuery(GET_SERVICES, { client })

    // mutation query
    const [createCommunicationFn, createState, resetFn] = useMutation(CREATE_NEW_SUB_SERVICE, { client })



    // initializing the  communication creation
    const createCommunication = async () => {
        const dateTime = new Date().toISOString()
        const imageLink = await handleImageUpload(image)

        // text editor's content
        const contentJson = convertToRaw(editorState.getCurrentContent());
        const contentString = JSON.stringify(contentJson)

        let { data } = await createCommunicationFn({
            variables: {
                "input": [
                    {
                        "title": title,
                        "image": imageLink,
                        slug: slugify(title, { replacement: '_', remove: /[*+~.()'"!:@]/g }),
                        "description": contentString,
                        "servicepageHas": {
                            "connect": {
                                "where": {
                                    "node": {
                                        "id": selectedType
                                    }
                                }
                            }
                        }
                    }
                ]
            }
        })

        console.log(data.createSubservices, 'dataaaaaaaaaaaa')

        if (data.createSubservices.info.nodesCreated) {
            toast.success("Sub service created successfully")
            router.push('/admin/dashboard/settings/sub_service')
        }


    }


    // starts the communication creation
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await createCommunication()
        resetFn()
    }



    useEffect(() => {

        if (data?.servicePages?.length) {
            setSelectedType(data?.servicePages[0]?.id)
        }

    }, [data?.servicePages?.length])





    //handle image upload to firebase
    async function handleImageUpload(file: any) {
        const res = await uploadFile(file, `${file?.name}-${uuidv4()}`, "Service_images");
        return res;
    }

    if (createState.loading) return <Loading />


    //render
    return (
        <form onSubmit={handleSubmit} className='bg-white rounded p-5 '>

            <div className="mb-5 ">
                <label htmlFor="title" className="block  text-gray-700 text-sm mb-1">
                    Service Type
                </label>
                <div className="relative inline-flex w-full">
                    <select
                        required
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        name='userType'
                        className="mt-1 px-4 py-2 border border-gray-200 rounded-md w-full"
                    >
                        {
                            data?.servicePages && data?.servicePages.map((service: any) =>
                                <option key={service?.id} value={service?.id} >{service?.title}</option>
                            )
                        }

                    </select>

                </div>
            </div>
            <div className="mb-5 ">
                <label htmlFor="title" className="block  text-gray-700 text-sm mb-1">
                    Title
                </label>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    className="mt-1 px-4 py-2 border border-gray-200 rounded-md w-full"
                />
            </div>

            <div className="mb-5">
                <div>
                    <label htmlFor="image" className="block  text-gray-700 text-sm mb-1">Image</label>

                    <input
                        onChange={(e) => setImage(e?.target?.files?.[0])}
                        type="file"
                        name="image"
                        className="mt-1 px-4 py-2 border border-gray-200 rounded-md w-full"
                        accept="image/*"
                    />
                </div>
            </div>
            <div className='bg-white'>
                <label htmlFor="title" className="block  text-gray-700 text-sm mb-1">
                    Description
                </label>
                <Editor setEditorState={setEditorState} editorState={editorState} />
            </div>


            <div>
                <button type='submit' className='px-4 py-2 bg-primary text-white font-semibold'>Submit</button>
            </div>
        </form>
    );
};

export default Main;