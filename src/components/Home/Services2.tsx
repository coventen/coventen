import React from 'react';
import ServiceCard from './ServiceCard';

const Services2 = () => {
    return (
        <section
            className="mx-auto max-w-screen-2xl px-4 md:px-16 bg-gary-50 mt-20"
        >
            <div className="mb-10 md:mb-16">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-3 lg:text-3xl">Designing Services</h2>

                <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-sm">Our industrial designing services are meant to support industries to ramp up all their product design needs like components, subassemblies, independent aftermarket products, dies and molds, and other essential tools that are used in manufacturing We support all CAD, CAM and drawing needs along with prototyping and validating tools and dyes, In designing we have highly trained and sophisticated team of experts and systems like.</p>
            </div>
            <div className="w-full grid grid-cols-3 gap-2 ">
                <div className="bg-white/30 space-y-3 p-4 border rounded-md ">
                    <ServiceCard title='Probe Systems or Contact Measurement' />

                </div>
                <div className="bg-white/30 space-y-3 p-4 border rounded-md ">
                    <ServiceCard title='Non-Contact measurement' />

                </div>
                <div className="bg-white/30 space-y-3 p-4 border rounded-md">
                    <ServiceCard title='Laser Measurements and Trackers' />

                </div>
            </div>
        </section>
    );
};

export default Services2;