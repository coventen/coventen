import React from 'react';

const Features = () => {
    return (
        <div className='w-full px-2 lg:px-16 py-10'>
            < div >
                <h3 className="text-xl mb-4 font-bold text-gray-900">Features</h3>

                <div className="space-y-6">
                    <p className="text-base text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus sed veniam nobis molestias ab accusantium minima. Molestias quas placeat quo, harum facilis praesentium in itaque, assumenda ipsum obcaecati quia alias? Quam iste at quo distinctio illo sed asperiores adipisci veritatis nisi minus temporibus, nobis reprehenderit, impedit a voluptatibus. Neque, ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, velit iure cupiditate ratione minima consequatur dolorem, cum corrupti dolore voluptate, expedita ipsam possimus facere fuga ipsum nostrum cumque consequuntur quaerat!</p>
                </div>
            </ div>

            <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                <div className="mt-4">
                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                        <li className="text-gray-400"><span className="text-gray-600">Hand cut and sewn locally</span></li>
                        <li className="text-gray-400"><span className="text-gray-600">Dyed with our proprietary colors</span></li>
                        <li className="text-gray-400"><span className="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>
                        <li className="text-gray-400"><span className="text-gray-600">Ultra-soft 100% cotton</span></li>
                    </ul>
                </div>
            </div>

            <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.</p>
                </div>
            </div>


        </div>

    );
};

export default Features;