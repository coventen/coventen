'use client'
import React from 'react';
import { BiMessageSquareEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import SkillUpdateModal from './SkillUpdateModal';

const SkillSection = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    return (
        <div className="relative flex flex-col mt-6 justify-center bg-white max-w-xs py-4 px-1  shadow-sm rounded-xl sm:px-7 dark:bg-gray-900 dark:text-gray-100">
            {/* edit button */}
            <div>
                <button type='button' onClick={() => setIsModalOpen(true)} className="absolute top-3 right-0 p-2 hover:bg-gray-200 rounded-full  dark:bg-gray-900 dark:text-gray-100">
                    <BiMessageSquareEdit />
                </button>
            </div>

            <div className="space-y-4 text-gray-800 mt-2">
                <div className="my-2 space-y-1">
                    <h2 className="text-xl font-semibold text-center sm:text-2xl">Skills</h2>
                </div>
                <ul className="my-2 space-y-2 ">
                    {
                        [...Array(5)].map((_, i) =>
                            <li key={i}
                                className=" text-xs md:text-sm font-normal sm:text-2xl flex items-center justify-between">
                                <p>

                                    Example skill name Lorem
                                </p>
                                <p className='text-gray-700 text-lg'><MdDelete /></p>
                            </li>

                        )
                    }


                </ul>

            </div>
            <SkillUpdateModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </div>
    );
};

export default SkillSection;