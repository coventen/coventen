'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import Link from "next/link"
import { FaComment } from "react-icons/fa"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid } from 'swiper/modules';
import AnimatedButton from '../AnimatedButton';



export default function Products({ products }: { products: any }) {

    console.log(products, 'products000000000000000000000000000')

    return (
        <section className="py-14">
            <div className="max-w-screen-2xl mx-auto px-2 lg:px-12  md:px-8">
                <div className="relative max-w-2xl mx-auto sm:text-center">
                    <div className="relative z-10 mt-16">
                        <h3 className=" text-3xl font-semibold text-center sm:text-4xl mb-3">
                            Popular Products
                        </h3>

                        <p className="mx-auto max-w-screen-md text-center text-dimText dark:text-darkDimText md:text-sm">We’re India’s leading quality consciousness and test service providers, perhaps we are first in the domain to bring these services for manufacturers in India connecting global quality standards and labs</p>
                    </div>
                    {/* <div aria-hidden="true" className="absolute inset-0 my-auto max-w-xsh-32 rotate-45 bg-gradient-to-r from-[#00b1fd] to-[#71faca] blur-[90px] opacity-50 dark:opacity-20">
                    </div> */}
                    {/* <div className="absolute inset-0 max-w-xs mx-auto h-96 blur-[100px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div> */}
                </div>
                <div className="relative mt-12">
                    <ul className="">
                        <Swiper
                            modules={[Navigation, Pagination, A11y, Autoplay]}
                            spaceBetween={10}
                            loop={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
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
                                    slidesPerView: 3,
                                    spaceBetween: 18,
                                },
                            }}
                        >


                            {
                                products && products.map((item: any, idx: number) =>
                                    <SwiperSlide key={item} className="pb-10">
                                        <div key={idx} className="group my-10 flex w-full  flex-col overflow-hidden  border rounded dark:bg-darkBgLight dark:border-darkBorder bg-white/30 cursor-pointer ">
                                            <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded group" >
                                                <img className="peer absolute top-0 right-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-125" src={item?.image || '/assets/no_image.png'} alt="product image" />


                                                <svg className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>

                                            </div>
                                            <div className="mt-4 px-5 pb-5">

                                                <h5 className="text-lg font-normal uppercase text-gray-950 tracking-tight ">{item?.title}</h5>
                                                <p className="mt-2 text-sm mb-5 text-dimText dark:text-gray-300">
                                                    {item?.shortDescription.slice(0, 315) || 'N/A'}
                                                </p>

                                                <Link href={`/products/details/${item?.id}`} >
                                                    <AnimatedButton title="View Details" />

                                                </Link>

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            }
                        </Swiper>

                    </ul>
                </div>
            </div>
        </section>
    )
}