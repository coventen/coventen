'use client'
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation, useQuery } from 'graphql-hooks';
import React from 'react';
import InvoiceTable from './InvoiceTable';
import { toast } from 'react-hot-toast';

const GET_INVOICES = `
query Invoices {
    invoices {
      id
      clientName
      clientEmail
      totalPrice
      status
    }
  }`
const DELETE_INVOICES = `
mutation Mutation($where: InvoiceWhere) {
  deleteInvoices(where: $where) {
    nodesDeleted
  }
}`


const Main = () => {

    // hooks
    const client = useGqlClient()

    // fetching invoices
    const { data, loading, refetch } = useQuery(GET_INVOICES, { client })
    const [deleteInvoiceFn, state] = useMutation(DELETE_INVOICES, { client });

    const deleteInvoice = async (id: any) => {
        const { data } = await deleteInvoiceFn({
            variables: {
                where: {
                    id: id
                }
            }
        })

        if (data?.deleteInvoices?.nodesDeleted > 0) {
            toast.success('Invoice deleted successfully')
            refetch()

        }
    }


    return (
        <div>
            <InvoiceTable data={data?.invoices} deleteInvoice={deleteInvoice} />
        </div>
    );
};

export default Main;