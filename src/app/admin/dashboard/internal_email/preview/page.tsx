'use client'
import React, { useState } from 'react';
import Editor from '@/components/Editor';


import { EditorState, convertToRaw } from 'draft-js';
import Button from '@/components/Button';

const PreviewPage = () => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const [isReply, setIsReply] = useState(false)

    const date = new Date().getFullYear()

    return (
        <section className="max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">


            <main className="mt-8">
                <h2 className="text-gray-700 dark:text-gray-200">Hi Olivia,</h2>

                <p className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
                    We’re glad to have you onboard! You’re already on your way to
                    creating beautiful visual products.
                    Whether you’re here for your brand, for a cause, or just for fun —
                    welcome! If there’s anything you need, we’ll be here every step of the way.
                </p>

                <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Thanks, <br />
                    Meraki UI team
                </p>


            </main>


            <footer className="mt-8">
                <p className="text-gray-500 dark:text-gray-400">
                    This email was sent to <a href="#" className="text-blue-600 hover:underline dark:text-blue-400" target="_blank">contact@merakiui.com</a>.
                    If you rather not receive this kind of email, you can <a href="#" className="text-blue-600 hover:underline dark:text-blue-400">unsubscribe</a> or <a href="#" className="text-blue-600 hover:underline dark:text-blue-400">manage your email preferences</a>.
                </p>

                <p className="mt-3 text-gray-500 dark:text-gray-400">© {date} Meraki UI. All Rights Reserved.</p>
            </footer>



            {
                !isReply && (
                    <div onClick={() => setIsReply(!isReply)} className="mt-6">
                        <Button title='Reply' />
                    </div>
                )
            }
            {
                isReply && (
                    <div className={`mt-20 `}>
                        <Editor setEditorState={setEditorState} editorState={editorState} />
                        <div className='mt-6 text-right'>
                            <Button title='Reply' />
                        </div>
                    </div>
                )
            }

        </section>
    );
};

export default PreviewPage;