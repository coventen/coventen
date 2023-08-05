

import React from 'react';
import HomeCard from '../HomeCard';
import { FaPlusCircle } from 'react-icons/fa';
import ProjectCard from './ProjectCard';
import ProjectTable from './ProjectTable';
import ProjectModal from './ProjectModal';
import Link from 'next/link';

const Projects = () => {


    return (
        <div className='p-2 lg:p-8 h-full bg-white rounded flex flex-col space-y-4'>
            {/* project  sections  */}
            <section>
                <div className='flex items-center justify-between'>
                    <h2 className='md:text-2xl xl:text-3xl font-semibold '>Projects</h2>
                    <Link href='/user/dashboard/projects/create'>
                        <button className='bg-primary text-base font-semibold text-white px-6 py-3 rounded-md flex items-center justify-center space-x-3'>
                            <p>Create Project</p>
                            <span><FaPlusCircle /></span>
                        </button>
                    </Link>

                </div>
            </section>
            {/*  */}
            <section>
                <ProjectTable />
            </section>



        </div>
    );
};

export default Projects;