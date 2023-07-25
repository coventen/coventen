import React from 'react';
import HomeCard from '../HomeCard';
import { FaPlusCircle } from 'react-icons/fa';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const cardsData = [
        {
            id: 1,
            title: 'Total tasks',
            value: 200
        },
        {
            id: 2,
            title: 'Task Completed',
            value: 100

        },
        {
            id: 3,
            title: 'Under Process',
            value: 100
        },
        {
            id: 4,
            title: 'Tickets',
            value: 300
        }, {
            id: 5,
            title: 'New Requests',
            value: 200
        }
    ]


    return (
        <div className='p-4 h-full max-h-screen  flex flex-col space-y-4'>
            {/* top cards section */}
            <section className='grid grid-cols-1 lg:grid-cols-5 gap-4 h-[120px]'>
                {
                    cardsData.map((card) =>
                        <div key={card.id}>
                            <HomeCard title={card.title} value={card.value} />
                        </div>
                    )
                }
            </section>
            {/* project  sections  */}
            <section>
                <div className='flex items-center justify-between'>
                    <h2 className='text-3xl font-semibold text-desktopPrimary'>Projects</h2>
                    <button className='bg-desktopPrimary text-lg font-semibold text-white px-8 py-4 rounded-md flex items-center justify-center space-x-3'>
                        <p>Create Project</p>
                        <span><FaPlusCircle /></span>
                    </button>

                </div>
                <div className='flex items-center justify-between bg-gray-200 py-4 mt-6 px-2 rounded-md'>
                    <h2 className='text-sm font-semibold text-desktopText'>Project Details</h2>
                    <h2 className='text-sm font-semibold text-desktopText'>Quick Actions</h2>
                </div>
            </section>
            {/*  */}
            <section>
                <ProjectCard />
            </section>


        </div>
    );
};

export default Projects;