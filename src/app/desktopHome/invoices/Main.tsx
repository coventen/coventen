'use client'

import React from 'react';
import HomeCard from '../HomeCard';
import { currentUser } from '@/firebase/oauth.config';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation, useQuery } from 'graphql-hooks';
import Link from 'next/link';
import ComplainModal from './ComplainModal';
import { toast } from 'react-hot-toast';
import Loading from '@/app/loading';
import Error from '@/components/Error';


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
    const user = currentUser()

    // queries
    const { data, loading, error, refetch } = useQuery(GET_INVOICES, {
        client,
        variables: {
            where: {
                hasClient: {
                    userIs: {
                        email: user?.email
                    }
                },
                status: "SENT"
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
        if (data.updateInvoices.invoices[0].id) {
            setIsOpen(false)
            refetch()
            toast.success('Complain added successfully')
        }
    }


    if (loading || state.loading) return <Loading />
    if (error) return <Error />



    // render
    return (
        <>
            <div >
                {
                    data?.invoices.length === 0 && (
                        <div className='bg-white border-b px-4 py-5 text-sm border-gray-200  text-desktopPrimary flex items-center justify-between'>
                            <p>No invoices found</p>
                        </div>
                    )
                }
                {
                    data?.invoices && data?.invoices?.map((invoice: any, i: number) =>
                        <div key={i} className='bg-white  border-b px-4 py-5 text-sm border-gray-200  text-desktopPrimary grid grid-cols-6'>
                            <p>{i + 1}</p>
                            <p className='col-span-2'>{invoice?.id}</p>
                            <p>{invoice.priceWithTax}</p>
                            <p>{invoice.createdAt || "N/A"}</p>
                            <div className='space-x-3'>

                                <Link href={`/desktopHome/invoices/preview/${invoice.id}`} className='font-semibold border border-desktopPrimary px-3  py-1.5 rounded'>View</Link>
                                <button onClick={() => setIsOpen(true)} className='font-semibold border border-desktopPrimary px-3  py-1.5 rounded'>Complain</button>
                                <button onClick={() => updateInvoice('', "CONFIRMED")} className='font-semibold border border-desktopPrimary px-3  py-1.5 rounded'>Complain</button>
                            </div>
                        </div>

                    )

                }
            </div>
            <ComplainModal isOpen={isOpen} setIsOpen={setIsOpen} addComplain={updateInvoice} />
        </>
    );
};

export default Main;