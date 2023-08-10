'use client'
import { logInWithEmailAndPassword } from '@/firebase/oauth.config';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import { toast } from 'react-hot-toast';



interface IFormInput {
    email: string;
    password: string;
}




// component
const LoginFrom = () => {

    // states 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // hooks
    const router = useRouter()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<IFormInput>()



    // handle authentication
    const handleAuthentication: SubmitHandler<IFormInput> = async (data) => {
        setLoading(true)
        try {
            const newUser = await logInWithEmailAndPassword(data.email, data.password);
            if (newUser.uid) {
                setLoading(false)
                toast.success('Login Successful')
                router.push('/')
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