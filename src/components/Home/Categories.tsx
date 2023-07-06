import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Categories = () => {

    const Categories = [
        {
            id: 1,
            name: "Water Testing Lab",
            image: '/assets/home/lab1.jpg'

        },
        {
            id: 2,
            name: "Food Testing Lab",
            image: '/assets/home/lab2.jpg'
        },
        {
            id: 3,
            name: "Soil Testing Lab",
            image: '/assets/home/lab3.jpg'
        },
        {
            id: 4,
            name: "Metal Testing Lab",
            image: '/assets/home/lab4.jpg'
        },
        {
            id: 5,
            name: "Electronics Testing Lab",
            image: '/assets/home/lab5.jpg'
        },
        {
            id: 6,
            name: "Chemical Testing Lab",
            image: '/assets/home/lab6.jpg'
        },
        {
            id: 7,
            name: "Petroleum Testing Lab",
            image: '/assets/home/lab4.jpg'

        },
        {
            id: 8,
            name: "Material Testing Lab",
            image: '/assets/home/lab2.jpg'
        }
    ]




    return (
        <>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-16">

                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Categories</h2>

                        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                    </div>


                    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
                        {
                            Categories.map((category) =>
                                <Link key={category?.id} href="#" className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-80">
                                    <Image src={category?.image} height={500} width={500} loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-primary/30  md:via-transparent"></div>

                                    <div className="relative mt-auto p-4">

                                        <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">{category?.name}</h2>

                                        <span className="font-semibold text-primary">Read more</span>
                                    </div>
                                </Link>)
                        }





                    </div>
                </div>
            </div>
        </>
    );
};

export default Categories;