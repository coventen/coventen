'use client';

import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'graphql-hooks';
import { toast } from 'react-hot-toast';
import EventModal from './EventModal';
import EventTable from './EventTable';
import UpdateModal from './UpdateModal';
import PreviewModal from './PreviewModal';
import { useGqlClient } from '@/hooks/UseGqlClient';
import Loading from '@/app/loading';


const CREATE_EVENT = `
mutation CreateEvents($input: [EventCreateInput!]!) {
    createEvents(input: $input) {
      info {
        nodesCreated
      }
    }
  }`;

const GET_EVENT = `
query Query {
    events {
      id
      description
      location
      image
      endAt
      startAt
    }
  }
`;
const DELETE_EVENT = `
mutation DeleteEvents($where: EventWhere) {
    deleteEvents(where: $where) {
      nodesDeleted
    }
  } 
`;



const Main = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    const [openPreviewModal, setOpenPreviewModal] = useState(false);
    const [currentEvent, setCurrentEvent] = useState('');
    const [deleteId, setDeleteId] = useState('');


    // HOOKS
    const client = useGqlClient()

    // QUERY
    const { data: eventData, loading, error, refetch } = useQuery(GET_EVENT, { client })

    // MUTATION
    const [createEventFn, createEventState] = useMutation(CREATE_EVENT, { client })
    const [deleteEventFn, deleteEventState] = useMutation(DELETE_EVENT, { client, })



    // initialize the query and mutations

    const createEvent = async (input: any) => {

        const { data } = await createEventFn({
            variables: {
                "input": [
                    {
                        name: input.name,
                        "image": '',
                        "description": input.description,
                        "location": input.location,
                        "endAt": input.endAt,
                        "startAt": input.startAt,
                    }
                ]
            }
        })

        if (data.createevents.info.nodesCreated) {
            toast.success('event added successfully')
            refetch()
        }
    }

    // const deleteevent = async (id: string) => {
    //     const { data } = await deleteeventFn({
    //         variables: {
    //             where: {
    //                 id
    //             }
    //         }
    //     })

    //     if (data.deleteevents.nodesDeleted) {
    //         toast.error('event deleted successfully')
    //         refetch()
    //     }
    // }

    console.log(eventData);



    if (loading || deleteEventState.loading || createEventState.loading) return <Loading />





    return (
        <>
            <div className="w-full overflow-hidden">
                <div className="flex items-center justify-between">
                    <div className="mb-3">
                        <h4 className="text-primary font-bold text-xl">Events</h4>
                        <p className="text-gray-500 font-normal mt-2">
                            Lorem ipsum dolor sit amet, consectetur.
                        </p>
                    </div>
                    <p
                        onClick={() => setOpenModal(true)}
                        className="bg-primary text-white font-semibold px-4 py-2 cursor-pointer flex items-center "
                    >
                        <span className="mr-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                            </svg>
                        </span>
                        Add New
                    </p>
                </div>

                <div className="w-full bg-white rounded-lg mt-5 py-3 shadow-md">
                    <EventTable
                        data={eventData?.events}
                        loading={loading}
                        setCurrentEvent={setCurrentEvent}
                        setOpenUpdateModal={setOpenUpdateModal}
                        setOpenPreviewModal={setOpenPreviewModal}
                        setDeleteId={setDeleteId}
                    />
                </div>
            </div>

            <EventModal
                setOpenModal={setOpenModal}
                openModal={openModal}
                createEventFn={createEvent}
                loading={loading}
            />
            <UpdateModal
                id={currentEvent}
                setOpenUpdateModal={setOpenUpdateModal}
                openUpdateModal={openUpdateModal}
            />
            <PreviewModal
                id={currentEvent}
                setOpenPreviewModal={setOpenPreviewModal}
                openPreviewModal={openPreviewModal}
            />
        </>
    );
};

export default Main;