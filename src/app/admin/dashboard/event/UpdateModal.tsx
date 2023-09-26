import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react';


import { v4 as uuidv4 } from 'uuid';
import { useMutation, useQuery } from 'graphql-hooks';
import { useGqlClient } from '@/hooks/UseGqlClient';


interface Props {
    setOpenUpdateModal: any;
    openUpdateModal: any;
    id: string;

}

const UPDATE_EVENT = `
mutation UpdateEvents($update: EventUpdateInput, $where: EventWhere) {
  updateEvents(update: $update, where: $where) {
    info {
      nodesCreated
      nodesDeleted
      relationshipsCreated
      relationshipsDeleted
    }
  }
} 
`;

const FIND_EVENT = `
query Events($where: EventWhere, $options: EventOptions) {
    events(where: $where, options: $options) {
      id
      name
      slug
      description
      location
      image
      endAt
      startAt
    }
  }
`;


const UpdateModal: React.FC<Props> = ({
    setOpenUpdateModal,
    openUpdateModal,
    id

}) => {
    const [input, setInput] = useState({
        name: '',
        startAt: '',
        endAt: '',
        image: '',
        description: '',
        location: '',
        fetch: false,
    });

    const client = useGqlClient();
    function closeModal() {
        setOpenUpdateModal(false);
    }



    const { loading: eventLoading, error, data, refetch } = useQuery(FIND_EVENT, {
        client,
        variables: {
            where: {
                id_CONTAINS: id
            }
        }
    });


    console.log(data, 'data')



    const [mutationFn, state] = useMutation(UPDATE_EVENT, {
        client,
        variables: {
            update: {
                name: input.name,
                location: input.location,
                image: input.image,
                endAt: input.endAt,
                startAt: input.startAt,
                description: input.description,
            },
            where: {
                id_CONTAINS: id
            }
        },
    });



    const convertToIsoDate = (date: string) => {
        const dateString = date;
        const dateObject = new Date(dateString);
        const isoDate = dateObject.toISOString();
        return isoDate
    }

    const convertToStandardDate = (date: string) => {
        const dateObject = new Date(date);
        const year = dateObject.getFullYear();
        const month = dateObject.getMonth() + 1;
        const day = dateObject.getDate();
        const standardDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        return standardDate
    }




    const handleSubmit = (e: any) => {
        e.preventDefault();
        const name = e.target.name.value;
        const startAt = convertToIsoDate(e.target.startAt.value);
        const endAt = convertToIsoDate(e.target.endAt.value);
        const status = e.target.status.value;
        const description = e.target.description.value;
        const image = e.target.image.files[0];
        const location = e.target.location.value;


        // const dateString = "2023-05-09";
        // const dateObject = new Date(dateString);
        // const isoDate = dateObject.toISOString();

        // console.log(endAt, startAt, 'date')




        mutationFn()

    };

    useEffect(() => {
        if (data) {
            const event = data.events[0]
            if (event) {
                setInput({
                    name: event?.name,
                    startAt: event?.startAt,
                    endAt: event?.endAt,
                    description: event?.description,
                    location: event?.location,
                    image: event?.image,
                    fetch: false,
                });
            }

        }
    }, [data])


    if (eventLoading) return <div>Loading...</div>

    return (
        <>
            <Transition appear show={openUpdateModal} as={Fragment}>
                <Dialog as="div" className="relative z-[90000000000000] bg-red-800" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-[600px] py-12 flex items-center justify-center flex-col transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-xl font-medium leading-6 text-gray-900 mb-7"
                                    >
                                        Update Event
                                    </Dialog.Title>
                                    <form onSubmit={handleSubmit} className="bg-transparent">
                                        <div className="grid grid-cols-1 lg:grid-cols-2  gap-0">
                                            <div className=" p-1  ">
                                                <label className="block text-sm text-gray-500 dark:text-gray-300">  Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={input.name}
                                                    onChange={(e) => setInput({ ...input, name: e.target.value })}
                                                    placeholder="Name"
                                                    className="mt-2 w-full block  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:primary/10"
                                                />
                                            </div>

                                            <div className=" p-1  ">

                                                <label htmlFor='startAt' className="block text-sm text-gray-500 dark:text-gray-300">  Start at</label>

                                                <input type="date" id='startAt'
                                                    name="start At"
                                                    value={convertToStandardDate(input.startAt)}
                                                    onChange={(e) => setInput({ ...input, startAt: e.target.value })}
                                                    placeholder="startAt" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />


                                            </div>
                                            <div className=" p-1  ">
                                                <label htmlFor='startAt' className="block text-sm text-gray-500 dark:text-gray-300">  End at</label>
                                                <input
                                                    type="date"
                                                    name="endAt"
                                                    value={convertToStandardDate(input.endAt)}
                                                    onChange={(e) => setInput({ ...input, endAt: e.target.value })}
                                                    placeholder="ends At"
                                                    className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

                                            </div>

                                            <div className=" p-1  ">
                                                <div className="inline-block relative w-full">

                                                    <select
                                                        name="status"
                                                        // value={input.status}
                                                        // onChange={(e) => setInput({ ...input, status: e.target.value })}
                                                        className="mt-2 w-full block  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:primary/10"
                                                    >
                                                        <option value={'Active'}>Active</option>
                                                        <option value={'Deactive'}>Deactive</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className=" p-1 ">

                                                <input
                                                    name="image"
                                                    // onChange={handleUpload}
                                                    type="file"
                                                    className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:primary/10"
                                                />
                                            </div>
                                            <div className=" p-1  col-span-2   ">
                                                <label className="block text-sm text-gray-500 dark:text-gray-300">  Location</label>
                                                <input
                                                    type="text"
                                                    name="location"
                                                    value={input.location}
                                                    onChange={(e) => setInput({ ...input, location: e.target.value })}
                                                    placeholder="price"
                                                    className="mt-2 w-full block  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:primary/10"
                                                />
                                            </div>
                                            <div className=" p-1  col-span-2 ">
                                                <label className="block text-sm text-gray-500 dark:text-gray-300">  description</label>
                                                <textarea
                                                    name="description"
                                                    value={input.description}
                                                    onChange={(e) => setInput({ ...input, description: e.target.value })}
                                                    placeholder="decription"
                                                    className="mt-2 w-full block  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:primary/10"
                                                />
                                            </div>
                                        </div>
                                        <button className=" mx-auto block mt-8 px-5 ">
                                            {
                                                state.loading ? 'Loading...' : 'Update'
                                            }
                                        </button>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default UpdateModal;