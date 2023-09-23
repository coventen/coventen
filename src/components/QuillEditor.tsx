import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the Quill styles
interface Props {
    editorState: any;
    setEditorState: any;
}



function QuillEditor({ editorState, setEditorState }: Props) {


    // Define a handler to update the editor content
    const handleEditorChange = (html: any) => {
        setEditorState(html);
    };
    return (
        <div className='min-h-[400px] mb-20'>
            {/* <h2>My Quill Editor</h2> */}
            <ReactQuill
                value={editorState}
                onChange={handleEditorChange}
                style={{ height: '400px' }}
                modules={{
                    toolbar: [
                        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                        [{ size: [] }],
                        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' },
                        { 'indent': '-1' }, { 'indent': '+1' }],
                        ['link', 'image', 'video'],
                        [{ 'color': [] }],
                        [{ 'align': [] }],
                        ['clean']
                    ],
                }}
            />
        </div>
    );
}

export default QuillEditor;
