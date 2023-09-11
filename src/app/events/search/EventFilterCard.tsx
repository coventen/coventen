
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface EventFilterCardProps {
    data: any
}

const EventFilterCard: React.FC<EventFilterCardProps> = ({ data }) => {

    return (
        <Link href={`/events/details/${data?.slug}`} className=" grid place-items-center mt-8 pb-4 w-full">
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
        </Link>
    );
};

export default EventFilterCard;