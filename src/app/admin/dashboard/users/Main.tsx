'use client'
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useQuery } from 'graphql-hooks';
import React from 'react';
import UserTable from './UserTable';


const GET_USER = `
query Query {
    users {
      name
      id
      email
      status
      user_type
      image
      connectivity
    }
  }
`



const Main = () => {

    //HOOKS
    const client = useGqlClient()

    //fetching data 
    const { data, error, loading } = useQuery(GET_USER, { client })

    console.log(data, 'dsfkdjsfsdklfslkdfkldsfls')

    return (
        <>
            <UserTable data={data?.users} />
        </>
    );
};

export default Main;