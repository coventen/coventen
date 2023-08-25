'use client'
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation, useQuery } from 'graphql-hooks';
import React, { useEffect } from 'react';
import Sidebar from './Sidebar';

import { currentUser } from '@/firebase/oauth.config';
import DocCards from './DocCards';
import Loading from '@/app/loading';
import ComplainModal from './ComplainModal';
import { toast } from 'react-hot-toast';


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
const UPDATE_MODULE = `
mutation UpdateModuleTickets($where: ModuleTicketWhere, $update: ModuleTicketUpdateInput) {
  updateModuleTickets(where: $where, update: $update) {
    moduleTickets {
      id
    }
  }
}
`


const Main = () => {
  //states
  const [currentModule, setCurrentModule] = React.useState('');
  const [messages, setMessages] = React.useState<any>([]);
  const [isOpen, setIsOpen] = React.useState(false);
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
        status: "DRAFT"
      }
    }

  });

  // ADDING COMPLAIN
  const [addComplainFn, state, resetFn] = useMutation(UPDATE_MODULE, { client });




  // initializing add complain function
  const addComplain = async (complain: string) => {
    console.log(complain)
    const { data } = await addComplainFn({
      variables: {
        where: {
          id: currentModule
        },
        update: {
          status: "COMPLAINED",
          complain: complain
        }
      }
    })

    if (data.updateModuleTickets.moduleTickets[0].id) {
      setIsOpen(false)
      resetFn()
      console.log('updated')
      toast.success('Complain Added Successfully')
    }

  }
  const confirmComplete = async () => {
    const { data } = await addComplainFn({
      variables: {
        where: {
          id: currentModule
        },
        update: {
          status: "COMPLETED",
        }
      }
    })

    if (data.updateModuleTickets.moduleTickets[0].id) {
      setIsOpen(false)
      resetFn()
      console.log('updated')
      toast.success('Complain Added Successfully')
    }

  }


  useEffect(() => { }, [data?.moduleTickets])

  console.log(data?.moduleTickets)


  if (loading || state.loading) return <Loading />

  return (
    <div className='flex flex-row h-full  lg:max-h-[85vh]    w-full overflow-x-hidden'>
      <Sidebar data={data?.moduleTickets} setCurrentModule={setCurrentModule} />
      <div className='w-full'>

        <DocCards currentModule={currentModule} setIsOpen={setIsOpen} confirmComplete={confirmComplete} />
      </div>
      <ComplainModal isOpen={isOpen} setIsOpen={setIsOpen} addComplain={addComplain} />
    </div>
  );
};

export default Main;