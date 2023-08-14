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
    createUser: (name: string, email: string, user_type: string, sub_type: string) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    setError: (error: string) => void;
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
    'SERVICE PROVIDER',
    'CONSUMER',
    "EMPLOYEE"
]




// component
const SignUpFrom = ({ createUser, setLoading, setError, loading }: ISignUpProps) => {

    // states 
    const [selectedOption, setSelectedOption] = useState('');
    const [selectSubType, setSelectSetSubType] = useState('CONSUMER');


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
                createUser(data.name, data.email, selectedOption, selectSubType)
            }
        } catch (error: any) {
            setError(error.message)
            setLoading(false)
        }


    }


    // handle select
    const handleSelect = (e: any) => {
        setSelectedOption(e.target.value);
    };
    const handleSelectSub = (e: any) => {
        setSelectSetSubType(e.target.value);
    };


    console.log(selectedOption, selectSubType)

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
            {/* select SubType  */}
            {/* <div>
                <label className="font-medium">
                    User type
                </label>

                <div className=' flex items-center  space-x-5 mt-6'>

                    <div className="flex items-center mb-4">
                        <input id="country-option-1" type="radio" name="countries" value="USA" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                        <label htmlFor="country-option-1" className="text-sm font-medium text-gray-900 ml-2 block">
                            CONSUMER
                        </label>
                    </div>

                    <div className="flex items-center mb-4">
                        <input id="country-option-2" type="radio" name="countries" value="Germany" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-2" aria-describedby="country-option-2" />
                        <label htmlFor="country-option-2" className="text-sm font-medium text-gray-900 ml-2 block">
                            SERVICE PROVIDER
                        </label>
                    </div>
                </div>
            </div> */}

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
                        {UserType.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                </div>
            </div>
            <div>
                <label className="font-medium">
                    User sub type
                </label>
                <div className="relative inline-flex w-full">
                    <select
                        value={selectSubType}
                        onChange={handleSelectSub}

                        className="appearance-none relative w-full mt-2 px-3 py-2 text-gray-700 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
                    >
                        <option value="" disabled>Select an option</option>
                        {SubType.map((option) => (
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
                {loading ? "loading" : 'Create account'}
            </button>
            {/* </Link> */}
        </form>
    );
};

export default SignUpFrom;