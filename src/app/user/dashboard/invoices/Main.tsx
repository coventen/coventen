'use client'

import React from 'react';
import HomeCard from '../HomeCard';
import AuthConfig from '@/firebase/oauth.config';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation, useQuery } from 'graphql-hooks';
import Link from 'next/link';
import ComplainModal from './ComplainModal';
import { toast } from 'react-hot-toast';
import Loading from '@/app/loading';
import Error from '@/components/Error';
import createLog from '@/shared/graphQl/mutations/createLog';


const GET_INVOICES = `
query Query($where: InvoiceWhere) {
    invoices(where: $where) {
      totalPrice
      taxType
      taxRate
      status
      priceWithTax
      id
    }
  }
`
const UPDATE_INVOICE = `
mutation UpdateInvoices($where: InvoiceWhere, $update: InvoiceUpdateInput) {
    updateInvoices(where: $where, update: $update) {
      invoices {
        id
      }
    }
  }
`

// component
const Main = () => {


    //states
    const [currentInvoiceId, setCurrentInvoiceId] = React.useState<any>('')
    const [isOpen, setIsOpen] = React.useState(false)


    //hooks
    const client = useGqlClient()
    const { user } = AuthConfig()

    // queries
    const { data, loading, error, refetch } = useQuery(GET_INVOICES, {
        client,
        variables: {
            where: {
                hasClient: {
                    userIs: {
                        email: user?.email || 'np email'
                    }
                },
            }
        }

    })

    // mutations
    const [updateInvoiceFn, state, resetFn] = useMutation(UPDATE_INVOICE, { client });

    // initializing add complain function
    const updateInvoice = async (complain: string, status: string) => {

        const { data } = await updateInvoiceFn({
            variables: {
                where: {
                    id: currentInvoiceId
                },
                update: {
                    complain: complain,
                    status: status
                }
            }
        })
        if (data?.updateInvoices?.invoices[0]?.id) {
            setIsOpen(false)
            refetch()
            toast.success('Complain added successfully')
            createLog(
                `Invoice Rejected`,
                `Invoice Rejected with id ${currentInvoiceId} by ${user?.email}`
            )
        }
    }




    if (loading || state.loading) return <Loading />
    if (error) return <Error />



    // render
    return (
        <>
            <div className='w-full'>
                {
                    data?.invoices.length === 0 && (
                        <div className='bg-white border-b px-4 py-5 text-sm border-gray-200  text-dimText flex items-center justify-between'>
                            <p>No Estimation found</p>
                        </div>
                    )
                }
                {
                    data?.invoices && data?.invoices?.map((invoice: any, i: number) =>
                        <div key={i} className='bg-white  border-b px-4 py-5 text-sm border-gray-200  text-dimText grid grid-cols-7 min-w-[700px] overflow-x-scroll lg:overflow-hidden'>
                            <p>{i + 1}</p>
                            <p className='col-span-2'>{invoice?.id}</p>
                            <p>{invoice.priceWithTax}</p>
                            <p>{invoice?.status === "SENT" ? "PENDING" : invoice?.status === "COMPLAINED" ? "COMMENTED" : invoice?.status || 'N/A'}</p>
                            <div className='space-x-3 col-span-2 flex items-center justify-center'>

                                <Link href={`/desktopHome/invoices/preview/${invoice.id}`} className='font-semibold border border-dimTetext-dimText px-3  py-1.5 rounded'>View</Link>

                                {
                                    invoice?.status === "SENT" && (
                                        <>
                                            <button onClick={() => {
                                                setIsOpen(true)
                                                setCurrentInvoiceId(invoice?.id)
                                            }} className='font-semibold border border-dimTetext-dimText px-3  py-1.5 rounded'>Comment</button>
                                            <button onClick={() => {
                                                updateInvoice('', "CONFIRMED")
                                                setCurrentInvoiceId(invoice?.id)
                                            }} className='font-semibold border border-dimTetext-dimText px-3  py-1.5 rounded'>Confirm</button>


                                        </>

                                    )
                                }

                            </div>
                        </div>

                    )

                }
            </div>
            <ComplainModal isOpen={isOpen} setIsOpen={setIsOpen} addComplain={updateInvoice} currentInvoiceId={currentInvoiceId} setCurrentInvoiceId={setCurrentInvoiceId} />
        </>
    );
};

export default Main;