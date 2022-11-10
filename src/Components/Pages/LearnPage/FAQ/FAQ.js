import React, { useState } from 'react';

import { RiArrowRightSFill, RiArrowDownSFill } from "react-icons/ri";

const FAQ = () => {





    const [faqs, setFaqs] = useState([
        {
            question: "What services do you provide?",
            answer:
                "Become the resourceful and generous person you aspire to be. With JustShip, send thoughtful gifts to delight your loved ones and stay connected with them.",
            open: false
        },
        {
            question: "How do I start shipping with JustShip?",
            answer: "When you choose JustShip, you choose the hassle free option that saves your time, energy and headspace for what matters most to you.",
            open: false
        },
        {
            question:
                "What are your operating hours?",
            answer: "Self-ship your returns, cheap and hassle-free. Get more fees refunded when you return to sellers fast with JustShip, and save time with our packing and tracked shipping that complies with seller policies.",
            open: false
        },
        {
            question:
                "How can I contact you?",
            answer: "Use JustShip to cut the hassle out of the process so you can get the job done efficiently without inconveniencing you or your family.",
            open: false
        }
    ]);



    const [faqs2, setFaqs2] = useState([
        {
            question: "How do I arrange for a pick-up?",
            answer:
                "Become the resourceful and generous person you aspire to be. With JustShip, send thoughtful gifts to delight your loved ones and stay connected with them.",
            open: false
        },
        {
            question: "Can I choose my pick-up time?",
            answer: "When you choose JustShip, you choose the hassle free option that saves your time, energy and headspace for what matters most to you.",
            open: false
        },
        {
            question:
                "What do I need to prepare for pick up?",
            answer: "Self-ship your returns, cheap and hassle-free. Get more fees refunded when you return to sellers fast with JustShip, and save time with our packing and tracked shipping that complies with seller policies.",
            open: false
        },
        {
            question:
                "I have an additional package for my new order. Can I pass it along with the original order scheduled for pick up today?",
            answer: "Use JustShip to cut the hassle out of the process so you can get the job done efficiently without inconveniencing you or your family.",
            open: false
        },
        {
            question:
                "Can I reschedule/cancel my pick-up?",
            answer: "Use JustShip to cut the hassle out of the process so you can get the job done efficiently without inconveniencing you or your family.",
            open: false
        },
        {
            question:
                "The courier is here, but my package is not ready! Can he wait for me?",
            answer: "Use JustShip to cut the hassle out of the process so you can get the job done efficiently without inconveniencing you or your family.",
            open: false
        },
        {
            question:
                "Will you help pack/seal up my parcel during pick-up?",
            answer: "Use JustShip to cut the hassle out of the process so you can get the job done efficiently without inconveniencing you or your family.",
            open: false
        }
    ]);



    const [faqs3, setFaqs3] = useState([
        {
            question: "May I come down to your warehouse to drop off my parcel?",
            answer:
                "Become the resourceful and generous person you aspire to be. With JustShip, send thoughtful gifts to delight your loved ones and stay connected with them.",
            open: false
        },
        {
            question: "Where can I drop off my parcel?",
            answer: "When you choose JustShip, you choose the hassle free option that saves your time, energy and headspace for what matters most to you.",
            open: false
        },
        {
            question:
                "Can I drop off items and fill up the shipment form when I reach your warehouse?",
            answer: "Self-ship your returns, cheap and hassle-free. Get more fees refunded when you return to sellers fast with JustShip, and save time with our packing and tracked shipping that complies with seller policies.",
            open: false
        },
        {
            question:
                "What can I expect during my drop off?",
            answer: "Use JustShip to cut the hassle out of the process so you can get the job done efficiently without inconveniencing you or your family.",
            open: false
        },
        {
            question:
                "Can I pay cash for my order when I drop off my parcel?",
            answer: "Use JustShip to cut the hassle out of the process so you can get the job done efficiently without inconveniencing you or your family.",
            open: false
        },
        {
            question:
                "I have an urgent shipment but I am unable to drop off my itmes personally! May I opt for delivery to send my items to you?",
            answer: "Use JustShip to cut the hassle out of the process so you can get the job done efficiently without inconveniencing you or your family.",
            open: false
        }
    ]);


    const [faqs4, setFaqs4] = useState([
        {
            question: "What packing services do you offer??",
            answer:
                "Become the resourceful and generous person you aspire to be. With JustShip, send thoughtful gifts to delight your loved ones and stay connected with them.",
            open: false
        },
        {
            question: "How do you charge for packing?",
            answer: "When you choose JustShip, you choose the hassle free option that saves your time, energy and headspace for what matters most to you.",
            open: false
        },
        {
            question:
                "Where is packing done?",
            answer: "Self-ship your returns, cheap and hassle-free. Get more fees refunded when you return to sellers fast with JustShip, and save time with our packing and tracked shipping that complies with seller policies.",
            open: false
        },
        {
            question:
                "My items are very fragile, how will you pack them?",
            answer: "Use JustShip to cut the hassle out of the process so you can get the job done efficiently without inconveniencing you or your family.",
            open: false
        },
        {
            question:
                "Can I opt for packing services only?",
            answer: "Use JustShip to cut the hassle out of the process so you can get the job done efficiently without inconveniencing you or your family.",
            open: false
        },
        {
            question:
                "The shipment cost after packing is out of my budget. Can I cancel?",
            answer: "Use JustShip to cut the hassle out of the process so you can get the job done efficiently without inconveniencing you or your family.",
            open: false
        },
        {
            question:
                "Do you sell boxes?",
            answer: "Use JustShip to cut the hassle out of the process so you can get the job done efficiently without inconveniencing you or your family.",
            open: false
        },
        {
            question:
                "Why was I asked to make a top up for my shipment order?",
            answer: "Use JustShip to cut the hassle out of the process so you can get the job done efficiently without inconveniencing you or your family.",
            open: false
        }
    ]);



    const [faqs5, setFaqs5] = useState([
        {
            question: "Do you ship via air or sea??",
            answer:
                "Become the resourceful and generous person you aspire to be. With JustShip, send thoughtful gifts to delight your loved ones and stay connected with them.",
            open: false
        },
        {
            question: "How long will it take my parcel to be delivered?",
            answer: "When you choose JustShip, you choose the hassle free option that saves your time, energy and headspace for what matters most to you.",
            open: false
        },
        {
            question:
                "How do you charge for shipping?",
            answer: "Self-ship your returns, cheap and hassle-free. Get more fees refunded when you return to sellers fast with JustShip, and save time with our packing and tracked shipping that complies with seller policies.",
            open: false
        },
        {
            question:
                "Will my parcel be trackable?",
            answer: "Use JustShip to cut the hassle out of the process so you can get the job done efficiently without inconveniencing you or your family.",
            open: false
        },
        {
            question:
                "Why do I need to provide the item cost?",
            answer: "Use JustShip to cut the hassle out of the process so you can get the job done efficiently without inconveniencing you or your family.",
            open: false
        },
        {
            question:
                "Do you offer insurance?",
            answer: "Use JustShip to cut the hassle out of the process so you can get the job done efficiently without inconveniencing you or your family.",
            open: false
        },
        {
            question:
                "Should I get insurance?",
            answer: "Use JustShip to cut the hassle out of the process so you can get the job done efficiently without inconveniencing you or your family.",
            open: false
        },
        {
            question:
                "What are some items I cannot ship?",
            answer: "Use JustShip to cut the hassle out of the process so you can get the job done efficiently without inconveniencing you or your family.",
            open: false
        },
        {
            question:
                "Why are there import charges incurred to my shipment?",
            answer: "Use JustShip to cut the hassle out of the process so you can get the job done efficiently without inconveniencing you or your family.",
            open: false
        },
        {
            question:
                "Does your quote include customs tax?",
            answer: "Use JustShip to cut the hassle out of the process so you can get the job done efficiently without inconveniencing you or your family.",
            open: false
        },
        {
            question:
                "What happens if my recipient does not pay for the import charges billed to him/her?",
            answer: "Use JustShip to cut the hassle out of the process so you can get the job done efficiently without inconveniencing you or your family.",
            open: false
        },
        {
            question:
                "What other forms/permit will I need to ship my item?",
            answer: "Use JustShip to cut the hassle out of the process so you can get the job done efficiently without inconveniencing you or your family.",
            open: false
        },
        {
            question:
                "What if my item is lost?",
            answer: "Use JustShip to cut the hassle out of the process so you can get the job done efficiently without inconveniencing you or your family.",
            open: false
        }
    ]);





    const [faqs6, setFaqs6] = useState([
        {
            question: "My package is delayed! What do I do?",
            answer:
                "Become the resourceful and generous person you aspire to be. With JustShip, send thoughtful gifts to delight your loved ones and stay connected with them.",
            open: false
        },
        {
            question: "My package is stuck at customs and based on FedEx track it seems like my shipment is pending information/documents. What should I do?",
            answer: "When you choose JustShip, you choose the hassle free option that saves your time, energy and headspace for what matters most to you.",
            open: false
        },
        {
            question:
                "My package seems to be rejected and getting returned back to SG. What should I do?",
            answer: "Self-ship your returns, cheap and hassle-free. Get more fees refunded when you return to sellers fast with JustShip, and save time with our packing and tracked shipping that complies with seller policies.",
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


    const toggleFAQ2 = index => {
        setFaqs(
            faqs2.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }

                return faq;
            })
        );
    };

    const toggleFAQ3 = index => {
        setFaqs(
            faqs3.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }

                return faq;
            })
        );
    };

    const toggleFAQ4 = index => {
        setFaqs(
            faqs4.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }

                return faq;
            })
        );
    };

    const toggleFAQ5 = index => {
        setFaqs(
            faqs5.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }

                return faq;
            })
        );
    };

    const toggleFAQ6 = index => {
        setFaqs(
            faqs6.map((faq, i) => {
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
                    <h1 className=' text-5xl font-bold mb-16'>Frequently Asked Questions</h1>
                    <div className="mb-8 lg:mb-12 leading-snug font-bold text-xl md:text-3xl scroll-mt-20" id="What else are you looking for today?">
                        <p>
                            <span className=' font-bold' >General</span>
                        </p>
                    </div>
                    <div className="grid gap-y-8 md:gap-y-12 gap-x-6 md:gap-x-8 lg:gap-x-10  w-full ">


                        {faqs.map((faq, index) => (

                            <div onClick={() => toggleFAQ(index)} className="px-2">
                                <div className="grid grid-cols-[24px_auto] gap-x-2 items-top ">
                                    <div className="cursor-pointer  h-fit flex justify-center rounded-md select-none transition-all duration-300 ease-in-out hover:bg-background-dark-gray active:bg-gray-300 -mt-[10px] ">
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
                <hr className=' my-10' />


                <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                    <div className="mb-8 lg:mb-12 leading-snug font-bold text-xl md:text-3xl scroll-mt-20" id="What else are you looking for today?">
                        <p>
                            <span className=' font-bold' >Pick-Up</span>
                        </p>
                    </div>
                    <div className="grid gap-y-8 md:gap-y-12 gap-x-6 md:gap-x-8 lg:gap-x-10  w-full ">


                        {faqs2.map((faq, index) => (

                            <div onClick={() => toggleFAQ(index)} className="px-2">
                                <div className="grid grid-cols-[24px_auto] gap-x-2 items-top ">
                                    <div className="cursor-pointer  h-fit flex justify-center rounded-md select-none transition-all duration-300 ease-in-out hover:bg-background-dark-gray active:bg-gray-300 -mt-[10px] ">
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



                <hr className=' my-10' />


                <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                    <div className="mb-8 lg:mb-12 leading-snug font-bold text-xl md:text-3xl scroll-mt-20" id="What else are you looking for today?">
                        <p>
                            <span className=' font-bold' >Drop off</span>
                        </p>
                    </div>
                    <div className="grid gap-y-8 md:gap-y-12 gap-x-6 md:gap-x-8 lg:gap-x-10  w-full ">


                        {faqs3.map((faq, index) => (

                            <div onClick={() => toggleFAQ(index)} className="px-2">
                                <div className="grid grid-cols-[24px_auto] gap-x-2 items-top ">
                                    <div className="cursor-pointer  h-fit flex justify-center rounded-md select-none transition-all duration-300 ease-in-out hover:bg-background-dark-gray active:bg-gray-300 -mt-[10px] ">
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


                <hr className=' my-10' />


                <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                    <div className="mb-8 lg:mb-12 leading-snug font-bold text-xl md:text-3xl scroll-mt-20" id="What else are you looking for today?">
                        <p>
                            <span className=' font-bold' >Packing</span>
                        </p>
                    </div>
                    <div className="grid gap-y-8 md:gap-y-12 gap-x-6 md:gap-x-8 lg:gap-x-10  w-full ">


                        {faqs4.map((faq, index) => (

                            <div onClick={() => toggleFAQ(index)} className="px-2">
                                <div className="grid grid-cols-[24px_auto] gap-x-2 items-top ">
                                    <div className="cursor-pointer  h-fit flex justify-center rounded-md select-none transition-all duration-300 ease-in-out hover:bg-background-dark-gray active:bg-gray-300 -mt-[10px] ">
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


                <hr className=' my-10' />


                <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                    <div className="mb-8 lg:mb-12 leading-snug font-bold text-xl md:text-3xl scroll-mt-20" id="What else are you looking for today?">
                        <p>
                            <span className=' font-bold' >Shipping</span>
                        </p>
                    </div>
                    <div className="grid gap-y-8 md:gap-y-12 gap-x-6 md:gap-x-8 lg:gap-x-10  w-full ">


                        {faqs5.map((faq, index) => (

                            <div onClick={() => toggleFAQ(index)} className="px-2">
                                <div className="grid grid-cols-[24px_auto] gap-x-2 items-top ">
                                    <div className="cursor-pointer  h-fit flex justify-center rounded-md select-none transition-all duration-300 ease-in-out hover:bg-background-dark-gray active:bg-gray-300 -mt-[10px] ">
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

                <hr className=' my-10' />


                <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                    <div className="mb-8 lg:mb-12 leading-snug font-bold text-xl md:text-3xl scroll-mt-20" id="What else are you looking for today?">
                        <p>
                            <span className=' font-bold' >Customs Related Issues</span>
                        </p>
                    </div>
                    <div className="grid gap-y-8 md:gap-y-12 gap-x-6 md:gap-x-8 lg:gap-x-10  w-full ">


                        {faqs6.map((faq, index) => (

                            <div onClick={() => toggleFAQ(index)} className="px-2">
                                <div className="grid grid-cols-[24px_auto] gap-x-2 items-top ">
                                    <div className="cursor-pointer  h-fit flex justify-center rounded-md select-none transition-all duration-300 ease-in-out hover:bg-background-dark-gray active:bg-gray-300 -mt-[10px] ">
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

export default FAQ;