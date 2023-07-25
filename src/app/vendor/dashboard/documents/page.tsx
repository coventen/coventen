import React from 'react';
import DocumentCard from './DocumentCard';

const Documents = () => {
    return (
        <>
            <div className="flex h-screen antialiased text-gray-800">
                <div className="flex flex-row h-full lg:max-h-[85vh] w-full overflow-x-hidden">
                    {/* side bar */}
                    <div className="flex  flex-col py-8 pl-6 pr-2 relative w-80 rounded-lg bg-white flex-shrink-0">
                        <div>


                            <div className="flex flex-row items-center  h-12 w-full">
                                <div
                                    className="flex items-center justify-center rounded-2xl text-primary bg-primary/30 h-10 w-10"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="ml-2 font-bold text-2xl">All Tickets</div>
                            </div>


                            <div className="flex flex-col mt-8">

                                <div className="flex flex-col space-y-1 mt-4 -mx-2 h-full overflow-y-auto">
                                    <button
                                        className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 border-b"
                                    >
                                        <div
                                            className="flex items-center justify-center h-10 w-10 bg-primary/20 text-primary font-bold rounded-lg"
                                        >
                                            H
                                        </div>
                                        <div>

                                            <div className="ml-2  ">
                                                <div>
                                                    <span className='text-sm font-semibold '> Cars Breaek Problem</span>
                                                    <span className='text-primary text-xs ml-2'>#H4569-01</span>
                                                </div>

                                            </div>
                                            <div className="ml-2 flex text-[10px] text-gray-600">
                                                <p className=' '>Company name </p>
                                                <p className=''>{" "} - Vendors name</p>
                                            </div>
                                        </div>

                                    </button>
                                    <button
                                        className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 border-b"
                                    >
                                        <div
                                            className="flex items-center justify-center h-10 w-10 bg-primary/20 text-primary font-bold rounded-lg"
                                        >
                                            H
                                        </div>
                                        <div>

                                            <div className="ml-2  ">
                                                <div>
                                                    <span className='text-sm font-semibold '> Cars Breaek Problem</span>
                                                    <span className='text-primary text-xs ml-2'>#H4569-01</span>
                                                </div>

                                            </div>
                                            <div className="ml-2 flex text-[10px] text-gray-600">
                                                <p className=' '>Company name </p>
                                                <p className=''>{" "} - Vendors name</p>
                                            </div>
                                        </div>

                                    </button>
                                    <button
                                        className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 border-b"
                                    >
                                        <div
                                            className="flex items-center justify-center h-10 w-10 bg-primary/20 text-primary font-bold rounded-lg"
                                        >
                                            H
                                        </div>
                                        <div>

                                            <div className="ml-2  ">
                                                <div>
                                                    <span className='text-sm font-semibold '> Cars Breaek Problem</span>
                                                    <span className='text-primary text-xs ml-2'>#H4569-01</span>
                                                </div>

                                            </div>
                                            <div className="ml-2 flex text-[10px] text-gray-600">
                                                <p className=' '>Company name </p>
                                                <p className=''>{" "} - Vendors name</p>
                                            </div>
                                        </div>

                                    </button>
                                    <button
                                        className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 border-b"
                                    >
                                        <div
                                            className="flex items-center justify-center h-10 w-10 bg-primary/20 text-primary font-bold rounded-lg"
                                        >
                                            H
                                        </div>
                                        <div>

                                            <div className="ml-2  ">
                                                <div>
                                                    <span className='text-sm font-semibold '> Cars Breaek Problem</span>
                                                    <span className='text-primary text-xs ml-2'>#H4569-01</span>
                                                </div>

                                            </div>
                                            <div className="ml-2 flex text-[10px] text-gray-600">
                                                <p className=' '>Company name </p>
                                                <p className=''>{" "} - Vendors name</p>
                                            </div>
                                        </div>

                                    </button>
                                    <button
                                        className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 border-b"
                                    >
                                        <div
                                            className="flex items-center justify-center h-10 w-10 bg-primary/20 text-primary font-bold rounded-lg"
                                        >
                                            H
                                        </div>
                                        <div>

                                            <div className="ml-2  ">
                                                <div>
                                                    <span className='text-sm font-semibold '> Cars Breaek Problem</span>
                                                    <span className='text-primary text-xs ml-2'>#H4569-01</span>
                                                </div>

                                            </div>
                                            <div className="ml-2 flex text-[10px] text-gray-600">
                                                <p className=' '>Company name </p>
                                                <p className=''>{" "} - Vendors name</p>
                                            </div>
                                        </div>

                                    </button>



                                </div>


                            </div>
                            {/* side bar end */}
                        </div>
                    </div>

                    {/* cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full ml-5  overflow-auto">
                        {
                            [...Array(6)].map((_, i) =>
                                <div key={i}>
                                    <DocumentCard />
                                </div>)
                        }
                    </div>
                </div>
            </div>

        </>

    );
};

export default Documents;