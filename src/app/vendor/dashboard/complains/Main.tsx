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
import Pagination from '@/components/Pagination';
import { getEmployerEmail } from '@/shared/getEmployerEmail';

const GET_COMPLAIN = `
query ModuleTickets($options: ModuleTicketOptions, $where: ModuleTicketWhere) {
    moduleTickets(options: $options, where: $where) {
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
    const [data, setData] = useState<any>([])
    const [labEmail, setLabEmail] = useState('')

    // pagination states
    const [pageLimit, setPageLimit] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [totalComplain, setTotalComplain] = useState(0)



    // hooks
    const client = useGqlClient()
    const user = currentUser()



    // fetching data
    const [getComplainFn, state] = useManualQuery(GET_COMPLAIN, { client })



    // refetching data based on pagination and search query
    useEffect(() => {
        getLabEmail()
        getComplainData()
        getTotalComplains()
    }, [currentPage, user?.email, labEmail]);



    // getting lab email if employee is logged in
    const getLabEmail = async () => {
        if (user?.email) {
            const email = await getEmployerEmail(user?.email)
            setLabEmail(email)
        }


    }

    // getting total modules 
    const getTotalComplains = async () => {
        const { data } = await getComplainFn({
            variables: {
                where: {
                    status: "COMPLAINED",
                    vendorHas: {
                        userIs: {
                            email: labEmail
                        }
                    }
                }
            }
        })
        if (data.moduleTickets.length) {
            setTotalComplain(data.moduleTickets.length)
            setTotalPages(Math.ceil(data.moduleTickets.length / pageLimit))
        }

    }

    const getComplainData = async () => {
        const { data } = await getComplainFn({
            variables: {
                where: {
                    status: "COMPLAINED",
                    vendorHas: {
                        userIs: {
                            email: labEmail
                        }
                    }
                },
                options: {
                    limit: pageLimit,
                    offset: (currentPage - 1) * pageLimit
                }
            }
        })

        console.log(data, 'data3')

        if (data.moduleTickets.length) {
            setData(data.moduleTickets)
        }
    }





    if (state?.error) return <Error />
    if (state?.loading) return <Loading />


    return (
        <div>
            <ComplainTable data={data} setIsModalOpen={setIsModalOpen} setCurrentComplain={setCurrentComplain} setIsDocModalOpen={setIsDocModalOpen} />
            <div className='w-full flex items-center justify-center'>
                {totalComplain! > pageLimit &&
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />}

            </div>
            <UploadDocModal isDocModalOpen={isDocModalOpen} setIsDocModalOpen={setIsDocModalOpen} />
            <ViewModal currentComplain={currentComplain} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
        </div>
    );
};

export default Main;