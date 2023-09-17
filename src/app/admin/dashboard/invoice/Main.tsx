'use client'
import { useEffect, useState } from 'react';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useManualQuery, useMutation, useQuery } from 'graphql-hooks';
import React from 'react';
import InvoiceTable from './InvoiceTable';
import { toast } from 'react-hot-toast';
import Pagination from '@/components/Pagination';

const GET_INVOICES = `
query Query($where: InvoiceWhere, $options: InvoiceOptions) {
  invoices(where: $where, options: $options){
      id
      clientName
      clientEmail
      totalPrice
      status
      ticket
    }
  }`
const DELETE_INVOICES = `
mutation Mutation($where: InvoiceWhere) {
  deleteInvoices(where: $where) {
    nodesDeleted
  }
}`


const Main = () => {
  // search sates
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedInvoiceType, setSelectedInvoiceType] = useState('All')

  // pagination states
  const [pageLimit, setPageLimit] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [totalInvoice, setTotalInvoice] = useState(0)
  const [invoiceData, setInvoiceData] = useState<any>([])

  // hooks
  const client = useGqlClient()


  //quires 
  const [getInvoiceFn, invoiceDataState] = useManualQuery(GET_INVOICES, { client })

  // mutation
  const [deleteInvoiceFn, state] = useMutation(DELETE_INVOICES, { client });


  // refetching data based on pagination and search query
  useEffect(() => {
    let where
    if (selectedInvoiceType !== 'All') {
      where = {
        sentBy_IN: [selectedInvoiceType]
      }
    } else {
      where = {
        sentBy_IN: ["ADMIN", "VENDOR"]
      }
    }

    getInvoiceData(where)
    getInvoiceCount()
  }, [currentPage, searchQuery, selectedInvoiceType]);



  // initializing query and mutations

  const getInvoiceCount = async () => {
    const { data } = await getInvoiceFn({
      variables: {
        where: {
          sentBy_IN: ["ADMIN", "VENDOR"]
        }
      }
    })
    if (data.invoices.length) {
      setTotalInvoice(data.invoices.length)
      setTotalPages(Math.ceil(data.invoices.length / pageLimit))
    }

  }

  const getInvoiceData = async (where: any) => {
    const { data } = await getInvoiceFn({
      variables: {
        where: where,
        options: {
          limit: pageLimit,
          offset: (currentPage - 1) * pageLimit,
          sort: [
            {
              createdAt: "DESC"
            }
          ]
        }
      }
    })



    if (data.invoices.length) {
      setInvoiceData(data?.invoices)
    }
  }




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
      getInvoiceData({ sentBy_IN: ["ADMIN", "VENDOR"] })
    }
  }

  console.log(invoiceData, 'invoiceData')


  return (
    <div>
      <InvoiceTable data={invoiceData} deleteInvoice={deleteInvoice} />
      <div className='w-full flex items-center justify-center'>
        {totalInvoice! > pageLimit &&
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />}

      </div>
    </div>
  );
};

export default Main;