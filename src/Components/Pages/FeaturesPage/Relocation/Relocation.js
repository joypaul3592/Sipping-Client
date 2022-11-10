import React, { useState } from 'react';
import Price3 from '../../../../Assect/Price3.png'
import { RiArrowRightSFill, RiArrowDownSFill } from "react-icons/ri";
import { Carousel } from '3d-react-carousal';

import rating1 from '../../../../Assect/rating1.png'
import rating2 from '../../../../Assect/rating2.png'
import rating3 from '../../../../Assect/rating3.png'
import { AiFillStar } from "react-icons/ai";



const Relocation = () => {


    const slides = [
        <div className="  md:max-w-full px-2 py-2 top-[0]  left-0 right-0  text-ellipsis rounded-lg bg-white  border border-gray-300 h-full">

            <div className="h-full">
                <div className="flex items-center ">
                    <div>
                        <img src={rating1} alt="Image" />
                    </div>
                    <p className="pl-2 text-sm md:text-2xs text-[rgb(60,64,67)] font-[&#x27;Arial&#x27;] text-left mt-0.5 md:mt-0">Hikmah Dinillah</p>
                </div>
                <div className="flex text-lg py-1.5 text-[#FCD430]">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <div className="line-clamp-[12]">
                    <p className="text-sm md:text-[13px] font-semibold md:leading-5 text-[rgb(72,74,76)] font-[&#x27;Arial&#x27;] text-left">
                        Had a hard time finding an affordable shipping option but I luckily found JustShip! First time shipping a package all the way to Sharjah, UAE for my boyfriend’s birthday
                        and it took just 3 days for him to receive it! Affordable and fast. The customer service was splendid as well. The person who came to pick the package up was really nice
                        and understanding even though I was in a work meeting (Pick up is free). The tracking was smooth  ...
                    </p>
                </div>
            </div>
        </div>,
        <div className="  md:max-w-full px-2 py-2 top-[0]  left-0 right-0  text-ellipsis rounded-lg bg-white  border border-gray-300  h-full">

            <div className="h-full">
                <div className="flex items-center ">
                    <div>
                        <img src={rating2} alt="Image" />
                    </div>
                    <p className="pl-2 text-sm md:text-2xs text-[rgb(60,64,67)] font-[&#x27;Arial&#x27;] text-left mt-0.5 md:mt-0">Hikmah Dinillah</p>
                </div>
                <div className="flex text-lg py-1.5 text-[#FCD430]">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <div className="line-clamp-[12]">
                    <p className="text-sm md:text-[13px] font-semibold md:leading-5 text-[rgb(72,74,76)] font-[&#x27;Arial&#x27;] text-left">
                        Had a hard time finding an affordable shipping option but I luckily found JustShip! First time shipping a package all the way to Sharjah, UAE for my boyfriend’s birthday
                        and it took just 3 days for him to receive it! Affordable and fast. The customer service was splendid as well. The person who came to pick the package up was really nice
                        and understanding even though I was in a work meeting (Pick up is free). The tracking was smooth  ...
                    </p>
                </div>
            </div>
        </div>,
        <div className="  md:max-w-full px-2 py-2 top-[0]  left-0 right-0  text-ellipsis rounded-lg bg-white  border border-gray-300 h-full">

            <div className="h-full">
                <div className="flex items-center ">
                    <div>
                        <img src={rating3} alt="Image" />
                    </div>
                    <p className="pl-2 text-sm md:text-2xs text-[rgb(60,64,67)] font-[&#x27;Arial&#x27;] text-left mt-0.5 md:mt-0">Hikmah Dinillah</p>
                </div>
                <div className="flex text-lg py-1.5 text-[#FCD430]">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <div className="line-clamp-[12]">
                    <p className="text-sm md:text-[13px] font-semibold md:leading-5 text-[rgb(72,74,76)] font-[&#x27;Arial&#x27;] text-left">
                        Had a hard time finding an affordable shipping option but I luckily found JustShip! First time shipping a package all the way to Sharjah, UAE for my boyfriend’s birthday
                        and it took just 3 days for him to receive it! Affordable and fast. The customer service was splendid as well. The person who came to pick the package up was really nice
                        and understanding even though I was in a work meeting (Pick up is free). The tracking was smooth  ...
                    </p>
                </div>
            </div>
        </div>,]


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
            <main>
                <div className="bg-[#E5E5E5]">
                    <div
                        style={{ backgroundImage: 'url(https://cdn.sanity.io/images/bm4duuk0/production/10ca250bbcc7f5df17c47b24521a19e273d5b7c2-1440x758.jpg?fit=max&amp;auto=format)', backgroundPosition: 'center' }}
                        className="relative h-[280px] bg-cover bg-left sm:bg-center shadow sm:h-[50vh] sm:max-h-[540px] lg:h-[60vh] 2xl:max-h-[45vh]"
                    >
                        <div className="absolute inset-0 opacity-50" style={{ background: 'linear-gradient(to right, #fed430, #5c65f7)' }}></div>
                        <div className="bg-cover bg-center pt-12 md:pt-16 text-center sm:text-left h-full">
                            <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                                <div className="w-full sm:max-w-[61.8%] xl:max-w-[50%]">
                                    <div className="text-2xl sm:text-3xl md:text-4xl xl:text-4.5xl font-semibold leading-snug sm:leading-snug xl:leading-tight whitespace-pre-line">
                                        <h1>International relocation services</h1>
                                    </div>
                                    <div className="hidden sm:block md:text-lg 2xl:text-xl mt-6 space-y-6 sm:leading-snug prose">
                                        <p>
                                            <strong>Relocate fast and hassle-free.</strong>

                                        </p>
                                        <p>Save your time, energy and headspace for what matters most to you.</p>
                                    </div>
                                    <div className="mt-6 sm:mt-12">
                                        <a href="https://wa.me/6591187971" target="_blank" rel="noreferrer" aria-label="WhatsApp Us">
                                            <button className="group bg-transparent text-lg text-white hover:text-gray-200 font-semibold sm:hidden">
                                                Contact us now
                                                <svg width="259px" height="259px" viewBox="-1.5 0 259 259" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#25D366" className="ml-4 inline w-[32px] h-auto group-hover:fill-[#22BF5B]">
                                                    <g>
                                                        <path
                                                            d="M67.6631045,221.823373 L71.8484512,223.916047 C89.2873956,234.379413 108.819013,239.262318 128.350631,239.262318 L128.350631,239.262318 C189.735716,239.262318 239.959876,189.038158 239.959876,127.653073 C239.959876,98.3556467 228.101393,69.7557778 207.17466,48.8290445 C186.247927,27.9023111 158.345616,16.0438289 128.350631,16.0438289 C66.9655467,16.0438289 16.7413867,66.2679889 17.4389445,128.350631 C17.4389445,149.277365 23.7169645,169.50654 34.1803311,186.945485 L36.9705622,191.130831 L25.8096378,232.28674 L67.6631045,221.823373 Z"
                                                        ></path>
                                                        <path
                                                            d="M219.033142,37.66812 C195.316178,13.2535978 162.530962,0 129.048189,0 C57.8972956,0 0.697557778,57.8972956 1.39511556,128.350631 C1.39511556,150.67248 7.67313556,172.296771 18.1365022,191.828389 L0,258.096378 L67.6631045,240.657433 C86.4971645,251.1208 107.423898,256.003705 128.350631,256.003705 L128.350631,256.003705 C198.803967,256.003705 256.003705,198.106409 256.003705,127.653073 C256.003705,93.4727423 242.750107,61.3850845 219.033142,37.66812 Z M129.048189,234.379413 L129.048189,234.379413 C110.214129,234.379413 91.380069,229.496509 75.3362401,219.7307 L71.1508934,217.638027 L30.6925422,228.101393 L41.1559089,188.3406 L38.3656778,184.155253 C7.67313556,134.628651 22.3218489,69.05822 72.5460089,38.3656778 C122.770169,7.67313556 187.643042,22.3218489 218.335585,72.5460089 C249.028127,122.770169 234.379413,187.643042 184.155253,218.335585 C168.111425,228.798951 148.579807,234.379413 129.048189,234.379413 Z M190.433273,156.9505 L182.760138,153.462711 C182.760138,153.462711 171.599213,148.579807 164.623636,145.092018 C163.926078,145.092018 163.22852,144.39446 162.530962,144.39446 C160.438289,144.39446 159.043173,145.092018 157.648058,145.789576 L157.648058,145.789576 C157.648058,145.789576 156.9505,146.487133 147.184691,157.648058 C146.487133,159.043173 145.092018,159.740731 143.696902,159.740731 L142.999345,159.740731 C142.301787,159.740731 140.906671,159.043173 140.209113,158.345616 L136.721325,156.9505 L136.721325,156.9505 C129.048189,153.462711 122.072611,149.277365 116.492149,143.696902 C115.097033,142.301787 113.00436,140.906671 111.609245,139.511556 C106.72634,134.628651 101.843436,129.048189 98.3556467,122.770169 L97.658089,121.375053 C96.9605312,120.677496 96.9605312,119.979938 96.2629734,118.584822 C96.2629734,117.189707 96.2629734,115.794591 96.9605312,115.097033 C96.9605312,115.097033 99.7507623,111.609245 101.843436,109.516571 C103.238551,108.121456 103.936109,106.028782 105.331225,104.633667 C106.72634,102.540993 107.423898,99.7507623 106.72634,97.658089 C106.028782,94.1703001 97.658089,75.3362401 95.5654156,71.1508934 C94.1703001,69.05822 92.7751845,68.3606623 90.6825112,67.6631045 L88.5898378,67.6631045 C87.1947223,67.6631045 85.1020489,67.6631045 83.0093756,67.6631045 C81.6142601,67.6631045 80.2191445,68.3606623 78.8240289,68.3606623 L78.1264712,69.05822 C76.7313556,69.7557778 75.3362401,71.1508934 73.9411245,71.8484512 C72.5460089,73.2435667 71.8484512,74.6386823 70.4533356,76.0337978 C65.5704312,82.3118178 62.7802,89.9849534 62.7802,97.658089 L62.7802,97.658089 C62.7802,103.238551 64.1753156,108.819013 66.2679889,113.701918 L66.9655467,115.794591 C73.2435667,129.048189 81.6142601,140.906671 92.7751845,151.370038 L95.5654156,154.160269 C97.658089,156.252942 99.7507623,157.648058 101.145878,159.740731 C115.794591,172.296771 132.535978,181.365022 151.370038,186.247927 C153.462711,186.945485 156.252942,186.945485 158.345616,187.643042 L158.345616,187.643042 C160.438289,187.643042 163.22852,187.643042 165.321193,187.643042 C168.808982,187.643042 172.994329,186.247927 175.78456,184.852811 C177.877233,183.457696 179.272349,183.457696 180.667465,182.06258 L182.06258,180.667465 C183.457696,179.272349 184.852811,178.574791 186.247927,177.179676 C187.643042,175.78456 189.038158,174.389445 189.735716,172.994329 C191.130831,170.204098 191.828389,166.716309 192.525947,163.22852 C192.525947,161.833405 192.525947,159.740731 192.525947,158.345616 C192.525947,158.345616 191.828389,157.648058 190.433273,156.9505 Z"
                                                            fill="#FFFFFF"
                                                        ></path>
                                                    </g>
                                                </svg>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <a href="https://wa.me/6591187971" target="_blank" rel="noreferrer" aria-label="WhatsApp Us">
                                    <button className="group bg-transparent text-lg text-white hover:text-gray-200 font-semibold hidden sm:block sm:absolute sm:right-8 sm:bottom-8 lg:right-6 lg:bottom-6">
                                        Contact us now
                                        <svg width="259px" height="259px" viewBox="-1.5 0 259 259" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#25D366" className="ml-4 inline w-[32px] h-auto group-hover:fill-[#22BF5B]">
                                            <g>
                                                <path
                                                    d="M67.6631045,221.823373 L71.8484512,223.916047 C89.2873956,234.379413 108.819013,239.262318 128.350631,239.262318 L128.350631,239.262318 C189.735716,239.262318 239.959876,189.038158 239.959876,127.653073 C239.959876,98.3556467 228.101393,69.7557778 207.17466,48.8290445 C186.247927,27.9023111 158.345616,16.0438289 128.350631,16.0438289 C66.9655467,16.0438289 16.7413867,66.2679889 17.4389445,128.350631 C17.4389445,149.277365 23.7169645,169.50654 34.1803311,186.945485 L36.9705622,191.130831 L25.8096378,232.28674 L67.6631045,221.823373 Z"
                                                ></path>
                                                <path
                                                    d="M219.033142,37.66812 C195.316178,13.2535978 162.530962,0 129.048189,0 C57.8972956,0 0.697557778,57.8972956 1.39511556,128.350631 C1.39511556,150.67248 7.67313556,172.296771 18.1365022,191.828389 L0,258.096378 L67.6631045,240.657433 C86.4971645,251.1208 107.423898,256.003705 128.350631,256.003705 L128.350631,256.003705 C198.803967,256.003705 256.003705,198.106409 256.003705,127.653073 C256.003705,93.4727423 242.750107,61.3850845 219.033142,37.66812 Z M129.048189,234.379413 L129.048189,234.379413 C110.214129,234.379413 91.380069,229.496509 75.3362401,219.7307 L71.1508934,217.638027 L30.6925422,228.101393 L41.1559089,188.3406 L38.3656778,184.155253 C7.67313556,134.628651 22.3218489,69.05822 72.5460089,38.3656778 C122.770169,7.67313556 187.643042,22.3218489 218.335585,72.5460089 C249.028127,122.770169 234.379413,187.643042 184.155253,218.335585 C168.111425,228.798951 148.579807,234.379413 129.048189,234.379413 Z M190.433273,156.9505 L182.760138,153.462711 C182.760138,153.462711 171.599213,148.579807 164.623636,145.092018 C163.926078,145.092018 163.22852,144.39446 162.530962,144.39446 C160.438289,144.39446 159.043173,145.092018 157.648058,145.789576 L157.648058,145.789576 C157.648058,145.789576 156.9505,146.487133 147.184691,157.648058 C146.487133,159.043173 145.092018,159.740731 143.696902,159.740731 L142.999345,159.740731 C142.301787,159.740731 140.906671,159.043173 140.209113,158.345616 L136.721325,156.9505 L136.721325,156.9505 C129.048189,153.462711 122.072611,149.277365 116.492149,143.696902 C115.097033,142.301787 113.00436,140.906671 111.609245,139.511556 C106.72634,134.628651 101.843436,129.048189 98.3556467,122.770169 L97.658089,121.375053 C96.9605312,120.677496 96.9605312,119.979938 96.2629734,118.584822 C96.2629734,117.189707 96.2629734,115.794591 96.9605312,115.097033 C96.9605312,115.097033 99.7507623,111.609245 101.843436,109.516571 C103.238551,108.121456 103.936109,106.028782 105.331225,104.633667 C106.72634,102.540993 107.423898,99.7507623 106.72634,97.658089 C106.028782,94.1703001 97.658089,75.3362401 95.5654156,71.1508934 C94.1703001,69.05822 92.7751845,68.3606623 90.6825112,67.6631045 L88.5898378,67.6631045 C87.1947223,67.6631045 85.1020489,67.6631045 83.0093756,67.6631045 C81.6142601,67.6631045 80.2191445,68.3606623 78.8240289,68.3606623 L78.1264712,69.05822 C76.7313556,69.7557778 75.3362401,71.1508934 73.9411245,71.8484512 C72.5460089,73.2435667 71.8484512,74.6386823 70.4533356,76.0337978 C65.5704312,82.3118178 62.7802,89.9849534 62.7802,97.658089 L62.7802,97.658089 C62.7802,103.238551 64.1753156,108.819013 66.2679889,113.701918 L66.9655467,115.794591 C73.2435667,129.048189 81.6142601,140.906671 92.7751845,151.370038 L95.5654156,154.160269 C97.658089,156.252942 99.7507623,157.648058 101.145878,159.740731 C115.794591,172.296771 132.535978,181.365022 151.370038,186.247927 C153.462711,186.945485 156.252942,186.945485 158.345616,187.643042 L158.345616,187.643042 C160.438289,187.643042 163.22852,187.643042 165.321193,187.643042 C168.808982,187.643042 172.994329,186.247927 175.78456,184.852811 C177.877233,183.457696 179.272349,183.457696 180.667465,182.06258 L182.06258,180.667465 C183.457696,179.272349 184.852811,178.574791 186.247927,177.179676 C187.643042,175.78456 189.038158,174.389445 189.735716,172.994329 C191.130831,170.204098 191.828389,166.716309 192.525947,163.22852 C192.525947,161.833405 192.525947,159.740731 192.525947,158.345616 C192.525947,158.345616 191.828389,157.648058 190.433273,156.9505 Z"
                                                    fill="#FFFFFF"
                                                ></path>
                                            </g>
                                        </svg>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-cover bg-center block sm:hidden py-10 text-center bg-white">
                        <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                            <div className="leading-snug space-y-6 prose">
                                <p>
                                    <strong>Relocate fast and hassle-free.</strong>

                                </p>
                                <p>Save your time, energy and headspace for what matters most to you.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-cover bg-center pt-12 md:pt-16 pb-4 md:pb-6">
                        <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                            <div className="leading-snug text-center sm:text-left space-y-8 w-full">
                                <div className="leading-snug font-semibold text-2xl md:text-3xl">
                                    <h2>Why choose us for your international move?</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-cover bg-center pt-4 md:pt-6 pb-16 md:pb-24">
                        <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                            <div className="w-full">
                                <div className="grid grid-cols-2">
                                    <div className="col-span-full sm:col-span-1 sm:row-start-1 py-8 px-[6%] sm:pl-[9%] sm:pr-[18%] border-y border-[#6211cb] font-semibold text-[#6211cb] whitespace-pre-line text-xl sm:text-2xl">
                                        <div className="mb-2">
                                            <div className="w-[24px] h-auto">
                                                <span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative' }}>
                                                    <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, paddingTop: '111.11111111111111%' }}></span>
                                                    <img
                                                        alt="icon"
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                        decoding="async"
                                                        data-nimg="responsive"
                                                        style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                                                    />
                                                    <noscript>
                                                        <img
                                                            alt="icon"
                                                            sizes="100vw"
                                                            srcset="
                                                    /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F19b9e9647b5006368266eb8dc9389a96a5ec5e8e-36x40.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=640&amp;q=75   640w,
                                                    /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F19b9e9647b5006368266eb8dc9389a96a5ec5e8e-36x40.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=750&amp;q=75   750w,
                                                    /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F19b9e9647b5006368266eb8dc9389a96a5ec5e8e-36x40.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=828&amp;q=75   828w,
                                                    /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F19b9e9647b5006368266eb8dc9389a96a5ec5e8e-36x40.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1080&amp;q=75 1080w,
                                                    /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F19b9e9647b5006368266eb8dc9389a96a5ec5e8e-36x40.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1200&amp;q=75 1200w,
                                                    /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F19b9e9647b5006368266eb8dc9389a96a5ec5e8e-36x40.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1920&amp;q=75 1920w,
                                                    /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F19b9e9647b5006368266eb8dc9389a96a5ec5e8e-36x40.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=2048&amp;q=75 2048w,
                                                    /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F19b9e9647b5006368266eb8dc9389a96a5ec5e8e-36x40.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=3840&amp;q=75 3840w
                                                "
                                                            src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F19b9e9647b5006368266eb8dc9389a96a5ec5e8e-36x40.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=3840&amp;q=75"
                                                            decoding="async"
                                                            data-nimg="responsive"
                                                            style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                                                            loading="lazy"
                                                        />
                                                    </noscript>
                                                </span>
                                            </div>
                                        </div>
                                        <h2>
                                            Tired of waiting?
                                            <br />
                                            We get back fast.
                                        </h2>
                                    </div>
                                    <div className="col-span-full sm:col-span-1 pt-8 pb-12 px-[6%] sm:pl-[9%] sm:pr-[18%] md:border-b border-[#6211cb] space-y-10 leading-snug prose md:text-lg">
                                        <p>
                                            <strong>No more waiting</strong> indefinitely for quotes. Get an

                                            <a href="/get-a-quote">instant estimate</a>.
                                        </p>
                                        <p>
                                            <strong>Ask us anything</strong> regarding your move! We’ll respond within 1 work day.
                                        </p>
                                        <p>
                                            <strong>
                                                Save headspace

                                            </strong>
                                            when you wait less. Batch and finish your tasks at one go.

                                        </p>
                                    </div>
                                    <div className="col-span-full sm:col-span-1 sm:row-start-1 py-8 px-[6%] sm:pl-[9%] sm:pr-[18%] border-y border-[#6211cb] font-semibold text-[#6211cb] whitespace-pre-line text-xl sm:text-2xl">
                                        <div className="mb-2">
                                            <div className="w-[24px] h-auto">
                                                <span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative' }}>
                                                    <span
                                                        style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, paddingTop: '103.03030303030303%' }}
                                                    ></span>
                                                    <img
                                                        alt="icon"
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                        decoding="async"
                                                        data-nimg="responsive"
                                                        style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                                                    />
                                                    <noscript>
                                                        <img
                                                            alt="icon"
                                                            sizes="100vw"
                                                            srcset="
                                                    /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F5adf50f06e722a3c454ade73072d478df01f037c-33x34.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=640&amp;q=75   640w,
                                                    /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F5adf50f06e722a3c454ade73072d478df01f037c-33x34.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=750&amp;q=75   750w,
                                                    /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F5adf50f06e722a3c454ade73072d478df01f037c-33x34.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=828&amp;q=75   828w,
                                                    /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F5adf50f06e722a3c454ade73072d478df01f037c-33x34.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1080&amp;q=75 1080w,
                                                    /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F5adf50f06e722a3c454ade73072d478df01f037c-33x34.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1200&amp;q=75 1200w,
                                                    /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F5adf50f06e722a3c454ade73072d478df01f037c-33x34.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1920&amp;q=75 1920w,
                                                    /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F5adf50f06e722a3c454ade73072d478df01f037c-33x34.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=2048&amp;q=75 2048w,
                                                    /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F5adf50f06e722a3c454ade73072d478df01f037c-33x34.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=3840&amp;q=75 3840w
                                                "
                                                            src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F5adf50f06e722a3c454ade73072d478df01f037c-33x34.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=3840&amp;q=75"
                                                            decoding="async"
                                                            data-nimg="responsive"
                                                            style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                                                            loading="lazy"
                                                        />
                                                    </noscript>
                                                </span>
                                            </div>
                                        </div>
                                        <h3>Keep your valuables safe.</h3>
                                        <h3>Use air shipping.</h3>
                                    </div>
                                    <div className="col-span-full sm:col-span-1 pt-8 pb-12 px-[6%] sm:pl-[9%] sm:pr-[18%] md:border-b border-[#6211cb] space-y-10 leading-snug prose md:text-lg">
                                        <p>
                                            Minimise handling to

                                            <strong>
                                                avoid damage

                                            </strong>
                                            to your items.
                                        </p>
                                        <p>
                                            Clear customs quickly and

                                            <strong>
                                                lower the risk

                                            </strong>
                                            of theft.
                                        </p>
                                        <p>
                                            Get access to premium tracked air shipping at
                                            <strong> </strong>the

                                            <strong>cheapest rates</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>













                    {/* according */}
                    <div
                        style={{ backgroundImage: 'url(https://cdn.sanity.io/images/bm4duuk0/production/65c514282a1f4f253ae94f7cebf125162187673a-1440x598.jpg?fit=max&amp;auto=format)', backgroundPosition: 'center' }}
                        className="relative h-[280px] bg-cover bg-left sm:bg-center shadow sm:h-[50vh] sm:max-h-[540px] lg:h-[60vh] 2xl:max-h-[45vh]"
                    >
                        <div className="bg-cover bg-center pt-8 md:pt-12 pb-8 md:pb-12 text-center sm:text-left h-full">
                            <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                                <div className="w-full sm:max-w-[61.8%] xl:max-w-[50%]"><div className="text-2xl sm:text-3xl md:text-4xl xl:text-4.5xl font-semibold leading-snug sm:leading-snug xl:leading-tight whitespace-pre-line"></div></div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-cover bg-center pt-12 md:pt-16 pb-16 md:pb-24" >
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




                    {/* rating */}
                    <div className="bg-cover bg-center pt-12 md:pt-16 pb-12 md:pb-16 overflow-hidden" style={{ backgroundColor: '#fed430' }}>
                        <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                            <div className="hidden md:block absolute left-0 right-0 bottom-0 w-[45%] h-full -z-[0] translate-y-[37%] -translate-x-[10%]">
                                <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
                                    <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
                                        <img
                                            style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }}
                                            alt="pic"
                                            aria-hidden="true"
                                            src={Price3}
                                            classNameName='scale-100'
                                        />
                                    </span>
                                    <img
                                        alt="rating backdrop"
                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                        decoding="async"
                                        data-nimg="intrinsic"
                                        className="-translate-y-[calc((100%-443px)*0.625)]"
                                        style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                                    />
                                    <noscript>
                                        <img
                                            alt="rating backdrop"
                                            srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frating-guy.9852e89a.png&amp;w=1920&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frating-guy.9852e89a.png&amp;w=3840&amp;q=75 2x"
                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frating-guy.9852e89a.png&amp;w=3840&amp;q=75"
                                            decoding="async"
                                            data-nimg="intrinsic"
                                            style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                                            className="-translate-y-[calc((100%-443px)*0.625)]"
                                            loading="lazy"
                                        />
                                    </noscript>
                                </span>
                            </div>
                            <div className="w-full relative flex flex-wrap sm:flex-row gap-y-4 justify-between text-center sm:text-left">
                                <div className="w-full sm:w-1/3 relative">
                                    <div className="sm:pr-[6%] space-y-8">
                                        <div className="leading-snug font-semibold text-black whitespace-pre-line text-2xl xl:text-3xl">
                                            <h4>
                                                <span style={{ color: '#844ffa' }}>
                                                    Our shippers trust and recommend us.

                                                </span>
                                            </h4>
                                            <div className="pt-3 w-[80%] md:w-[90%] mx-auto md:mx-0">
                                                <span
                                                    style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}
                                                >
                                                    <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
                                                        <img
                                                            style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }}
                                                            alt="pic"
                                                            aria-hidden="true"
                                                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271244%27%20height=%27258%27/%3e"
                                                        />
                                                    </span>
                                                    <img
                                                        alt="google ratings"
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                        decoding="async"
                                                        data-nimg="intrinsic"
                                                        style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                                                    />
                                                    <noscript>
                                                        <img
                                                            alt="google ratings"
                                                            srcset="
                                                        /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogle-rating.a736669a.png&amp;w=1920&amp;q=75 1x,
                                                        /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogle-rating.a736669a.png&amp;w=3840&amp;q=75 2x
                                                    "
                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogle-rating.a736669a.png&amp;w=3840&amp;q=75"
                                                            decoding="async"
                                                            data-nimg="intrinsic"
                                                            style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                                                            loading="lazy"
                                                        />
                                                    </noscript>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                {/* carosal */}
                                <div className="w-full sm:w-2/3">
                                    <div className="sm:pl-[6%] space-y-8">
                                        <div className="w-full">

                                            <div className="w-[calc{100%)] mx-auto relative">
                                                <div className='xl:w-[70%] lg:w-[50%] w-[65%] mx-auto shadow-none'>
                                                    <Carousel className='bg-purple-400 w-full' slides={slides} autoplay={true} interval={2000} arrows={false} />
                                                </div>

                                                <button
                                                    className="  absolute top-[50%] -translate-y-[50%] left-0 md:translate-x-16 lg:translate-x-10 rounded "
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        className="h-[42px] w-[24px] md:w-[30px] stroke-white z-[-2]"
                                                    >
                                                        <polyline points="15 18 9 12 15 6"></polyline>
                                                    </svg>

                                                </button>

                                                <button
                                                    className="absolute top-[50%] -translate-y-[50%] right-0 md:-translate-x-16 lg:-translate-x-10 rounded z-20  "

                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        className="h-[42px] w-[24px] md:w-[30px] stroke-white"
                                                    >
                                                        <polyline points="9 18 15 12 9 6"></polyline>
                                                    </svg>
                                                </button>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* last part */}
                    <div className="bg-cover bg-center pt-8 md:pt-12 pb-8 md:pb-12">
                        <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                            <div className="leading-snug text-center sm:text-left space-y-8 w-full">
                                <div className="leading-snug font-semibold text-2xl md:text-3xl">
                                    <h2>Have your items seamlessly delivered in less than 2 weeks.</h2>
                                </div>
                                <div className="md:text-lg space-y-6 prose-ul:space-y-2 prose max-w-full md:prose-li:text-lg prose-li:text-left prose-li:mx-4 lg:prose-li:mx-8 prose-strong:text-inherit marker:text-subheading-gray marker:text-sm">
                                    <p>
                                        Cut out the chores with

                                        <strong>free pick-up</strong> from your doorstep and optional professional packing.

                                    </p>
                                    <ul type='A'>
                                        <li>No more queuing at the post office</li>
                                        <li>No endless taping of boxes</li>
                                        <li>No headaches over how to paste labels</li>
                                    </ul>
                                    <p>Your items can be out of your house and in a plane in less than a week, then add just another week to have it reach the doorstep of your destination.</p>
                                </div>
                                <div className="pb-8 space-y-4">
                                    <a target="_blank" href="/create-shipment">
                                        <button
                                            className="rounded-full font-bold focus:outline-[#844FFA] whitespace-nowrap px-12 py-4 bg-[#844FFA] hover:bg-[#6211cb] disabled:bg-[#844FFA] text-white mr-4 w-64 lg:w-56"
                                            rel="noopener noreferrer"
                                            _key="7fe158235397"
                                            _type="callToAction"
                                            title="Ship Now"
                                            url="/create-shipment"
                                        >
                                            Ship Now
                                        </button>
                                    </a>
                                    <a target="_blank" href="https://wa.me/6591187971">
                                        <button
                                            className="rounded-full font-bold focus:outline-[#844FFA]  whitespace-nowrap px-12 py-4 border-2 border-[#844FFA] hover:border-[#6211cb] bg-transparent hover:bg-[#6211cb] text-[#6211cb] hover:text-white mr-4 w-64 lg:w-56"
                                            rel="noopener noreferrer"
                                            _key="a4026484bfe1"
                                            _type="callToAction"
                                            title="WhatsApp Us"
                                            url="https://wa.me/6591187971"
                                        >
                                            WhatsApp Us
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default Relocation;