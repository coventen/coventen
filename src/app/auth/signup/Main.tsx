'use client'

import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation } from 'graphql-hooks';
import React from 'react';
import { toast } from 'react-hot-toast';
import SignUpFrom from './SignUpFrom';
import { useRouter } from 'next/navigation';

const CREATE_USER = `
mutation Mutation($input: [UserCreateInput!]!) {
    createUsers(input: $input) {
      info {
        nodesCreated
      }
    }
  }
`

const Main = () => {

    //states
    const [loading, setLoading] = React.useState(false);

    // hooks
    const router = useRouter()
    const client = useGqlClient()

    // saving  user to database
    const [createUserFn, state] = useMutation(CREATE_USER, { client });

    // initializing user creation function
    const createUser = async (name: string, email: string, user_type: string) => {

        if (user_type === "SERVICE PROVIDER") {
            user_type = "SERVICE_PROVIDER"
        }

        const { data } = await createUserFn({
            variables: {
                input: [
                    {
                        name,
                        email,
                        user_type
                    }
                ]
            }
        })


        if (data.createUsers.info.nodesCreated) {
            setLoading(false)
            toast.success('Account created successfully')
            console.log('success')

            // redirecting user to verification page or home page
            if (user_type === 'CONSUMER') {
                router.push('/auth/verify')
                console.log('success')
            } else if (user_type === 'SERVICE PROVIDER') {
                router.push('/')

            }

        }
    }



    return (
        <>
            <SignUpFrom createUser={createUser} loading={loading} setLoading={setLoading} />
        </>
    );
};

export default Main;