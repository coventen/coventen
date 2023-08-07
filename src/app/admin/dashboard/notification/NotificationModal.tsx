'use client'
import { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Dialog, Transition } from '@headlessui/react';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation } from 'graphql-hooks';
import { toast } from 'react-hot-toast';

//props interface
interface INotificationModal {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    setNewNotification: (value: boolean) => void;
}

// GraphQL Mutation for creating notification
const CREATE_NOTIFICATION = `
mutation CreateNotifications($input: [NotificationCreateInput!]!) {
    createNotifications(input: $input) {
      notifications {
        title
      }
    }
  }
  `

//component
function NotificationModal({ isOpen, setIsOpen, setNewNotification }: INotificationModal) {

    //states
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [selectedOption, setSelectedOption] = useState('GENAREL');

    // GraphQL Client
    const client = useGqlClient()
    // GraphQL Mutations for creating notification
    const [createNotification, state, resetFn] = useMutation(CREATE_NOTIFICATION, { client })

    // Options for select
    const options = [
        "GENAREL",
        "PERSONALIZED"
    ];

    //handle select option
    const handleSelect = (e: any) => {
        setSelectedOption(e.target.value);
    };

    //handle close modal
    function closeModal() {
        setIsOpen(false);
    }

    //handle open modal
    function openModal() {
        setIsOpen(true);
    }


    //creating notification
    async function handleSubmit(event: any) {
        event.preventDefault();
        const title = event.target.title.value;
        const description = event.target.description.value;
        const userType = event.target.userType.value;
        const date = new Date();
        let isoDate = date.toISOString();

        const { data } = await createNotification({
            variables: {
                input: [
                    {
                        id: `notification-${uuidv4()}`,
                        title: title,
                        description: description,
                        type: userType,
                        createdAt: isoDate,
                    }
                ]
            }
        })

        if (data) {
            toast.success('Notification Created Successfully')
            setNewNotification(true)
        }
        closeModal();
    }


    //handle image upload to firebase
    function handleImageUpload(event: any) {
        const file = event.target.files[0];
        setImage(file);
    }


    //render
    return (
        <div>


            <Transition.Root show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed z-[120000000000] inset-0 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
                        </Transition.Child>

                        <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >

                            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                                <p className="focus:outline-none pt-4 pb-8 text-base text-center sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Notifications</p>
                                <form onSubmit={handleSubmit} className=''>
                                    <div className="mb-5">
                                        <label htmlFor="title" className="block  text-gray-700 text-sm mb-1">
                                            Title
                                        </label>
                                        <input
                                            id="title"
                                            name="title"
                                            type="text"
                                            className="mt-1 px-4 py-2 border border-gray-200 rounded-md w-full"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label className="block  text-gray-700 text-sm mb-1">
                                            Notification Type
                                        </label>
                                        <div className="relative inline-flex w-full">
                                            <select
                                                name='userType'
                                                value={selectedOption}
                                                onChange={handleSelect}
                                                className="mt-1 px-4 py-2 border border-gray-200 rounded-md w-full"
                                            >
                                                <option value="" disabled>Select an option</option>
                                                {options.map((option) => (
                                                    <option key={option} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>

                                        </div>
                                    </div>
                                    {/* notification user select for personalized notifications */}
                                    {
                                        selectedOption === 'PERSONALIZED' && (
                                            <div className="mb-5">
                                                <label className="block  text-gray-700 text-sm mb-1">
                                                    User type
                                                </label>
                                                <div className="relative inline-flex w-full">
                                                    <select
                                                        name='userType'
                                                        // value={selectedOption}
                                                        // onChange={handleSelect}
                                                        className="mt-1 px-4 py-2 border border-gray-200 rounded-md w-full"
                                                    >
                                                        <option value="" disabled>Select an option</option>
                                                        <option >Vendor</option>
                                                        <option >User</option>
                                                    </select>

                                                </div>
                                            </div>
                                        )
                                    }

                                    <div className="mb-5">
                                        <label htmlFor="description" className="block  text-gray-700 text-sm mb-1">
                                            Description
                                        </label>
                                        <textarea
                                            id="description"
                                            name="description"

                                            className="mt-1 px-4 py-2 border border-gray-200 rounded-md w-full"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </div>


                                    {/* <div className="mb-5">
                                        <label htmlFor="image" className="block  text-gray-700 text-sm mb-1">
                                            Image Upload
                                        </label>
                                        <input
                                            id="image"
                                            name="image"
                                            type="file"
                                            className="mt-1"
                                            onChange={handleImageUpload}
                                        />
                                    </div> */}

                                    <div className="mt-10">
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600"
                                        >
                                            Submit
                                        </button>
                                        <button
                                            type="button"
                                            className="ml-2 px-4 py-2 text-gray-500 rounded-md hover:bg-gray-200"
                                            onClick={closeModal}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );
}

export default NotificationModal;
