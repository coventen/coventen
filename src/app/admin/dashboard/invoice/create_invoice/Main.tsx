'use client'
import React from 'react';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation } from 'graphql-hooks';
import { Invoice, Service } from '@/gql/graphql';
import InvoiceForm from './InvoiceForm';
import { currentUser } from '@/firebase/oauth.config';
import { parse } from 'path';

const CREATE_INVOICE = `
mutation CreateInvoices($input: [InvoiceCreateInput!]!) {
    createInvoices(input: $input) {
      info {
        nodesCreated
      }
    }
  }
`



// component
const Main = () => {


    // hooks
    const client = useGqlClient()
    const user = currentUser()


    // saving  user to database
    const [createInvoiceFn, state] = useMutation(CREATE_INVOICE, { client });


    // initializing invoice creation function
    const createInvoice = async (invoiceData: Invoice, services: any, company: string) => {
        const { data } = await createInvoiceFn({
            variables: {
                input: [
                    {
                        clientName: company,
                        clientEmail: invoiceData.clientEmail,
                        clientAddress: invoiceData.clientAddress,
                        price: invoiceData.price,
                        taxRate: 5,
                        taxType: invoiceData.taxType,
                        hasService: {
                            create: services.map((service: any, i: number) => {
                                console.log(service, 'this is it 444444444')
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
                        },
                        adminCreated: {
                            connect: {
                                where: {
                                    node: {
                                        userIs: {
                                            email: user?.email
                                        }
                                    }
                                }
                            }
                        }
                    }
                ]
            }
        })
    }


    // rendering
    return (
        <div>
            <InvoiceForm createInvoice={createInvoice} />
        </div>
    );
};

export default Main;