'use client'
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation, useQuery } from 'graphql-hooks';
import React, { useEffect, useState } from 'react';
import DataFrom from './DataFrom';
import { ContentState, Editor, EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import Loading from '@/app/loading';
import Error from '@/components/Error';
import slugify from 'slugify';



const UPDATE_DATA = `
mutation UpdateHomeServices($where: HomeServicesWhere, $update: HomeServicesUpdateInput) {
    updateHomeServices(where: $where, update: $update) {
      homeServices {
        id
      }
    }
  }
`
const GET_DATA = `
query HomeServices($where: HomeServicesWhere) {
    homeServices(where: $where) {
      id
      title
      description
    }
  }
`


const Main = () => {

    // states
    const [currentData, setCurrentData] = React.useState({
        description: '',
        title: '',

    })

    // hooks
    const client = useGqlClient()
    const params = useParams()
    const router = useRouter()


    // QUERY
    const { data: previoustermsData, loading, error, refetch } = useQuery(GET_DATA, { client, variables: { where: { id: params?.id } } })

    //mutation
    const [updateItemFn, updateState] = useMutation(UPDATE_DATA, { client })



    // // action on change
    useEffect(() => {
        if (previoustermsData?.homeServices?.length) {
            const { title, description } = previoustermsData.homeServices[0]

            setCurrentData({
                title,
                description,
            })
        }



    }, [previoustermsData?.homeServices?.length])















    // initializing the mutation and  quires
    const updateItem = async (input: any) => {
        const { data } = await updateItemFn({
            variables: {
                where: {
                    id: params?.id
                },
                "update": {
                    "title": currentData?.title,
                    "description": currentData?.description
                }
            }
        })
        if (data?.updateHomeServices?.homeServices?.length) {
            toast.success('updated successfully')
            refetch()
            router.push('/admin/dashboard/settings/homepage/services')


        }
    }




    if (loading || updateState.loading) return <Loading />
    if (error || updateState.error) return <Error />

    return (
        <>
            <DataFrom
                setCurrentData={setCurrentData}
                currentData={currentData}
                updateItem={updateItem}
            />


        </>
    );
};

export default Main;