
import TableSkeleton from '@/components/TableSkeleton';
import { User } from '@/gql/graphql';
import Image from 'next/image';
import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BiSolidEditAlt } from 'react-icons/bi';

interface IUserTable {
    data: User[]
    setIsModalOpen: (value: boolean) => void;
    setCurrentData: (value: any) => void;
    loading: boolean
}


//component
const UserTable = ({ data, setIsModalOpen, setCurrentData, loading }: IUserTable) => {


    if (loading) return <TableSkeleton />


    return (
        <table className="min-w-full leading-normal uppercase ">
            <thead>
                <tr className='border-b border-gray-200'>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-dimText dark:text-darkDimText uppercase tracking-wider dark:bg-darkBg dark:border-darkBorder">
                        User Id
                    </th>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-dimText dark:text-darkDimText uppercase tracking-wider dark:bg-darkBg dark:border-darkBorder">
                        Email
                    </th>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-dimText dark:text-darkDimText uppercase tracking-wider dark:bg-darkBg dark:border-darkBorder">
                        User Type
                    </th>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-dimText dark:text-darkDimText uppercase tracking-wider dark:bg-darkBg dark:border-darkBorder">
                        Connectivity
                    </th>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-dimText dark:text-darkDimText uppercase tracking-wider dark:bg-darkBg dark:border-darkBorder">
                        Status
                    </th>

                </tr>
            </thead>
            <tbody>


                {
                    data && data.map((user, index) =>
                        <tr key={user?.id} className='border-b border-gray-200'>
                            <td className="px-5 py-5  bg-white text-xs dark:bg-darkBg dark:border-darkBorder">
                                <p className=" whitespace-no-wrap">{user?.userId || 'N/A'}</p>
                            </td>
                            <td className="px-5 py-5  bg-white text-xs dark:bg-darkBg dark:border-darkBorder">
                                <p className=" whitespace-no-wrap lowercase">{user?.email}</p>
                            </td>
                            <td className="px-5 py-5  bg-white text-xs dark:bg-darkBg dark:border-darkBorder">
                                <p className=" whitespace-no-wrap">
                                    {user?.user_type}
                                </p>
                            </td>
                            <td className="px-5 py-5  bg-white text-xs dark:bg-darkBg dark:border-darkBorder rounded-xl font-semibold">
                                <p className=" whitespace-no-wrap">
                                    Offline
                                </p>
                            </td>
                            <td className="px-5 py-5 cursor-pointer  bg-white text-xs dark:bg-darkBg dark:border-darkBorder rounded-xl font-semibold">
                                <button
                                    onClick={() => {
                                        setCurrentData(user)
                                        setIsModalOpen(true)
                                    }}
                                    disabled={user.status === "APPROVED"}
                                    className={`   
                                    ${user.status === "APPROVED" ? 'bg-gray-200 text-primaryText' : 'bg-green-500 text-white  '}
                                    relative inline-block  px-4 py-1 rounded-md  leading-tight`}>
                                    <span
                                        className="absolute  "></span>
                                    <span className="relative font-bold uppercase">{user.status === "APPROVED" ? 'Approved' : 'Approve'}</span>
                                </button>
                            </td>

                        </tr>

                    )
                }




            </tbody>
        </table>
    );
};

export default UserTable;