"use client";

import { useState } from "react";

type Testimonial = {
    id: number;
    name: string;
    userId: string;
    message: string;
    img: string
};

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Machel Pildium",
        userId: "@machel",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
        img: '/images/user-01.png'
    },
    {
        id: 2,
        name: "Adison Dias",
        userId: "@adison",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: '/images/user-04.png'
    },
    {
        id: 3,
        name: "Zain Franci",
        userId: "@zian",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
        img: '/images/user-07.png'
    },
    {
        id: 4,
        name: "Wilson Bator",
        userId: "@wilson",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
        img: '/images/user-02.png'
    },
    {
        id: 5,
        name: "Abram Lipshutz",
        userId: "@abram",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
        img: '/images/user-05.png'
    },
    {
        id: 6,
        name: "Cristofer Carder",
        userId: "@cristofer",
        message: "Lorem Ipsum is simply dummy text of the printing",
        img: '/images/user-08.png'
    },
    {
        id: 7,
        name: "Jaylon Press",
        userId: "@jaylon",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
        img: '/images/user-06.png'
    },
    {
        id: 8,
        name: "Dulce Rosser",
        userId: "@dulce",
        message: " Lorem Ipsum has been the industry's.",
        img: '/images/user-09.png'
    },
    {
        id: 9,
        name: "Wilson Bator",
        userId: "@wilson",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
        img: '/images/user-02.png'
    },
    {
        id: 10,
        name: "Adison Dias",
        userId: "@adison",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: '/images/user-04.png'
    },
    {
        id: 11,
        name: "Abram Lipshutz",
        userId: "@abram",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
        img: '/images/user-05.png'
    },
    {
        id: 12,
        name: "Machel Pildium",
        userId: "@machel",
        message: "Lorem Ipsum has been the industry's.",
        img: '/images/user-01.png'
    },

];
export default function Testimonials() {
    const [showAll, setShowAll] = useState(false);
    const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 6);

    return (
        <section className="relative pb-16 px-4 sm:px-6 lg:px-8 mx-auto ">
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5">

                {/* Testimonial cards */}
                {visibleTestimonials.map((t) => (
                    <div
                        key={t.id}
                        className="z-0 user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]"
                    >
                        <div className="flex items-center gap-4.5">
                            <div className="max-w-[48px] w-full h-12 rounded-full">
                                <img src={t.img} alt="profile" />
                            </div>
                            <div>
                                <h5 className="text-white text-sm font-medium">
                                    {t.name}
                                </h5>
                                <p className="font-medium text-sm">{t.userId}</p>
                            </div>
                        </div>
                        <div className="user-divider relative my-6 w-full h-[1px]"></div>
                        <p>{t.message}</p>
                        <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                            <div className="absolute right-0 bottom-0 -z-1">
                                <img src="/images/blur-18.webp" alt="background" />
                            </div>
                        </div>
                    </div>
                ))}

                {/* Bottom blur overlay ON TOP of last testimonial */}
                {!showAll && (
                    <div className="absolute -bottom-4 left-0 right-0 h-32 bg-gradient-to-t from-[rgb(3,0,20)] to-transparent z-[999] pointer-events-none" />
                )}
            </div>

            {/* Show More / Less Button */}
            <div className="text-center mt-6 relative z-30">
                <button
                    onClick={() => setShowAll((prev) => !prev)}
                    className="features-button-gradient relative inline-flex items-center gap-1.5 rounded-lg py-3 px-6 text-white text-sm ease-in transition duration-300 cursor-pointer"
                >
                    {showAll ? "Okay, I get the point" : "Show more..."}
                </button>
            </div>
        </section>
    );
}
