import * as React from 'react';
import { useState } from 'react';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
// import { CheckIcon } from '@heroicons/react/outline';

interface ModalProps {
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
}

const CreateRoleModal: React.FC<ModalProps> = ({ openModal, setOpenModal }) => {
    const [role, setRole] = useState('');
    const [personName, setPersonName] = useState<string[]>([]);

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

    const fields = ['Dashboard', 'Campaigns', 'Support', 'Roles'];

    return (
        <Transition show={openModal} as={Fragment}>
            <Dialog
                onClose={handleClose}
                className="fixed inset-0 z-10 overflow-y-auto"
            >
                <div className="min-h-screen px-4 text-center">
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                    <div className="inline-block my-8 overflow-hidden text-left align-bottom transition-all transform bg-white shadow-xl rounded-xl w-full max-w-3xl">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <Dialog.Title
                                as="h3"
                                className="text-lg font-medium leading-6 text-gray-900"
                            >
                                Create User Role
                            </Dialog.Title>
                        </div>
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <label
                                        htmlFor="role"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Role Name
                                    </label>
                                    <input
                                        type="text"
                                        name="role"
                                        id="role"
                                        autoComplete="off"
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
                                        <select
                                            id="fields"
                                            name="fields"
                                            className="block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                                            value={personName}
                                            onChange={handleChange}
                                        >
                                            {fields.map((name) => (
                                                <option key={name} value={name}>
                                                    {name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default CreateRoleModal;