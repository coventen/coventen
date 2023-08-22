'use client'

import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation } from 'graphql-hooks';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import SignUpFrom from './SignUpFrom';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';


interface CreateUserInput {
    name: string;
    email: string;
    phone: string;
    pan: string;
    password: string;
}


const CREATE_USER = `
mutation Mutation($email: String!, $name: String!, $userType: String!) {
    signUp(email: $email, name: $name, user_type: $userType)
  }
  
`
const UPDATE_USER = `
mutation UpdateUsers($where: UserWhere, $update: UserUpdateInput) {
    updateUsers(where: $where, update: $update) {
      info {
        nodesCreated
      }
    }
  }
  
`

const Main = () => {

    //states
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = useState('');

    // hooks
    const router = useRouter()
    const client = useGqlClient()

    // saving  user to database
    const [createUserFn, state] = useMutation(CREATE_USER, { client });
    const [updateUserFn, updateState] = useMutation(UPDATE_USER, { client });

    // initializing user creation function
    const createUser = async ({ pan, phone, email, name }: CreateUserInput) => {


        const { data } = await createUserFn({
            variables: {
                email,
                name,
                userType: 'EMPLOYEE'
            }
        })

        if (data?.signUp) {
            // saving token to cookie
            Cookies.set('conventenToken', data.signUp)

            // updating user

            const { data: updateData } = await updateUserFn({
                variables: {
                    where: {
                        email
                    },
                    update: {
                        phone,
                        pan
                    }
                }
            })

            if (updateData) {
                setLoading(false)
                toast.success('Account created successfully')
                router.push('/')
            }


        }





    }


    //handle error
    if (state.error || updateState.error) {
        <p className='text-red-600 font-semibold text-sm'>Sorry something went wrong</p>
    }
    if (error) {
        <p className='text-red-600 font-semibold text-sm'>{error.substring(10)}</p>
    }


    return (
        <>
            <SignUpFrom createUser={createUser} loading={loading} setLoading={setLoading} setError={setError} error={error} />
        </>
    );
};

export default Main;