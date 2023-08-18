'use client'

import GetLeads from '@/shared/queries/leads';
import React, { useState, useEffect } from 'react';
import LeadsTable from './LeadsTable';
import GetCurrentUserDetails from '@/shared/queries/currentUser';
import { Leads, User } from '@/gql/graphql';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation } from 'graphql-hooks';
import { IUpdateLead } from './interface';
import LeadsModal from './leadModal';
import { toast } from 'react-hot-toast';


const ACCEPT_LEAD = `
mutation UpdateLeads($where: LeadsWhere, $update: LeadsUpdateInput) {
    updateLeads(where: $where, update: $update) {
        leads {
            id
          }
    }
  }
`




// COMPONENT
const Main = () => {
    //states
    const [leads, setLeads] = useState<Leads[] | []>([]);
    const [userDetails, setUserDetails] = useState<User | {}>({})
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentLead, setCurrentLead] = useState<Leads | {}>({});


    // hooks 
    const client = useGqlClient();

    // update leads 
    const [updateLeadsFn, updateState] = useMutation(ACCEPT_LEAD, { client })


    // handle update leads
    const updateLeads = async (info: IUpdateLead) => {
        const { data } = await updateLeadsFn({
            variables: {
                where: {
                    id: info?.id
                },
                update: {
                    status: "ACCEPTED",
                    price: parseInt(info?.price),
                    vendorAddress: info?.address,
                    duration: info?.duration
                }
            }
        })

        if (data.updateLeads.leads.id) {
            setIsModalOpen(false);
            toast.success('Lead updated successfully')
        }

    }


    // get leads
    useEffect(() => {
        getLeadsData();
        getUserData()

    }, []);


    //sort options for leads
    const options = {
        sort: [
            {
                createdAt: "ASC"
            }
        ]
    }

    const getLeadsData = async () => {
        const leads = await GetLeads({}, options);
        setLeads(leads);
    };

    const getUserData = async () => {
        const userData = await GetCurrentUserDetails();
        setUserDetails(userData[0]);
    }

    return (
        <div>
            <LeadsTable data={leads} setIsModalOpen={setIsModalOpen} setCurrentLead={setCurrentLead} />
            <LeadsModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                data={currentLead}
                setCurrentLead={setCurrentLead}
                userDetails={userDetails}
                setUserDetails={setUserDetails}
                loading={updateState.loading}
                updateLeads={updateLeads}
            />

        </div>
    );
};

export default Main;