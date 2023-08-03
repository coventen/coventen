import React from 'react';
import IndustriesData from '../../../utlts/InductiresData.json';
import Image from 'next/image';

interface IDetails {
    id: number,
    name: string,
    slug: string,
    description: string,
    image: string,
}


const Industries = ({ params }: { params: { slug: string } }) => {
    let details: IDetails | undefined;

    details = IndustriesData.find((item: any) => item.slug === params.slug);

    console.log(details)

    return (
        <>
            <header className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-16 mx-auto">
                    <div className="items-center lg:flex">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-5xl">{details?.name}</h1>

                                <p className="mt-8 text-lg text-gray-600 dark:text-gray-400">
                                    {details?.description}
                                </p>

                                {/* <Link href='#nonContact' className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-primary rounded-lg lg:w-auto hover:bg-primary/90 focus:outline-none focus:bg-primary/90">View More</Link> */}
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <Image className="w-full h-full lg:max-w-3xl"
                                src={details?.image as string}
                                height={500}
                                width={500}
                                alt="Catalogue-pana.svg" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Industries;