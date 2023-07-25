import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className=" max-w-7xl mx-auto">
            <section className="w-full text-gray-800">

                {/* top section */}
                <header className="bg-white dark:bg-gray-900">
                    <div className="container px-6 py-16 mx-auto">
                        <div className="items-center lg:flex">
                            <div className="w-full lg:w-1/2">
                                <div className="lg:max-w-lg">
                                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-5xl">Designing Services</h1>

                                    <p className="mt-8 text-lg text-gray-600 dark:text-gray-400">Our industrial designing services are meant to support industries to ramp up all their product design needs like components, subassemblies, independent aftermarket products, dies and molds, and other essential tools that are used in manufacturing </p>

                                    <Link href='#nonContact' className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-primary rounded-lg lg:w-auto hover:bg-primary/90 focus:outline-none focus:bg-primary/90">View More</Link>
                                </div>
                            </div>

                            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                                <img className="w-full h-full lg:max-w-3xl"
                                    // src="https://merakiui.com/images/components/Catalogue-pana.svg"
                                    src="https://merakiui.com/images/components/Catalogue-pana.svg"
                                    alt="Catalogue-pana.svg" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* desgin system description  */}



                <section id='nonContact' className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="text-center mb-20">
                            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Non-Contact measurement</h1>
                            <p className="text-base leading-relaxed xl:w-[70%] lg:w-3/4 mx-auto">Non-contact measurement systems are perfect, quick and alternative solution to traditional contact measurements, wherein we use different light sources, sensors and radiation sources to perform measurements, these tests are non-intrusive, highly precise and faster</p>
                        </div>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            {
                                [...Array(6)].map((_, i) =>
                                    <div key={i} className="p-2 sm:w-1/2 w-full">
                                        <div className="bg-gray-100 rounded flex p-4 h-full ">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-primary w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                <path d="M22 4L12 14.01l-3-3"></path>
                                            </svg>
                                            <div>
                                                <span className="title-font font-medium">3D scanning</span>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, illum cupiditate corrupti quae quam distinctio ducimus esse dignissimos. At, ratione.</p>
                                            </div>
                                        </div>

                                    </div>)
                            }

                        </div>

                    </div>
                </section>


                {/* Laser Measurements and Trackers */}

                <section className="py-14">
                    <div className="max-w-screen-xl mx-auto md:px-8">
                        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                            <div className="flex-1 sm:hidden lg:block">
                                <img src="/assets/service.jpg" className="md:max-w-lg sm:rounded-lg" alt="" />
                            </div>
                            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                                <h3 className="text-primary font-semibold">
                                    Best services
                                </h3>
                                <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                                    Laser Measurements and Trackers
                                </p>
                                <p className="mt-3 text-gray-600">
                                    We have trackers of different technologies like laser based, flexi mounted, mounted on arms, mounted on CMMs, and robotic arms and they’re best suited to perform larger components which needs precision, repeatability, and consistency, based on requirement we would be able to suggest and provide relevant system
                                </p>
                                <a href="javascript:void(0)" className="inline-flex gap-x-1 items-center text-primary hover:text-primary duration-150 font-medium">
                                    View more Services
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Laser Measurements and Trackers */}

                <section className="py-14">
                    <div className="max-w-screen-xl mx-auto md:px-8">
                        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">

                            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                                <h3 className="text-primary font-semibold">
                                    Best services
                                </h3>
                                <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                                    Probe Systems or Contact Measurement
                                </p>
                                <p className="mt-3 text-gray-600">
                                    we offer top-of-the-line Probe Systems and Contact Measurement services that revolutionize the way you approach dimensional inspections and quality control. Whether you are in manufacturing, aerospace, automotive, or any industry that demands perfection, our advanced measurement solutions have you covered.
                                </p>
                                <a href="javascript:void(0)" className="inline-flex gap-x-1 items-center text-primary hover:text-primary duration-150 font-medium">
                                    View more Services
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                            <div className="flex-1 sm:hidden lg:block">
                                <img src="/assets/service.jpg" className="md:max-w-lg sm:rounded-lg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>









            </section>
        </div >
    );
};

export default page;