import React from 'react';

const AboutUs = () => {
    return (
        <>



            {/* <!-- Section 2 --> */}
            <section className="px-2 py-32 bg-white md:px-0">
                <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                    <div className="flex flex-wrap items-center sm:-mx-3">
                        <div className="w-full md:w-1/2 md:px-3">
                            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                    <span className="block xl:inline">Useful Tools to</span>
                                    <span className="block text-primary xl:inline">Help You Build Faster.</span>
                                </h1>
                                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Here, you will discover a treasure trove of knowledge, ideas, and stories that will ignite your imagination and open doors to new horizon</p>
                                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                                    <a href="#_" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-primary  sm:mb-0 hover:bg-primary sm:w-auto">
                                        Try It Free
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </a>
                                    <a href="#_" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100  hover:bg-gray-200 hover:text-gray-600">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="w-full h-auto overflow-hidden  shadow-xl    rounded-md">
                                <img src="/assets/home/lab1.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Section 3 --> */}
            <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
                <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

                    {/* <!-- Img --> */}
                    <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10 rounded-md">
                        <img src="/assets/home/lab2.jpg" className="p-2 pl-4 pr-4 min-h-[350px]  w-full rounded-md" />
                    </div>

                    {/* <!-- Content --> */}
                    <div className="box-border mt-8 order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                        <h2 className=" font-extrabold tracking-tight text-gray-900 sm:text-2xl lg:text-4xl ">
                            Coventen technologies platform is as simple as eating ripened bananas
                        </h2>
                        <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                            Build an atmosphere that creates productivity in your organization and your company culture.
                        </p>
                        <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                Using COVETEN technologies platform is as simple as eating ripened bananas, we make sure that every process is simple yet elaborative so that you can understand the entire process quickly and accurately, if you stuck mid of something can find us always there to clarify and support you
                            </li>

                        </ul>
                    </div>
                    {/* <!-- End  Content --> */}
                </div>


                {/*---------- 2nd row---------- */}
                <div className="box-border mt-24 flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

                    {/* <!-- Content --> */}
                    <div className="box-border mt-8 w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                        <h2 className=" font-extrabold tracking-tight text-gray-900 sm:text-2xl lg:text-4xl mb-5">
                            Here, you will discover a treasure trove of knowledge, ideas, and storie
                        </h2>

                        <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                Whether you are seeking solution for toughest problem in product development or testing and get your desired certification to your product or firm, we have curated a collection of content that speaks directly to your ideas and needs,
                            </li>

                        </ul>
                    </div>
                    {/* <!-- End  Content --> */}
                    {/* <!-- Img --> */}
                    <div className="box-border mt-9  relative w-full max-w-md px-4  mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                        <img src="/assets/home/lab2.jpg" className="p-2 pl-4 pr-4 min-h-[350px] w-full " />
                    </div>
                </div>


                {/*---------- 3rd row---------- */}
                <div className="box-border mt-24 flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
                    {/* <!-- Img --> */}
                    <div className="box-border mt-9  relative w-full max-w-md px-4  mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                        <img src="/assets/home/lab2.jpg" className="p-2 pl-4 pr-4 min-h-[350px] w-full" />
                    </div>
                    {/* <!-- Content --> */}
                    <div className="box-border mt-8 w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                        <h2 className=" font-extrabold tracking-tight text-gray-900 sm:text-2xl lg:text-4xl mb-5">
                            What is our goal
                        </h2>

                        <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                We wanted every Indian brand and product is built strong enough and with stand global competition, similarly we wanted to simplify every manufacturer needs in best possible way

                            </li>

                        </ul>
                    </div>
                    {/* <!-- End  Content --> */}

                </div>


                {/*---------- 4th row---------- */}
                <div className="box-border mt-24 flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

                    {/* <!-- Content --> */}
                    <div className="box-border mt-8 w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                        <h2 className=" font-extrabold tracking-tight text-gray-900 sm:text-2xl lg:text-4xl mb-5">
                            Welcome to a world of innovation and inspiration
                        </h2>

                        <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                where every manufacturer dreams find wings and soar to new heights. Let us make every moment count and embrace the limitless possibilities that lie ahead.
                                Your journey to innovation starts now. Explore, learn, and create a future that leaves an indelible mark on the tapestry of life.Together, let us embrace the extraordinary!
                                Welcome to our inspiring sanctuary


                            </li>

                        </ul>
                    </div>
                    {/* <!-- End  Content --> */}
                    {/* <!-- Img --> */}
                    <div className="box-border mt-9  relative w-full max-w-md px-4  mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                        <img src="/assets/home/lab2.jpg" className="p-2 pl-4 pr-4 min-h-[350px] w-full" />
                    </div>
                </div>

            </section>








        </>
    );
};

export default AboutUs;