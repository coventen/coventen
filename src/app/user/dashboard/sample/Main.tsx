'use client'
import { currentUser } from '@/firebase/oauth.config';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation, useQuery } from 'graphql-hooks';
import React, { useEffect } from 'react';
import SampleTable from './SampleTable';
import { toast } from 'react-hot-toast';
import Loading from '@/app/loading';

const GET_MODULES = `
query Modules($where: ModuleWhere) {
    modules(where: $where) {
        id
      title
      sampleStatus
      projectHas {
        title
      }
    }
  }
`
const UPDATE_MODULE = `
mutation Mutation($where: ModuleWhere, $update: ModuleUpdateInput) {
    updateModules(where: $where, update: $update) {
  
      modules {
        id
      }
    }
  }
`

const Main = () => {
    // states 
    // ['ON_WAY', 'RECEIVED', 'NOT_SENT'

    // HOOKS 
    const client = useGqlClient()
    const user = currentUser()

    // mutations
    const [updateModule, updateState] = useMutation(UPDATE_MODULE, { client })


    // QUERIES
    const { data, error, loading, refetch } = useQuery(GET_MODULES, {
        client,
        variables: {
            where: {
                projectHas: {
                    clientOrdered: {
                        userIs: {
                            email: user?.email || 'no user'
                        }
                    }
                }
            }
        }
    })



    // initializing update module

    const updateModuleStatus = async (id: string, status: string) => {

        const { data } = await updateModule({
            variables: {
                where: {
                    id: id
                },
                update: {
                    sampleStatus: status
                }
            }
        })

        console.log(data)
        if (data.updateModules?.modules?.length) {
            console.log('updated')
            toast.success('Updated')
            refetch()

        }
    }


    if (loading || updateState.loading) return <div><Loading /></div>




    return (
        <div>
            <SampleTable data={data?.modules} updateModuleStatus={updateModuleStatus} />
        </div>
    );
};

export default Main;