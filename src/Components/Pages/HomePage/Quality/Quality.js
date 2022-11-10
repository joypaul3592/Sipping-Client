import React from 'react';

const Quality = () => {
    return (
        <div>
            <div
                className="bg-cover bg-center pt-12 md:pt-16 pb-16 md:pb-24"
                style={{ backgroundImage: 'url(https://cdn.sanity.io/images/bm4duuk0/production/4b4314e03d7fed76f0ba7db63dc365bcc49a0996-1920x1080.svg?fit=max&amp;auto=format)', backgroundPosition: 'center', backgroundColor: '#fd7167' }}
            >
                <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                    <div className="w-full md:w-3/4">
                        <div className="mb-8 leading-snug font-semibold text-xl md:text-3xl">
                            <p>
                                <span style={{ color: '#ffffff' }}>Our Quality Guarantee</span>
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute w-full h-full bg-white opacity-70 rounded-xl"></div>
                            <div className="p-4 sm:px-8">
                                <div className="grid sm:grid-cols-2 gap-y-6 relative pt-6 pb-8 border-b" style={{ borderColor: '#fd7167' }}>
                                    <div className="flex sm:pr-8 lg:pr-16 leading-snug text-lg font-semibold whitespace-pre-line">
                                        <div>
                                            <p>Afraid of hidden charges?</p>
                                        </div>
                                    </div>
                                    <div className="sm:pr-8 lg:pr-16 leading-snug prose">
                                        <p>Our quote is all-inclusive! Declare your dimensions accurately and get fixed prices.</p>
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-y-6 relative pt-6 pb-8 border-b" style={{ borderColor: '#fd7167' }}>
                                    <div className="flex sm:pr-8 lg:pr-16 leading-snug text-lg font-semibold whitespace-pre-line">
                                        <div>
                                            <p>Afraid of top-ups after we measure?</p>
                                        </div>
                                    </div>
                                    <div className="sm:pr-8 lg:pr-16 leading-snug prose">
                                        <p>
                                            We can send photo evidence if you need verification.

                                            <br />
                                            <br />
                                            Cancel your order if you don’t accept the final quote!
                                        </p>
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-y-6 relative pt-6 pb-8 border-b" style={{ borderColor: '#fd7167' }}>
                                    <div className="flex sm:pr-8 lg:pr-16 leading-snug text-lg font-semibold whitespace-pre-line">
                                        <div>
                                            <p>Afraid your items may get stopped at customs?</p>
                                        </div>
                                    </div>
                                    <div className="sm:pr-8 lg:pr-16 leading-snug prose">
                                        <p>DYOR (Do your own research), but our free expert review will help you avoid most of the common customs pitfalls!</p>
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-y-6 relative pt-6 pb-8" style={{ borderColor: '#fd7167' }}>
                                    <div className="flex sm:pr-8 lg:pr-16 leading-snug text-lg font-semibold whitespace-pre-line">
                                        <div>
                                            <p>Afraid of shipment delays?</p>
                                        </div>
                                    </div>
                                    <div className="sm:pr-8 lg:pr-16 leading-snug prose">
                                        <p>Our best-in-class shipping and expert reviews mean you get the lowest delay rates in the industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Quality;