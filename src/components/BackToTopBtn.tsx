'use client'

import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa6";

export default function BackToTopBtn() {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button onClick={scrollToTop} className={`fixed w-8 h-8 md:w-10 md:h-10 bg-[rgb(134,70,244)] rounded-[4px] z-999 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'} bottom-6 right-6 md:bottom-8 md:right-8 text-white flex items-center justify-center cursor-pointer hover:opacity-70 ease-in transition-all duration-200`}>
            <FaAngleUp className="text-lg md:text-xl" />
        </button>
    )
}