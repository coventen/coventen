'use client'
import React, { useState } from 'react';
import { useForm, SubmitHandler, set } from "react-hook-form"
import industries from '@/utlts/InductiresData.json';
import MultiSelect from '@/components/Multiselect';
import AutoSelectVendor from '@/components/AutoSelectVendor';
import AuthConfig from '@/firebase/oauth.config';



interface IFormInput {
    name: string;
    email: string;
    user_type: string;
    password: string;
}

interface ISignUpProps {
    createUser: (name: string, email: string, user_type: string, sub_type: string, selectedIndustries: any[], selectedVendor: string) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    setError: (error: string) => void;
    error: string;

}




const UserType = [
    'SERVICE_PROVIDER',
    'CONSUMER',
    "COVENTEN_EMPLOYEE",
    "LAB_ASSISTANT"
]



// component
const SignUpFrom = ({ createUser, setLoading, setError, loading, error }: ISignUpProps) => {

    // states 
    const [selectedOption, setSelectedOption] = useState('');
    const [selectSubType, setSelectSetSubType] = useState('CONSUMER');
    const [selectedIndustries, setSelectedIndustries] = useState<any[]>([]);
    const [selectedVendor, setSelectedVendor] = useState<any>(null);

    // console.log(selectedVendor.id, 'vendor')

    // hooks
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<IFormInput>()

    const { signUpWithEmailAndPassword } = AuthConfig()



    // handle authentication
    const handleAuthentication: SubmitHandler<IFormInput> = async (data) => {
        setLoading(true)
        try {
            const newUser = await signUpWithEmailAndPassword(data.email, data.password);
            if (newUser.uid) {
                createUser(data.name, data.email, selectedOption, selectSubType, selectedIndustries, selectedVendor?.email)
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

    // user type SubType
    let SubType: string[] = [];

    if (selectedOption === 'SERVICE_PROVIDER') {
        SubType = [
            'Freelancer',
            'Testing Agent',
            'Academics / Institute',
            'Testing Lab',
        ]
    } else if (selectedOption === 'CONSUMER') {
        SubType = [
            'Manufacturer',
            'Academics / Institute',
            'Foreign Client',
            'Importer',
        ]
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
                        Name
                    </label>
                    <input
                        type="text"
                        required
                        {...register("name")}
                        className="block w-full cursor-default overflow-hidden rounded bg-white text-left border border-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
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
                        className="block w-full cursor-default overflow-hidden rounded bg-white text-left border border-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
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
                        className="block w-full cursor-default overflow-hidden rounded bg-white text-left border border-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
                    />
                </div>

                <div>
                    <label className="font-medium">
                        User type
                    </label>
                    <div className="relative inline-flex w-full">
                        <select
                            value={selectedOption}
                            onChange={handleSelect}
                            className="block w-full cursor-default overflow-hidden rounded bg-white text-left border border-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
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
                {/* collecting sub type for vendor or client */}
                {
                    selectedOption === 'SERVICE_PROVIDER' || selectedOption === 'CONSUMER' && (

                        <div>
                            <label className="font-medium">
                                User sub type
                            </label>
                            <div className="relative inline-flex w-full">
                                <select
                                    value={selectSubType}
                                    onChange={handleSelectSub}

                                    className="block w-full cursor-default overflow-hidden rounded bg-white text-left border border-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
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
                    )
                }

                {
                    selectedOption === 'SERVICE_PROVIDER' && (

                        <div>

                            <label className="font-medium">
                                Industries
                            </label>
                            <div className="relative inline-flex w-full">
                                <MultiSelect setSelectedOptions={setSelectedIndustries} selectedOptions={selectedIndustries} options={industries} />

                            </div>
                        </div>
                    )
                }

                {
                    selectedOption === 'LAB_ASSISTANT' && (
                        <div>
                            <label className="font-medium">
                                Select Your Lab
                            </label>


                            <div className='relative'>

                                <AutoSelectVendor selected={selectedVendor} setSelected={setSelectedVendor} />
                            </div>
                        </div>
                    )
                }



                {/* ------- */}


                <div>
                    <button
                        type='submit'
                        className="w-full px-4 mt-10 py-2 text-white font-medium bg-primary hover:bg-primary active:bg-primary rounded duration-150"
                    >
                        {loading ? "loading" : 'Create account'}
                    </button>
                </div>

            </form>
        </>
    );
};

export default SignUpFrom;