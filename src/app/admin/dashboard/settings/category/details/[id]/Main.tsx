'use client'
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation, useQuery } from 'graphql-hooks';
import React, { useEffect, useState } from 'react';
import DataFrom from './DataFrom';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import Loading from '@/app/loading';
import Error from '@/components/Error';
import slugify from 'slugify';



const UPDATE_DATA = `
mutation UpdateCategories($where: CategoryWhere, $update: CategoryUpdateInput) {
    updateCategories(where: $where, update: $update) {
      categories {
        id
      }
    }
  }
`
const GET_DATA = `
query Categories($where: CategoryWhere) {
    categories(where: $where) {
      name

      categoryHasChild {
        name
      }
    }
  }
`


const Main = () => {

    // states
    const [currentData, setCurrentData] = React.useState({
        name: '',
        subCategory: [],

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
        if (previoustermsData?.categories?.length) {
            const { name, categoryHasChild } = previoustermsData.categories[0]

            setCurrentData({
                name,
                subCategory: categoryHasChild

            })
        }



    }, [previoustermsData?.categories?.length])





    // initializing the mutation and  quires
    const updateItem = async (input: any) => {
        const { data } = await updateItemFn({
            variables: {
                where: {
                    id: params?.id
                },
                "update": {
                    "title": input.title,
                    "image": input.image
                }
            }
        })
        if (data?.updateHeroes?.heroes?.length) {
            toast.success('updated successfully')
            refetch()
            router.push('/admin/dashboard/settings/homepage/hero')
        }
    }




    if (loading || updateState.loading) return <Loading />
    if (error || updateState.error) return <Error />

    return (
        <>
            <DataFrom
                setCurrentData={setCurrentData}
                currentData={previoustermsData?.categories}
                updateItem={updateItem}
            />


        </>
    );
};

export default Main;