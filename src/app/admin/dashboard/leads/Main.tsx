'use client'

import GetLeads from '@/shared/queries/leads';
import React, { useState, useEffect } from 'react';
import LeadsTable from './LeadsTable';

const Main = () => {
    const [leads, setLeads] = useState([]);




    //sort options for leads
    const options = {
        sort: [
            {
                createdAt: "DESC"
            }
        ]
    }


    // get leads
    useEffect(() => {

        const fetchData = async () => {
            const result = await GetLeads({}, options);
            setLeads(result);
        };
        fetchData();

    }, []);

    return (
        <div>
            <LeadsTable data={leads} />

        </div>
    );
};

export default Main;