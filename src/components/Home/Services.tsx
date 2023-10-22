'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid } from 'swiper/modules';
import { useEffect, useState } from 'react';
import Link from 'next/link';

// component
export default function Services({ services }: { services: any[] }) {

    const [servicesDataChunk, setServicesDataChunk] = useState<any>([])

    console.log(services, ' services ')


    useEffect(() => {
        if (services) {
            const chunked = splitArrayIntoChunks(services, 6)
            setServicesDataChunk(chunked)
        }
    }, [services])



    function splitArrayIntoChunks(array: any, chunkSize: number) {
        return Array.from({ length: Math.ceil(array.length / chunkSize) }, (v, index) =>
            array.slice(index * chunkSize, index * chunkSize + chunkSize)
        );
    }



    return (
        <section className="py-14">
            <div className="max-w-screen-2xl mx-auto px-2 lg:px-12  md:px-8">
                <div className="relative max-w-2xl mx-auto sm:text-center">
                    <div className="relative z-10 mt-16">
                        <h3 className=" text-3xl font-semibold text-center  sm:text-4xl mb-3">
                            Popular Services
                        </h3>

                        <p className="mx-auto max-w-screen-md text-center text-dimText dark:text-darkDimText md:text-sm">We’re India’s leading quality consciousness and test service providers, perhaps we are first in the domain to bring these services for manufacturers in India connecting global quality standards and labs</p>
                    </div>

                </div>
                <div className="relative mt-12">

                    <ul className="w-full ">
                        <Swiper
                            className="w-full  "
                            modules={[Navigation, Pagination, A11y, Autoplay]}
                            spaceBetween={10}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            // navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            slidesPerView={1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                900: {
                                    slidesPerView: 1,
                                    spaceBetween: 18,
                                },
                            }}
                        >

                            {
                                servicesDataChunk.map((item: any, idx: number) =>
                                    <SwiperSlide key={idx} >
                                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 lg:mx-12 '>
                                            {
                                                item?.map((item: any, idx: number) => (

                                                    <Link href={`/services/${item?.slug}`} key={idx} className="bg-white/30  space-y-3 p-4 border rounded-lg dark:bg-darkBgLight dark:border-darkBorder">
                                                        <div className="text-primary pb-3">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                                                            </svg>
                                                        </div>
                                                        <h4 className="text-lg uppercase  font-semibold">
                                                            {item?.title}
                                                        </h4>
                                                        <p className="text-dimText text-sm dark:text-darkDimText text-justify">
                                                            {item?.description || 'N/A'
                                                            }
                                                        </p>
                                                    </Link>

                                                ))
                                            }
                                        </div>
                                    </SwiperSlide>

                                )
                            }



                            {/* <SwiperSlide >
                                <ul className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 lg:mx-12 '>
                                    {
                                        services.slice(0, 6).map((item, idx) => (

                                            <li key={idx} className="bg-white/30  space-y-3 p-4 border rounded-lg dark:bg-darkBgLight dark:border-darkBorder">
                                                <div className="text-primary pb-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-lg  font-semibold">
                                                    {item?.title}
                                                </h4>
                                                <p className="text-dimText text-sm  dark:text-darkDimText lowercase">
                                                    {item?.description || 'N/A'
                                                    }
                                                </p>
                                            </li>

                                        ))
                                    }
                                </ul>
                            </SwiperSlide> */}

                        </Swiper>
                    </ul>
                </div>
            </div>
        </section>
    )
}