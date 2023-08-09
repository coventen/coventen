'use client'
import React from 'react';
import { AiFillEye, AiTwotoneDelete } from "react-icons/ai"
import { BiSolidEditAlt } from "react-icons/bi"
import ProjectModal from "./ProjectModal";
import { Project } from '@/gql/graphql';




interface IProjectTable {
    data: Project[]
    deleteProjectById: (id: string) => void
}


//component
export default function ProjectTable({ data, deleteProjectById }: IProjectTable) {
    const [isOpen, setIsOpen] = React.useState(false)



    //render
    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">

            <div className="mt-12 relative h-max overflow-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="text-gray-600 font-medium border-b">
                        <tr className="capitalize">
                            <th className="py-3 pr-6">name</th>
                            <th className="py-3 pr-6">date</th>
                            <th className="py-3 pr-6">status</th>
                            <th className="py-3 pr-6">Ticket Id</th>
                            <th className="py-3 pr-6">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            data && data.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.title}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.createdAt}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-2 rounded-full font-semibold text-xs text-green-600 bg-green-50`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.projectticketFor?.projectTicket || 'Not Assigned'}</td>
                                    <td className="text-right whitespace-nowrap">
                                        <div className="relative flex items-center justify-around  space-x-1 px-2 ">

                                            <button onClick={() => setIsOpen(true)} className="focus:ring-2 focus:ring-offset-2  text-sm leading-none text-blue-600 py-2 px-2 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"><AiFillEye /></button>
                                            <button className="focus:ring-2 focus:ring-offset-2  text-sm leading-none text-green-600 py-2 px-2 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"><BiSolidEditAlt /></button>
                                            <button onClick={() => deleteProjectById(item.id)} className="focus:ring-2 focus:ring-offset-2  text-sm leading-none text-red-600 py-2 px-2 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"><AiTwotoneDelete /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <ProjectModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}