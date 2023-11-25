import React from 'react';
import Sidebar from './Sidebar';
import Image from 'next/image';
import Link from 'next/link';
import Main from './Main';


const ProductPage = ({ params, searchParams }: any) => {

    return (
        <>
            <div style={{
                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) ), url('/assets/learn.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}

                className=" h-[470px] flex items-center justify-center text-white">
                <div className="-mx-4 flex flex-wrap w-full">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[680px] text-center lg:mb-20">
                            {/* <span className="mb-2 block text-lg font-semibold text-white">
                                    LEARN
                                </span> */}
                            <h2 className="mb-4  leading-3 font-bold text-dark sm:text-3xl ">
                                Our learn page provides you with all the information you need to develop
                                <br /> your career.
                            </h2>
                            <p className="text-base text-body-color">
                                Knowledge and Wisdom is not the products of schooling
                                <br />but of the lifelong attempt to acquire it.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Sidebar />
        </>
    );
};

export default ProductPage;