'use client'
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation, useQuery } from 'graphql-hooks';
import React from 'react';
import UserTable from './UserTable';
import UserModal from './UserModal';
import { toast } from 'react-hot-toast';


const GET_USER = `
query Users {
  users {
    id
    companyName
    companyEmail
    bio
    address
    email
    createdAt
    gstNumber
    status
    user_type
    hasDocuments {
      hasImages {
        id
        links
      }
      hasFiles {
        id
        links
      }
    }
  }
}
`

const UPDATE_USER = `
mutation UpdateUsers($where: UserWhere, $update: UserUpdateInput) {
  updateUsers(where: $where, update: $update) {
    info {
      nodesCreated
      nodesDeleted
      relationshipsCreated
    }
  }
}
`



const Main = () => {

  //states
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [currentData, setCurrentData] = React.useState<any>(null)

  //HOOKS
  const client = useGqlClient()

  //fetching data 
  const { data, error, loading, refetch } = useQuery(GET_USER, { client })

  //APProving user or 
  const [updateUserFn, { loading: updateUserLoading }] = useMutation(UPDATE_USER, { client })

  // initializing update user mutation

  const updateUser = async (email: string, status: string) => {

    const { data } = await updateUserFn({
      variables: {
        where: {
          email: email
        },
        update: {
          status: status
        }
      }
    })

    if (data) {
      refetch()
      toast.success('User updated successfully')
      setIsModalOpen(false)

    }

  }



  return (
    <>
      <UserTable data={data?.users} setCurrentData={setCurrentData} setIsModalOpen={setIsModalOpen} />
      <UserModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} data={currentData} updateUser={updateUser} updateUserLoading={updateUserLoading} />
    </>
  );
};

export default Main;