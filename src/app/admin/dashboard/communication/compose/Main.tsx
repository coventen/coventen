'use client'

import React, { useState, useEffect } from 'react';
import UserSelect from './UserSelect';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useManualQuery, useMutation, useQuery } from 'graphql-hooks';
import Editor from '@/components/Editor';
import { EditorState, convertToRaw } from 'draft-js';
import Loading from '@/app/loading';
import { data } from 'autoprefixer';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';



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




const Main = () => {

    // states
    const [selectedUsers, setSelectedUsers] = useState<any[]>([])
    const [selectedUserType, setSelectedUserType] = useState<string>("CONSUMER")
    const [subject, setSubject] = useState<string>("")
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    // hooks
    const client = useGqlClient()
    const router = useRouter()

    // mutation query
    const [createCommunicationFn, createState, resetFn] = useMutation(CREATE_NEW_COMMUNICATION, { client })


    // initializing the  communication creation
    const createCommunication = async () => {
        const dateTime = new Date().toISOString()

        // text editor's content
        const contentJson = convertToRaw(editorState.getCurrentContent());
        const contentString = JSON.stringify(contentJson)


        if (selectedUserType === "CONSUMER") {
            let { data } = await createCommunicationFn({
                variables: {
                    input: [
                        {
                            sub: subject,
                            message: contentString,
                            date: dateTime,
                            forClient: {
                                connect: selectedUsers.map(user => {
                                    return {
                                        where: {
                                            node: {
                                                userIs: {
                                                    email: user.email
                                                }
                                            }
                                        }
                                    }
                                })
                            },
                        }
                    ]
                }
            })
            if (data.createCommunicationTickets.info.nodesCreated) {
                toast.success("Message sent successfully")
                router.push('/admin/dashboard/communication/sent')
            }

        }
        else if (selectedUserType === "SERVICE_PROVIDER") {
            console.log(' ia ma inside the vendor')
            let { data } = await createCommunicationFn({
                variables: {
                    input: [
                        {
                            sub: subject,
                            message: contentString,
                            date: dateTime,
                            forVendor: {
                                connect: selectedUsers.map(user => {
                                    return {
                                        where: {
                                            node: {
                                                userIs: {
                                                    email: user.email
                                                }
                                            }
                                        }
                                    }
                                })
                            }
                        }
                    ]
                }
            })

            if (data.createCommunicationTickets.info.nodesCreated) {
                toast.success("Message sent successfully")
                router.push('/admin/dashboard/communication/sent')
            }

        }


    }


    // starts the communication creation
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await createCommunication()
        resetFn()
    }


    if (createState.loading) return <Loading />


    //render
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-5">
                <label className="block  text-gray-700 text-sm mb-1">
                    User Type
                </label>
                <div className="relative inline-flex w-full">
                    <select
                        value={selectedUserType}
                        onChange={(e) => setSelectedUserType(e.target.value)}
                        name='userType'
                        className="mt-1 px-4 py-2 border border-gray-200 rounded-md w-full"
                    >
                        <option value="" disabled>Select an option</option>
                        <option value="SERVICE_PROVIDER" >Vendor</option>
                        <option value="CONSUMER" >Consumer</option>

                    </select>

                </div>
            </div>
            <div className="mb-5">
                <label htmlFor="title" className="block  text-gray-700 text-sm mb-1">
                    User
                </label>
                <div className='w-full relative'>
                    <UserSelect selectedUserType={selectedUserType} setSelectedOptions={setSelectedUsers} selectedOptions={selectedUsers} />
                </div>
            </div>
            <div className="mb-5 mt-16">
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
                <Editor setEditorState={setEditorState} editorState={editorState} />
            </div>

            <div>
                <button type='submit' className='px-4 py-2 bg-primary text-white font-semibold'>Submit</button>
            </div>
        </form>
    );
};

export default Main;