'use client'

import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation } from 'graphql-hooks';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import SignUpFrom from './SignUpFrom';
import { useRouter } from 'next/navigation';

const CREATE_USER = `
mutation Mutation($email: String!, $name: String!) {
    signUp(email: $email, name: $name)
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

    // initializing user creation function
    const createUser = async (name: string, email: string, user_type: string, sub_type: string, selectedIndustries: any[]) => {

        if (user_type === "SERVICE PROVIDER") {
            user_type = "SERVICE_PROVIDER"
            const { data } = await createUserFn({
                variables: {
                    input: [
                        {
                            name,
                            email,
                            user_type,
                            isVendor: {
                                create: {
                                    node: {
                                        industry: selectedIndustries.map((industry) => industry.name),
                                        sub_type: sub_type
                                    }
                                }
                            }

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
        } else {
            const { data } = await createUserFn({
                variables: {
                    input: [
                        {
                            name,
                            email,
                            user_type,
                            isClient: {
                                create: {
                                    node: {
                                        sub_type: sub_type
                                    }
                                }
                            }

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




    }


    //handle error
    if (state.error) {
        <p className='text-red-600 font-semibold text-sm'>Sorry something went wrong</p>
    }
    if (error) {
        <p className='text-red-600 font-semibold text-sm'>{error.substring(10)}</p>
    }


    return (
        <>
            <SignUpFrom createUser={createUser} loading={loading} setLoading={setLoading} setError={setError} />
        </>
    );
};

export default Main;