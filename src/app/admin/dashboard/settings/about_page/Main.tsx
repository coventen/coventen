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



const GET_PREVIOUS_ABOUT_US = `
query AboutPages {
    aboutPages {
      id
      title
      image
      description
    }
  }
`




const UPDATE_ABOUT_US = `
mutation UpdateAboutPages($update: AboutPageUpdateInput) {
    updateAboutPages(update: $update) {
      aboutPages {
        id
      }
    }
  }
`



// COMPONENT
const Main = () => {

    // states
    const [title, setTitle] = useState('')
    const [image, setImage] = useState<any>(null)
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    // hooks
    const client = useGqlClient()
    const router = useRouter()
    const { uploadFile } = HandleFileUpload()


    // QUERY
    const { data: previousData, loading } = useQuery(GET_PREVIOUS_ABOUT_US, { client })

    // mutation query
    const [updateAboutPageFn, updateState, resetFn] = useMutation(UPDATE_ABOUT_US, { client })



    // initializing the  communication creation
    const updateAboutPage = async () => {
        const imageLink = await handleImageUpload(image)

        // text editor's content
        const contentJson = convertToRaw(editorState.getCurrentContent());
        const contentString = JSON.stringify(contentJson)

        let { data } = await updateAboutPageFn({
            variables: {
                "update": {
                    "title": title,
                    "image": imageLink,
                    "description": contentString
                }
            }
        })


        if (data.updateAboutPages.info.nodesCreated) {
            toast.success("updated successfully")

        }


    }


    // starts the communication creation
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await updateAboutPage()
        resetFn()
    }



    useEffect(() => {
        if (previousData?.aboutPages?.length) {
            const { title, image, description } = previousData.aboutPages[0]
            setTitle(title)
            // setEditorState(EditorState.createWithContent(JSON.parse(description)))

        }

    }, [previousData])





    //handle image upload to firebase
    async function handleImageUpload(file: any) {
        const res = await uploadFile(file, `${file?.name}-${uuidv4()}`, "About_images");
        return res;
    }

    if (updateState.loading) return <Loading />


    //render
    return (
        <form onSubmit={handleSubmit} className='bg-white rounded p-5 '>


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