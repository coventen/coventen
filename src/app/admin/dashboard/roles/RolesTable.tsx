import React from 'react';

const data = [
    {
        id: '1',

        roleName: 'Admin',
        dateCreated: 'em@ploee.com',
        recipient: 'John Doe',
    },
    {
        id: '2',

        roleName: 'Admin',
        dateCreated: 'em@ploee.com',
        recipient: 'John Doe',
    },
    {
        id: '3',

        roleName: 'Admin',
        dateCreated: 'em@ploee.com',
        recipient: 'John Doe',
    },
    {
        id: '4',

        roleName: 'Admin',
        dateCreated: 'em@ploee.com',
        recipient: 'John Doe',
    },
    {
        id: '5',

        roleName: 'Admin',
        dateCreated: 'em@ploee.com',
        recipient: 'John Doe',
    },
];

const RolesTable = () => {
    return (
        <div className="container mx-auto ">
            <div className="flex flex-col mt-10">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 px-3">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Serial no.
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {data.map((row) => (
                                        <tr key={row.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{row.id}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                    {row.roleName}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    {/* <Switch {...label} defaultChecked className="mr-4" /> */}
                                                    <div className="text-sm text-gray-500">Active</div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                                                    <span>Edit</span>
                                                </button>
                                                <button className="text-red-600 hover:text-red-900">
                                                    <span>Delete</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RolesTable;