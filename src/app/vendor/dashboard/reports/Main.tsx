'use client'
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useQuery } from 'graphql-hooks';
import React, { useEffect } from 'react';
import Sidebar from './Sidebar';

import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, setDoc } from "firebase/firestore";
import { db } from '@/firebase/fireabase.config';
import { set } from 'react-hook-form';
import { currentUser } from '@/firebase/oauth.config';
import DocCards from './DocCards';


const GET_MODULE_TICKETS = `
query ModuleTickets($where: ModuleTicketWhere) {
  moduleTickets(where: $where) {
    id
    reports
    ticket
    forModule {
      title
    }
  }
}
`


const Main = () => {
  //states
  const [currentModule, setCurrentModule] = React.useState('');
  const [messages, setMessages] = React.useState<any>([]);
  //hooks 
  const client = useGqlClient();
  const user = currentUser()

  // fetching data
  const { data, loading, error } = useQuery(GET_MODULE_TICKETS, {
    client,

    variables: {
      where: {
        clientHas: {
          userIs: {
            email: user?.email || 'no email'
          }
        },
        status: "COMPLETED"
      }
    }

  });





  console.log(data, data?.moduleTickets, 'module tickets8888888888888')



  return (
    <div className='flex flex-row h-full  lg:max-h-[85vh]    w-full overflow-x-hidden'>
      <Sidebar data={data?.moduleTickets} setCurrentModule={setCurrentModule} />
      <div className='w-full'>

        <DocCards currentModule={currentModule} />
      </div>

    </div>
  );
};

export default Main;