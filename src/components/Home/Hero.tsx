'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid } from 'swiper/modules';
import Link from 'next/link';
import HeroCard from './HeroCard';
import SearchInput from './SearchInput';





export default function Hero({ heroData }: any) {



    return (
        <div className="w-full ">
            <Swiper
                className="w-full  "
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 7500,
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
                    heroData && heroData.map((item: any, idx: number) =>
                        <SwiperSlide key={idx} >
                            <div
                                style={{
                                    background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${item?.image})`,
                                }}
                                className="relative h-screen  lg:min-h-[110vh] pt-14 lg:pt-0">

                                {/* <img className="absolute inset-0 w-full h-full object-cover object-top" src={item?.image} width="400" height="500" alt="hero background image" /> */}
                                {/* <div aria-hidden="true" className="absolute inset-0 w-full h-full bg-gray-800 bg-opacity-30 backdrop-blur-[0px] bg-gradient-to-b from-black/90 to-black/10"></div> */}
                                <div className="relative container m-auto px-6 md:px-12 lg:px-6">
                                    <div className="mb-12 pt-7 space-y-16 md:mb-20 md:pt-40 lg:w-8/12 lg:mx-auto">
                                        <h1 className="text-white text-center text-2xl font-bold sm:text-4xl md:text-5xl lg:leading-normal ">
                                            {item?.text}
                                        </h1>
                                        <SearchInput />
                                    </div>

                                </div>


                            </div >
                        </SwiperSlide>

                    )
                }

            </Swiper>
        </div>
    )
}