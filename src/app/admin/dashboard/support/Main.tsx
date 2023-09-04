'use client'
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useQuery } from 'graphql-hooks';
import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import ChatBody from './ChatBody';
import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, setDoc } from "firebase/firestore";
import { db } from '@/firebase/fireabase.config';
import AuthConfig from '@/firebase/oauth.config';
import Loading from '@/app/loading';
import Error from '@/components/Error';

type CurrentModule = {
  ticket: string,
  id: string
}

const GET_SUPPORT_TICKETS = `
query SupportTickets($options: SupportTicketOptions) {
  supportTickets(options: $options) {
      id
      ticket
    }
  }
`

// component
const Main = () => {
  //states
  const [currentSupportTicket, setCurrentSupportTicket] = React.useState<any>({
    ticket: "",
    id: ""
  });
  const [messages, setMessages] = React.useState<any>([]);



  //hooks 
  const client = useGqlClient();



  // fetching data
  const { data, loading, error } = useQuery(GET_SUPPORT_TICKETS, {
    client,
    variables: {
      options: {
        sort: [
          {
            createdAt: "DESC"
          }
        ]
      }

    }
  });


  console.log(messages)



  // setting  the latest module as current module
  useEffect(() => {
    if (data?.moduleTickets) {
      setCurrentSupportTicket(data?.moduleTickets[0]?.ticket)
    }

  }, [data?.moduleTickets]);


  // getting data based on current module
  useEffect(() => {

    if (currentSupportTicket) {
      getData()
    }
  }, [currentSupportTicket]);





  // creating chat in firebase if not exist
  const getData = async () => {
    const docRef = doc(db, "support", currentSupportTicket?.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const unsubscribe = onSnapshot(doc(db, "support", currentSupportTicket?.id), (doc) => {

        if (doc.exists()) {
          setMessages(doc.data().messages)
        }

        return () => unsubscribe();
      });
    } else {
      await setDoc(doc(db, "support", currentSupportTicket?.id), { messages: [] });
    }

  }








  if (loading) return <Loading />;

  if (error) return <Error />

  return (
    <>
      <Sidebar data={data?.supportTickets} setCurrentSupportTicket={setCurrentSupportTicket} />
      <ChatBody messages={messages} currentSupportTicket={currentSupportTicket} />

    </>
  );
};

export default Main;