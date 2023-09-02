'use client'


import React, { useState, useEffect } from 'react';
import LeadsTable from './LeadsTable';
import Pagination from '@/components/Pagination';
import GetLeads from '@/shared/queries';

const Main = () => {
    const [leads, setLeads] = useState([]);
    const [pageLimit, setPageLimit] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [totalLeads, setTotalLeads] = useState(0)



    // refetching data based on pagination and search query
    useEffect(() => {
        getLeadsData()
        getTotalLeadsCount()
    }, [currentPage]);



    // initializing query and mutations
    const getLeadsData = async () => {
        const options = {
            limit: pageLimit,
            offset: (currentPage - 1) * pageLimit,
            sort: [
                {
                    createdAt: "DESC"
                }
            ]
        }
        const result = await GetLeads({}, options);
        setLeads(result);
    };

    const getTotalLeadsCount = async () => {
        const result = await GetLeads({}, {});
        if (result) {
            setTotalLeads(result?.length)
            setTotalPages(Math.ceil(result?.length / pageLimit))
        }
    }

    return (
        <div>
            <LeadsTable data={leads} />
            <div className='w-full flex items-center justify-center'>
                {totalLeads! > pageLimit &&
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />}

            </div>

        </div>
    );
};

export default Main;