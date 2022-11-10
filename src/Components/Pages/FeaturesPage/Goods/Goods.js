import React from 'react';

const Goods = () => {
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
                                        <h1>Dangerous Goods</h1>
                                    </div>
                                    <div className="hidden sm:block md:text-lg 2xl:text-xl mt-6 space-y-6 sm:leading-snug prose">
                                        <p>We offer dangerous goods international shipping with competitive export rates worldwide.</p>
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
                                <p>We offer dangerous goods international shipping with competitive export rates worldwide.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-cover bg-center pt-12 md:pt-16 pb-8 md:pb-12">
                        <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                            <div className="w-full relative flex flex-wrap sm:flex-row gap-y-10 justify-between text-center sm:text-left">
                                <div className="w-full sm:w-1/2 grid">
                                    <div className="sm:pr-[6%] space-y-8">
                                        <div className="leading-snug font-semibold text-black whitespace-pre-line text-2xl md:text-3xl">
                                            <h2>How do I know if my items are dangerous goods (DGs)?</h2>
                                        </div>
                                        <div className="sm:text-lg prose marker:text-subheading-gray marker:text-sm">
                                            <p>
                                                If you are shipping electronics, alcohol, scented candles or even large amounts of hand sanitizers, your items may be classified as Dangerous Goods.
                                                <br />
                                                <br />
                                                In general, if your items are flammable, explosive, corrosive, radioactive, or potentially environmentally hazardous, they could be barred from shipping overseas.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 sm:mt-40 grid">
                                    <div className="sm:pl-[6%] space-y-8">
                                        <div className="leading-snug font-semibold text-black whitespace-pre-line text-2xl md:text-3xl">
                                            <h3>How can JustShip help with shipping dangerous goods internationally?</h3>
                                        </div>
                                        <div className="sm:text-lg prose marker:text-subheading-gray marker:text-sm">
                                            <p>We know shipping dangerous goods overseas is troublesome, so we’ll do all the boring bits.</p>
                                            <p>We also partner with FedEx© to provide you with the cheapest international moving rates – so it&#x27;s both convenient &amp; affordable for you.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-cover bg-center pt-8 md:pt-12 pb-4 md:pb-6">
                        <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                            <div className="leading-snug text-center sm:text-left space-y-8 w-full">
                                <div className="leading-snug font-semibold text-2xl md:text-3xl">
                                    <h2>
                                        <span style={{ color: '#6211cb' }}>How to ship</span>
                                    </h2>
                                </div>
                                <div className="md:text-lg space-y-6 prose-ul:space-y-2 prose max-w-full md:prose-li:text-lg prose-li:text-left prose-li:mx-4 lg:prose-li:mx-8 prose-strong:text-inherit marker:text-subheading-gray marker:text-sm">
                                    <p>A step-by-step process to shipping DGs (Dangerous Goods).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-cover bg-center pt-2 md:pt-3 pb-12 md:pb-16 hidden md:block">
                        <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                            <div className="w-full">
                                <div className="flex">
                                    <div className="flex-1 flex relative">
                                        <div className="pb-4 w-full text-xl font-semibold text-dark-purple  border-b" style={{ borderStyle: 'solid', borderColor: '#6211cb' }}>
                                            <div className="mb-2">
                                                <div className="w-[18px] h-auto">
                                                    <span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative' }}>
                                                        <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, paddingTop: '100%' }}></span>
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
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fd3eb3950beab72df03f1f62ef1c316d94c81137a-20x20.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=640&amp;q=75   640w,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fd3eb3950beab72df03f1f62ef1c316d94c81137a-20x20.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=750&amp;q=75   750w,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fd3eb3950beab72df03f1f62ef1c316d94c81137a-20x20.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=828&amp;q=75   828w,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fd3eb3950beab72df03f1f62ef1c316d94c81137a-20x20.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1080&amp;q=75 1080w,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fd3eb3950beab72df03f1f62ef1c316d94c81137a-20x20.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1200&amp;q=75 1200w,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fd3eb3950beab72df03f1f62ef1c316d94c81137a-20x20.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1920&amp;q=75 1920w,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fd3eb3950beab72df03f1f62ef1c316d94c81137a-20x20.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=2048&amp;q=75 2048w,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fd3eb3950beab72df03f1f62ef1c316d94c81137a-20x20.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=3840&amp;q=75 3840w
                                                    "
                                                                src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fd3eb3950beab72df03f1f62ef1c316d94c81137a-20x20.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=3840&amp;q=75"
                                                                decoding="async"
                                                                data-nimg="responsive"
                                                                style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                                                                loading="lazy"
                                                            />
                                                        </noscript>
                                                    </span>
                                                </div>
                                            </div>
                                            <h3>
                                                <span style={{ color: '#6211cb' }}>Enquire</span>
                                            </h3>
                                            <div className="absolute left-0 -bottom-1.5 w-3 h-3 rounded-full" style={{ backgroundColor: '#6211cb' }}></div>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex relative">
                                        <div className="pb-4 w-full text-xl font-semibold text-dark-purple  border-b" style={{ borderStyle: 'solid', borderColor: '#6211cb' }}>
                                            <div className="mb-2">
                                                <div className="w-[18px] h-auto">
                                                    <span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative' }}>
                                                        <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, paddingTop: '100%' }}></span>
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
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F5b3e29bc1a68499fd0debb4def9db720d8072921-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=640&amp;q=75   640w,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F5b3e29bc1a68499fd0debb4def9db720d8072921-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=750&amp;q=75   750w,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F5b3e29bc1a68499fd0debb4def9db720d8072921-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=828&amp;q=75   828w,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F5b3e29bc1a68499fd0debb4def9db720d8072921-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1080&amp;q=75 1080w,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F5b3e29bc1a68499fd0debb4def9db720d8072921-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1200&amp;q=75 1200w,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F5b3e29bc1a68499fd0debb4def9db720d8072921-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1920&amp;q=75 1920w,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F5b3e29bc1a68499fd0debb4def9db720d8072921-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=2048&amp;q=75 2048w,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F5b3e29bc1a68499fd0debb4def9db720d8072921-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=3840&amp;q=75 3840w
                                                    "
                                                                src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F5b3e29bc1a68499fd0debb4def9db720d8072921-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=3840&amp;q=75"
                                                                decoding="async"
                                                                data-nimg="responsive"
                                                                style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                                                                loading="lazy"
                                                            />
                                                        </noscript>
                                                    </span>
                                                </div>
                                            </div>
                                            <h3>
                                                <span style={{ color: '#6211cb' }}>Shipping Form</span>
                                            </h3>
                                            <div className="absolute left-0 -bottom-1.5 w-3 h-3 rounded-full" style={{ backgroundColor: '#6211cb' }}></div>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex relative">
                                        <div className="pb-4 w-full text-xl font-semibold text-dark-purple border-b" style={{ borderStyle: 'solid', borderColor: '#6211cb' }}>
                                            <div className="mb-2">
                                                <div className="w-[18px] h-auto">
                                                    <span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative' }}>
                                                        <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, paddingTop: '100%' }}></span>
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
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fc92b344fc4e1e77dc593591a2fa1a12a7b016849-28x28.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=640&amp;q=75   640w,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fc92b344fc4e1e77dc593591a2fa1a12a7b016849-28x28.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=750&amp;q=75   750w,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fc92b344fc4e1e77dc593591a2fa1a12a7b016849-28x28.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=828&amp;q=75   828w,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fc92b344fc4e1e77dc593591a2fa1a12a7b016849-28x28.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1080&amp;q=75 1080w,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fc92b344fc4e1e77dc593591a2fa1a12a7b016849-28x28.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1200&amp;q=75 1200w,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fc92b344fc4e1e77dc593591a2fa1a12a7b016849-28x28.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1920&amp;q=75 1920w,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fc92b344fc4e1e77dc593591a2fa1a12a7b016849-28x28.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=2048&amp;q=75 2048w,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fc92b344fc4e1e77dc593591a2fa1a12a7b016849-28x28.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=3840&amp;q=75 3840w
                                                    "
                                                                src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fc92b344fc4e1e77dc593591a2fa1a12a7b016849-28x28.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=3840&amp;q=75"
                                                                decoding="async"
                                                                data-nimg="responsive"
                                                                style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                                                                loading="lazy"
                                                            />
                                                        </noscript>
                                                    </span>
                                                </div>
                                            </div>
                                            <h3>
                                                <span style={{ color: '#6211cb' }}>Payment</span>
                                            </h3>
                                            <div className="absolute left-0 -bottom-1.5 w-3 h-3 rounded-full" style={{ backgroundColor: '#6211cb' }}></div>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex relative">
                                        <div className="pb-4 w-full text-xl font-semibold text-dark-purple " style={{ borderStyle: 'solid', borderColor: '#6211cb' }}>
                                            <div className="mb-2">
                                                <div className="w-[18px] h-auto">
                                                    <span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative' }}>
                                                        <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, paddingTop: '100%' }}></span>
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
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F32e12986a0de2568bb28571d1df30b22d4a09dba-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=640&amp;q=75   640w,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F32e12986a0de2568bb28571d1df30b22d4a09dba-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=750&amp;q=75   750w,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F32e12986a0de2568bb28571d1df30b22d4a09dba-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=828&amp;q=75   828w,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F32e12986a0de2568bb28571d1df30b22d4a09dba-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1080&amp;q=75 1080w,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F32e12986a0de2568bb28571d1df30b22d4a09dba-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1200&amp;q=75 1200w,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F32e12986a0de2568bb28571d1df30b22d4a09dba-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1920&amp;q=75 1920w,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F32e12986a0de2568bb28571d1df30b22d4a09dba-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=2048&amp;q=75 2048w,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F32e12986a0de2568bb28571d1df30b22d4a09dba-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=3840&amp;q=75 3840w
                                                    "
                                                                src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F32e12986a0de2568bb28571d1df30b22d4a09dba-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=3840&amp;q=75"
                                                                decoding="async"
                                                                data-nimg="responsive"
                                                                style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                                                                loading="lazy"
                                                            />
                                                        </noscript>
                                                    </span>
                                                </div>
                                            </div>
                                            <h3>
                                                <span style={{ color: '#6211cb' }}>Start Shipping</span>
                                            </h3>
                                            <div className="absolute left-0 -bottom-1.5 w-3 h-3 rounded-full" style={{ backgroundColor: '#6211cb' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-1 flex">
                                        <div className="w-[80%] pt-8 leading-snug prose">
                                            <p>Fill up a form with the following information:</p>
                                            <ol>
                                                <li>Contact Information</li>
                                                <li>Destination Address</li>
                                                <li>Item Description</li>
                                                <li>Material Safety Data Sheet (MSDS)</li>
                                            </ol>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex">
                                        <div className="w-[80%] pt-8 leading-snug prose">
                                            <p>
                                                Once the DG is approved for shipping by our DG Specialist, we will provide a quote for your shipment.
                                                <br />
                                                <br />
                                                To proceed, fill up our

                                                <a href="/create-shipment">shipping form</a>.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex">
                                        <div className="w-[80%] pt-8 leading-snug prose">
                                            <p>Easy and hassle-free payment through PayNow</p>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex">
                                        <div className="w-[80%] pt-8 leading-snug prose">
                                            <p>Have your parcels picked up by our couriers, or drop it off at our office yourselves!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <div className="bg-cover bg-center pt-2 md:pt-3 pb-12 md:pb-16">
                            <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                                <div className="pl-5 w-full">
                                    <div className="flex flex-col">
                                        <div className="relative">
                                            <div className="pl-6 border-l-2" style={{ borderStyle: 'solid', borderColor: '#6211cb' }}>
                                                <div className="absolute inset-0 -left-[7px] w-[16px] h-[16px] rounded-full" style={{ backgroundColor: '#6211cb' }}></div>
                                                <div className="flex whitespace-pre-line gap-x-1">
                                                    <div className="w-[20px]">
                                                        <div className="w-[18px] h-auto">
                                                            <span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative' }}>
                                                                <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, paddingTop: '100%' }}></span>
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
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fd3eb3950beab72df03f1f62ef1c316d94c81137a-20x20.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=640&amp;q=75   640w,
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fd3eb3950beab72df03f1f62ef1c316d94c81137a-20x20.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=750&amp;q=75   750w,
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fd3eb3950beab72df03f1f62ef1c316d94c81137a-20x20.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=828&amp;q=75   828w,
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fd3eb3950beab72df03f1f62ef1c316d94c81137a-20x20.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1080&amp;q=75 1080w,
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fd3eb3950beab72df03f1f62ef1c316d94c81137a-20x20.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1200&amp;q=75 1200w,
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fd3eb3950beab72df03f1f62ef1c316d94c81137a-20x20.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1920&amp;q=75 1920w,
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fd3eb3950beab72df03f1f62ef1c316d94c81137a-20x20.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=2048&amp;q=75 2048w,
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fd3eb3950beab72df03f1f62ef1c316d94c81137a-20x20.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=3840&amp;q=75 3840w
                                                            "
                                                                        src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fd3eb3950beab72df03f1f62ef1c316d94c81137a-20x20.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=3840&amp;q=75"
                                                                        decoding="async"
                                                                        data-nimg="responsive"
                                                                        style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                                                                        loading="lazy"
                                                                    />
                                                                </noscript>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="-mt-1 ml-2 pb-10">
                                                        <div className="leading-snug font-semibold text-lg">
                                                            <h3>
                                                                <span style={{ color: '#6211cb' }}>Enquire</span>
                                                            </h3>
                                                        </div>
                                                        <div className="mt-4 leading-snug prose">
                                                            <p>Fill up a form with the following information:</p>
                                                            <ol>
                                                                <li>Contact Information</li>
                                                                <li>Destination Address</li>
                                                                <li>Item Description</li>
                                                                <li>Material Safety Data Sheet (MSDS)</li>
                                                            </ol>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div className="pl-6 border-l-2" style={{ borderStyle: 'solid', borderColor: '#6211cb' }}>
                                                <div className="absolute inset-0 -left-[7px] w-[16px] h-[16px] rounded-full" style={{ backgroundColor: '#6211cb' }}></div>
                                                <div className="flex whitespace-pre-line gap-x-1">
                                                    <div className="w-[20px]">
                                                        <div className="w-[18px] h-auto">
                                                            <span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative' }}>
                                                                <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, paddingTop: '100%' }}></span>
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
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F5b3e29bc1a68499fd0debb4def9db720d8072921-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=640&amp;q=75   640w,
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F5b3e29bc1a68499fd0debb4def9db720d8072921-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=750&amp;q=75   750w,
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F5b3e29bc1a68499fd0debb4def9db720d8072921-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=828&amp;q=75   828w,
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F5b3e29bc1a68499fd0debb4def9db720d8072921-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1080&amp;q=75 1080w,
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F5b3e29bc1a68499fd0debb4def9db720d8072921-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1200&amp;q=75 1200w,
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F5b3e29bc1a68499fd0debb4def9db720d8072921-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1920&amp;q=75 1920w,
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F5b3e29bc1a68499fd0debb4def9db720d8072921-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=2048&amp;q=75 2048w,
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F5b3e29bc1a68499fd0debb4def9db720d8072921-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=3840&amp;q=75 3840w
                                                            "
                                                                        src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F5b3e29bc1a68499fd0debb4def9db720d8072921-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=3840&amp;q=75"
                                                                        decoding="async"
                                                                        data-nimg="responsive"
                                                                        style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                                                                        loading="lazy"
                                                                    />
                                                                </noscript>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="-mt-1 ml-2 pb-10">
                                                        <div className="leading-snug font-semibold text-lg">
                                                            <h3>
                                                                <span style={{ color: '#6211cb' }}>Shipping Form</span>
                                                            </h3>
                                                        </div>
                                                        <div className="mt-4 leading-snug prose">
                                                            <p>
                                                                Once the DG is approved for shipping by our DG Specialist, we will provide a quote for your shipment.
                                                                <br />
                                                                <br />
                                                                To proceed, fill up our

                                                                <a href="/create-shipment">shipping form</a>.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div className="pl-6 border-l-2" style={{ borderStyle: 'solid', borderColor: '#6211cb' }}>
                                                <div className="absolute inset-0 -left-[7px] w-[16px] h-[16px] rounded-full" style={{ backgroundColor: '#6211cb' }}></div>
                                                <div className="flex whitespace-pre-line gap-x-1">
                                                    <div className="w-[20px]">
                                                        <div className="w-[18px] h-auto">
                                                            <span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative' }}>
                                                                <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, paddingTop: '100%' }}></span>
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
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fc92b344fc4e1e77dc593591a2fa1a12a7b016849-28x28.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=640&amp;q=75   640w,
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fc92b344fc4e1e77dc593591a2fa1a12a7b016849-28x28.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=750&amp;q=75   750w,
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fc92b344fc4e1e77dc593591a2fa1a12a7b016849-28x28.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=828&amp;q=75   828w,
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fc92b344fc4e1e77dc593591a2fa1a12a7b016849-28x28.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1080&amp;q=75 1080w,
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fc92b344fc4e1e77dc593591a2fa1a12a7b016849-28x28.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1200&amp;q=75 1200w,
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fc92b344fc4e1e77dc593591a2fa1a12a7b016849-28x28.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1920&amp;q=75 1920w,
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fc92b344fc4e1e77dc593591a2fa1a12a7b016849-28x28.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=2048&amp;q=75 2048w,
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fc92b344fc4e1e77dc593591a2fa1a12a7b016849-28x28.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=3840&amp;q=75 3840w
                                                            "
                                                                        src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Fc92b344fc4e1e77dc593591a2fa1a12a7b016849-28x28.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=3840&amp;q=75"
                                                                        decoding="async"
                                                                        data-nimg="responsive"
                                                                        style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                                                                        loading="lazy"
                                                                    />
                                                                </noscript>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="-mt-1 ml-2 pb-10">
                                                        <div className="leading-snug font-semibold text-lg">
                                                            <h3>
                                                                <span style={{ color: '#6211cb' }}>Payment</span>
                                                            </h3>
                                                        </div>
                                                        <div className="mt-4 leading-snug prose">
                                                            <p>Easy and hassle-free payment through PayNow</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div className="pl-6" style={{ borderStyle: 'solid', borderColor: '#6211cb' }}>
                                                <div className="absolute inset-0 -left-[7px] w-[16px] h-[16px] rounded-full" style={{ backgroundColor: '#6211cb' }}></div>
                                                <div className="flex whitespace-pre-line gap-x-1">
                                                    <div className="w-[20px]">
                                                        <div className="w-[18px] h-auto">
                                                            <span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative' }}>
                                                                <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, paddingTop: '100%' }}></span>
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
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F32e12986a0de2568bb28571d1df30b22d4a09dba-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=640&amp;q=75   640w,
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F32e12986a0de2568bb28571d1df30b22d4a09dba-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=750&amp;q=75   750w,
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F32e12986a0de2568bb28571d1df30b22d4a09dba-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=828&amp;q=75   828w,
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F32e12986a0de2568bb28571d1df30b22d4a09dba-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1080&amp;q=75 1080w,
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F32e12986a0de2568bb28571d1df30b22d4a09dba-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1200&amp;q=75 1200w,
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F32e12986a0de2568bb28571d1df30b22d4a09dba-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1920&amp;q=75 1920w,
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F32e12986a0de2568bb28571d1df30b22d4a09dba-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=2048&amp;q=75 2048w,
                                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F32e12986a0de2568bb28571d1df30b22d4a09dba-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=3840&amp;q=75 3840w
                                                            "
                                                                        src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F32e12986a0de2568bb28571d1df30b22d4a09dba-24x24.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=3840&amp;q=75"
                                                                        decoding="async"
                                                                        data-nimg="responsive"
                                                                        style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                                                                        loading="lazy"
                                                                    />
                                                                </noscript>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="-mt-1 ml-2 pb-10">
                                                        <div className="leading-snug font-semibold text-lg">
                                                            <h3>
                                                                <span style={{ color: '#6211cb' }}>Start Shipping</span>
                                                            </h3>
                                                        </div>
                                                        <div className="mt-4 leading-snug prose">
                                                            <p>Have your parcels picked up by our couriers, or drop it off at our office yourselves!</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default Goods;