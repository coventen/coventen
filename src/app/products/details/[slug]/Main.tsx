
'use client'
import Button from '@/components/Button';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useQuery } from 'graphql-hooks';
import React, { useEffect } from 'react';
import Modal from './Modal';
import { ContentState, Editor, EditorState, convertFromRaw } from 'draft-js';
const GET_PRODUCTS = `
query Query($where: ProductWhere) {
    products(where: $where)  {
        title
        shortDescription
        price
        id
        file
        video
        image
        others
        features
    }
  }`


// component
const Main = () => {
    // states
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [features, setFeatures] = React.useState<any>(null)
    const [highlights, setHighlights] = React.useState<any>(null)

    // hooks
    const client = useGqlClient()

    // quires
    const { data, loading } = useQuery(GET_PRODUCTS, { client })



    useEffect(() => {

        if (data?.products[0]?.features) {
            const content = convertContentToRaw(data?.products[0]?.features)
            setFeatures(content)
        }
        if (data?.products[0]?.others) {
            setHighlights(convertContentToRaw(data?.products[0]?.others))
        }

    }, [data?.products[0]])


    const convertContentToRaw = (content: any) => {
        const rawContent = JSON.parse(content);
        const contentState = convertFromRaw(rawContent);
        const editorState = EditorState.createWithContent(contentState);
        return editorState
    }


    return (
        <>
            <div className="px-2 lg:px-16 py-10">
                <div className="w-full  rounded bg-white  mx-auto text-gray-800 relative md:text-left">
                    <div className="md:flex items-center -mx-10">
                        <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                            <div className="relative">
                                <img src={data?.products[0].image || '/assets/no_image.png'} className="w-full relative z-10" alt="" />
                                <div className="border-4 border-primary/30 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-10">
                            <div className="mb-10">
                                <h1 className="font-bold uppercase text-2xl mb-5">{data?.products[0].title}</h1>
                                <p className="text-sm">{data?.products[0].shortDescription} <a href="#" className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900">MORE </a></p>
                            </div>
                            <div>
                                <div className="inline-block align-bottom mr-5">
                                    <span className="text-2xl leading-none align-baseline">$</span>
                                    <span className="font-bold text-5xl leading-none align-baseline">{data?.products[0].price}</span>

                                </div>
                                <div onClick={() => setIsModalOpen(true)} className="inline-block align-bottom">
                                    <Button title='Inquiry' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            </div>

            {/* features */}
            <div className='w-full px-2 lg:px-16 py-10'>
                < div >
                    <h3 className="text-xl mb-4 font-bold text-gray-900">Features</h3>


                </ div>

                <div className="mt-10 text-sm">
                    {features && <Editor editorState={features} readOnly={true} onChange={() => { }} />}
                </div>

                <div className="mt-10">
                    <h2 className="text-sm font-medium text-gray-900">Details</h2>

                    {highlights && <Editor editorState={highlights} readOnly={true} onChange={() => { }} />}
                </div>


            </div>
        </ >
    );
};

export default Main;