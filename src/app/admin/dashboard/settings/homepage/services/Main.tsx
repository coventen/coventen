
'use client';


import Tab from './PageTabs';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation, useQuery } from 'graphql-hooks';
import Loading from '@/app/loading';
import Error from '@/components/Error';
import { toast } from 'react-hot-toast';
import slugify from 'slugify';


export interface addVariables {
    description: string,
    title: string,
    slug?: string
}



const ADD_NEW = `
mutation CreateHomeServices($input: [HomeServicesCreateInput!]!) {
    createHomeServices(input: $input) {
      info {
        nodesCreated
      }
    }
  }
`

const GET_ALL = `
query HomeServices($where: HomeServicesWhere) {
    homeServices(where: $where) {
      title
      description
      id
    }
  }

`

const DELETE = `

mutation DeleteHomeServices($where: HomeServicesWhere) {
    deleteHomeServices(where: $where) {
      nodesDeleted
    }
  }

`

const Main = () => {
    // STATES

    // HOOKS
    const client = useGqlClient()

    // QUERY
    const { data: HomeServiceData, loading, error, refetch } = useQuery(GET_ALL, { client })

    // MUTATION
    const [addNewFn, addNewState] = useMutation(ADD_NEW, { client })
    const [deleteFn, deleteState] = useMutation(DELETE, { client, })



    // initialize the query and mutations

    const addNewItem = async (input: addVariables) => {
        const { data } = await addNewFn({
            variables: {
                "input": [
                    {
                        "title": input.title,
                        "description": input.description,
                        slug: slugify(input.title, { replacement: '_', remove: /[*+~.()'"!:@]/g })
                    }
                ]
            }
        })

        if (data.createHomeServices.info.nodesCreated) {
            toast.success('Added successfully')
            refetch()
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

        if (data.deleteHomeServices.nodesDeleted) {
            toast.error('Terms deleted successfully')
            refetch()
        }
    }




    if (loading || addNewState.loading || deleteState.loading) return <Loading />
    if (error || addNewState.error) return <Error />



    return (
        <>
            <Tab HomeServiceData={HomeServiceData?.homeServices} addNewFn={addNewItem} deleteItem={deleteItem} />
        </>
    );
};

export default Main;