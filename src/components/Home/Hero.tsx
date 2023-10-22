'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid, EffectCreative } from 'swiper/modules';
import Link from 'next/link';
import HeroCard from './HeroCard';
import SearchInput from './SearchInput';





export default function Hero({ heroData }: any) {

    console.log(heroData, ' this is hero')

    return (
        <div className="w-full ">
            <Swiper
                className="w-full  "
                modules={[Navigation, Pagination, A11y, Autoplay, EffectCreative]}
                spaceBetween={10}
                loop={true}
                grabCursor={true}
                // effect={'creative'}
                // creativeEffect={{
                //     prev: {
                //         shadow: true,
                //         translate: [0, 0, -400],
                //     },
                //     next: {
                //         translate: ['100%', 0, 0],
                //     },
                // }}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                // navigation={true}
                pagination={{
                    clickable: true,
                }}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 14,
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
                                    background: `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5) ), url(${item?.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                                className=" h-[50vh] md:min-h-[65vh] lg:min-h-[100vh]  xl:min-h-[95vh] 2xl:min-h-[76vh]   pt-14 lg:pt-0">

                                {/* <img className="absolute inset-0 w-full h-full object-cover object-top" src={item?.image} width="400" height="500" alt="hero background image" /> */}
                                {/* <div aria-hidden="true" className="absolute inset-0 w-full h-full bg-gray-800 bg-opacity-30 backdrop-blur-[0px] bg-gradient-to-b from-black/90 to-black/10"></div> */}
                                <div className="  px-6 md:px-12 lg:px-6 max-w-screen-2xl m-auto">
                                    <div className="mb-12 pt-7 space-y-16 md:mb-20 md:pt-40 lg:w-8/12 lg:mx-auto">
                                        <h1 className="text-white text-center text-2xl font-bold sm:text-4xl md:text-5xl lg:leading-normal ">
                                            {item?.title}
                                        </h1>
                                        <div className='block lg:hidden'>
                                            <SearchInput />
                                        </div>

                                    </div>

                                </div>


                            </div >
                        </SwiperSlide>

                    )
                }


            </Swiper>

            <div className='hidden lg:block  absolute w-full  lg:w-[70%] left-1/2 top-[400px] transform -translate-x-1/2 -translate-y-1/2 z-[9999999999999999] '>
                <SearchInput />
            </div>
        </div>
    )
}