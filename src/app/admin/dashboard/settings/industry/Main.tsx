
'use client';


import AddIndustryTabs from './AddIndustryTabs';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation, useQuery } from 'graphql-hooks';
import Loading from '@/app/loading';
import Error from '@/components/Error';
import { toast } from 'react-hot-toast';
import deleteImage from '@/shared/deleteImage';


export interface addIndustryVariables {
    title: string,
    image: string,
    description: string,
}



const ADD_NEW = `
mutation CreateIndustryPages($input: [IndustryPageCreateInput!]!) {
    createIndustryPages(input: $input) {
      info {
        nodesCreated
      }
    }
  }
`

const GET_ALL = `
query IndustryPages {
    industryPages {
      id
      title
      image
      description
    }
  }

`

const DELETE = `

mutation DeleteIndustryPages($where: IndustryPageWhere) {
    deleteIndustryPages(where: $where) {
      nodesDeleted
    }
  }


`

const Main = () => {
    // STATES

    // HOOKS
    const client = useGqlClient()

    // QUERY
    const { data: IndustryData, loading, error, refetch } = useQuery(GET_ALL, { client })

    // MUTATION
    const [addNewIndustryFn, addNewIndustryState] = useMutation(ADD_NEW, { client })
    const [deleteIndustryFn, deleteIndustryState] = useMutation(DELETE, { client, })



    // initialize the query and mutations

    const addNewIndustry = async (input: addIndustryVariables) => {

        const { data } = await addNewIndustryFn({
            variables: {
                "input": [
                    {
                        "title": input.title,
                        "image": input.image,
                        "description": input.description
                    }
                ]
            }
        })

        if (data.createIndustryPages.info.nodesCreated) {
            toast.success('Industry added successfully')
            refetch()
        }
    }

    const deleteIndustry = async (id: string) => {

        const imageLink = IndustryData?.industryPages.find((item: any) => item.id === id)?.image
        deleteImage(imageLink)
        const { data } = await deleteIndustryFn({
            variables: {
                where: {
                    id
                }
            }
        })

        if (data.deleteIndustryPages.nodesDeleted) {
            toast.error('Industry deleted successfully')
            refetch()
        }
    }

    console.log(IndustryData);


    if (loading || addNewIndustryState.loading || deleteIndustryState.loading) return <Loading />
    if (error || addNewIndustryState.error) return <Error />



    return (
        <>
            <AddIndustryTabs IndustryData={IndustryData?.industryPages} addNewIndustryFn={addNewIndustry} deleteIndustry={deleteIndustry} />
        </>
    );
};

export default Main;