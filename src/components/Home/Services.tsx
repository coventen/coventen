


export default function Services({ services }: { services: any[] }) {



    return (
        <section className="py-14">
            <div className="max-w-screen-2xl mx-auto px-2 lg:px-12  md:px-8">
                <div className="relative max-w-2xl mx-auto sm:text-center">
                    <div className="relative z-10 mt-16">
                        <h3 className=" text-3xl font-semibold sm:text-4xl mb-3">
                            Popular Services
                        </h3>

                        <p className="mx-auto max-w-screen-md text-center text-dimText dark:text-darkDimText md:text-sm">We’re India’s leading quality consciousness and test service providers, perhaps we are first in the domain to bring these services for manufacturers in India connecting global quality standards and labs</p>
                    </div>
                    {/* <div aria-hidden="true" className="absolute inset-0 my-auto max-w-xsh-32 rotate-45 bg-gradient-to-r from-[#00b1fd] to-[#71faca] blur-[90px] opacity-50 dark:opacity-20">
                    </div> */}
                    {/* <div className="absolute inset-0 max-w-xs mx-auto h-96 blur-[100px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div> */}
                </div>
                <div className="relative mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            services.map((item, idx) => (
                                <li key={idx} className="bg-white/30  space-y-3 p-4 border rounded-lg dark:bg-darkBgLight dark:border-darkBorder">
                                    <div className="text-primary pb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg  font-semibold">
                                        {item.title}
                                    </h4>
                                    <p className="text-dimText dark:text-darkDimText lowercase">
                                        {item.shortDescription || 'N/A'
                                        }
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}