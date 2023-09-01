'use client';
import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight, HiOutlineCalendar } from 'react-icons/hi';
import industries from '@/utlts/InductiresData.json'
import { useGqlClient } from '@/hooks/UseGqlClient';

import { toast } from 'react-hot-toast';
import { useMutation } from 'graphql-hooks';


// interface
interface Inputs {
    email: string;
    phone: string;
    gstNumber?: string;
}

// mutation

const CREATE_LEAD = `
mutation CreateLeads($input: [LeadsCreateInput!]!) {
    createLeads(input: $input) {
      info {
        nodesCreated
      }
    }
  }
`





//component
const Leads = () => {

    //states
    const [isLeadFromOpen, setIsLeadFromOpen] = useState<boolean>(false);
    const [selectedIndustry, setSelectedIndustry] = useState<any>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [message, setMessage] = useState<string>('');


    // hooks
    const client = useGqlClient()

    // queries and mutations
    const [createLead, createState] = useMutation(CREATE_LEAD, { client })




    // functions

    const createLeads = async () => {
        const { data } = await createLead({
            variables: {
                input: [
                    {
                        email: email,
                        phone: phone,
                        industry: selectedIndustry,
                        createdAt: new Date().toISOString(),
                        message: message
                    }
                ]
            }
        })


        if (data.createLeads.info.nodesCreated) {
            setIsLeadFromOpen(false)
            toast.success('Test Requested Successfully')
            setEmail('')
            setPhone('')
            setMessage('')
        }
    }


    const handleSubmit = (e: any) => {
        e.preventDefault()
        createLeads()
        e.target.reset()


    }

    // render   
    return (
        <div className="fixed top-52 right-0  hidden lg:block z-[999999999999999999999999999] overflow-hidden">
            <div className={`transition-all duration-500 transform ${isLeadFromOpen ? 'translate-x-0' : 'translate-x-[93%]'
                } `}>
                <div className="flex  ">
                    <button onClick={() => setIsLeadFromOpen(!isLeadFromOpen)} className="bg-primary text-white text-4xl rounded-sm hidden lg:block h-28 ">

                        {
                            isLeadFromOpen ? <HiChevronRight /> : <p className='text-[10px] font-bold' style={{ textOrientation: "upright", writingMode: 'vertical-lr' }}>INQUIRY</p>
                        }


                    </button>
                    <div className='w-full'>
                        <div className="flex  ">
                            <div className="m-auto">
                                <div>
                                    <form onSubmit={handleSubmit} className=" bg-white border border-gray-200 shadow-lg ">
                                        <div className="flex">
                                            <div className="flex-1 py-5 pl-5 text-primaryText overflow-hidden flex items-center  space-x-3">
                                                <HiOutlineCalendar size={25} />
                                                <h1 className="inline text-2xl font-semibold leading-none">
                                                    Get Test
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="px-5 pb-5">
                                            <input
                                                placeholder="Email"
                                                required
                                                onChange={(e) => setEmail(e.target.value)}
                                                defaultValue={email}
                                                className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-sm bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"

                                            />
                                            <input
                                                placeholder="Phone"
                                                required
                                                onChange={(e) => setPhone(e.target.value)}
                                                defaultValue={phone}
                                                className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-sm bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"

                                            />
                                            <div className="flex">
                                                <div className="flex-grow">
                                                    <select
                                                        value={selectedIndustry}
                                                        onChange={(e) => setSelectedIndustry(e.target.value)}
                                                        className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-sm bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"

                                                    >
                                                        <option value="" disabled>Select an Industry</option>
                                                        {industries?.map((option: any) => (


                                                            <option key={option?.id} value={option?.name}>
                                                                {option?.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <textarea
                                                    rows={3}
                                                    placeholder="message"
                                                    required
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    defaultValue={message}
                                                    className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-sm bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"

                                                />
                                            </div>
                                            <div className="mt-8">
                                                <button type='submit' className='bg-primary font-bold text-white px-7 py-2.5 rounded'>
                                                    {createState.loading ? 'Loading..' : 'Submit'}
                                                </button>
                                            </div>

                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Leads;
