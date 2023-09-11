'use client'
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation, useQuery } from 'graphql-hooks';
import React, { useEffect, useState } from 'react';
import DataFrom from './DataFrom';
import { ContentState, Editor, EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { useParams, useRouter } from 'next/navigation';
import { Product } from '@/gql/graphql';
import { toast } from 'react-hot-toast';
import Loading from '@/app/loading';
import Error from '@/components/Error';



const UPDATE_PRODUCT = `
mutation UpdateProducts($where: ProductWhere, $update: ProductUpdateInput) {
    updateProducts(where: $where, update: $update) {
      products {
        id
      }
    }
  }
`
const GET_PRODUCT = `
query Products($where: ProductWhere) {
    products(where: $where) {
      id
      title
      shortDescription
      others
      features
      image
      file
      video
    }
  }

`


const Main = () => {

    // states
    const [featureEditorState, setFeatureEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    const [othersEditorState, setOthersEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const [productData, setProductData] = React.useState({
        title: '',
        shortDescription: '',
        image: '',
        price: '',
        video: '',
        file: '',

    })

    // hooks
    const client = useGqlClient()
    const params = useParams()
    const router = useRouter()


    // QUERY
    const { data: previousProductData, loading, error } = useQuery(GET_PRODUCT, { client, variables: { where: { id: params?.id } } })

    //mutation
    const [updateProductFn, updateState] = useMutation(UPDATE_PRODUCT, { client })







    // // action on change
    useEffect(() => {
        if (previousProductData?.products?.length) {
            const { title, shortDescription, features, others, image, price, video, file } = previousProductData.products[0]
            setFeatureEditorState(convertRawToEditorState(features) || EditorState.createEmpty())
            setOthersEditorState(convertRawToEditorState(others) || EditorState.createEmpty())
            setProductData({
                title,
                shortDescription,
                image,
                price,
                file,
                video
            })
        }



    }, [previousProductData?.products?.length])















    // initializing the mutation and  quires
    const updateProduct = async (input: Product) => {
        const { data } = await updateProductFn({
            variables: {
                where: {
                    id: params?.id
                },
                update: {
                    title: input.title,
                    shortDescription: input.shortDescription,
                    features: input.features,
                    others: input.others,
                    image: input.image || previousProductData?.products[0].image,
                    price: input.price,
                    video: input.video,
                    file: input.file,
                    createdAt: new Date().toISOString()
                }
            }
        })
        if (data?.updateProducts?.products?.length) {
            toast.success('Product updated successfully')
            router.push('/admin/dashboard/products/create')

        }
    }


    const convertRawToEditorState = (raw: string) => {
        console.log('raw', raw)
        if (!raw) {
            console.log('raw is empty')
            return
        }
        const rawContent = JSON.parse(raw);
        const contentState = convertFromRaw(rawContent);
        const editorState = EditorState.createWithContent(contentState);
        console.log('editorState', editorState)
        return editorState
    }

    if (loading || updateState.loading) return <Loading />
    if (error || updateState.error) return <Error />

    return (
        <>
            <DataFrom
                setProductData={setProductData}
                productData={productData}
                othersEditorState={othersEditorState}
                setOthersEditorState={setOthersEditorState}
                featureEditorState={featureEditorState}
                setFeatureEditorState={setFeatureEditorState}
                updateProductFn={updateProduct}
            />


        </>
    );
};

export default Main;