import React from 'react';

const HowToWork = () => {
    return (
        <div>
            <div className="bg-cover bg-center pt-12 md:pt-16 pb-16 md:pb-24" style={{ backgroundColor: '#f6f6f6' }}>
                <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                    <div className="mb-8 lg:mb-12 leading-snug font-semibold text-xl md:text-3xl">
                        <p>
                            <span style={{ color: '#6211cb' }}>How it works</span>
                        </p>
                    </div>
                    <div className="grid gap-y-12 md:gap-y-16 gap-x-6 md:gap-x-8 lg:gap-x-10 w-full grid-cols-1 md:grid-cols-2">
                        <div className="grid grid-cols-[20%_auto] gap-4 md:pr-4">
                            <p className="text-5xl lg:text-6xl text-[#FD6C5F] text-left font-light italic">01</p>
                            <div className="">
                                <div className="font-semibold  text-[#611ECB] text-lg">
                                    <p>Find out how much it costs to ship your items.</p>
                                </div>
                                <div className="mt-4 space-y-4">
                                    <a target="_blank" href="/get-a-quote">
                                        <button
                                            className="rounded-full font-bold focus:outline-purple-300 whitespace-nowrap px-8 py-2 hover:bg-[#6211cb] bg-[#844ffa] disabled:bg-disabled-purple text-white mr-4"
                                            rel="noopener noreferrer"
                                            _key="de5f4fe40b69"
                                            _type="callToAction"
                                            title="Get A Quote"
                                            url="/get-a-quote"
                                        >
                                            Get A Quote
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[20%_auto] gap-4 md:pr-4">
                            <p className="text-5xl lg:text-6xl text-[#FD6C5F] text-left font-light italic">02</p>
                            <div className="">
                                <div className="font-semibold  text-[#611ECB] text-lg">
                                    <p>Let us know where to pick it up &amp; where to ship it to.</p>
                                </div>
                                <div className="mt-4 space-y-4">
                                    <a target="_blank" href="/create-shipment">
                                        <button
                                            className="rounded-full font-bold focus:outline-purple-300 whitespace-nowrap px-8 py-2 hover:bg-[#6211cb] bg-[#844ffa] disabled:bg-disabled-purple text-white mr-4"
                                            rel="noopener noreferrer"
                                            _key="f3ea78756f2f"
                                            _type="callToAction"
                                            title="Ship Now"
                                            url="/create-shipment"
                                        >
                                            Ship Now
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[20%_auto] gap-4 md:pr-4">
                            <p className="text-5xl lg:text-6xl text-[#FD6C5F] text-left font-light italic">03</p>
                            <div className="">
                                <div className="font-semibold  text-[#611ECB] text-lg">
                                    <p>JustShip will do a free Expert Review of your shipment documentation.</p>
                                </div>
                                <div className="pt-2 md:pt-4 leading-snug prose">
                                    <p>
                                        <span style={{ color: '#6211cb' }}>Make changes to your documentation if you’re prompted to.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[20%_auto] gap-4 md:pr-4">
                            <p className="text-5xl lg:text-6xl text-[#FD6C5F] text-left font-light italic">04</p>
                            <div className="">
                                <div className="font-semibold  text-[#611ECB] text-lg">
                                    <p>We’ll pick-up your items and measure them at our warehouse.</p>
                                </div>
                                <div className="pt-2 md:pt-4 leading-snug prose">
                                    <p>
                                        <span style={{ color: '#6211cb' }}>Make payment adjustments if you’re prompted to.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[20%_auto] gap-4 md:pr-4">
                            <p className="text-5xl lg:text-6xl text-[#FD6C5F] text-left font-light italic">05</p>
                            <div className="">
                                <div className="font-semibold  text-[#611ECB] text-lg">
                                    <p>
                                        We have lift-off!

                                        <br />
                                        Track your parcel in real time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HowToWork;