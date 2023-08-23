'use client'
import { useManualQuery, useQuery } from 'graphql-hooks';
import React, { useState, useEffect } from 'react';
import TicketTable from './TicketTable';
import { useGqlClient } from '@/hooks/UseGqlClient';
import AssignmentModal from '../../assignment/AssignmentModal';
import Pagination from '@/components/Pagination';
import TableSkeleton from '@/components/TableSkeleton';
import TicketReassignModal from './TicketReassignModal';

const GET_MODULE_TICKETS = `
query ModuleTickets($where: ModuleTicketWhere, $options: ModuleTicketOptions) {
  moduleTickets(where: $where, options: $options) {
      id
      ticket
      status
      clientHas {
        userIs {
        companyName
          email
        }
      }
      vendorHas {
        userIs {
          companyName
        }
      }
      
    }
  }

`

const Main = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentModuleTicket, setCurrentModuleTicket] = React.useState({});
  // search sates
  const [searchQuery, setSearchQuery] = useState('')

  // pagination states
  const [pageLimit, setPageLimit] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [moduleTicketsCount, setModuleTicketsCount] = useState(0)
  const [moduleTicketData, setModuleTicketData] = useState<any>([])


  //hooks
  const client = useGqlClient()

  //quires 
  const [getModuleTicketFn, moduleTicketDataState] = useManualQuery(GET_MODULE_TICKETS, { client })


  // refetching data based on pagination and search query
  useEffect(() => {
    let where

    // sending parameters to query based on search query
    if (searchQuery) {
      where = {
        OR: [
          {
            ticket: searchQuery.toUpperCase(),
          },
          {
            clientHas: {
              userIs: {
                email_CONTAINS: searchQuery.toLocaleLowerCase(),
                companyName_CONTAINS: searchQuery.toLocaleLowerCase()
              }
            }
          },
          {
            forModule: {
              title_CONTAINS: searchQuery.toLocaleLowerCase()
            }
          },
          {
            vendorHas: {
              userIs: {
                companyName_CONTAINS: searchQuery.toLocaleLowerCase()
              }
            }
          }
        ]
      }
    } else {
      where = {}
    }



    getModuleTicketData(where)
    getModuleTicketCount()
  }, [currentPage, searchQuery]);



  // initializing query and mutations

  const getModuleTicketCount = async () => {
    const { data } = await getModuleTicketFn()
    if (data.moduleTickets.length) {
      setModuleTicketsCount(data.moduleTickets.length)
      setTotalPages(Math.ceil(data.moduleTickets.length / pageLimit))
    }

  }

  const getModuleTicketData = async (where: any = {}) => {
    const { data } = await getModuleTicketFn({
      variables: {
        where: where,
        options: {
          limit: pageLimit,
          offset: (currentPage - 1) * pageLimit,
          sort: [
            {
              createdAt: "DESC"
            }
          ]
        }
      }
    })
    if (data.moduleTickets.length) {
      setModuleTicketData(data?.moduleTickets)
    }
  }







  return (
    <>
      <div className="my-2 flex justify-end sm:flex-row flex-col">

        <div className="block relative">
          <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
              <path
                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
              </path>
            </svg>
          </span>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="  sm:rounded-l-none border border-gray-300 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
        </div>
      </div>

      {/* search */}

      <div>
        {
          moduleTicketDataState.loading && <TableSkeleton />
        }
        <TicketTable data={moduleTicketData} setIsOpen={setIsOpen} setCurrentModuleTicket={setCurrentModuleTicket} />
        <TicketReassignModal setIsOpen={setIsOpen} isOpen={isOpen} currentModuleTicket={currentModuleTicket} refetchModuleTickets={getModuleTicketData} />
      </div>


      {/* pagination */}
      <div className='w-full flex items-center justify-center'>
        {moduleTicketsCount! > pageLimit &&
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />}

      </div>

    </>
  );
};

export default Main;