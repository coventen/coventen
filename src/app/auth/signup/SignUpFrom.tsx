'use client'
import { signUpWithEmailAndPassword } from '@/firebase/oauth.config';
import React, { useState } from 'react';
import { useForm, SubmitHandler, set } from "react-hook-form"



interface IFormInput {
    name: string;
    email: string;
    user_type: string;
    password: string;
}

interface ISignUpProps {
    createUser: (name: string, email: string, user_type: string) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
}





// user type options
const options = [
    'Freelancer',
    'Testing Agent',
    'Manufacturer',
    'Academics / Institute',
    'For my company',
    'Foreign Client',
    'Importer',
    'Consumer',
    'Testing Lab / Service Provider',
    "SERVICE PROVIDER",
    "CONSUMER"
];




// component
const SignUpFrom = ({ createUser, setLoading }: ISignUpProps) => {

    // states 
    const [selectedOption, setSelectedOption] = useState('');
    const [error, setError] = useState('');

    // hooks
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
            const newUser = await signUpWithEmailAndPassword(data.email, data.password);
            if (newUser.uid) {
                createUser(data.name, data.email, selectedOption)
            }
        } catch (error: any) {
            setError(error.message)
        }


    }


    // handle select
    const handleSelect = (e: any) => {
        setSelectedOption(e.target.value);
    };



    // render
    return (

        <form
            onSubmit={handleSubmit(handleAuthentication)}
            className="space-y-5"
        >
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
            {/* select options  */}
            <div>
                <label className="font-medium">
                    User type
                </label>
                <div className="relative inline-flex w-full">
                    <select
                        value={selectedOption}
                        onChange={handleSelect}
                        className="appearance-none relative w-full mt-2 px-3 py-2 text-gray-700 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
                    >
                        <option value="" disabled>Select an option</option>
                        {options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                </div>
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
                Create account
            </button>
            {/* </Link> */}
        </form>
    );
};

export default SignUpFrom;