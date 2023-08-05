'use client'
import React from 'react';
import Link from "next/link"
import { AiFillEye, AiTwotoneDelete } from "react-icons/ai"
import { BiSolidEditAlt } from "react-icons/bi"
import ProjectModal from "./ProjectModal";





const tableItems = [
    {
        name: "Example Project Name Lorem Ipsum",
        date: "Oct 9, 2023",
        status: "Active",
        ticket_id: "Not Available",
        // plan: "Monthly subscription"
    },
    {
        name: "Example Project Name Lorem Ipsum",
        date: "Oct 12, 2023",
        status: "Active",
        ticket_id: "Not Available",
        // plan: "Monthly subscription"
    },
    {
        name: "Example Project Name Lorem Ipsum",
        date: "Oct 22, 2023",
        status: "Archived",
        ticket_id: "Not Available",
        // plan: "Annually subscription"
    },
    {
        name: "Example Project Name Lorem Ipsum",
        date: "Jan 5, 2023",
        status: "Active",
        ticket_id: "Not Available",
        // plan: "Monthly subscription"
    },
    {
        name: "Example Project Name Lorem Ipsum",
        date: "Jan 6, 2023",
        status: "Active",
        ticket_id: "$9.000",
        // plan: "Annually subscription"
    },
]



export default function ProjectTable() {
    const [isOpen, setIsOpen] = React.useState(false);




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
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.name}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.date}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-2 rounded-full font-semibold text-xs ${item.status == "Active" ? "text-green-600 bg-green-50" : "text-blue-600 bg-blue-50"}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.ticket_id}</td>
                                    <td className="text-right whitespace-nowrap">
                                        <div className="relative flex items-center justify-around  space-x-1 px-2 ">

                                            <button onClick={() => setIsOpen(true)} className="focus:ring-2 focus:ring-offset-2  text-sm leading-none text-blue-600 py-2 px-2 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"><AiFillEye /></button>
                                            <button className="focus:ring-2 focus:ring-offset-2  text-sm leading-none text-green-600 py-2 px-2 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"><BiSolidEditAlt /></button>
                                            <button className="focus:ring-2 focus:ring-offset-2  text-sm leading-none text-red-600 py-2 px-2 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"><AiTwotoneDelete /></button>
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