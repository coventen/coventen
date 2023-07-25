import React from 'react';
import { Fragment } from 'react';

const data = [
    {
        EmployeeId: '1',

        EmployeeName: 'Employee 1',
        dateCreated: 'em@ploee.com',
        recipient: 'John Doe',
    },
    {
        EmployeeId: '2',

        EmployeeName: 'Employee 1',
        dateCreated: 'em@ploee.com',
        recipient: 'John Doe',
    },
    {
        EmployeeId: '3',

        EmployeeName: 'Employee 1',
        dateCreated: 'em@ploee.com',
        recipient: 'John Doe',
    },
    {
        EmployeeId: '4',

        EmployeeName: 'Employee 1',
        dateCreated: 'em@ploee.com',
        recipient: 'John Doe',
    },
    {
        EmployeeId: '5',

        EmployeeName: 'Employee 1',
        dateCreated: 'em@ploee.com',
        recipient: 'John Doe',
    },
];

const RolesPeopleTable = () => {
    return (
        <div className="container mx-auto">
            <table className="table-auto w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            id
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Role
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.EmployeeId} className="border-b border-gray-200">
                            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {row.EmployeeId}
                            </td>
                            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {row.EmployeeName}
                            </td>
                            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Admin
                            </td>
                            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                <div className="flex justify-center">
                                    <button className="text-blue-500 hover:text-blue-800 mr-2">
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
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 6v.01M12 18v.01M4.93 4.93l1.41 1.41M18.36 18.36l-1.41-1.41M6.34 17.66l1.41-1.41M17.66 6.34l-1.41 1.41"
                                            />
                                        </svg>
                                    </button>
                                    <button className="text-red-500 hover:text-red-800">
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
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RolesPeopleTable;