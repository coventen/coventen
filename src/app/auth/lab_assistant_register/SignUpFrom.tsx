'use client'
import AutoSelectVendor from '@/components/AutoSelectVendor';
import { signUpWithEmailAndPassword } from '@/firebase/oauth.config';
import React, { useState } from 'react';
import { useForm, SubmitHandler, set } from "react-hook-form"



interface IFormInput {
    name: string;
    email: string;
    phone: string;
    pan: string;
    password: string;
}

interface ISignUpProps {
    createUser: (data: IFormInput) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    setError: (error: string) => void;
    error: string;

}





// user type SubType
const SubType = [
    'Freelancer',
    'Testing Agent',
    'Manufacturer',
    'Academics / Institute',
    'Foreign Client',
    'Importer',
    'Consumer',
    'Testing Lab / Service Provider',
];

const UserType = [
    'SERVICE_PROVIDER',
    'CONSUMER',
    "COVENTEN EMPLOYEE",
    "LAB ASSISTANT"
]




// component
const SignUpFrom = ({ createUser, setLoading, setError, loading, error }: ISignUpProps) => {

    // states 
    const [selected, setSelected] = useState<any>(null)

    // hooks
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<IFormInput>()



    // handle authentication
    const handleAuthentication: SubmitHandler<IFormInput> = async (data) => {
        console.log(data)
        setLoading(true)
        try {
            const newUser = await signUpWithEmailAndPassword(data.email, data.password);
            if (newUser.uid) {
                createUser(data)
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
                    <p className="text-xs lg:text-sm font-semibold mb-1  text-gray-700">
                        Select Vendor
                    </p>

                    <div className='relative'>

                        <AutoSelectVendor setSelected={setSelected} selected={selected} data={[]} />
                    </div>
                </div>
                <div>
                    <label className="font-medium">
                        Name
                    </label>
                    <input
                        type="text"
                        required
                        {...register("name")}
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
                    />
                </div>
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
                <div>
                    <label className="font-medium">
                        Phone
                    </label>
                    <input
                        type="text"
                        required
                        {...register("phone")}
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
                    />
                </div>
                <div>
                    <label className="font-medium">
                        PAN Number
                    </label>
                    <input
                        type="text"
                        required
                        {...register("pan")}
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
                    />
                </div>
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





                {/* ------- */}

                <button
                    type='submit'
                    className="w-full px-4 mt-8 py-2 text-white font-medium bg-primary hover:bg-primary active:bg-primary rounded-lg duration-150"
                >
                    {loading ? "loading" : 'Register'}
                </button>
            </form>
        </>
    );
};

export default SignUpFrom;