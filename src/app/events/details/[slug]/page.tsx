import Image from 'next/image';
import React from 'react';




type Props = {
    params: { slug: string }
    searchParams?: { [key: string]: string };

}


async function getEvent(slug: string) {

    const response = await fetch("https://coventenapp.el.r.appspot.com/", {
        method: "POST",
        body: JSON.stringify({
            query: `
            query Events {
                events {
                  id
                  name
                  slug
                  description
                  location
                  image
                  endAt
                  startAt
                }
              }`,
            variables: {
                where: {
                    slug: slug
                }
            },


        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response.json();

}




// component

const EventDetails = async ({
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams?: { [key: string]: string };
}) => {

    const slug = params?.slug || '';
    const { data } = await getEvent(slug);


    const evenDetail = data?.events[0];
    return (
        <div className="max-w-screen-lg mx-auto">


            <main className="mt-10">

                <div className="mb-4 md:mb-0 w-full mx-auto relative">
                    <div className="px-4 lg:px-0">
                        <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                            {evenDetail?.name}
                        </h2>
                    </div>

                    <img src={evenDetail?.image || '/assets/no_image.png'} className='max-h-[450px] w-full ' />
                </div>

                <div className="flex flex-col lg:flex-row lg:space-x-12">

                    <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                        {evenDetail?.description}

                    </div>

                    <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
                        <div className="col-span-1 lg:col-span-2 p-4">

                            <div className="border-b border-gray-300 pb-1 mt-7">
                                <p
                                    className="text-primary font-semibold"

                                >
                                    Start:
                                </p>
                                <p
                                    className="text-dimText"


                                >
                                    {evenDetail?.startAt?.slice(0, 10) || 'Comming Soon'}
                                </p>
                            </div>
                            <div className="border-b border-gray-300 pb-1">
                                <p
                                    className="text-primary font-semibold"

                                >
                                    End:
                                </p>
                                <p
                                    className="text-dimText"


                                >
                                    {evenDetail?.startAt?.slice(0, 10) || 'Comming Soon'}
                                </p>
                            </div>
                            <div className="border-b border-gray-300 pb-1">
                                <p
                                    className="text-primary font-semibold"

                                >
                                    Location:
                                </p>
                                <p
                                    className="text-dimText"


                                >
                                    {evenDetail?.location || 'Not Available'}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </main>



        </div>
    );
};

export default EventDetails;