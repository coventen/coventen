'use client'



import { useGqlClient } from "@/hooks/UseGqlClient";
import { useMutation, useQuery } from "graphql-hooks";
import Cookies from "js-cookie";
import React, { useContext, useEffect } from "react";
import { createContext, ReactNode } from "react";
import { useState } from "react";


const GET_EMAIL_COUNT = `
query CommunicationTickets($where: CommunicationTicketWhere) {
    communicationTickets(where: $where) {
      id
    }
  }
`


const GET_NEW_USER_COUNT = `
query Users($where: UserWhere) {
    users(where: $where) {
      id
    }
  }
`

const GET_INVOICE_COUNT = `
query Invoices($where: InvoiceWhere) {
    invoices(where: $where) {
      id
    }
  }
`

const GET_LEAD_COUNT = `
query Leads($where: LeadsWhere) {
    leads(where: $where) {
      id
    }
  }
`

const GET_PROJECT_COUNT = `
query Projects($where: ProjectWhere) {
    projects(where: $where) {
      id
    }
  }
`

const UPDATE_EMAIL_VIEW = `mutation UpdateCommunicationTickets($where: CommunicationTicketWhere, $update: CommunicationTicketUpdateInput) {
    updateCommunicationTickets(where: $where, update: $update) {
      info {
        nodesCreated
      }
    }
  }`

const UPDATE_NEW_USER_VIEW = `
mutation UpdateUsers($where: UserWhere, $update: UserUpdateInput) {
    updateUsers(where: $where, update: $update) {
      info {
        nodesCreated
      }
    }
  }`
const UPDATE_INVOICE_VIEW = `
mutation UpdateInvoices($where: InvoiceWhere, $update: InvoiceUpdateInput) {
    updateInvoices(where: $where, update: $update) {
      info {
        nodesCreated
      }
    }
  }
`
const UPDATE_LEAD_VIEW = `
mutation UpdateLeads($where: LeadsWhere, $update: LeadsUpdateInput) {
    updateLeads(where: $where, update: $update) {
      info {
        nodesCreated
      }
    }
  }`
const UPDATE_PROJECT_VIEW = `
mutation UpdateProjects($where: ProjectWhere, $update: ProjectUpdateInput) {
    updateProjects(where: $where, update: $update) {
      info {
        nodesCreated
      }
    }
  }`





export const CounterContext = createContext<ContextType | undefined>(undefined);


type ContextType = {
  emailCounter: number;
  newUserCounter: number;
  invoiceCounter: number;
  leadCounter: number;
  complainCounter: number;
  projectCounter: number;
  emailRefetch: any;
  projectRefetch: any;
  leadRefetch: any;
  newUserRefetch: any;
  invoiceRefetch: any;
  emailCountLoading: boolean;
  projectCountLoading: boolean;
  leadCountLoading: boolean;
  newUserCountLoading: boolean;
  invoiceCountLoading: boolean;
  handleUpdateView: (id: string, type: string) => void;
}


type AuthProviderProps = {
  children: ReactNode;
};

const CounterProvider = ({ children }: AuthProviderProps) => {
  const [emailCounter, setEmailCounter] = useState(0);
  const [newUserCounter, setNewUserCounter] = useState(0);
  const [invoiceCounter, setInvoiceCounter] = useState(0);
  const [leadCounter, setLeadCounter] = useState(0);
  const [complainCounter, setComplainCounter] = useState(0);
  const [projectCounter, setProjectCounter] = useState(0);




  // HOOKS
  const client = useGqlClient()



  //quires
  const { data: emailCountData, error: emailCountError, loading: emailCountLoading, refetch: emailRefetch } = useQuery(GET_EMAIL_COUNT, {
    client,
    variables: {
      "where": {
        "isViewed": false,
        "sender_IN": ["CONSUMER", "SERVICE_PROVIDER"]
      }
    }
  })


  const { data: projectCountData, error: projectCountError, loading: projectCountLoading, refetch: projectRefetch } = useQuery(GET_PROJECT_COUNT, {
    client,
    variables: {
      "where": {
        "isViewed": false,
        "status": "PENDING"
      }
    }
  })


  const { data: leadCountData, error: leadCountError, loading: leadCountLoading, refetch: leadRefetch } = useQuery(GET_LEAD_COUNT, {
    client,
    variables: {
      "where": {
        "isViewed": false,
      }
    }
  })


  const { data: newUserCountData, error: newUserCountError, loading: newUserCountLoading, refetch: newUserRefetch } = useQuery(GET_NEW_USER_COUNT, {
    client,
    variables: {
      "where": {
        "isViewed": false,
        "status": "PENDING",
        user_type_IN: ["CONSUMER", "SERVICE_PROVIDER"]
      }
    }
  })

  const { data: invoiceCountData, error: invoiceCountError, loading: invoiceCountLoading, refetch: invoiceRefetch } = useQuery(GET_INVOICE_COUNT, {
    client,
    variables: {
      "where": {
        "isViewed": false,
        "sentBy_IN": ["ADMIN", "VENDOR"]
      }
    }
  })



  //mutations

  const [updateProjectView] = useMutation(UPDATE_PROJECT_VIEW, { client })
  const [updateEmailView] = useMutation(UPDATE_EMAIL_VIEW, { client })
  const [updateLeadView] = useMutation(UPDATE_LEAD_VIEW, { client })
  const [updateInvoiceView] = useMutation(UPDATE_INVOICE_VIEW, { client })
  const [updateNewUserView] = useMutation(UPDATE_NEW_USER_VIEW, { client })





  const handleUpdateView = async (id: string, type: string) => {
    const variables = {
      "where": {
        "id": id
      },
      "update": {
        "isViewed": true
      }
    }

    if (type === "project") {
      await updateProjectView({ variables })
    } else if (type === "email") {
      await updateEmailView({ variables })
    } else if (type === "lead") {
      await updateLeadView({ variables })
    } else if (type === "invoice") {
      await updateInvoiceView({ variables })
    } else if (type === "newUser") {
      await updateNewUserView({ variables })
    }


  }



  useEffect(() => {

    if (emailCountData?.communicationTickets.length) {
      setEmailCounter(emailCountData.communicationTickets.length)
    }
    if (projectCountData?.projects.length) {
      setProjectCounter(projectCountData.projects.length)
    }
    if (leadCountData?.leads.length) {
      setLeadCounter(leadCountData.leads.length)
    }
    if (newUserCountData?.users.length) {
      setNewUserCounter(newUserCountData.users.length)
    }
    if (invoiceCountData?.invoices.length) {
      setInvoiceCounter(invoiceCountData.invoices.length)
    }



  }, [emailCountData, projectCountData, leadCountData, newUserCountData, invoiceCountData])



  console.log("emailCountData", emailCountData)




  // const getUserDetailsFromDB = async (email: string) => {

  //     //getting token from cookies
  //     const token = Cookies.get('conventenToken');
  //     const res = fetch('https://coventenapp.el.r.appspot.com/', {
  //         method: 'POST',
  //         headers: {
  //             "authorization": `Bearer ${token}`,
  //             'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify({
  //             query: `query Users($where: UserWhere) {
  //                 users(where: $where) {
  //                   name
  //                   user_type
  //                   createdAt
  //                   permissions
  //                 }
  //               }`,
  //             variables: {
  //                 where: {
  //                     email: email
  //                 },
  //             },

  //         })
  //     })

  //     const { data } = await res.then(res => res.json())
  //     return data?.users[0]
  // }



  const authInfo: ContextType = {
    emailCounter,
    newUserCounter,
    invoiceCounter,
    leadCounter,
    complainCounter,
    projectCounter,
    emailRefetch,
    projectRefetch,
    leadRefetch,
    newUserRefetch,
    invoiceRefetch,
    emailCountLoading,
    projectCountLoading,
    leadCountLoading,
    newUserCountLoading,
    invoiceCountLoading,
    handleUpdateView



  };

  return <CounterContext.Provider value={authInfo}>{children}</CounterContext.Provider>;
};

export default CounterProvider;




// return (
//   <>
//     <AuthContext.Provider value={authInfo}>
//       {children}
//     </AuthContext.Provider>
//   </>
// );


// export default AuthProvider;

export const useCounterData = (): ContextType | undefined => {
  const data = useContext(CounterContext);
  return data;
};