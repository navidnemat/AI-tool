'use client'

import { ReactNode, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface AccordionProps {
    title: string;
    children: ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="overflow-hidden">
            <button className="w-full flex justify-between items-center px-3" onClick={() => setIsOpen(!isOpen)}>
                <span className="">{title}</span>
                <IoIosArrowDown
                    size={20}
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                />
            </button>
            {isOpen && (
                <div className="py-5 flex flex-col bg-gray-900 rounded-lg mt-3">
                    {children}
                </div>
            )}
        </div>
    )
}