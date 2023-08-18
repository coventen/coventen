'use client'
import React from 'react';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation } from 'graphql-hooks';
import { Invoice, Service } from '@/gql/graphql';
import InvoiceForm from './InvoiceForm';
import { currentUser } from '@/firebase/oauth.config';
import { parse } from 'path';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

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


    // hooks
    const client = useGqlClient()
    const user = currentUser()
    const router = useRouter()


    // saving  user to database
    const [createInvoiceFn, state] = useMutation(CREATE_INVOICE, { client });


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






    // initializing invoice creation function
    const createInvoice = async (invoiceData: any, services: any, company: any) => {

        const taxRate = parseInt(invoiceData?.taxRate)
        const { totalPriceWithTax, totalPrice } = calculateTotalPrice(services, taxRate)

        console.log("totalPriceWithTax", totalPriceWithTax, totalPrice, taxRate)

        const { data } = await createInvoiceFn({
            variables: {
                input: [
                    {
                        clientName: company,
                        totalPrice: totalPrice,
                        priceWithTax: totalPriceWithTax,
                        taxRate: taxRate,
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
                        hasService: {
                            create: services.map((service: any, i: number) => {
                                let name = service[`serviceName${i}`].serviceName
                                let price = service[`serviceName${i}`].price

                                return {
                                    node: {
                                        serviceName: name,
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
        }
    }


    // rendering
    return (
        <div>
            <InvoiceForm createInvoice={createInvoice} />
        </div>
    );
};

export default Main;