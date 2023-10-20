'use client'
import { useEffect, useState } from 'react';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useManualQuery, useMutation, useQuery } from 'graphql-hooks';
import React from 'react';
import InvoiceTable from './InvoiceTable';
import { toast } from 'react-hot-toast';
import Pagination from '@/components/Pagination';
import ViewModal from './ViewModal';
import AuthConfig from '@/firebase/oauth.config';
import createLog from '@/shared/graphQl/mutations/createLog';

const GET_INVOICES = `
query Query($where: InvoiceWhere, $options: InvoiceOptions) {
  invoices(where: $where, options: $options){
      id
      clientName
      clientEmail
      totalPrice
      status
      ticket
      complain
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
  const [isOpen, setIsOpen] = useState(false);
  const [currentComplain, setCurrentComplain] = useState<any>('')

  // pagination states
  const [pageLimit, setPageLimit] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [totalInvoice, setTotalInvoice] = useState(0)
  const [invoiceData, setInvoiceData] = useState<any>([])

  // hooks
  const client = useGqlClient()
  const { user } = AuthConfig()


  //quires 
  const [getInvoiceFn, invoiceDataState] = useManualQuery(GET_INVOICES, { client })

  // mutation
  const [deleteInvoiceFn, state] = useMutation(DELETE_INVOICES, { client });


  // refetching data based on pagination and search query
  useEffect(() => {
    let where
    where = {
      status: "COMPLAINED"
    }

    getInvoiceData(where)
    getInvoiceCount()
  }, [currentPage]);



  // initializing query and mutations

  const getInvoiceCount = async () => {
    const { data } = await getInvoiceFn({
      variables: {
        where: {
          status: "COMPLAINED"
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
      getInvoiceData({ status: "COMPLAINED" })
      createLog(
        `Estimation `,
        `Estimation deleted by ${user?.email} `,
      )
    }
  }

  console.log(invoiceData, 'invoiceData')


  return (
    <div>
      <InvoiceTable data={invoiceData} deleteInvoice={deleteInvoice} setCurrentComplain={setCurrentComplain} setIsOpen={setIsOpen} />
      <div className='w-full flex items-center justify-center'>
        {totalInvoice! > pageLimit &&
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />}

      </div>
      <ViewModal isOpen={isOpen} setIsOpen={setIsOpen} complain={currentComplain} />
    </div>
  );
};

export default Main;