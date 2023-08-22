'use client'

import { currentUser } from '@/firebase/oauth.config';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation, useQuery } from 'graphql-hooks';
import React from 'react';
import ComplainTable from './ComplainTable';
import UploadDocModal from './UploadDocModal';
import ViewModal from './ViewModal';
import { toast } from 'react-hot-toast';

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



    // hooks
    const client = useGqlClient()
    const user = currentUser()

    // fetching data
    const { data, error, loading, refetch } = useQuery(GET_COMPLAIN, {
        client,
        variables: {
            where: {
                status: "COMPLAINED",
                vendorHas: {
                    userIs: {
                        email: user?.email
                    }
                }
            }
        }
    })




    return (
        <div>
            <ComplainTable data={data?.moduleTickets} setIsModalOpen={setIsModalOpen} setCurrentComplain={setCurrentComplain} setIsDocModalOpen={setIsDocModalOpen} />
            <UploadDocModal isDocModalOpen={isDocModalOpen} setIsDocModalOpen={setIsDocModalOpen} />
            <ViewModal currentComplain={currentComplain} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
        </div>
    );
};

export default Main;