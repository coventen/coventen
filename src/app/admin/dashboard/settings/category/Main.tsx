
'use client';


import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation, useQuery } from 'graphql-hooks';
import Loading from '@/app/loading';
import Error from '@/components/Error';
import { toast } from 'react-hot-toast';
import slugify from 'slugify';
import PageTabs from './PageTabs';


type subCategory = {
    name: string,
}

export interface addVariables {
    type: string,
    name: string,
    subCategory?: subCategory[]
}



const ADD_NEW = `
mutation CreateCategories($input: [CategoryCreateInput!]!) {
    createCategories(input: $input) {
      info {
        nodesCreated
      }
    }
  }
`

const GET_ALL = `
query Categories {
    categories {
        id
      name
      type
    }
  }

`

const DELETE = `
mutation DeleteCategories($where: CategoryWhere) {
    deleteCategories(where: $where) {
      nodesDeleted
    }
  }
`

const Main = () => {


    // HOOKS
    const client = useGqlClient()

    // QUERY
    const { data: categoryData, loading, error, refetch } = useQuery(GET_ALL, { client })

    // MUTATION
    const [addNewFn, addNewState] = useMutation(ADD_NEW, { client })
    const [deleteFn, deleteState] = useMutation(DELETE, { client, })



    // initialize the query and mutations

    const addNewItem = async (input: addVariables) => {

        if (input.subCategory?.length) {
            const { data } = await addNewFn({
                variables: {
                    "input": [
                        {
                            "name": input.name.toLowerCase(),
                            "type": input.type,
                            "categoryHasChild": {
                                "create": input?.subCategory?.map((item) => {
                                    return {
                                        "node": {
                                            "name": item?.name?.toLowerCase(),
                                            "type": "SUB_CATEGORY"
                                        }
                                    }
                                }),

                            }
                        }
                    ]
                }
            })

            if (data.createCategories.info.nodesCreated) {
                toast.success('Added successfully')
                refetch()
            }
        } else {
            const { data } = await addNewFn({
                variables: {
                    "input": [
                        {
                            "name": input.name.toLowerCase(),
                            "type": input.type,
                        }
                    ]
                }
            })

            if (data.createCategories.info.nodesCreated) {
                toast.success('Added successfully')
                refetch()
            }
        }

    }

    const deleteItem = async (id: string) => {
        const { data } = await deleteFn({
            variables: {
                where: {
                    id
                }
            }
        })

        if (data.deleteCategories.nodesDeleted) {
            toast.error('deleted successfully')
            refetch()
        }
    }




    if (loading || addNewState.loading || deleteState.loading) return <Loading />
    if (error || addNewState.error) return <Error />



    return (
        <>
            <PageTabs categoryData={categoryData?.categories} addNewItem={addNewItem} deleteItem={deleteItem} />
        </>
    );
};

export default Main;