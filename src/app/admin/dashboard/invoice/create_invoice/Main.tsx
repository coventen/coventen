'use client'
import React from 'react';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useManualQuery, useMutation } from 'graphql-hooks';
import InvoiceForm from './InvoiceForm';

import { parse } from 'path';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import createLog from '@/shared/graphQl/mutations/createLog';
import AuthConfig from '@/firebase/oauth.config';
import { query } from 'firebase/firestore';
import { generateUniqueId } from '@/shared/genarateUniqueId';

const CREATE_INVOICE = `
mutation CreateInvoices($input: [InvoiceCreateInput!]!) {
    createInvoices(input: $input) {
      info {
        nodesCreated
        relationshipsCreated
      }
    }
  }
`
const GET_COUNTER = `
query 
Query {
    counters {
        invoiceCount
    }
  }`
const UPDATE_COUNTER = `
mutation UpdateCounters($update: CounterUpdateInput) {
    updateCounters(update: $update) {
      counters {
        invoiceCount
      }
    }
  }


  `


// component
const Main = () => {


    // hooks
    const client = useGqlClient()
    const { user } = AuthConfig()
    const router = useRouter()


    // query
    const [counterFn, counterState] = useManualQuery(GET_COUNTER, { client })

    // mutations
    const [createInvoiceFn, state] = useMutation(CREATE_INVOICE, { client });
    const [updateCounterFn, updateState] = useMutation(UPDATE_COUNTER, { client })


    // calculate total price
    const calculateTotalPrice = (purchases: any, taxRate: number) => {
        const allPriceArray = purchases.map((service: any, i: number) => {
            let price = service[`serviceName${i}`].price
            return parseInt(price)
        })
        const totalPrice = allPriceArray.reduce((a: number, b: number) => a + b, 0)
        const totalPriceWithTax = Math.floor(totalPrice + (totalPrice * taxRate / 100))

        return { totalPriceWithTax, totalPrice }
    }






    // initializing invoice creation function
    const createInvoice = async (invoiceData: any, purchases: any, company: any) => {

        const taxRate = parseInt(invoiceData?.taxRate)
        const { totalPriceWithTax, totalPrice } = calculateTotalPrice(purchases, taxRate)
        const ticketId = await generateModuleTicket()

        const { data } = await createInvoiceFn({
            variables: {
                input: [
                    {
                        clientName: company,
                        totalPrice: totalPrice,
                        priceWithTax: totalPriceWithTax,
                        ticket: ticketId,
                        taxRate: taxRate,
                        sentBy: "ADMIN",
                        status: "SENT",
                        taxType: invoiceData.taxType,
                        createdAt: new Date().toISOString(),
                        hasClient: {
                            connect: {
                                where: {
                                    node: {
                                        userIs: {
                                            companyName: company
                                        }
                                    }
                                }
                            }
                        },
                        hasPurchase: {
                            create: purchases.map((service: any, i: number) => {
                                let name = service[`serviceName${i}`].serviceName
                                let price = service[`serviceName${i}`].price

                                return {
                                    node: {
                                        itemName: name,
                                        price: parseInt(price),
                                    }
                                }
                            }
                            )
                        }

                    }
                ]
            }
        })

        if (data.createInvoices.info.nodesCreated) {
            toast.success('Invoice created successfully')
            router.push('/admin/dashboard/invoice')
            createLog(
                `Invoice Creation`,
                `Invoice Created with id by ${user?.email}`
            )
        }
    }




    const generateModuleTicket = async () => {
        const { data } = await counterFn()
        const counter = data?.counters[0]
        console.log('this is ticket from inside')
        if (counter?.invoiceCount) {
            const invoiceCount = counter?.invoiceCount + 1
            const ticket = generateUniqueId("E-", invoiceCount)
            // updating project counter
            updateCounterFn({
                variables: {
                    update: {
                        invoiceCount: invoiceCount,
                    }
                }
            })

            console.log('this is ticket from inside', ticket)
            return ticket
        }
        return null
    }




    // rendering
    return (
        <div>
            <InvoiceForm createInvoice={createInvoice} />
        </div>
    );
};

export default Main;