/**
 * Notification Block Component
 * This component displays a list of notifications and handles notification functionality.
 */

// Import required modules and components
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useQuery } from 'graphql-hooks';
import React, { useEffect } from 'react';


//props interface
interface Props {
    setSlideOverOpen: (value: boolean) => void;
}

// GraphQL query to fetch notifications
const GET_NOTIFICATION = `
  query Notifications {
    notifications {
      id
      image
      title
      type
      description
    }
  }
`;

//component
const NotificationBlck = ({ setSlideOverOpen }: Props) => {

    // Create GraphQL client using custom hook
    const client = useGqlClient();

    // Perform the GraphQL query to fetch notifications
    const { data, loading, error } = useQuery(GET_NOTIFICATION, { client });


    //render
    return (
        <>
            <div>
                <div className="w-full">
                    <div className="bg-white  px-1 md:px-2 xl:px-3">
                        <div className="mt-7 overflow-x-auto w-full ">
                            <table className="w-full whitespace-nowrap ">
                                <tbody>
                                    {data?.notifications?.map((item: any) => (
                                        <div key={item?.id} className="w-full">
                                            <tr className="focus:outline-none w-full h-16 border border-gray-100 rounded flex items-center justify-between">
                                                <td className="">
                                                    <div className="flex items-center pl-5">
                                                        <p className="text-sm  leading-none text-gray-700 mr-2">{item?.title}</p>
                                                    </div>
                                                </td>

                                                <td className="pl-4">
                                                    <button
                                                        onClick={() => setSlideOverOpen(true)}
                                                        className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"
                                                    >
                                                        View
                                                    </button>

                                                </td>
                                            </tr>
                                            <tr className="h-3"></tr>
                                        </div>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotificationBlck;
