import React from 'react';
interface Props {
    setSlideOverOpen: (value: boolean) => void;
}

const NotificationBlck = ({ setSlideOverOpen }: Props) => {
    return (
        <>
            <div>
                <div className="w-full">
                    <div className="bg-white  px-1 md:px-2 xl:px-3">
                        <div className="mt-7 overflow-x-auto w-full ">
                            <table className="w-full whitespace-nowrap ">
                                <tbody>
                                    {
                                        [1, 2, 3, 4].map(item =>
                                            <div key={item} className='w-full'>
                                                <tr className="focus:outline-none w-full h-16 border border-gray-100 rounded flex items-center justify-between">

                                                    <td className="">
                                                        <div className="flex items-center pl-5">
                                                            <p className="text-sm  leading-none text-gray-700 mr-2">Marketing .....</p>

                                                        </div>
                                                    </td>
                                                    <td className="pl-5">
                                                        <button className="py-3 px-3 text-sm focus:outline-none leading-none text-green-700  bg-green-200 rounded">Published today at 18:00</button>
                                                    </td>

                                                    <td className="pl-4">
                                                        <button onClick={() => setSlideOverOpen(true)} className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                                    </td>

                                                </tr>
                                                <tr className="h-3"></tr>
                                            </div>)
                                    }



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