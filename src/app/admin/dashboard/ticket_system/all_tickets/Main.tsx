'use client'
import { useQuery } from 'graphql-hooks';
import React from 'react';
import TicketTable from './TicketTable';
import { useGqlClient } from '@/hooks/UseGqlClient';
import AssignmentModal from '../../assignment/AssignmentModal';

const GET_MODULE_TICKETS = `
query ModuleTickets {
    moduleTickets {
      id
      ticket
      status
      clientHas {
        userIs {
        companyName
          email
        }
      }
      vendorHas {
        userIs {
          companyName
        }
      }
      
    }
  }

`

const Main = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [currentProject, setCurrentProject] = React.useState({});


    //HOOKS
    const client = useGqlClient()
    const { data, loading, error, refetch } = useQuery(GET_MODULE_TICKETS, { client })

    console.log(data?.moduleTickets)

    return (
        <div>
            <TicketTable data={data?.moduleTickets} setIsOpen={setIsOpen} />
            <AssignmentModal setIsOpen={setIsOpen} isOpen={isOpen} currentProject={currentProject} refetchProjects={refetch} />
        </div>
    );
};

export default Main;