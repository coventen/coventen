'use client'
import Loading from '@/app/loading';
import Error from '@/components/Error';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useQuery } from 'graphql-hooks';
import React from 'react';
import LogTable from './LogTable';

const GET_LOGS = `
query Query {
    logs {
      id
      title
      message
      createdAt
    }
  }
`

const Main = () => {

    // hooks
    const client = useGqlClient()


    // queries
    const { data, error, loading } = useQuery(GET_LOGS, { client })



    console.log(data, 'data')

    if (loading) return <Loading />
    if (error) return <Error />

    if (data?.logs?.length === 0) return <div className='text-center text-gray-500'>No logs found</div>


    return (
        <div>
            <LogTable data={data?.logs} />
        </div>
    );
};

export default Main;