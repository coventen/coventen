import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const InvoicePreview = () => {
    return (
        <div className=" dark:bg-slate-900 relative">
            {/* <!-- Invoice --> */}
            <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-4">
                <div className="sm:w-11/12 lg:w-3/4 mx-auto">
                    {/* <!-- Card --> */}
                    <div className="flex flex-col p-4 sm:p-10 bg-white shadow-md rounded-xl dark:bg-gray-800">
                        {/* <!-- Grid --> */}
                        <div className="flex justify-between">
                            <div>
                                <img src="/assets/log.png" alt="logo" />


                            </div>
                            {/* <!-- Col --> */}

                            <div className="text-right">
                                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">Invoice #</h2>
                                <span className="mt-1 block text-gray-500">3682303</span>

                                <div>

                                    <h3 className="text-sm  text-gray-600 dark:text-gray-200">Example Vendor name</h3>
                                    <address className=" text-sm not-italic text-gray-500">
                                        example@gmial.com,<br />
                                        Example Vendor Address<br />
                                        United States<br />
                                    </address>
                                </div>

                            </div>
                            {/* <!-- Col --> */}
                        </div>
                        {/* <!-- End Grid --> */}

                        {/* <!-- Grid --> */}
                        <div className="mt-8 grid sm:grid-cols-2 gap-3">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Client Details:</h3>
                                <h3 className="text-base  text-gray-600 dark:text-gray-200">Example company name</h3>
                                <address className="mt-1 text-sm not-italic text-gray-500">
                                    example@gmial.com,<br />
                                    Example Company Address<br />
                                    United States<br />
                                </address>
                            </div>
                            {/* <!-- Col --> */}

                            <div className="sm:text-right space-y-2">
                                {/* <!-- Grid --> */}
                                <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                                    <dl className="grid sm:grid-cols-5 gap-x-3">
                                        <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Invoice date:</dt>
                                        <dd className="col-span-2 text-gray-500">03/10/2018</dd>
                                    </dl>
                                    <dl className="grid sm:grid-cols-5 gap-x-3">
                                        <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Due date:</dt>
                                        <dd className="col-span-2 text-gray-500">03/11/2018</dd>
                                    </dl>
                                </div>
                                {/* <!-- End Grid --> */}
                            </div>
                            {/* <!-- Col --> */}
                        </div>
                        {/* <!-- End Grid --> */}

                        {/* <!-- Table --> */}
                        <div className="mt-6">
                            <div className="border border-gray-200 p-4 rounded-lg space-y-4 dark:border-gray-700">
                                <div className="hidden md:flex items-center justify-between">
                                    <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase">Service Name</div>
                                    {/* <div className="text-left text-xs font-medium text-gray-500 uppercase">Qty</div>
                                    <div className="text-left text-xs font-medium text-gray-500 uppercase">Rate</div> */}
                                    <div className="text-right text-xs font-medium text-gray-500 uppercase">Amount</div>
                                </div>

                                <div className="hidden sm:block border-b border-gray-200 dark:border-gray-700"></div>

                                <div className="grid grid-cols-3 sm:flex items-center justify-between gap-2">
                                    <div className="col-span-full sm:col-span-2">
                                        <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Item</h5>
                                        <p className="font-medium text-gray-800 dark:text-gray-200">Service Name Lorem, ipsum dolor.</p>
                                    </div>

                                    <div>
                                        <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Amount</h5>
                                        <p className="sm:text-right text-gray-800 dark:text-gray-200">$500</p>
                                    </div>
                                </div>

                                <div className="sm:hidden border-b border-gray-200 dark:border-gray-700"></div>
                                <div className="grid grid-cols-3 sm:flex items-center justify-between gap-2">
                                    <div className="col-span-full sm:col-span-2">
                                        <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Item</h5>
                                        <p className="font-medium text-gray-800 dark:text-gray-200">Service Name Lorem, ipsum dolor.</p>
                                    </div>

                                    <div>
                                        <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Amount</h5>
                                        <p className="sm:text-right text-gray-800 dark:text-gray-200">$500</p>
                                    </div>
                                </div>

                                <div className="sm:hidden border-b border-gray-200 dark:border-gray-700"></div>




                            </div>
                        </div>
                        {/* <!-- End Table --> */}

                        {/* <!-- Flex --> */}
                        <div className="mt-8 flex sm:justify-end">
                            <div className="w-full max-w-2xl text-sm sm:text-right space-y-2">
                                {/* <!-- Grid --> */}
                                <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                                    {/* <dl className="grid sm:grid-cols-5 gap-x-3">
                                        <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Subtotal:</dt>
                                        <dd className="col-span-2 text-gray-500">$2750.00</dd>
                                    </dl> */}

                                    <dl className="grid sm:grid-cols-5 gap-x-3">
                                        <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Total:</dt>
                                        <dd className="col-span-2 text-gray-500">$2750.00</dd>
                                    </dl>

                                    <dl className="grid sm:grid-cols-5 gap-x-3">
                                        <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">GST:</dt>
                                        <dd className="col-span-2 text-gray-500">$3.00</dd>
                                    </dl>
                                    <dl className="grid sm:grid-cols-5 gap-x-3">
                                        <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">SGST:</dt>
                                        <dd className="col-span-2 text-gray-500">$3.00</dd>
                                    </dl>
                                    <dl className="grid sm:grid-cols-5 gap-x-3">
                                        <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">UGST:</dt>
                                        <dd className="col-span-2 text-gray-500">$3.00</dd>
                                    </dl>

                                    <dl className="grid sm:grid-cols-5 gap-x-3">
                                        <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Amount paid:</dt>
                                        <dd className="col-span-2 text-gray-500">$2789.00</dd>
                                    </dl>

                                    <dl className="grid sm:grid-cols-5 gap-x-3">
                                        <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Due balance:</dt>
                                        <dd className="col-span-2 text-gray-500">$0.00</dd>
                                    </dl>
                                </div>
                                {/* <!-- End Grid --> */}
                            </div>
                        </div>
                        {/* <!-- End Flex --> */}

                        {/* <div className="mt-8 sm:mt-12">
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Thank you!</h4>
                            <p className="text-gray-500">If you have any questions concerning this invoice, use the following contact information:</p>
                            <div className="mt-2">
                                <p className="block text-sm font-medium text-gray-800 dark:text-gray-200">example@site.com</p>
                                <p className="block text-sm font-medium text-gray-800 dark:text-gray-200">+1 (062) 109-9222</p>
                            </div>
                        </div> */}

                        <p className="mt-5 text-sm text-gray-500">© 2023 Company Name.</p>
                    </div>
                    {/* <!-- End Card --> */}

                    {/* <!-- Buttons --> */}
                    <div className="mt-6 flex justify-end gap-x-3">
                        <a className="inline-flex justify-center items-center gap-x-3 text-sm text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" href="#">
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z" />
                                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                            </svg>
                            PDF
                        </a>
                        <a className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800" href="#">
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                                <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
                            </svg>
                            Print details
                        </a>
                    </div>
                    {/* <!-- End Buttons --> */}
                </div>
            </div>
            {/* <Link href="/admin/dashboard/invoice/create_invoice">
                <div className='flex items-center justify-center space-x-2 text-primary px-3 py-1 absolute top-5 left-5 hover:bg-gray-50'>
                    <p>Go Back</p>
                    <p>Go Back</p>
                </div>
            </Link> */}
            {/* <!-- End Invoice --> */}
        </div>
    );
};

export default InvoicePreview;