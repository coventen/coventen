'use client'
import React from 'react';
import Modal from './Modal';
import Button from '@/components/Button';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    return (
        <div className="px-2 lg:px-16 py-10">
            <div className="w-full  rounded bg-white  mx-auto text-gray-800 relative md:text-left">
                <div className="md:flex items-center -mx-10">
                    <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                        <div className="relative">
                            <img src="/assets/home/lab1.jpg" className="w-full relative z-10" alt="" />
                            <div className="border-4 border-primary/30 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-10">
                        <div className="mb-10">
                            <h1 className="font-bold uppercase text-2xl mb-5">Lab Product <br />Example Name Lorem, ipsum.</h1>
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis... <a href="#" className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900">MORE </a></p>
                        </div>
                        <div>
                            <div className="inline-block align-bottom mr-5">
                                <span className="text-2xl leading-none align-baseline">$</span>
                                <span className="font-bold text-5xl leading-none align-baseline">59</span>
                                <span className="text-2xl leading-none align-baseline">.99</span>
                            </div>
                            <div onClick={() => setIsModalOpen(true)} className="inline-block align-bottom">
                                <Button title='Inquiry' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </div>


    );
};

export default Hero;