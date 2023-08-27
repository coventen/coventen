

import React from 'react';
import Main from './Main';





// component
const InvoicePage = () => {




    return (
        <div className='p-4 h-full max-h-screen  flex flex-col space-y-4'>


            {/* table sections  */}

            <section className='overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch'>
                <div className='bg-desktopBgLight text-desktopPrimary py-3 text-sm font-semibold px-4 grid grid-cols-6 rounded'>
                    <p>Bill No.</p>
                    <p className='col-span-2'>InvoiceId</p>
                    <p>Total Price</p>
                    <p>Date</p>
                    <p>Quick Actions</p>
                </div>

                <Main />

            </section>


        </div>
    );
};

export default InvoicePage;