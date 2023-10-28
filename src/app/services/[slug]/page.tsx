import React from 'react';
import Content from './Content';


const subServiceDetails = async (slug: string) => {
    const res = fetch('https://coventenapp.el.r.appspot.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `query Services($where: ServiceWhere) {
                services(where: $where) {
                    id
                  title
                  coverImageUrl
                  pageContent
                  slug
                }
              }`,
            variables: {
                "where": {
                    "slug": slug
                }
            },

        }),
        next: { revalidate: 10 }
    })

    const { data } = await res.then(res => res.json())
    return data?.services[0]
}




const page = async ({ params, searchParams }: any) => {


    const details = await subServiceDetails(params.slug || 'no slug')



    return (
        <section className='relative  '>
            <div>
                <img className="z-0 absolute w-full  top-0 left-0 h-[450px] w-full object-cover" src={details?.coverImageUrl || "/assets/heor.jpg"} alt="" />
            </div>
            <main className=' relative z-0'>
                <article className='bg-transparent pt-80 w-full '>
                    <header className="mx-auto max-w-screen-lg  rounded-t-lg bg-white pt-16 text-center shadow-lg w-full">

                        <h1 className="mt-2 text-4xl font-bold text-secondary sm:text-5xl uppercase">{details?.title}</h1>



                    </header>

                    <div className="mx-auto max-w-screen-lg   space-y-12 leading-10 rounded-b-lg bg-white px-8 pt-20 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg w-full ">
                        <Content content={JSON.parse(details?.pageContent)} />


                    </div>
                </article>
            </main>

            <div className="w-fit mx-auto mt-10 flex space-x-2">
                <div className="h-0.5 w-2 bg-gray-600"></div>
                <div className="h-0.5 w-32 bg-gray-600"></div>
                <div className="h-0.5 w-2 bg-gray-600"></div>
            </div>



        </section>
    );
};

export default page;