'use client'
import AutoComplete from '@/components/AutoComplete';
import React from 'react';
import { useForm, SubmitHandler, set } from "react-hook-form"
import ServicesFrom from './ServicesFrom';
import { Invoice, Service } from '@/gql/graphql';
import { BsPercent } from 'react-icons/bs';
import AutoSelect from '@/components/AutoSelect';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useQuery } from 'graphql-hooks';

interface IInvoiceForm {
    createInvoice: (invoiceData: Invoice, services: Service[], company: string) => void
}

const GET_VENDORS = `
query Users($where: UserWhere) {
    users(where: $where) {
      companyName
      id
    }
  }
`

const InvoiceForm = ({ createInvoice }: IInvoiceForm) => {

    //states
    const [serviceCount, setServiceCount] = React.useState(3)
    const [selected, setSelected] = React.useState<any>(null);
    const [services, setServices] = React.useState<any[]>([]);







    //hooks 
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<any>()

    const client = useGqlClient();
    const { data: vendors, loading } = useQuery(GET_VENDORS, {
        client,
        variables: {
            where: {
                user_type: "CONSUMER",
                status: "APPROVED"
            }
        }
    })


    // handle creating invoice
    const handleCreating: SubmitHandler<any> = (data) => {
        console.log(data, 'data')
        createInvoice(data, services, selected ? selected.companyName : '')
    }


    // handle service count
    if (serviceCount < 1) {
        setServiceCount(1)
    }


    return (

        <div className="">
            <div className="container max-w-screen-lg mx-auto">
                <div>

                    <div className="bg-white rounded p-4 px-4 md:p-8 mb-6">
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">


                            <div className="lg:col-span-2">
                                <form onSubmit={handleSubmit(handleCreating)} className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                    <div className="md:col-span-5 mb-10">
                                        <label htmlFor="full_name">Company Name</label>
                                        <div className='relative'>

                                            <AutoSelect setSelected={setSelected} selected={selected} data={vendors?.users} />
                                        </div>
                                        {/* <input type="text" name="full_name" id="full_name" className="h-10 border border-gray-300 mt-1 rounded px-4 w-full "  /> */}
                                    </div>

                                    <div className='col-span-2'>
                                        <p >Tax</p>

                                        <div className="flex  sm:flex-row  ">
                                            <div className="flex flex-row mb-1 sm:mb-0">

                                                <div className="relative">
                                                    <select
                                                        className=" h-full rounded-r border-t  rounded-l-md sm:rounded-r-none sm:border-r-0 border-r border-b block  w-full bg-white border-gray-300 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500" {...register("taxType")}>
                                                        <option>GST</option>
                                                        <option>SGST</option>
                                                        <option>UGST</option>
                                                    </select>

                                                </div>
                                            </div>
                                            <div className="block relative">
                                                <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                                                    <BsPercent />
                                                </span>
                                                <input placeholder="Tax rate"
                                                    type='number'
                                                    className="  sm:rounded-l-none rounded-r-md  border border-gray-300 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" {...register("taxRate")} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* services */}
                                    <div className="md:col-span-5 mt-8">
                                        <div>
                                            {/* service title */}
                                            <div className='flex  justify-between'>
                                                <p className='text-xl font-semibold text-gray-800'>
                                                    Services
                                                </p>

                                                <div>
                                                    <label >Add More service</label>
                                                    <div className="h-10 w-28  flex border border-gray-300  rounded items-center mt-1">
                                                        <button
                                                            onClick={() => setServiceCount(serviceCount - 1)}
                                                            className="cursor-pointer outline-none focus:outline-none border-r border-gray-300 transition-all text-gray-500 hover:text-blue-600">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                            </svg>
                                                        </button>
                                                        <input name="soda" id="soda" placeholder="0"
                                                            className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
                                                            readOnly
                                                            value={serviceCount} />
                                                        <button onClick={() => setServiceCount(serviceCount + 1)} className="cursor-pointer outline-none focus:outline-none border-l border-gray-300 transition-all text-gray-500 hover:text-blue-600">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2 fill-current" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                            {/* service inputs */}
                                            <div className='space-y-5'>
                                                {
                                                    [...Array(serviceCount)].map((_, i) =>

                                                        <div key={i}>
                                                            <ServicesFrom index={i} services={services} setServices={setServices} />
                                                        </div>
                                                    )
                                                }
                                            </div>


                                        </div>
                                    </div>

                                    <div className="md:col-span-5 text-right mt-8">
                                        <div className="inline-flex items-end">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default InvoiceForm;