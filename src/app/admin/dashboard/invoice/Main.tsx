import { useGqlClient } from '@/hooks/UseGqlClient';
import { useQuery } from 'graphql-hooks';
import React from 'react';
import InvoiceTable from './InvoiceTable';

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


const Main = () => {

    // hooks
    const client = useGqlClient()

    // fetching invoices
    const { data, loading } = useQuery(GET_INVOICES, { client })


    return (
        <div>
            <InvoiceTable data={data?.invoices} />
        </div>
    );
};

export default Main;