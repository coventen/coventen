'use client'
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import { Editor as TextEditor } from "react-draft-wysiwyg";

interface Props {
    editorState: EditorState;
    setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
}


// Dynamically import the Editor component to avoid server-side rendering issues

const TextEditor = dynamic(
    () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
    { ssr: false }
);

const Editor: React.FC<Props> = ({ editorState, setEditorState }) => {


    const onEditorStateChange = (editorState: EditorState) => {
        setEditorState(editorState);
    };



    const onSave = () => {
        const content = convertToRaw(editorState.getCurrentContent());
        // console.log(content);
    };

    return (
        <div className="min-h-[300px] border border-gray-200 rounded-md">
            <TextEditor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
            />
            {/* <button onClick={onSave}>Save</button> */}
        </div>
    );
};
export default Editor;