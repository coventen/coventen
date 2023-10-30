import React from 'react';
import Content from './Content';
import LeadCard from './LeadCard';
import Link from 'next/link';


const subServiceDetails: any = async (slug: string) => {
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
                  thumbnailUrl
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

const popularServices = async () => {
    const res = fetch('https://coventenapp.el.r.appspot.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `
            query Services($where: ServiceWhere, $options: ServiceOptions) {
                services(where: $where, options: $options) {
            id
            title
            slug
            description
          }
        }
        `,
            variables: {
                "where": {
                    "isPopular": true
                },
                "options": {
                    "limit": 6
                }
            }

        }),
        next: { revalidate: 10 }

    })
    const { data } = await res.then(res => res.json())
    return data.services
}



const page = async ({ params, searchParams }: any) => {


    const detailsPromise = await subServiceDetails(params.slug || 'no slug')
    const servicesPromise = await popularServices()

    const [details, services] = await Promise.all([detailsPromise, servicesPromise])


    const style = {
        background: "linear - gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/services.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }


    return (
        <>
            {/* <!-- Page Title --> */}
            <section className="w-full h-[450px] flex items-center justify-center flex-col"
                style={{
                    background: `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5) ), url(${details?.coverImageUrl || '/assets/services.jpg'})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                <div className="text-white">
                    <h2 className='text-5xl font-bold'>Service Detail</h2>
                    <ul className="flex items-center justify-center space-x-3">
                        <li><Link href="/">home</Link></li>
                        <li>&#62;</li>

                        <Link href={`/services/${details?.slug}`} >{details?.title}</Link>
                    </ul>
                </div>
            </section>
            {/* <!-- End Page Title --> */}

            <section className='grid grid-cols-1 lg:grid-cols-4 gap-7 lg:px-16 max-w-7xl mx-auto p-8'>

                <div className="sidebar-page-container ">
                    <div className="auto-container">
                        <div className="row clearfix">

                            {/* <!-- Sidebar Side --> */}

                            <aside className="sidebar ">
                                {/* <!-- Sidebar Widget --> */}
                                <div className="sidebar-widget category-widget">
                                    <ul className="space-y-2 mb-4">

                                        <Link href={`/services/${services[0]?.slug}`} className="bg-primary border-l-4 border-[#08d9ff] block text-xs uppercase text-white font-bold px-5 py-3">
                                            {services[0]?.title}
                                        </Link>
                                        {
                                            services?.slice(1, services.length)?.map((service: any) =>

                                                <Link href={`/services/${service?.slug}`} key={service?.id} className="bg-gray-200 block w-full border-l-4  text-gary-700 font-bold px-5 py-3 hover:bg-primary  hover:border-[#08d9ff] duration-500 text-xs uppercase transition-all hover:text-white">
                                                    {service?.title}
                                                </Link>)
                                        }




                                    </ul>
                                </div>

                                {/* <!-- Contact Widget --> */}

                                <LeadCard interest={details?.title} />

                            </aside>


                            {/* <!-- Content Side --> */}
                            {/* <div className="content-side right-sidebar col-lg-8 col-md-12 col-sm-12">
                                <div className="service-detail">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="images/resource/service-10.jpg" alt="" />
                                        </div>
                                        <h3>UI/UX & Web Design</h3>
                                        <p>With over a decade of experience, we’ve established ourselves as one of the pioneering agencies in the region. Our small, flexible, agile and design-led structures and processes allow us to be highly responsive and innovative. We’re made of passionate leaders, strategists, managers, developers, animators and designers who work together under one umbrella. We are a digitally-led, full-service creative agency. We combine strategy, marketing, design.</p>


                                        <div className="row clearfix">
                                    
                                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                                <div className="image">
                                                    <img src="images/resource/service-11.jpg" alt="" />
                                                </div>
                                            </div>
                                     
                                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                                <h4>We serve the best work</h4>
                                                <p>By initiating your project with Fingent, you get a dedicated and skilled team backing you up round-the-clock. All our processes are  the customer oriented, designed to reduce the cost of business operations.</p>
                                            </div>
                                        </div>

                                        <div className="feature-lower_box">
                                            <div className="row clearfix">

                                           
                                                <div className="feature-three col-lg-4 col-md-4 col-sm-6">
                                                    <div className="feature-three_inner">
                                                        <span className="feature-three_icon"><img src="images/icons/service-35.png" alt="" /></span>
                                                        Best quality <br /> support
                                                    </div>
                                                </div>

                                               
                                                <div className="feature-three col-lg-4 col-md-4 col-sm-6">
                                                    <div className="feature-three_inner">
                                                        <span className="feature-three_icon"><img src="images/icons/service-36.png" alt="" /></span>
                                                        Best quality <br /> support
                                                    </div>
                                                </div>

                                       
                                                <div className="feature-three col-lg-4 col-md-4 col-sm-6">
                                                    <div className="feature-three_inner">
                                                        <span className="feature-three_icon"><img src="images/icons/service-37.png" alt="" /></span>
                                                        Best quality <br /> support
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>
                {/* <!-- End Sidebar Page Container --> */}

                {/* <!-- Content Side --> */}
                <div className="col-span-3  ">
                    <div className="service-detail  ">
                        <div className="w-full ">
                            <div className="w-full ">
                                <img src={details?.thumbnailUrl} className='w-full h-[450px]' alt="service image " />
                            </div>
                            <h3 className='text-4xl capitalize py-5 lg:text-5xl font-semibold'>{details?.title}</h3>
                            <div>
                                <Content content={JSON.parse(details?.pageContent)} />
                            </div>


                        </div>
                    </div>
                </div>
            </section>




            {/* <section className='relative  '>
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



            </section> */}
        </>
    );
};

export default page;