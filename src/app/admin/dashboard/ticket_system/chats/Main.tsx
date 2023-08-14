'use client'
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useQuery } from 'graphql-hooks';
import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import ChatBody from './ChatBody';
import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, setDoc } from "firebase/firestore";
import { db } from '@/firebase/fireabase.config';
import { set } from 'react-hook-form';

const GET_MODULE_TICKETS = `
query ModuleTickets {
    moduleTickets {
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

  // fetching data
  const { data, loading, error } = useQuery(GET_MODULE_TICKETS, { client });


  useEffect(() => {

    if (currentModule) {
      console.log(currentModule, 'this is current module')
      getData()
    }
  }, [currentModule]);







  // creating chat in firebase if not exist
  const getData = async () => {
    console.log(currentModule, 'this is inside')
    const docRef = doc(db, "chats", currentModule);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:3", docSnap.data());
      console.log(currentModule, 'this is inside2')
      const unsubscribe = onSnapshot(doc(db, "chats", currentModule), (doc) => {

        if (doc.exists()) {
          console.log("Current data: 54646", doc.data().messages);
          setMessages(doc.data().messages)
        }

        return () => unsubscribe();
      });
    } else {
      await setDoc(doc(db, "chats", currentModule), { messages: [] });
    }


    // try {

    //   const res = await getDocs(collection(db, "chats", "NSu0LN5Xup8XWJTni3Qx"));

    //   console.log(res, 'this i sressssssssssss')

    // } catch (error) {
    //   console.log(error);
    // }
  }

  return (
    <>
      <Sidebar data={data?.moduleTickets} setCurrentModule={setCurrentModule} />
      <ChatBody messages={messages} currentModule={currentModule} />

    </>
  );
};

export default Main;