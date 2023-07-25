import { Fragment, useState } from 'react';
import { Dialog, Transition, Disclosure } from '@headlessui/react';
interface ModalProps {
    openPeopleModal: boolean;
    setOpenPeopleModal: (open: boolean) => void;
}

const AddPeopleModal: React.FC<ModalProps> = ({
    openPeopleModal,
    setOpenPeopleModal,
}) => {
    const [role, setRole] = useState('');
    const [personName, setPersonName] = useState([]);

    // const handleChange = (event) => {
    //   setPersonName(event.target.value);
    // };

    const handleClose = () => {
        setOpenPeopleModal(false);
    };

    const handleOpen = () => {
        setOpenPeopleModal(true);
    };

    const fields = ['Employee-1', 'Employee-2', 'Employee-3', 'Employee-4'];

    return (
        <div>
            <Dialog open={openPeopleModal} onClose={handleClose}>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 opacity-75" />

                        <div className="relative bg-white rounded-lg max-w-lg mx-auto overflow-hidden shadow-xl sm:rounded-lg sm:w-full">
                            <div className="px-6 py-4">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Add People
                                </h2>
                            </div>

                            <div className="px-6 py-4">
                                <div className="grid grid-cols-1 gap-6">
                                    <div>
                                        <label
                                            htmlFor="role"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Role
                                        </label>
                                        <select
                                            id="role"
                                            name="role"
                                            value={role}
                                            onChange={(event) =>
                                                setRole(event.target.value as string)
                                            }
                                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                        >
                                            <option value={20}>Admin</option>
                                            <option value={30}>Super Admin</option>
                                            <option value={30}>Support</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="employee"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Employee
                                        </label>
                                        <select
                                            id="employee"
                                            name="employee"
                                            value={personName}
                                            // onChange={handleChange}
                                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
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

                            <div className="px-6 py-4 bg-gray-100 text-right">
                                <button
                                    onClick={handleClose}
                                    type="button"
                                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleClose}
                                    type="button"
                                    className="inline-flex justify-center ml-3 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Create
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default AddPeopleModal;