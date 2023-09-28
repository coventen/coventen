
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface EventFilterCardProps {
    data: any
}

const EventFilterCard: React.FC<EventFilterCardProps> = ({ data }) => {

    return (
        <>

            <div className=" bg-white border h-full w-full border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  relative">
                <div >
                    <img className="rounded-t-lg h-56 w-full" src={data?.image || '/assets/no_image.png'} alt="" />
                </div>
                <div className="p-5 mb-9">
                    <a href="#">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{data?.name}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data?.description.slice(0, 70)}</p>
                    <Link href={`/events/details/${data?.slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary absolute bottom-4">
                        Read more
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* <Link href={`/events/details/${data?.slug}`} className=" grid place-items-center mt-8 pb-4 w-full">
                <div className="bg-white rounded-md border-t border-gray-100 shadow-md w-full">
                    <div className="md:flex items-center  leading-none max-w-4xl w-full lg:min-h-60 ">
                        <div className="flex-none h-full lg:h-60  p-3">
                            <Image
                                height={700}
                                width={500}
                                src={data?.image || '/assets/no_image.png'}
                                alt="pic"
                                className="h-full   w-full md:w-56  rounded-md  shadow-lg mr-5"
                            />
                        </div>

                        <div className="flex-col ">
                            <p className=" text-2xl font-bold">{data?.name}</p>
                            <hr className="hr-text" data-content="" />
                            <div className="text-md flex justify-between my-2">
                                <span className="font-semibold text-gray-500">
                                    Event Date: {data?.startAt.slice(0, 10)}
                                </span>
                                <span className="font-bold"></span>
                            </div>
                            <p className="hidden md:block  text-gray-500 my-4 text-sm text-left">
                                {data?.description.slice(0, 70)}
                            </p>

                            <p className="flex text-sm mt-3 text-gray-500 mb-6">
                                Location : {data?.location}
                            </p>
                        </div>
                    </div>
                </div>
            </Link> */}
        </>
    );
};

export default EventFilterCard;