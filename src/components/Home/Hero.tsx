'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid } from 'swiper/modules';
import Link from 'next/link';
import HeroCard from './HeroCard';





export default function Hero({ heroData }: any) {

    console.log(heroData, ' this is hero data')

    return (
        <div className="w-full ">
            <Swiper
                className="w-full  "
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 3500,
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
                            <HeroCard image={item?.image} text={item?.title} />
                        </SwiperSlide>

                    )
                }

            </Swiper>
        </div>
    )
}