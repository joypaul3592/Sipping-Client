import React from 'react';
import GetStartimg from '../../../../Assect/GetStart.png'

const GetStart = () => {
    return (
        <div>
            <div className="bg-cover bg-center pt-16 md:pt-24" style={{ backgroundColor: '#844ffa' }}>
                <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                    <div className="w-full relative flex flex-wrap sm:flex-row gap-y-10 justify-between text-center sm:text-left">
                        <div className="w-full sm:w-1/2 grid">
                            <div className="sm:pr-[6%] space-y-8">
                                <div className="leading-snug font-semibold text-black whitespace-pre-line text-3xl sm:text-4.5xl">
                                    <p>
                                        <span style={{ color: '#ffffff' }}>
                                            Get Started

                                            <br />
                                            In Minutes
                                        </span>
                                    </p>
                                </div>
                                <div className="pb-8 flex flex-wrap gap-4 justify-center sm:justify-start">
                                    <a target="_blank" href="/create-shipment">
                                        <button
                                            className="rounded-full font-bold focus:outline-light-purple whitespace-nowrap px-12 py-4 bg-white hover:bg-dark-purple disabled:bg-background-dark-gray text-dark-purple hover:text-white shadow-sm w-64 lg:w-56"
                                            rel="noopener noreferrer"
                                            _key="3e6564629fcb"
                                            _type="callToAction"
                                            title="Ship Now"
                                            url="/create-shipment"
                                        >
                                            Ship Now
                                        </button>
                                    </a>
                                    <a target="_blank" href="/get-a-quote">
                                        <button
                                            className="rounded-full font-bold focus:outline-light-purple whitespace-nowrap px-12 py-4 border border-white hover:border-dark-purple bg-transparent hover:bg-dark-purple text-white hover:text-white shadow-sm w-64 lg:w-56"
                                            rel="noopener noreferrer"
                                            _key="a871268a74e1"
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
                        <div className="w-full sm:w-1/2 sm:mt-0 grid items-end">
                            <div className="sm:pl-[6%] space-y-8">
                                <div className="sm:text-lg prose marker:text-subheading-gray marker:text-sm">
                                    <div className="flex rounded-lg truncate justify-center">
                                        <span
                                            style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}
                                        >
                                            <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
                                                <img
                                                    style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }}
                                                    alt="pic"
                                                    aria-hidden="true"
                                                    src={GetStartimg}
                                                />
                                            </span>

                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default GetStart;