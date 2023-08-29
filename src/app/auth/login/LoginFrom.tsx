'use client'
import { logInWithEmailAndPassword } from '@/firebase/oauth.config';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation } from 'graphql-hooks';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import { toast } from 'react-hot-toast';
import Cookies from 'js-cookie';



interface IFormInput {
    email: string;
    password: string;
}
const GET_TOKEN = `
mutation SignIn($email: String!) {
    signIn(email: $email)
  }
`



// component
const LoginFrom = () => {

    // states 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // hooks
    const router = useRouter()
    const client = useGqlClient()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<IFormInput>()


    // query to get token
    const [getTokenFn, state] = useMutation(GET_TOKEN, { client });



    // handle authentication
    const handleAuthentication: SubmitHandler<IFormInput> = async (data) => {
        setLoading(true)
        try {
            const newUser = await logInWithEmailAndPassword(data?.email, data?.password);
            if (newUser.uid) {

                const { data: tokenData } = await getTokenFn({
                    variables: {
                        email: data?.email
                    }
                })
                if (tokenData.signIn) {
                    // saving token to cookie
                    Cookies.set('conventenToken', tokenData.signIn)
                    setLoading(false)
                    toast.success('Login Successful')
                    router.push('/')
                } else {
                    setError('User Not Found')
                    setLoading(false)
                }


            }
        } catch (error: any) {
            setError(error.message)
            setLoading(false)
        }


    }


    // render
    return (
        <>

            <p className='text-red-600 font-semibold text-sm'>{error.substring(10)}</p>

            <form
                onSubmit={handleSubmit(handleAuthentication)}
                className="space-y-5"
            >

                <div>
                    <label className="font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        required
                        {...register("email")}
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
                    />
                </div>
                {/* ------- */}
                <div>
                    <label className="font-medium">
                        Password
                    </label>
                    <input
                        type="password"
                        required
                        {...register("password")}
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
                    />
                </div>
                {/* <Link href='/auth/verify '> */}
                <button
                    type='submit'
                    className="w-full px-4 mt-8 py-2 text-white font-medium bg-primary hover:bg-primary active:bg-primary rounded-lg duration-150"
                >
                    {loading ? 'Loading...' : 'Login'}
                </button>
                {/* </Link> */}
            </form>
        </>
    );
};

export default LoginFrom;