import React from 'react';
import Sidebar from './Sidebar';
import Image from 'next/image';
import Link from 'next/link';


const ProductPage = () => {
    return (
        <Sidebar>
            <>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 pb-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            <Link href="/products/details/1" className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <Image height={430} width={265} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/assets/home/lab1.jpg" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">$16.00</p>
                                </div>
                            </Link>
                            <Link href="/products/details/1" className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <Image height={430} width={265} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/assets/home/lab4.jpg" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                                    <p className="mt-1">$21.15</p>
                                </div>
                            </Link>
                            <Link href="/products/details/1" className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <Image height={430} width={265} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/assets/home/lab6.jpg" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                                    <p className="mt-1">$12.00</p>
                                </div>
                            </Link>
                            <Link href="/products/details/1" className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <Image height={430} width={265} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/assets/home/lab2.jpg" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                                    <p className="mt-1">$18.40</p>
                                </div>
                            </Link>
                            <Link href="/products/details/1" className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <Image height={430} width={265} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/assets/home/lab3.jpg" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">$16.00</p>
                                </div>
                            </Link>
                            <Link href="/products/details/1" className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <Image height={430} width={265} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/assets/home/lab4.jpg" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                                    <p className="mt-1">$21.15</p>
                                </div>
                            </Link>
                            <Link href="/products/details/1" className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <Image height={430} width={265} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/assets/home/lab5.jpg" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                                    <p className="mt-1">$12.00</p>
                                </div>
                            </Link>
                            <Link href="/products/details/1" className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <Image height={430} width={265} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/assets/home/lab6.jpg" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                                    <p className="mt-1">$18.40</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>


            </>
        </Sidebar>
    );
};

export default ProductPage;