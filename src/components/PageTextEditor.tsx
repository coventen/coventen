

import dynamic from 'next/dynamic';
import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the Quill styles
interface Props {
    editorState: any;
    setEditorState: any;
}


const QuillEditor = dynamic(
    () => import('react-quill').then((mod) => mod.default),
    { ssr: false }
);


export default function PageTextEditor({ editorState, setEditorState }: Props) {


    // Define a handler to update the editor content
    const handleEditorChange = (html: any) => {
        setEditorState(html);
    };
    return (
        <div className='min-h-[400px] mb-20'>
            {/* <h2>My Quill Editor</h2> */}
            <QuillEditor
                value={editorState}
                onChange={handleEditorChange}
                style={{ height: '330px' }}
                modules={{
                    toolbar: [
                        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                        [{ size: [] }],
                        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                        [{ 'color': [] }],
                        [{ 'align': [] }],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' },
                        { 'indent': '-1' }, { 'indent': '+1' }],
                        ['link', 'image', 'video'],
                        ['clean']
                    ],
                }}
            />
        </div>
    );
}

