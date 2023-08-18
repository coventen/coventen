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
const cardsData = [
    {
        id: 1,
        title: 'Billings created',
        value: 200
    },
    {
        id: 2,
        title: 'In-Progress',
        value: 100

    },
    {
        id: 3,
        title: 'Total projects',
        value: 100
    },
    {
        id: 4,
        title: 'Completed',
        value: 300
    },

]


// component
const InvoicePage = () => {

    //states
    const [currentInvoiceId, setCurrentInvoiceId] = React.useState<any>('')
    const [isOpen, setIsOpen] = React.useState(false)

    const user = currentUser()
    console.log(user?.email);

    //hooks
    const client = useGqlClient()

    // fetching invoices
    const { data, loading, refetch } = useQuery(GET_INVOICES, {
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

    const [addComplainFn, state, resetFn] = useMutation(UPDATE_INVOICE, { client });

    // initializing add complain function
    const addComplain = async (complain: string) => {

        const { data } = await addComplainFn({
            variables: {
                where: {
                    id: currentInvoiceId
                },
                update: {
                    complain: complain,
                    status: "COMPLAINED"
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

    return (
        <div className='p-4 h-full max-h-screen  flex flex-col space-y-4'>
            {/* top cards section */}
            <section className='grid grid-cols-4 xl:grid-cols-4 gap-4 h-[120px]'>
                {
                    cardsData.map((card) =>
                        <div key={card.id}>
                            <HomeCard title={card.title} value={card.value} />
                        </div>
                    )
                }
            </section>

            {/* table sections  */}

            <section className='overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch'>
                <div className='bg-desktopBgLight text-desktopPrimary py-3 text-sm font-semibold px-4 grid grid-cols-6 rounded'>
                    <p>Bill No.</p>
                    <p className='col-span-2'>InvoiceId</p>
                    <p>Total Price</p>
                    <p>Date</p>
                    <p>Quick Actions</p>
                </div>
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
                                </div>
                            </div>

                        )

                    }
                </div>

                <div>

                </div>
            </section>

            <ComplainModal isOpen={isOpen} setIsOpen={setIsOpen} addComplain={addComplain} />
        </div>
    );
};

export default InvoicePage;