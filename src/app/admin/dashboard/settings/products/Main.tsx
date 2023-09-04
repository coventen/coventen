
'use client';


import AddProductTabs from './AddProductTabs';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation, useQuery } from 'graphql-hooks';
import Loading from '@/app/loading';
import Error from '@/components/Error';
import { toast } from 'react-hot-toast';


export interface addProductVariables {
    title: string,
    shortDescription: string,
    features: string,
    others: string,
    image: string,
    createdAt?: string
    price: number
}



const ADD_NEW_PRODUCT = `
mutation Mutation($input: [ProductCreateInput!]!) {
    createProducts(input: $input) {
      info {
        nodesCreated
      }
    }
  }
`

const GET_ALL_PRODUCTS = `
query Products {
    products {
      id
      title
      shortDescription
      others
      features
      image
      createdAt
      price
    }
  }

`

const DELETE_PRODUCT = `

mutation DeleteProducts($where: ProductWhere) {
    deleteProducts(where: $where) {
      nodesDeleted
    }
  }


`

const Main = () => {
    // STATES

    // HOOKS
    const client = useGqlClient()

    // QUERY
    const { data: productData, loading, error, refetch } = useQuery(GET_ALL_PRODUCTS, { client })

    // MUTATION
    const [addNewProductFn, addNewProductState] = useMutation(ADD_NEW_PRODUCT, { client })
    const [deleteProductFn, deleteProductState] = useMutation(DELETE_PRODUCT, { client, })



    // initialize the query and mutations

    const addNewProduct = async (input: addProductVariables) => {

        const { data } = await addNewProductFn({
            variables: {
                "input": [
                    {
                        "title": input.title,
                        "shortDescription": input.shortDescription,
                        "features": input.features,
                        "others": input.others,
                        "image": input.image,
                        "price": input.price,
                        createdAt: new Date().toISOString()
                    }
                ]
            }
        })

        if (data.createProducts.info.nodesCreated) {
            toast.success('Product added successfully')
            refetch()
        }
    }

    const deleteProduct = async (id: string) => {
        const { data } = await deleteProductFn({
            variables: {
                where: {
                    id
                }
            }
        })

        if (data.deleteProducts.nodesDeleted) {
            toast.error('Product deleted successfully')
            refetch()
        }
    }

    console.log(productData);


    if (loading || addNewProductState.loading || deleteProductState.loading) return <Loading />
    if (error || addNewProductState.error) return <Error />



    return (
        <>
            <AddProductTabs productData={productData?.products} addNewProductFn={addNewProduct} deleteProduct={deleteProduct} />
        </>
    );
};

export default Main;