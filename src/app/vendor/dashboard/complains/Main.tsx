'use client'

import { currentUser } from '@/firebase/oauth.config';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useManualQuery, useMutation, useQuery } from 'graphql-hooks';
import React, { useEffect, useState } from 'react';
import ComplainTable from './ComplainTable';
import UploadDocModal from './UploadDocModal';
import ViewModal from './ViewModal';
import { toast } from 'react-hot-toast';
import Error from '@/components/Error';
import Loading from '@/app/loading';

const GET_COMPLAIN = `
query ModuleTickets($where: ModuleTicketWhere) {
    moduleTickets(where: $where) {
      id
      ticket
      complain
      clientHas {
        userIs {
          email
        }
      }
    }
  }

`


const Main = () => {

    // states
    const [isModalOpen, setIsModalOpen] = React.useState(false)
    const [currentComplain, setCurrentComplain] = React.useState<any>('')
    const [isDocModalOpen, setIsDocModalOpen] = React.useState(false)

    // pagination states
    const [pageLimit, setPageLimit] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)



    // hooks
    const client = useGqlClient()
    const user = currentUser()



    // fetching data
    const [getComplainFn, state] = useManualQuery(GET_COMPLAIN, { client })











    // refetching data based on pagination and search query
    useEffect(() => {

        getComplainFn({
            variables: {
                where: {
                    status: "COMPLAINED",
                    vendorHas: {
                        userIs: {
                            email: user?.email
                        }
                    }
                },
                options: {
                    limit: pageLimit,
                    offset: (currentPage - 1) * pageLimit
                }
            }
        })
    }, [currentPage]);

    // getting total modules 
    const totalModules = state?.data?.moduleTickets?.length
    if (totalModules) {
        setTotalPages(Math.ceil(totalModules / pageLimit))
    }






    const { data, error, loading, refetch } = useQuery(GET_COMPLAIN, {
        client,
        variables: {

        }
    })


    if (state?.error) return <Error />
    if (state?.loading) return <Loading />


    return (
        <div>
            <ComplainTable data={data?.moduleTickets} setIsModalOpen={setIsModalOpen} setCurrentComplain={setCurrentComplain} setIsDocModalOpen={setIsDocModalOpen} />
            <UploadDocModal isDocModalOpen={isDocModalOpen} setIsDocModalOpen={setIsDocModalOpen} />
            <ViewModal currentComplain={currentComplain} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
        </div>
    );
};

export default Main;