'use client'
import { Invoice } from '@/gql/graphql';
import getInvoiceData from '@/shared/graphQl/queries/invoiceData';
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react';
import { usePDF } from 'react-to-pdf';



const InvoicePreview = () => {
    const [invoiceData, setInvoiceData] = React.useState<Invoice | null>(null)

    const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });


    // hooks
    const params = useParams()


    useEffect(() => {
        getData()
    }, [params?.id])


    const getData = async () => {
        const invoice: Invoice = await getInvoiceData(params.id)
        setInvoiceData(invoice)
    }




    return (
        <section>

            <div className=" dark:bg-slate-900 relative">
                {/* <!-- Invoice --> */}
                <div ref={targetRef} className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-4 ">
                    <div className="sm:w-11/12 lg:w-3/4 mx-auto">
                        {/* <!-- Card --> */}
                        <div className="flex flex-col p-4 sm:px-10 sm:pt-14 sm:pb-40  bg-white shadow-md rounded-xl dark:bg-gray-800  ">
                            {/* <!-- Grid --> */}
                            <div className="flex justify-between">
                                {
                                    invoiceData?.sentBy === "VENDOR" ?
                                        <>
                                            <div>

                                                <div className='mt-7'>
                                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 capitalize">{invoiceData?.vendorCreated?.userIs?.companyName} </h3>
                                                    <h3 className="text-sm  text-gray-600 dark:text-gray-200">{invoiceData?.vendorCreated?.userIs?.email} </h3>
                                                    <address className="mt-1 text-sm not-italic text-gray-500">
                                                        {invoiceData?.vendorCreated?.userIs?.address}

                                                    </address>
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div>
                                                <img src="/assets/log.png" alt="logo" />
                                                <div className='mt-7'>
                                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Coveten Industrial Solutions </h3>
                                                    <h3 className="text-sm  text-gray-600 dark:text-gray-200">An unit of N Square Corporation </h3>
                                                    <address className="mt-1 text-sm not-italic text-gray-500">
                                                        #504, 2nd Phase, 6th Stage, BTM Layout, Off Bannerghatta road<br />
                                                        {/* <br /> */}
                                                        Bangalore Karnataka 560076
                                                        <br />
                                                        India
                                                        <br />
                                                        GSTIN 29AWMPN1593P1ZI<br />

                                                    </address>
                                                </div>
                                            </div>
                                        </>

                                }
                                {/* <!-- Col --> */}

                                <div className="text-right">
                                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">Invoice</h2>
                                    <span className="mt-1 block text-gray-500">#{invoiceData?.ticket}</span>


                                </div>
                                {/* <!-- Col --> */}
                            </div>
                            {/* <!-- End Grid --> */}

                            {/* <!-- Grid --> */}
                            <div className="mt-8 grid sm:grid-cols-2 gap-3">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Invoice For:</h3>
                                    {
                                        invoiceData?.sentBy === "VENDOR" ?
                                            <>
                                                <div>

                                                    <div className='mb-10'>
                                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Coveten Industrial Solutions </h3>
                                                        <h3 className="text-sm  text-gray-600 dark:text-gray-200">An unit of N Square Corporation </h3>
                                                        <address className="mt-1 text-sm not-italic text-gray-500">
                                                            #504, 2nd Phase, 6th Stage, BTM Layout, Off Bannerghatta road<br />
                                                            {/* <br /> */}
                                                            Bangalore Karnataka, India
                                                            <br />
                                                            GSTIN 29AWMPN1593P1ZI<br />

                                                        </address>
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            <>



                                                <h3 className="text-base  text-gray-600 dark:text-gray-200">{invoiceData?.hasClient?.userIs?.companyName}</h3>
                                                <address className="mt-1 text-sm not-italic text-gray-500">
                                                    {invoiceData?.hasClient?.userIs?.companyEmail}<br />
                                                    {invoiceData?.hasClient?.userIs?.address}<br />

                                                </address>
                                            </>


                                    }





                                </div>
                                {/* <!-- Col --> */}

                                <div className="sm:text-right space-y-2">
                                    {/* <!-- Grid --> */}
                                    <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                                        <dl className="grid sm:grid-cols-3 gap-x-1">
                                            <dt className="col-span-2 font-semibold text-gray-800 dark:text-gray-200">Date:</dt>
                                            <dd className="col-span-1 text-gray-500">{invoiceData?.createdAt.slice(0, 10) || 'N/A'}</dd>
                                        </dl>

                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                                        <dl className="grid sm:grid-cols-3 gap-x-1">
                                            <dt className="col-span-2 font-semibold text-gray-800 dark:text-gray-200">Expiry Date:</dt>
                                            <dd className="col-span-1 text-gray-500">{invoiceData?.expiryDate?.slice(0, 10) || 'N/A'}</dd>
                                        </dl>

                                    </div>
                                    {/* <!-- End Grid --> */}
                                </div>
                                {/* <!-- Col --> */}
                            </div>
                            {/* <!-- End Grid --> */}

                            <div className='space-y-3'>
                                <p className='font-semibold'>Place Of Supply: <span className='text-dimText font-normal'>{invoiceData?.placeOfSupply}</span></p>
                                <p className='font-semibold'>HSN/SAC: <span className='text-dimText font-normal'>{invoiceData?.hsn}</span></p>
                                <p className='font-semibold'>Subject: <span className='text-dimText font-normal'>{invoiceData?.subject}</span></p>
                            </div>

                            {/* <!-- Table --> */}
                            <div className="mt-6">
                                <div className="border border-gray-200 p-4 rounded-lg space-y-4 dark:border-gray-700">
                                    <div className="hidden md:flex items-center justify-between">
                                        <div className="sm:col-span-2 text-xs font-medium  uppercase">Service Name</div>


                                        <div className="text-right text-xs font-medium uppercase">Quantity</div>
                                        <div className="text-right text-xs font-medium  uppercase">Amount</div>
                                    </div>

                                    <div className="hidden sm:block border-b border-gray-200 dark:border-gray-700"></div>


                                    <div className="grid  gap-2">


                                        {
                                            invoiceData?.hasPurchase?.map((service) =>
                                                <div className="grid grid-cols-3 " key={service?.id}>
                                                    <div >
                                                        <p className="font-medium text-xs lg:text-base text-gray-800 dark:text-gray-200">{service?.itemName}</p>
                                                    </div>
                                                    <div >
                                                        <p className="font-medium text-xs text-center lg:text-base text-gray-800 dark:text-gray-200">{service?.quantity}</p>
                                                    </div>

                                                    <div >
                                                        <p className="sm:text-right text-xs lg:text-base text-gray-800 dark:text-gray-200">{service?.price}</p>
                                                    </div>
                                                </div>
                                                // <div className="sm:hidden border-b border-gray-200 dark:border-gray-700"></div>

                                            )
                                        }






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
                                                <dd className="col-span-2 text-gray-500">{invoiceData?.totalPrice}</dd>
                                            </dl>

                                            <dl className="grid sm:grid-cols-5 gap-x-3">
                                                <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">{invoiceData?.taxType}:</dt>
                                                <dd className="col-span-2 text-gray-500">{invoiceData?.taxRate}%</dd>
                                            </dl>


                                            <dl className="grid sm:grid-cols-5 gap-x-3">
                                                <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Total Amount With Tax:</dt>
                                                <dd className="col-span-2 text-gray-500">{invoiceData?.priceWithTax}</dd>
                                            </dl>
                                        </div>
                                        {/* <!-- End Grid --> */}
                                    </div>
                                </div>
                                {/* <!-- End Flex --> */}


                            </div>
                            {/* <!-- End Card --> */}


                            {/* <!-- End Buttons --> */}
                        </div>

                    </div>

                </div>
                {/* <!-- Buttons --> */}
                <div onClick={() => toPDF()} className="cursor-pointer max-w-[85rem] mx-auto mt-6 flex justify-end gap-x-3 ">
                    <p className="inline-flex items-center mr-36 gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800" >
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z" />
                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                        </svg>
                        PDF
                    </p>
                </div>
            </div>

            <section className="max-w-[85rem]   px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-4 ">


                <section className='w-full lg:w-3/4  mx-auto  sm:px-10 sm:pt-14 sm:pb-40 text-justify  bg-white shadow-md rounded-xl dark:bg-gray-800'>
                    <div className='text-justify'>
                        <p>
                            <strong>Notes</strong>
                        </p>
                        <p>Dear Sir / Madam,</p>
                        <p>We appreciate you for choosing us; you are now with {"India's"}leading quality networking team.</p>
                        <p>We’re glad to introduce our services to you; we’re COVETEN Industrial Solutions, an upcoming industrial service
                            platform. We offer and support Automation, Designing, Prototyping, Product development, pre and final product
                            compliance, failure analysis, setting labs, accreditation assistance, and so on.</p>
                        <p>We serve customers as a one-stop shop for all their needs, thus reducing time lapse. If someone is looking for
                            complete quality & testing solutions in one place, then we’re the one they’re looking for. Our service packages are
                            very flexible and customizable. We offer them quarterly, half-yearly, and annual packs with a single PO/Invoice
                            system too. From material testing to product performance testing in every step, we would be able to help. At present,
                            we have more than 40 partnered & associated labs across the country and abroad performing more than 1500 different
                            test procedures to help our customers, and the number is growing. Our testing services are also available for onsite,
                            inline, at-line, offline, and comprehensive. We do take care of international testing and standardization. To know
                            more, please log on to <a href="https://www.coveten.com" target="_blank">www.coveten.com</a>.</p>
                        <p>We cordially welcome you to COVETEN...</p>
                        <p>
                            <strong>Terms & Conditions</strong>
                        </p>
                        <p>
                            <strong>GENERAL TERMS AND CONDITIONS</strong>
                        </p>
                        <ol>
                            <li>
                                <p><strong>Price.</strong></p>
                                <ol>
                                    <li>A. This is a firm price, generally quoted excluding GST or applicable taxes. Our services will be generally
                                        taxed at 18% for all the services - if GST is not highlighted.</li>
                                </ol>
                            </li>
                            <li>
                                <p><strong>Terms of Payment.</strong></p>
                                <ol>
                                    <li>A. We expect 100% payment along with PO / Purchase Order to provide seamless service support.</li>
                                    <li>B. If any discounts are offered, they will be applicable only during the particular promotional period.</li>
                                    <li>C. Our quotations are strictly valid for the mentioned time period only. Our price is dynamic hence stick to
                                        validity and close it before it expires.</li>
                                    <li>D. The quote price depends on various parameters like express / priority testing, routine testing, etc., that
                                        will be applicable while booking your slots.</li>
                                    <li>E. Quotation terms may vary with the service availed and for packaged services.</li>
                                    <li>F. Payments will be accepted only through the proper channel, NO cheques entertained.</li>
                                    <li>G. The quoted price is only for the described activity, any work beyond the mentioned will be additional.</li>
                                    <li>H. If the testing is for more than one component, the full testing cost will be charged for the second
                                        component. Most of the time we quote for one component but it has to be multiplied as per the actual number of
                                        components.</li>
                                    <li>I. All our services will have GST, and without that, we won’t bill. If there is any change in the percentage of
                                        GST, we can take care.</li>
                                    <li>J. Test methodology / procedure should be shared by the customer along with components.</li>
                                    <li>K. We are not responsible if the test component fails; if the test has to be repeated, the entire test cost
                                        will be paid.</li>
                                    <li>L. Customer must share a work order along with components and PO; without a work order, we don’t let the study
                                        start or complete.</li>
                                    <li>M. Invoices will be shared strictly against payment only; no hard copies shall be printed and couriered.</li>
                                    <li>N. Invoices will be generated for each quote/ batch separately; no clubbing quotes, PO’s, the invoices are
                                        provided as soon as the testing / scanning activities are completed.</li>
                                    <li>O. If tests are carried out abroad, currency & taxes will be charged accordingly.</li>
                                </ol>
                            </li>
                            <li>
                                <p><strong>Attachments.</strong></p>
                                <ol>
                                    <li>A. A copy of GST Certificate, Valid contact details, and address proof are necessary to provide an invoice.</li>
                                    <li>B. Test methods, Standards must be provided by the customer only.</li>
                                    <li>C. Fixtures, toolings, or any supporting devices, reagents, or accessories will be charged additional or to be
                                        provided by the customer only.</li>
                                </ol>
                            </li>
                            <li>
                                <p><strong>Changes,</strong></p>
                                <ol>
                                    <li>A. We as a service provider have full rights to reserve any lab, test center, or institute to complete the task
                                        to support you uninterruptedly.</li>
                                    <li>B. In case of having limitations / specific test center, that should be informed to us earlier.</li>
                                    <li>C. We will consider the address and contact details mentioned in the GST certificate and officially provided
                                        documents only; no further changes accepted in any condition.</li>
                                </ol>
                            </li>
                            <li>
                                <p><strong>Termination</strong></p>
                                <ol>
                                    <li>A. Buyer or customer can terminate their orders any time before we allocate the slots; once the slots are
                                        allotted, there won’t be any room for terminating or canceling orders.</li>
                                </ol>
                            </li>
                            <li>
                                <p><strong>Excusable Delay</strong></p>
                                <ol>
                                    <li>A. We request customers to understand - Apart from natural incidents (events of god), general holidays, we
                                        consider unintentional events like sudden failures, breakdowns to be noted, such delays will not be paid off.</li>
                                    <li>B. We won’t be held responsible for delays due to logistics, natural calamities, etc.</li>
                                    <li>C. Parts which are in warded will be given priority for inspection activity; reserved slots utilization will
                                        cost you additionally.</li>
                                    <li>D. In case of urgency or emergency, we encourage you to book “priority slots”; however, they’re subjected to
                                        availability.</li>
                                </ol>
                            </li>
                        </ol>
                    </div>

                </section>
                <section className=' w-full lg:w-3/4 mx-auto  sm:px-10 mt-12 sm:pt-14 sm:pb-40 text-justify  bg-white shadow-md rounded-xl dark:bg-gray-800'>
                    <div className='text-justify'>
                        <p>
                            7. Packaging, bill of landing, or delivery
                        </p>
                        <p>A. Please mention if any specific packing instructions or requirements for packing or repacking</p>
                        <p>B. We’re not responsible for the loss of material, damages caused, request you to opt for subsidized transit insurance packages available from us</p>
                        <p>C. We are not responsible for the transport of any suspicious products, goods, materials, or objects</p>
                        <p>D. In case of any testing is involved for Harmful, restricted, dangerous, flammable, radioactive, explosive, perishable goods/material, precautions and handling methods should be clearly intimated well in advance</p>
                        <p>E. If we find any issue of negligence, we won’t consider such orders placed, and such orders will be canceled with no prior intimation</p>

                        <p>
                            <strong>8. Warranty & Risk of Loss</strong>
                        </p>
                        <p>A. No toll for warranty</p>
                        <p>B. Risk can be taken care of only if opted for insurance during booking; the insurance provider holds responsibility for such loss or incidental damages if occurs</p>

                        <p>
                            <strong>9. Confidentiality, limited use, Compliance</strong>
                        </p>
                        <p>A. We follow stringent guidelines with all our service providers in terms of protecting our customer confidentiality, loyalty, and trust; in such incidents of breaching, we will surely take appropriate action against the person/organization/trust as per law/local governance. All our service providers should abide by our principles all the time during the contract period</p>
                        <p>B. All our service providers must write NDA with us to provide services; therefore, you can be assured of confidence</p>
                        <p>C. No matter whatever, we’ll be strict and strong; we will assure to be with compliant to local governance, law, and systems; the same is expected and provided from all our service providers</p>

                        <p>
                            <strong>10. Reports</strong>
                        </p>
                        <p>A. If you need Draft reports prior to the final reports, that must be informed in the work order</p>
                        <p>B. If you need reports on a specific format, that has to be provided by you only</p>
                        <p>C. Reports will be shared with the nominated/authorized personnel only</p>
                        <p>D. Please let us know if you need NABL & ISO 17025 certified reports while placing the order</p>
                        <p>E. Reports will generally be shared in shared folders like WeTransfer/google drive or any office data folders or to the designated emails only</p>
                        <p>F. Reports once printed final copies cannot be edited or changed</p>
                        <p>G. Some reports will have a cost involvement; in such cases, each report has its own cost or reports will be charged individually</p>
                        <p>H. No hard copies of reports will be generally shared; if hard copies are needed, inform us earlier, and hard copies will be charged</p>

                        <p>
                            <strong>11. Data</strong>
                        </p>
                        <p>A. Scanned/captured/shared or any forms of your data will generally not be stored after the testing; once the reports are shared, we will delete the data as well. If you wish us to keep the data, you must mention the same in the work order or while placing the order for future references</p>
                        <p>B. Data drivers, USB sticks, or external hard discs will not be accepted to copy or transfer the data</p>

                        <p>
                            <strong>12. Test witness & lab visit</strong>
                        </p>
                        <p>A. Test witnessing, lab visits are subjected to prior intimation only; therefore, we don’t entertain without prior information</p>
                        <p>B. Sometimes lab visits and witnessing will be at additional cost</p>
                        <p>C. Cost to travel, accommodation to the lab site should be taken care of by the customer only</p>
                        <p>D. If any legal/govt id is required to enter the labs, that should be carried by customers only</p>

                        <p>
                            <strong>13. Logistics/Transportation</strong>
                        </p>
                        <p>A. In our upcoming web platform, you can book logistics and transportation facilities for your components at affordable rates</p>
                        <p>B. If the tests are done onsite - the customer has to pay for logistics to bring down systems, people, solutions to their sites</p>
                        <p>C. If the test locations are in different cities then additional charges for accommodation to the engineers/technicians should be taken care of by customers only</p>
                        <p>D. The components should be neatly packed and make sure they are free from burrs, sharp edges, dust, and oil; only then will they be considered for inspection. Specify if any specific condition</p>
                        <p>E. Please specify if the components are sensitive and need special care, and also mention clearly if the components can produce fire, flames, smoke, or odor</p>

                        <p>
                            <strong>14. Insurance</strong>
                        </p>
                        <p>A. If you wish to take or applicable, you can book transport insurance while placing the order</p>
                        <p>B. In case of any transit lose, you can claim the insurance as per the insurance company policy</p>
                        <p>C. Insurance can be taken for material or transit loses and for both, the charges are applicable as per the insurance company</p>

                        <p>
                            <strong>15. Additional Supporting Tools/Devices</strong>
                        </p>
                        <p>A. Suitable fixture, consumable, packing material should be provided along with parts</p>
                        <p>B. If we’re packing it would be an additional cost</p>
                        <p>C. Once the tests are done, please collect the components immediately; we will dispose of your data and components within 15 days of testing, strictly no point in asking for the same after 15 days</p>
                        <p>D. Additional supportive devices, frames should be provided by customers; in case of non-availability, we can support making, buying, or printing such for our customers at an additional cost</p>
                        <p>E. Standards, Referral materials, test methods should be provided along with the components without fail</p>

                    </div>

                </section>
            </section>
        </section>
    );
};





export default InvoicePreview;