import React from 'react';
import Content from './Content';


const aboutUsPageDetails = async () => {
    const res = fetch('http://localhost:4000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `query AboutPages {
                aboutPages {
                  id
                  title
                  image
                  description
                }
              }`,
            next: { revalidate: 30 }

        })
    })

    const { data } = await res.then(res => res.json())
    return data.aboutPages[0]
}




const page = async ({ params, searchParams }: any) => {


    const details = await aboutUsPageDetails()

    console.log(details)


    return (
        <>
            {/* <section className="px-2 py-32 bg-white md:px-0">
                <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                    <div className="flex flex-wrap items-center sm:-mx-3">
                        <div className="w-full md:w-1/2 md:px-3">
                            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                    <span className="block xl:inline">
                                        {details.title.slice(0, details?.title?.length / 2)}
                                    </span>
                                    <span className="block text-primary xl:inline">
                                        {details.title.slice(details?.title?.length / 2 + 1, details?.title?.length)}</span>
                                </h1>
                                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Here, you will discover a treasure trove of knowledge, ideas, and stories that will ignite your imagination and open doors to new horizon</p>

                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="w-full h-auto overflow-hidden  shadow-xl    rounded-md">
                                <img src="/assets/home/lab1.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <div className="max-w-screen-lg mx-auto mb-20">


                <main className="mt-10">

                    <div className="mb-4 md:mb-0 w-full mx-auto relative">


                        <img src={details?.image || '/assets/no_image.png'} className='max-h-[500px] w-full ' />
                    </div>
                    <div className="px-4 lg:px-0 mt-7">
                        <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                            {details?.title}
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:space-x-12">

                        <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full ">
                            <Content content={details?.description} />
                        </div>



                    </div>
                </main>



            </div>
        </>
    );
};

export default page;