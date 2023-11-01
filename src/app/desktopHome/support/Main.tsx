import AuthConfig from '@/firebase/oauth.config';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation, useQuery } from 'graphql-hooks';
import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, setDoc } from "firebase/firestore";
import { db } from '@/firebase/fireabase.config';
import ChatBody from './ChatBody';
import Loading from '@/app/loading';
import Error from '@/components/Error';




const GET_SUPPORT_TICKETS = `
query SupportTickets($where: SupportTicketWhere) {
    supportTickets(where: $where) {
      id
      ticket
    }
  }
`

const CREATE_SUPPORT_TICKET = `
mutation CreateSupportTickets($input: [SupportTicketCreateInput!]!) {
    createSupportTickets(input: $input) {
      info {
        nodesCreated
        relationshipsCreated
      }
    }
  }
`
const UPDATE_SUPPORT_TICKET = `
mutation UpdateSupportTickets($where: SupportTicketWhere, $update: SupportTicketUpdateInput) {
    updateSupportTickets(where: $where, update: $update) {
      info {
        nodesCreated
      }
    }
  }
`


// component
const Main = () => {
    //states
    const [messages, setMessages] = React.useState<any>([]);

    //hooks
    const { user } = AuthConfig()
    const client = useGqlClient()

    // queries
    const { data: supportTicketData, error, loading, refetch } = useQuery(GET_SUPPORT_TICKETS, {
        client,
        variables: {
            where: {
                clientHas: {
                    userIs: {
                        email: user?.email
                    }
                }
            }
        }

    })

    // mutations
    const [createSupportTicketFn, createState] = useMutation(CREATE_SUPPORT_TICKET, { client })
    const [updateSupportTicketFn, updateState] = useMutation(UPDATE_SUPPORT_TICKET, { client })



    // checking if user has a support ticket
    useEffect(() => {
        if (supportTicketData?.supportTickets[0]?.id) {
            getData()
        }
    }, [supportTicketData?.supportTickets, user?.email]);

    console.log(supportTicketData?.supportTickets[0]?.id, 'supportTicketData?.supportTickets[0]?.id')

    // checking if user has a support ticket and if not create one or update the date
    const handleSupportTicket = async () => {
        if (!supportTicketData.supportTickets[0]?.id && !loading && !error) {
            createTicket()
        } else {
            updateTicket()
        }
    }

    // CREATES A SUPPORT TICKET
    const createTicket = async () => {

        const { data } = await createSupportTicketFn({
            variables: {
                input: [
                    {
                        ticket: `S-${uuidv4()}`,
                        createdAt: new Date().toISOString(),
                        clientHas: {
                            connect: {
                                where: {
                                    node: {
                                        userIs: {
                                            email: user?.email
                                        }
                                    }
                                }
                            }
                        }
                    }
                ]
            }
        })

        if (data?.createSupportTickets?.info?.nodesCreated) {
            refetch()
        }
    }

    // UPDATE SUPPORT TICKET DATE
    const updateTicket = async () => {
        const { data } = await updateSupportTicketFn({
            variables: {
                where: {
                    id: supportTicketData?.supportTickets[0]?.id
                },
                update: {
                    createdAt: new Date().toISOString()
                }
            }
        })
    }


    if (loading || updateState.loading || createState.loading) return <Loading />

    if (error || updateState.error || createState.error) return <Error />




    // creating chat in firebase if not exist
    const getData = async () => {
        const docRef = doc(db, "support", supportTicketData?.supportTickets[0]?.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const unsubscribe = onSnapshot(doc(db, "support", supportTicketData?.supportTickets[0]?.id), (doc) => {

                if (doc.exists()) {
                    setMessages(doc.data().messages)
                }

                return () => unsubscribe();
            });
        } else {
            await setDoc(doc(db, "support", supportTicketData?.supportTickets[0]?.id), { messages: [] });
        }

    }


    return (
        <>
            <ChatBody messages={messages} supportTicket={supportTicketData?.supportTickets[0]?.id} handleSupportTicket={handleSupportTicket} getData={getData} />
        </>
    );
};

export default Main;