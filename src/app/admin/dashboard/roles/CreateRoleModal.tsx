import * as React from 'react';
import { useState } from 'react';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import MultiSelect from '@/components/Multiselect';
// import { CheckIcon } from '@heroicons/react/outline';

interface ModalProps {
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
    createRole: (name: string, permissions: string[]) => void;
}

interface Option {
    id: number;
    name: string;
    description?: string;
}

let fieldsOptions: Option[] = [
    {
        id: 1,
        name: 'Dashboard',
    },
    {
        id: 2,
        name: 'Users',
    },
    {
        id: 3,
        name: 'Roles',
    },
    {
        id: 4,
        name: 'Assignment',
    },
    {
        id: 5,
        name: 'Settings',
    },
    {
        id: 6,
        name: 'Invoices',
    },
    {
        id: 7,
        name: 'notifications',
    },
    {
        id: 8,
        name: 'Support',
    },
    {
        id: 9,
        name: 'Tickets System',
    },
    {
        id: 10,
        name: 'Users',
    },
    {
        id: 11,
        name: 'Vendor Management',
    },
    {
        id: 12,
        name: 'Logs',
    }

]


// component
const CreateRoleModal: React.FC<ModalProps> = ({ openModal, setOpenModal, createRole }) => {
    // states
    const [roleName, setRoleName] = useState('');
    const [personName, setPersonName] = useState<string[]>([]);
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([])

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value
        );
    };

    const handleClose = () => {
        setOpenModal(false);
    };


    console.log('selectedOptions', selectedOptions.map((item) => item.name))


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const permissions = selectedOptions.map((item) => item.name)
        createRole(roleName, permissions)

    }


    return (
        <Transition show={openModal} as={Fragment}>
            <Dialog
                onClose={handleClose}
                className="fixed inset-0 z-[100000000000] overflow-y-auto"
            >
                <div className="min-h-screen px-4 text-center">
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                    <div className="inline-block my-8 py-8 overflow-hidden text-left align-bottom transition-all transform bg-white shadow-xl rounded-xl w-full max-w-xl">
                        <div className="bg-white px-4 pb-4 sm:p-6 sm:pb-4">
                            <Dialog.Title
                                as="h3"
                                className="text-lg font-medium leading-6 text-gray-900"
                            >
                                Create User Role
                            </Dialog.Title>
                        </div>
                        <form onSubmit={handleSubmit} className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="min-h-auto space-y-6">
                                <div>
                                    <label
                                        htmlFor="role"
                                        className="block text-sm font-medium text-gray-700 h-auto"
                                    >
                                        Role Name
                                    </label>
                                    <input
                                        type="text"
                                        name="role"
                                        value={roleName}
                                        onChange={(e) => setRoleName(e.target.value)}
                                        required
                                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="fields"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Fields
                                    </label>
                                    <div className="mt-1">
                                        <MultiSelect options={fieldsOptions} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 py-4 mt-16 text-right">
                                <button
                                    onClick={handleClose}
                                    type="button"
                                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                >
                                    Cancel
                                </button>
                                <button

                                    type="submit"
                                    className="inline-flex justify-center ml-3 px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                >
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default CreateRoleModal;