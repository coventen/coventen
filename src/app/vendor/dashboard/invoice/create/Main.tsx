'use client'
import React, { useEffect, useState } from 'react';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation } from 'graphql-hooks';

import InvoiceForm from './InvoiceForm';
import AuthConfig from '@/firebase/oauth.config';
import { parse } from 'path';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { getEmployerEmail } from '@/shared/getEmployerEmail';
import createLog from '@/shared/graphQl/mutations/createLog';
import Loading from '@/app/loading';

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



// component
const Main = () => {

    // states
    const [labEmail, setLabEmail] = useState('')


    // hooks
    const client = useGqlClient()
    const { user, authLoading } = AuthConfig()
    const router = useRouter()


    // saving  user to database
    const [createInvoiceFn, state] = useMutation(CREATE_INVOICE, { client });


    // get lab email when user changes
    useEffect(() => {
        if (user?.email) {
            getLabEmail(user?.email)

        }
    }, [user?.email]);


    // getting lab email if employee is logged in
    const getLabEmail = async (userEmail: string) => {
        console.log('i am inside get lab email', userEmail)
        const email = await getEmployerEmail(userEmail)
        setLabEmail(email)



    }



    // calculate total price
    const calculateTotalPrice = (services: any, taxRate: number) => {
        const allPriceArray = services.map((service: any, i: number) => {
            let price = service[`serviceName${i}`].price
            return parseInt(price)
        })
        const totalPrice = allPriceArray.reduce((a: number, b: number) => a + b, 0)
        const totalPriceWithTax = Math.floor(totalPrice + (totalPrice * taxRate / 100))

        return { totalPriceWithTax, totalPrice }
    }



    console.log(labEmail, ' hti is e', user?.email)


    // initializing invoice creation function
    const createInvoice = async (invoiceData: any, services: any, company: any) => {

        const taxRate = parseInt(invoiceData?.taxRate)
        const { totalPriceWithTax, totalPrice } = calculateTotalPrice(services, taxRate)


        const { data } = await createInvoiceFn({
            variables: {
                input: [
                    {
                        totalPrice: totalPrice,
                        priceWithTax: totalPriceWithTax,
                        taxRate: taxRate,
                        sentBy: "VENDOR",
                        taxType: invoiceData.taxType,
                        createdAt: new Date().toISOString(),
                        vendorCreated: {
                            connect: {
                                where: {
                                    node: {
                                        userIs: {
                                            email: labEmail
                                        }
                                    }
                                }
                            }
                        },
                        hasPurchase: {
                            create: services.map((service: any, i: number) => {
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
            router.push('/vendor/dashboard/invoice')
            createLog(
                `Invoice`,
                `Invoice created by ${labEmail} For Admin`)
        }
    }


    if (state.loading || authLoading) return <Loading />

    // rendering
    return (
        <div>
            <InvoiceForm createInvoice={createInvoice} />
        </div>
    );
};

export default Main;