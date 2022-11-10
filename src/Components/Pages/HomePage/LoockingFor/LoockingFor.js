import React, { useState } from 'react';

import { RiArrowRightSFill, RiArrowDownSFill } from "react-icons/ri";

const LoockingFor = () => {




    const [faqs, setFaqs] = useState([
        {
            question: "I am shipping to loved ones living abroad",
            answer:
                "Become the resourceful and generous person you aspire to be. With JustShip, send thoughtful gifts to delight your loved ones and stay connected with them.",
            open: false
        },
        {
            question: "I am looking to relocate fast and hassle-free",
            answer: "When you choose JustShip, you choose the hassle free option that saves your time, energy and headspace for what matters most to you.",
            open: false
        },
        {
            question:
                "I am returning a product",
            answer: "Self-ship your returns, cheap and hassle-free. Get more fees refunded when you return to sellers fast with JustShip, and save time with our packing and tracked shipping that complies with seller policies.",
            open: false
        },
        {
            question:
                "I am living abroad and need to ship to myself",
            answer: "Use JustShip to cut the hassle out of the process so you can get the job done efficiently without inconveniencing you or your family.",
            open: false
        },
        {
            question:
                "I am selling e-commerce products overseas",
            answer: "Keep costs tightly under control while watching your customers’ satisfaction and retention skyrocket when you use JustShip. Grow your business by drawing on demand from the entire globe. WhatsApp us to get started!",
            open: false
        },
        {
            question:
                "I am sending samples to prospects",
            answer: "Strike while the iron is hot - get your samples shipped quickly and affordably with JustShip. Impress your prospects with a superb sample experience and earn yourself more sales.",
            open: false
        }
    ]);



    const toggleFAQ = index => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }

                return faq;
            })
        );
    };



    return (
        <div>
            <div className="bg-cover bg-center pt-12 md:pt-16 pb-16 md:pb-24" style={{ backgroundColor: '#ffffff' }}>
                <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                    <div className="mb-8 lg:mb-12 leading-snug font-bold text-xl md:text-3xl scroll-mt-20" id="What else are you looking for today?">
                        <p>
                            <span style={{ color: '#6211cb' }}>What else are you looking for today?</span>
                        </p>
                    </div>
                    <div className="grid gap-y-8 md:gap-y-12 gap-x-6 md:gap-x-8 lg:gap-x-10 grid-cols-1 md:grid-cols-2 w-full ">


                        {faqs.map((faq, index) => (

                            <div onClick={() => toggleFAQ(index)} className="px-2">
                                <div className="grid grid-cols-[24px_auto] gap-x-2 items-top ">
                                    <div className="cursor-pointer h-fit flex justify-center rounded-md select-none transition-all duration-300 ease-in-out hover:bg-background-dark-gray active:bg-gray-300 xl:-mt-2">
                                        {faq.open ?
                                            <RiArrowDownSFill className=' text-purple-600 text-5xl transition-all duration-300 ease-in-out' />
                                            : <RiArrowRightSFill className=' text-purple-600 text-5xl transition-all duration-300 ease-in-out' />}
                                    </div>
                                    <div>
                                        <div className="pb-2 font-semibold  cursor-pointer text-lg text-black transition-all duration-300 ease-in-out">
                                            <p>{faq.question}</p>
                                        </div>

                                        <div className={`transition-all duration-200 ${faq.open ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
                                            <p>{faq.answer}
                                                <a className="text-[#844FFA] hover:text-[#844FFA]" target="_blank" rel="noopener noreferrer" href="/create-shipment">Ship now!</a>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

        </div>
    );
};

export default LoockingFor;