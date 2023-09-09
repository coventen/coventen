import Link from 'next/link';
import React from 'react';

const Footer = () => {

    return (


        <footer className="relative bg-blueGray-200 pt-8 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <img src="/assets/log.png" alt=" " className='w-40' />
                        <h5 className="text-sm mt-0 mb-2 text-blueGray-600">
                            Empowering Automotive Excellence Through Meticulous <br /> Machinery Forensic Testing
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6">
                            <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fab fa-twitter"></i></button><button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fab fa-facebook-square"></i></button><button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fab fa-dribbble"></i></button><button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fab fa-github"></i>
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link className="text-dimText hover:underline cursor-pointer block pb-2 text-sm" href="/about_us">About Us</Link>
                                    </li>
                                    <li>
                                        <Link className="text-dimText cursor-pointer hover:underline block pb-2 text-sm" href="/products">Products</Link>
                                    </li>
                                    <li>
                                        <a className="text-dimText cursor-pointer  hover:underline  block pb-2 text-sm" href="/learn">Learn</a>
                                    </li>

                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase  text-blueGray-500 text-sm font-semibold mb-2">Company</span>
                                <ul className="list-unstyled">

                                    <li>
                                        <Link className="text-dimText cursor-pointer  hover:underline  block pb-2 text-sm" href="/terms">Terms &amp; Conditions</Link>
                                    </li>
                                    <li>
                                        <Link className="text-dimText hover:underline cursor-pointer    block pb-2 text-sm" href="/privacy">Privacy Policy</Link>
                                    </li>

                                    <li>
                                        <a className="text-dimText  hover:underline  block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Cookies Policy</a>
                                    </li>
                                    <li>
                                        <a className="text-dimText  hover:underline   block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Disclaimer</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                            Copyright © <span id="get-current-year">2021 Coveten All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;