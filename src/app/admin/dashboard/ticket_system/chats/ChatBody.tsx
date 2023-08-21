'use client'
import { db } from '@/firebase/fireabase.config';
import { currentUser } from '@/firebase/oauth.config';
import { Timestamp, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'
interface Props {
    messages: any[];
    currentModule: string;
}


const ChatBody = ({ messages, currentModule }: Props) => {

    //states
    const [onClose, setOnClose] = useState(false)
    const [text, setText] = useState('')
    const [file, setFile] = useState<any>(null)

    //hooks
    const user = currentUser()





    const handleSubmit = async (e: any) => {
        e.preventDefault()

        e.target.reset()

        if (text) {
            await updateDoc(doc(db, "chats", currentModule), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: user?.email,
                    date: Timestamp.now(),
                })
            })
        }



    }




    return (
        <div className="flex flex-col flex-auto h-full px-6">
            <div
                className="flex flex-col flex-auto flex-shrink-0 rounded-lg bg-white h-full lg:max-h-[85vh]"
            >
                <div onClick={() => setOnClose(true)} className='bg-white shadow-sm px-4 py-5 rounded-lg flex items-center'>
                    <p className='bg-green-500 w-3 h-3 rounded-full mr-2'></p>
                    <p className='font-bold'> Vendor Name</p>

                </div>
                {/* <Scrollbars style={{ width: 500, height: 300 }}>
            ehllo
        </Scrollbars> */}
                <div className="flex flex-col h-full overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch mb-4  p-4">
                    {/* <Scrollbars style={{ width: 500, height: 300 }}> */}
                    <div className="flex flex-col h-full ">
                        <div className="grid grid-cols-12 gap-y-2">

                            <div className="col-start-1 col-end-8 p-3 rounded-lg">
                                <div className="flex flex-row items-center">
                                    <div
                                        className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                    >
                                        A
                                    </div>
                                    <div
                                        className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                                    >
                                        <div>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. Vel ipsa commodi illum saepe numquam maxime
                                            asperiores voluptate sit, minima perspiciatis.
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {
                                messages.map((message: any) =>

                                    <div key={message?.id} className="col-start-6 col-end-13 p-3 rounded-lg">
                                        <div className="flex items-center justify-start flex-row-reverse">
                                            <div
                                                className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold flex-shrink-0"
                                            >
                                                A
                                            </div>
                                            <div
                                                className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                                            >
                                                <div>{message.text}</div>
                                            </div>
                                        </div>
                                    </div>


                                )
                            }




                        </div>
                    </div>
                    {/* </Scrollbars> */}
                </div>
                {/* send button input */}
                <form onSubmit={handleSubmit} className=" px-4  h-16   sm:mb-0 ">
                    <div className="relative flex border-none">

                        <input onChange={(e) => setText(e.target.value)} type="text" placeholder="Write your message!" className="w-full outline-none focus:outline-none focus:border-none focus:ring-0 text-gray-600 placeholder-gray-600 pl-12 bg-primary/20 border-none shadow-md rounded-md py-3" />
                        <div className="absolute right-0 items-center inset-y-0 pr-5 hidden sm:flex ">
                            <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                                    <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                                </svg>
                            </button>
                            <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                                    <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                    <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </button>
                            <button type="submit" className="inline-flex  items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-2 transform rotate-90">
                                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                                </svg>
                            </button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChatBody;