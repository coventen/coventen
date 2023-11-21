import React from 'react';
import Industries from '../Industries';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useQuery } from 'graphql-hooks';
import { useAuth } from '@/firebase/AuthProvider';
import Services from '../Services';

const GET_DATA = `
query Query($where: UserWhere) {
    users(where: $where) {
      isVendor {
        id
        industry
        service
      }
    }
  }
`

const ServicesAndIndustryTab = ({ setCurrentTab, userInfo }: any) => {

    //hooks
    const client = useGqlClient()
    const { user } = useAuth()

    //queries
    const { data, refetch } = useQuery(GET_DATA, {
        client,
        variables: {
            "where": {
                "email": user?.email
            }
        }
    })


    console.log(data, '8888888888888888888888888')



    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4  mb-28'>
            <div >
                <Industries data={data?.users[0]?.isVendor?.industry} refetch={refetch} />
            </div>
            <div >
                <Services data={data?.users[0]?.isVendor?.service} refetch={refetch} />
            </div>

        </div>
    );
};

export default ServicesAndIndustryTab;