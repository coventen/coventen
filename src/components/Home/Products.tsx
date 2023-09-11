'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import Link from "next/link"
import { FaComment } from "react-icons/fa"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid } from 'swiper/modules';



export default function Products({ products }: { products: any[] }) {



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
                                delay: 2500,
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
                                products && products.map((item, idx) =>
                                    <SwiperSlide key={item} className="pb-10">
                                        <div key={idx} className="group my-10 flex w-full  flex-col overflow-hidden  border rounded dark:bg-darkBgLight dark:border-darkBorder bg-white/30  ">
                                            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded" href="#">
                                                <img className="peer absolute top-0 right-0 h-full w-full object-cover" src="/assets/home/lab2.jpg" alt="product image" />


                                                <svg className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>

                                            </a>
                                            <div className="mt-4 px-5 pb-5">

                                                <h5 className="text-xl tracking-tight ">{item?.title}</h5>
                                                <p className="mt-2 text-sm mb-5 text-dimText dark:text-gray-300">
                                                    {item?.shortDescription.slice(0, 315) || 'N/A'}
                                                </p>
                                                {/* <div className="mt-2 mb-5 flex items-center justify-between">
                                            <p>
                                                <span className="text-3xl font-bold ">$449</span>
                                                <span className="text-sm  line-through">$699</span>
                                            </p>
                                        </div> */}
                                                <Link href="/products/details/1" >
                                                    <button className="relative group inline-block flex-shrink-0 w-full  py-3 px-5 text-sm font-semibold text-orange-50 bg-primary rounded-md overflow-hidden" type="submit">

                                                        <div className="relative flex items-center justify-center">
                                                            <span className="mr-4">View Details</span>
                                                            <svg width="8" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M6.82994 5.04001L2.58994 0.80001C2.49698 0.706281 2.38638 0.631887 2.26452 0.581118C2.14266 0.530349 2.01195 0.504211 1.87994 0.504211C1.74793 0.504211 1.61723 0.530349 1.49537 0.581118C1.37351 0.631887 1.26291 0.706281 1.16994 0.80001C0.983692 0.987372 0.87915 1.24082 0.87915 1.50501C0.87915 1.7692 0.983692 2.02265 1.16994 2.21001L4.70994 5.75001L1.16994 9.29001C0.983692 9.47737 0.87915 9.73082 0.87915 9.99501C0.87915 10.2592 0.983692 10.5126 1.16994 10.7C1.26338 10.7927 1.3742 10.866 1.49604 10.9158C1.61787 10.9655 1.74834 10.9908 1.87994 10.99C2.01155 10.9908 2.14201 10.9655 2.26385 10.9158C2.38569 10.866 2.4965 10.7927 2.58994 10.7L6.82994 6.46001C6.92367 6.36705 6.99806 6.25645 7.04883 6.13459C7.0996 6.01273 7.12574 5.88202 7.12574 5.75001C7.12574 5.618 7.0996 5.48729 7.04883 5.36543C6.99806 5.24357 6.92367 5.13297 6.82994 5.04001Z" fill="currentColor"></path>
                                                            </svg>
                                                        </div>
                                                    </button>
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