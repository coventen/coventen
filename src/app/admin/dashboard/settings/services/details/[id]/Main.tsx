'use client'
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation, useQuery } from 'graphql-hooks';
import React, { useEffect, useState } from 'react';
import DataFrom from './DataFrom';
import { ContentState, Editor, EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { useParams, useRouter } from 'next/navigation';
import { Service } from '@/gql/graphql';
import { toast } from 'react-hot-toast';
import Loading from '@/app/loading';
import Error from '@/components/Error';
import slugify from 'slugify';



const UPDATE = `
mutation UpdateServices($where: ServiceWhere, $update: ServiceUpdateInput) {
    updateServices(where: $where, update: $update) {
      services {
        id
      }
    }
  }
`
const GET_DATA = `
query Services {
    services {
      id
      category
      coverImageUrl
      title
      description
      slug
      pageContent
      isPopular
      thumbnailUrl
    }
  }

`


const Main = () => {

    // states
    const [ContentEditorState, setContentEditorState] = useState(() =>
        EditorState.createEmpty()
    );


    const [ServiceData, setServiceData] = React.useState({
        title: '',
        description: '',
        coverImageUrl: '',
        pageContent: '',
        thumbnailUrl: '',

    })

    // hooks
    const client = useGqlClient()
    const params = useParams()
    const router = useRouter()


    // QUERY
    const { data: previousServiceData, loading, error } = useQuery(GET_DATA, { client, variables: { where: { id: params?.id } } })

    //mutation
    const [updateServiceFn, updateState] = useMutation(UPDATE, { client })







    // // action on change
    useEffect(() => {
        if (previousServiceData?.services?.length) {
            const { title, description, coverImageUrl, pageContent, thumbnailUrl } = previousServiceData.services[0]
            setContentEditorState(convertRawToEditorState(pageContent) || EditorState.createEmpty())
            setServiceData({
                thumbnailUrl,
                pageContent,
                coverImageUrl,
                description,
                title
            })
        }



    }, [previousServiceData?.services?.length])















    // initializing the mutation and  quires
    const updateService = async (input: Service) => {
        const { data } = await updateServiceFn({
            variables: {
                where: {
                    id: params?.id
                },
                "update": {
                    "title": input?.title?.toLowerCase(),
                    "description": input.description,
                    "coverImageUrl": input.coverImageUrl,
                    slug: slugify(input.title as string, { replacement: '_', remove: /[*+~.()'"!:@]/g }),
                    "pageContent": input.pageContent,
                    "thumbnailUrl": input.thumbnailUrl
                }
            }
        })
        if (data?.updateServices?.services[0]?.id) {
            toast.success(' updated successfully')
            router.push('/admin/dashboard/settings/services')

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
                setServiceData={setServiceData}
                ServiceData={ServiceData}
                ContentEditorState={ContentEditorState}
                setContentEditorState={setContentEditorState}
                updateServiceFn={updateService}
            />


        </>
    );
};

export default Main;