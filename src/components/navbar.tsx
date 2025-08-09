'use client'

import React, { useEffect, useState, useRef } from 'react'
import HamburgerButton from './menuBtn';
import { GoArrowRight } from "react-icons/go";
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import Accordion from './accordion';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    ///////////////////////////////////////////////////

    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = (label: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setOpenMenu(label);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setOpenMenu(null);
        }, 200);
    };

    return (
        <nav
            className={`fixed w-full top-0 left-0 z-[9999] transition-all duration-300 ${scrolled ? 'bg-black/60 shadow-md backdrop-blur-md' : 'bg-transparent'
                }`}
        >
            <div className={`max-w-[1170px] mx-auto px-4 sm:px-6 xl:px-0 transition-all duration-300 ${scrolled ? 'py-3' : 'py-6'} flex flex-col items-center justify-between relative`}>
                <div className='flex items-center justify-between relative w-full'>
                    <div className='w-full lg:w-1/4 flex items-center justify-between'>
                        <a>
                            <img src="/images/logo.svg" alt="logo" />
                        </a>
                        <button className='block lg:hidden text-white'>
                            {/* {isOpen ? <IoClose size={30}/> : <IoMenu size={30}/>} */}
                            <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
                        </button>
                    </div>
                    <div className='w-full lg:w-3/4 h-0 lg:h-auto hidden lg:flex items-center justify-between'>
                        <nav>
                            <ul className='flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-2'>
                                <li className='lg:py-1'>
                                    <a className='relative cursor-pointer text-sm py-1.5 px-4 border border-transparent hover:text-white !text-white nav-gradient'>Home</a>
                                </li>
                                <li className='lg:py-1'>
                                    <a className='navbar-item relative cursor-pointer text-white/80 text-sm py-1.5 px-4 border border-transparent hover:text-white rounded-full'>Features</a>
                                </li>
                                <li className='lg:py-1'>
                                    <a className='navbar-item relative cursor-pointer text-white/80 text-sm py-1.5 px-4 border border-transparent hover:text-white rounded-full'>Pricing</a>
                                </li>
                                <li className='lg:py-1 relative'
                                    onMouseEnter={() => handleMouseEnter('community')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <a className='navbar-item relative cursor-pointer text-white/80 text-sm py-1.5 px-4 border border-transparent hover:text-white rounded-full flex items-center gap-2'>
                                        Pages
                                        <motion.span
                                            animate={{
                                                rotate: openMenu === 'community' ? 180 : 0,
                                            }}
                                            transition={{ duration: 0.15 }}
                                        >
                                            <HiChevronDown size={20} />
                                        </motion.span>
                                    </a>
                                    <AnimatePresence>
                                        {openMenu === 'community' && (
                                            <motion.ul
                                                key="products-submenu"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute top-12 left-0 mt-2 w-50 bg-gray-900 shadow-lg rounded-xl z-50 p-3 gap-4"
                                            >
                                                <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer rounded-lg text-sm text-white/70 hover:text-white whitespace-nowrap">
                                                    <p className=''>About Us</p>
                                                </li>
                                                <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer rounded-lg text-sm text-white/70 hover:text-white whitespace-nowrap">
                                                    <p className=''>Pricing Table</p>
                                                </li>
                                                <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer rounded-lg text-sm text-white/70 hover:text-white whitespace-nowrap">
                                                    <p className=''>Blog</p>
                                                </li>
                                                <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer rounded-lg text-sm text-white/70 hover:text-white whitespace-nowrap">
                                                    <p className=''>Sign In</p>
                                                </li>
                                                <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer rounded-lg text-sm text-white/70 hover:text-white whitespace-nowrap">
                                                    <p className=''>Sgin Up</p>
                                                </li>
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                                <li className='lg:py-1'>
                                    <a className='navbar-item relative cursor-pointer text-white/80 text-sm py-1.5 px-4 border border-transparent hover:text-white rounded-full'>Support</a>
                                </li>
                            </ul>
                        </nav>
                        <div className='flex items-center gap-6 mt-7 lg:mt-0'>
                            <a className='text-white text-sm hover:opacity-70 transition-all duration-200 cursor-pointer'>Sign in</a>
                            <a className='button-border-gradient relative rounded-lg text-white text-sm flex items-center gap-1.5 py-2 px-4.5 shadow-button hover:shadow-none cursor-pointer hover:[&_svg]:translate-x-1'>
                                <span>Sign up</span>
                                <GoArrowRight size={20} className='mt-0.5 transition-all duration-200' />
                            </a>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div className='w-full bg-black mt-5 rounded-lg flex flex-col text-white/70 p-6'>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <a className='nav-gradient relative px-3 py-1'>Home</a>
                            </div>
                            <div>
                                <a className='relative px-3 py-1'>Features</a>
                            </div>
                            <div>
                                <a className='relative px-3 py-1'>Pricing</a>
                            </div>
                            <div>
                                <Accordion title='Pages'>
                                    <ul className='flex flex-col gap-4 ml-4 text-sm'>
                                        <li>About Us</li>
                                        <li>Pricing Table</li>
                                        <li>Blog</li>
                                        <li>Sign In</li>
                                        <li>Sign Up</li>
                                    </ul>
                                </Accordion>
                            </div>
                            <div>
                                <a className='relative px-3 py-1'>Support</a>
                            </div>
                        </div>
                        <div className='flex items-center gap-6 mt-7 lg:mt-0'>
                            <a className='text-white text-sm hover:opacity-70 transition-all duration-200 cursor-pointer'>Sign in</a>
                            <a className='button-border-gradient relative rounded-lg text-white text-sm flex items-center gap-1.5 py-2 px-4.5 shadow-button hover:shadow-none cursor-pointer hover:[&_svg]:translate-x-1'>
                                <span>Sign up</span>
                                <GoArrowRight size={20} className='mt-0.5 transition-all duration-200' />
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav >
    )
}

export default Navbar

// left-1/2 -translate-x-1/2