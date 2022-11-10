import React from 'react';

import pic1 from '../../../../Assect/pic1.png'
import pic2 from '../../../../Assect/pic2.png'
import pic3 from '../../../../Assect/pic3.png'
import pic4 from '../../../../Assect/pic4.png'
import pic5 from '../../../../Assect/pic5.png'
import pic6 from '../../../../Assect/pic6.png'
import pic7 from '../../../../Assect/pic7.png'
import pic8 from '../../../../Assect/pic8.png'

const Card = () => {
    return (
        <div>
            <div className="bg-cover bg-center pt-12 md:pt-16 pb-12 md:pb-16" style={{ backgroundColor: '#f6f6f6' }}>
                <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                    <div className="mb-8 lg:mb-12 leading-snug font-semibold text-xl md:text-3xl">
                        <p>
                            <span style={{ color: '#6211cb' }}>
                                Ship your parcel seamlessly with an all-in-one service.

                                <br />
                                Enjoy multiple add-ons free of charge.
                            </span>
                        </p>
                    </div>
                    <div className="grid auto-rows-fr justify-items-center w-full  sm:grid-cols-3 md:grid-cols-4 grid-cols-1">


                        <div className="flex gap-x-4 px-6 sm:p-0 w-[100vw] flex-row sm:grid sm:grid-cols-1 sm:w-full text-center group md:px-2 lg:px-4">
                            <div className="grid sm:grid-rows-[2fr_1fr] flex-1">
                                <div className="relative my-auto">
                                    <div className="sm:p-6 group-hover:sm:opacity-0 transition duration-200 ease-in-out">
                                        <div className="flex rounded-lg truncate justify-center">
                                            <span
                                                style={{
                                                    boxSizing: 'border-box',
                                                    display: 'inline-block',
                                                    overflow: 'hidden',
                                                    width: 'initial',
                                                    height: 'initial',
                                                    background: 'none',
                                                    opacity: 1,
                                                    border: 0,
                                                    margin: 0,
                                                    padding: 0,
                                                    position: 'relative',
                                                    maxWidth: '100%'
                                                }}
                                            >
                                                <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
                                                    <img
                                                        style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }}
                                                        alt="pic"
                                                        aria-hidden="true"
                                                        src={pic1}
                                                    />
                                                </span>
                                                <img
                                                    alt="Precision Pick Up"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                    decoding="async"
                                                    data-nimg="intrinsic"
                                                    style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        bottom: 0,
                                                        right: 0,
                                                        boxSizing: 'border-box',
                                                        padding: 0,
                                                        border: 'none',
                                                        margin: 'auto',
                                                        display: 'block',
                                                        width: 0,
                                                        height: 0,
                                                        minWidth: '100%',
                                                        maxWidth: '100%',
                                                        minHeight: '100%',
                                                        maxHeight: '100%'
                                                    }}
                                                />
                                                <noscript>
                                                    <img
                                                        alt="Precision Pick Up"
                                                        srcset="
                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F844af77dfc2871ff8fe688838a10b6de8f54417f-500x500.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=640&amp;q=75  1x,
                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F844af77dfc2871ff8fe688838a10b6de8f54417f-500x500.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1080&amp;q=75 2x
                                            "
                                                        src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F844af77dfc2871ff8fe688838a10b6de8f54417f-500x500.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1080&amp;q=75"
                                                        decoding="async"
                                                        data-nimg="intrinsic"
                                                        style={{
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            bottom: 0,
                                                            right: 0,
                                                            boxSizing: 'border-box',
                                                            padding: 0,
                                                            border: 'none',
                                                            margin: 'auto',
                                                            display: 'block',
                                                            width: 0,
                                                            height: 0,
                                                            minWidth: '100%',
                                                            maxWidth: '100%',
                                                            minHeight: '100%',
                                                            maxHeight: '100%'
                                                        }}
                                                        loading="lazy"
                                                    />
                                                </noscript>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute hidden sm:flex flex-col justify-center w-full h-full inset-0 text-center text-dark-purple text-sm lg:text-base lg:leading-snug font-medium opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out"
                                    >
                                        <p>No more queuing at the post office! Get your items picked up from your doorstep.</p>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <div className="font-semibold leading-snug lg:leading-snug text-base lg:text-lg">
                                        <p>Precision Pick Up</p>
                                    </div>
                                    <div className="mt-0.5 space-x-2">
                                        <div className="inline-block text-sm text-dark-purple font-semibold whitespace-nowrap"><span className="text-white px-3 py-0.5 rounded-md text-xs" style={{ backgroundColor: '#844ffa' }}>Free</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:hidden flex-1 flex items-center text-center text-dark-purple text-sm font-medium">
                                <p>No more queuing at the post office! Get your items picked up from your doorstep.</p>
                            </div>
                        </div>

                        <div className="flex gap-x-4 px-6 sm:p-0 w-[100vw] flex-row-reverse sm:grid sm:grid-cols-1 sm:w-full text-center group md:px-2 lg:px-4">
                            <div className="grid sm:grid-rows-[2fr_1fr] flex-1">
                                <div className="relative my-auto">
                                    <div className="sm:p-6 group-hover:sm:opacity-0 transition duration-200 ease-in-out">
                                        <div className="flex rounded-lg truncate justify-center">
                                            <span
                                                style={{
                                                    boxSizing: 'border-box',
                                                    display: 'inline-block',
                                                    overflow: 'hidden',
                                                    width: 'initial',
                                                    height: 'initial',
                                                    background: 'none',
                                                    opacity: 1,
                                                    border: 0,
                                                    margin: 0,
                                                    padding: 0,
                                                    position: 'relative',
                                                    maxWidth: '100%'
                                                }}
                                            >
                                                <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
                                                    <img
                                                        style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }}
                                                        alt="pic"
                                                        aria-hidden="true"
                                                        src={pic2}
                                                    />
                                                </span>
                                                <img
                                                    alt="Custom Packing"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                    decoding="async"
                                                    data-nimg="intrinsic"
                                                    style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        bottom: 0,
                                                        right: 0,
                                                        boxSizing: 'border-box',
                                                        padding: 0,
                                                        border: 'none',
                                                        margin: 'auto',
                                                        display: 'block',
                                                        width: 0,
                                                        height: 0,
                                                        minWidth: '100%',
                                                        maxWidth: '100%',
                                                        minHeight: '100%',
                                                        maxHeight: '100%'
                                                    }}
                                                />
                                                <noscript>
                                                    <img
                                                        alt="Custom Packing"
                                                        srcset="
                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F0081be1875202e8d129016ca296900cf8bfd2445-500x500.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=640&amp;q=75  1x,
                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F0081be1875202e8d129016ca296900cf8bfd2445-500x500.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1080&amp;q=75 2x
                                            "
                                                        src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F0081be1875202e8d129016ca296900cf8bfd2445-500x500.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1080&amp;q=75"
                                                        decoding="async"
                                                        data-nimg="intrinsic"
                                                        style={{
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            bottom: 0,
                                                            right: 0,
                                                            boxSizing: 'border-box',
                                                            padding: 0,
                                                            border: 'none',
                                                            margin: 'auto',
                                                            display: 'block',
                                                            width: 0,
                                                            height: 0,
                                                            minWidth: '100%',
                                                            maxWidth: '100%',
                                                            minHeight: '100%',
                                                            maxHeight: '100%'
                                                        }}
                                                        loading="lazy"
                                                    />
                                                </noscript>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute hidden sm:flex flex-col justify-center w-full h-full inset-0 text-center text-dark-purple text-sm lg:text-base lg:leading-snug font-medium opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out"
                                    >
                                        <p>Get your items packed the way you want.</p>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <div className="font-semibold leading-snug lg:leading-snug text-base lg:text-lg">
                                        <p>Custom Packing</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:hidden flex-1 flex items-center text-center text-dark-purple text-sm font-medium">
                                <p>Get your items packed the way you want.</p>
                            </div>
                        </div>

                        <div className="flex gap-x-4 px-6 sm:p-0 w-[100vw] flex-row sm:grid sm:grid-cols-1 sm:w-full text-center group md:px-2 lg:px-4">
                            <div className="grid sm:grid-rows-[2fr_1fr] flex-1">
                                <div className="relative my-auto">
                                    <div className="sm:p-6 group-hover:sm:opacity-0 transition duration-200 ease-in-out">
                                        <div className="flex rounded-lg truncate justify-center">
                                            <span
                                                style={{
                                                    boxSizing: 'border-box',
                                                    display: 'inline-block',
                                                    overflow: 'hidden',
                                                    width: 'initial',
                                                    height: 'initial',
                                                    background: 'none',
                                                    opacity: 1,
                                                    border: 0,
                                                    margin: 0,
                                                    padding: 0,
                                                    position: 'relative',
                                                    maxWidth: '100%'
                                                }}
                                            >
                                                <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
                                                    <img
                                                        style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }}
                                                        alt="pic"
                                                        aria-hidden="true"
                                                        src={pic3}
                                                    />
                                                </span>
                                                <img
                                                    alt="Expert Review"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                    decoding="async"
                                                    data-nimg="intrinsic"
                                                    style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        bottom: 0,
                                                        right: 0,
                                                        boxSizing: 'border-box',
                                                        padding: 0,
                                                        border: 'none',
                                                        margin: 'auto',
                                                        display: 'block',
                                                        width: 0,
                                                        height: 0,
                                                        minWidth: '100%',
                                                        maxWidth: '100%',
                                                        minHeight: '100%',
                                                        maxHeight: '100%'
                                                    }}
                                                />
                                                <noscript>
                                                    <img
                                                        alt="Expert Review"
                                                        srcset="
                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F96e08fb86e5206b07a04886045ef78bedffb1909-500x500.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=640&amp;q=75  1x,
                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F96e08fb86e5206b07a04886045ef78bedffb1909-500x500.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1080&amp;q=75 2x
                                            "
                                                        src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F96e08fb86e5206b07a04886045ef78bedffb1909-500x500.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1080&amp;q=75"
                                                        decoding="async"
                                                        data-nimg="intrinsic"
                                                        style={{
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            bottom: 0,
                                                            right: 0,
                                                            boxSizing: 'border-box',
                                                            padding: 0,
                                                            border: 'none',
                                                            margin: 'auto',
                                                            display: 'block',
                                                            width: 0,
                                                            height: 0,
                                                            minWidth: '100%',
                                                            maxWidth: '100%',
                                                            minHeight: '100%',
                                                            maxHeight: '100%'
                                                        }}
                                                        loading="lazy"
                                                    />
                                                </noscript>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute hidden sm:flex flex-col justify-center w-full h-full inset-0 text-center text-dark-purple text-sm lg:text-base lg:leading-snug font-medium opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out"
                                    >
                                        <p>Avoid the most common customs pitfalls - get your customs documentation proof-read by our experts</p>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <div className="font-semibold leading-snug lg:leading-snug text-base lg:text-lg">
                                        <p>Expert Review</p>
                                    </div>
                                    <div className="mt-0.5 space-x-2">
                                        <div className="inline-block text-sm text-dark-purple font-semibold whitespace-nowrap"><span className="text-white px-3 py-0.5 rounded-md text-xs" style={{ backgroundColor: '#844ffa' }}>Free</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:hidden flex-1 flex items-center text-center text-dark-purple text-sm font-medium">
                                <p>Avoid the most common customs pitfalls - get your customs documentation proof-read by our experts</p>
                            </div>
                        </div>

                        <div className="flex gap-x-4 px-6 sm:p-0 w-[100vw] flex-row-reverse sm:grid sm:grid-cols-1 sm:w-full text-center group md:px-2 lg:px-4">
                            <div className="grid sm:grid-rows-[2fr_1fr] flex-1">
                                <div className="relative my-auto">
                                    <div className="sm:p-6 group-hover:sm:opacity-0 transition duration-200 ease-in-out">
                                        <div className="flex rounded-lg truncate justify-center">
                                            <span
                                                style={{
                                                    boxSizing: 'border-box',
                                                    display: 'inline-block',
                                                    overflow: 'hidden',
                                                    width: 'initial',
                                                    height: 'initial',
                                                    background: 'none',
                                                    opacity: 1,
                                                    border: 0,
                                                    margin: 0,
                                                    padding: 0,
                                                    position: 'relative',
                                                    maxWidth: '100%'
                                                }}
                                            >
                                                <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
                                                    <img
                                                        style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }}
                                                        alt="pic"
                                                        aria-hidden="true"
                                                        src={pic4}
                                                    />
                                                </span>
                                                <img
                                                    alt="Tax Ray Vision: Duties Visibility"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                    decoding="async"
                                                    data-nimg="intrinsic"
                                                    style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        bottom: 0,
                                                        right: 0,
                                                        boxSizing: 'border-box',
                                                        padding: 0,
                                                        border: 'none',
                                                        margin: 'auto',
                                                        display: 'block',
                                                        width: 0,
                                                        height: 0,
                                                        minWidth: '100%',
                                                        maxWidth: '100%',
                                                        minHeight: '100%',
                                                        maxHeight: '100%'
                                                    }}
                                                />
                                                <noscript>
                                                    <img
                                                        alt="Tax Ray Vision: Duties Visibility"
                                                        srcset="
                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Ff01f55648641d25df756b49d9063636aebe66c33-500x500.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=640&amp;q=75  1x,
                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Ff01f55648641d25df756b49d9063636aebe66c33-500x500.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1080&amp;q=75 2x
                                            "
                                                        src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Ff01f55648641d25df756b49d9063636aebe66c33-500x500.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1080&amp;q=75"
                                                        decoding="async"
                                                        data-nimg="intrinsic"
                                                        style={{
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            bottom: 0,
                                                            right: 0,
                                                            boxSizing: 'border-box',
                                                            padding: 0,
                                                            border: 'none',
                                                            margin: 'auto',
                                                            display: 'block',
                                                            width: 0,
                                                            height: 0,
                                                            minWidth: '100%',
                                                            maxWidth: '100%',
                                                            minHeight: '100%',
                                                            maxHeight: '100%'
                                                        }}
                                                        loading="lazy"
                                                    />
                                                </noscript>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute hidden sm:flex flex-col justify-center w-full h-full inset-0 text-center text-dark-purple text-sm lg:text-base lg:leading-snug font-medium opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out"
                                    >
                                        <p>Taxes don’t need to be a hidden cost. Get visibility even before ordering.</p>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <div className="font-semibold leading-snug lg:leading-snug text-base lg:text-lg">
                                        <p>Tax-Ray Vision</p>
                                    </div>
                                    <div className="mt-0.5 space-x-2">
                                        <div className="inline-block text-sm text-dark-purple font-semibold whitespace-nowrap"><span className="text-white px-3 py-0.5 rounded-md text-xs" style={{ backgroundColor: '#844ffa' }}>Free</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:hidden flex-1 flex items-center text-center text-dark-purple text-sm font-medium">
                                <p>Taxes don’t need to be a hidden cost. Get visibility even before ordering.</p>
                            </div>
                        </div>

                        <div className="flex gap-x-4 px-6 sm:p-0 w-[100vw] flex-row sm:grid sm:grid-cols-1 sm:w-full text-center group md:px-2 lg:px-4">
                            <div className="grid sm:grid-rows-[2fr_1fr] flex-1">
                                <div className="relative my-auto">
                                    <div className="sm:p-6 group-hover:sm:opacity-0 transition duration-200 ease-in-out">
                                        <div className="flex rounded-lg truncate justify-center">
                                            <span
                                                style={{
                                                    boxSizing: 'border-box',
                                                    display: 'inline-block',
                                                    overflow: 'hidden',
                                                    width: 'initial',
                                                    height: 'initial',
                                                    background: 'none',
                                                    opacity: 1,
                                                    border: 0,
                                                    margin: 0,
                                                    padding: 0,
                                                    position: 'relative',
                                                    maxWidth: '100%'
                                                }}
                                            >
                                                <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
                                                    <img
                                                        style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }}
                                                        alt="pic"
                                                        aria-hidden="true"
                                                        src={pic5}
                                                    />
                                                </span>
                                                <img
                                                    alt="Ask Me Anything"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                    decoding="async"
                                                    data-nimg="intrinsic"
                                                    style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        bottom: 0,
                                                        right: 0,
                                                        boxSizing: 'border-box',
                                                        padding: 0,
                                                        border: 'none',
                                                        margin: 'auto',
                                                        display: 'block',
                                                        width: 0,
                                                        height: 0,
                                                        minWidth: '100%',
                                                        maxWidth: '100%',
                                                        minHeight: '100%',
                                                        maxHeight: '100%'
                                                    }}
                                                />
                                                <noscript>
                                                    <img
                                                        alt="Ask Me Anything"
                                                        srcset="
                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F8c8f3fe125440d59d63018865efe32d363a22858-500x500.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=640&amp;q=75  1x,
                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F8c8f3fe125440d59d63018865efe32d363a22858-500x500.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1080&amp;q=75 2x
                                            "
                                                        src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F8c8f3fe125440d59d63018865efe32d363a22858-500x500.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1080&amp;q=75"
                                                        decoding="async"
                                                        data-nimg="intrinsic"
                                                        style={{
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            bottom: 0,
                                                            right: 0,
                                                            boxSizing: 'border-box',
                                                            padding: 0,
                                                            border: 'none',
                                                            margin: 'auto',
                                                            display: 'block',
                                                            width: 0,
                                                            height: 0,
                                                            minWidth: '100%',
                                                            maxWidth: '100%',
                                                            minHeight: '100%',
                                                            maxHeight: '100%'
                                                        }}
                                                        loading="lazy"
                                                    />
                                                </noscript>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute hidden sm:flex flex-col justify-center w-full h-full inset-0 text-center text-dark-purple text-sm lg:text-base lg:leading-snug font-medium opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out"
                                    >
                                        <p>Get responses within 1 weekday.</p>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <div className="font-semibold leading-snug lg:leading-snug text-base lg:text-lg">
                                        <p>Ask Me Anything</p>
                                    </div>
                                    <div className="mt-0.5 space-x-2">
                                        <div className="inline-block text-sm text-dark-purple font-semibold whitespace-nowrap"><span className="text-white px-3 py-0.5 rounded-md text-xs" style={{ backgroundColor: '#844ffa' }}>Free</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:hidden flex-1 flex items-center text-center text-dark-purple text-sm font-medium">
                                <p>Get responses within 1 weekday.</p>
                            </div>
                        </div>

                        <div className="flex gap-x-4 px-6 sm:p-0 w-[100vw] flex-row-reverse sm:grid sm:grid-cols-1 sm:w-full text-center group md:px-2 lg:px-4">
                            <div className="grid sm:grid-rows-[2fr_1fr] flex-1">
                                <div className="relative my-auto">
                                    <div className="sm:p-6 group-hover:sm:opacity-0 transition duration-200 ease-in-out">
                                        <div className="flex rounded-lg truncate justify-center">
                                            <span
                                                style={{
                                                    boxSizing: 'border-box',
                                                    display: 'inline-block',
                                                    overflow: 'hidden',
                                                    width: 'initial',
                                                    height: 'initial',
                                                    background: 'none',
                                                    opacity: 1,
                                                    border: 0,
                                                    margin: 0,
                                                    padding: 0,
                                                    position: 'relative',
                                                    maxWidth: '100%'
                                                }}
                                            >
                                                <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
                                                    <img
                                                        style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }}
                                                        alt="pic"
                                                        aria-hidden="true"
                                                        src={pic6}
                                                    />
                                                </span>
                                                <img
                                                    alt="Green Shipping"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                    decoding="async"
                                                    data-nimg="intrinsic"
                                                    style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        bottom: 0,
                                                        right: 0,
                                                        boxSizing: 'border-box',
                                                        padding: 0,
                                                        border: 'none',
                                                        margin: 'auto',
                                                        display: 'block',
                                                        width: 0,
                                                        height: 0,
                                                        minWidth: '100%',
                                                        maxWidth: '100%',
                                                        minHeight: '100%',
                                                        maxHeight: '100%'
                                                    }}
                                                />
                                                <noscript>
                                                    <img
                                                        alt="Green Shipping"
                                                        srcset="
                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F79b73e18f16db342bc082abea69dd4a320f6c1a5-500x500.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=640&amp;q=75  1x,
                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F79b73e18f16db342bc082abea69dd4a320f6c1a5-500x500.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1080&amp;q=75 2x
                                            "
                                                        src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F79b73e18f16db342bc082abea69dd4a320f6c1a5-500x500.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1080&amp;q=75"
                                                        decoding="async"
                                                        data-nimg="intrinsic"
                                                        style={{
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            bottom: 0,
                                                            right: 0,
                                                            boxSizing: 'border-box',
                                                            padding: 0,
                                                            border: 'none',
                                                            margin: 'auto',
                                                            display: 'block',
                                                            width: 0,
                                                            height: 0,
                                                            minWidth: '100%',
                                                            maxWidth: '100%',
                                                            minHeight: '100%',
                                                            maxHeight: '100%'
                                                        }}
                                                        loading="lazy"
                                                    />
                                                </noscript>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute hidden sm:flex flex-col justify-center w-full h-full inset-0 text-center text-dark-purple text-sm lg:text-base lg:leading-snug font-medium opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out"
                                    >
                                        <p>Offset carbon with one click.</p>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <div className="font-semibold leading-snug lg:leading-snug text-base lg:text-lg">
                                        <p>Green Shipping</p>
                                    </div>
                                    <div className="mt-0.5 space-x-2">
                                        <div className="inline-block text-sm text-dark-purple font-semibold whitespace-nowrap"><span className="text-white px-3 py-0.5 rounded-md text-xs" style={{ backgroundColor: '#844ffa' }}>Coming Soon</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:hidden flex-1 flex items-center text-center text-dark-purple text-sm font-medium">
                                <p>Offset carbon with one click.</p>
                            </div>
                        </div>

                        <div className="flex gap-x-4 px-6 sm:p-0 w-[100vw] flex-row sm:grid sm:grid-cols-1 sm:w-full text-center group md:px-2 lg:px-4">
                            <div className="grid sm:grid-rows-[2fr_1fr] flex-1">
                                <div className="relative my-auto">
                                    <div className="sm:p-6 group-hover:sm:opacity-0 transition duration-200 ease-in-out">
                                        <div className="flex rounded-lg truncate justify-center">
                                            <span
                                                style={{
                                                    boxSizing: 'border-box',
                                                    display: 'inline-block',
                                                    overflow: 'hidden',
                                                    width: 'initial',
                                                    height: 'initial',
                                                    background: 'none',
                                                    opacity: 1,
                                                    border: 0,
                                                    margin: 0,
                                                    padding: 0,
                                                    position: 'relative',
                                                    maxWidth: '100%'
                                                }}
                                            >
                                                <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
                                                    <img
                                                        style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }}
                                                        alt="pic"
                                                        aria-hidden="true"
                                                        src={pic7}
                                                    />
                                                </span>
                                                <img
                                                    alt="Keep Calm Insurance"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                    decoding="async"
                                                    data-nimg="intrinsic"
                                                    style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        bottom: 0,
                                                        right: 0,
                                                        boxSizing: 'border-box',
                                                        padding: 0,
                                                        border: 'none',
                                                        margin: 'auto',
                                                        display: 'block',
                                                        width: 0,
                                                        height: 0,
                                                        minWidth: '100%',
                                                        maxWidth: '100%',
                                                        minHeight: '100%',
                                                        maxHeight: '100%'
                                                    }}
                                                />
                                                <noscript>
                                                    <img
                                                        alt="Keep Calm Insurance"
                                                        srcset="
                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F06251fb211f09285038c9c1aba31d15d9cb7628a-500x500.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=640&amp;q=75  1x,
                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F06251fb211f09285038c9c1aba31d15d9cb7628a-500x500.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1080&amp;q=75 2x
                                            "
                                                        src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F06251fb211f09285038c9c1aba31d15d9cb7628a-500x500.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1080&amp;q=75"
                                                        decoding="async"
                                                        data-nimg="intrinsic"
                                                        style={{
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            bottom: 0,
                                                            right: 0,
                                                            boxSizing: 'border-box',
                                                            padding: 0,
                                                            border: 'none',
                                                            margin: 'auto',
                                                            display: 'block',
                                                            width: 0,
                                                            height: 0,
                                                            minWidth: '100%',
                                                            maxWidth: '100%',
                                                            minHeight: '100%',
                                                            maxHeight: '100%'
                                                        }}
                                                        loading="lazy"
                                                    />
                                                </noscript>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute hidden sm:flex flex-col justify-center w-full h-full inset-0 text-center text-dark-purple text-sm lg:text-base lg:leading-snug font-medium opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out"
                                    >
                                        <p>Get protected from loss, damage and theft.</p>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <div className="font-semibold leading-snug lg:leading-snug text-base lg:text-lg">
                                        <p>
                                            Keep-Calm

                                            <br />
                                            Insurance
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:hidden flex-1 flex items-center text-center text-dark-purple text-sm font-medium">
                                <p>Get protected from loss, damage and theft.</p>
                            </div>
                        </div>

                        <div className="flex gap-x-4 px-6 sm:p-0 w-[100vw] flex-row-reverse sm:grid sm:grid-cols-1 sm:w-full text-center group md:px-2 lg:px-4">
                            <div className="grid sm:grid-rows-[2fr_1fr] flex-1">
                                <div className="relative my-auto">
                                    <div className="sm:p-6 group-hover:sm:opacity-0 transition duration-200 ease-in-out">
                                        <div className="flex rounded-lg truncate justify-center">
                                            <span
                                                style={{
                                                    boxSizing: 'border-box',
                                                    display: 'inline-block',
                                                    overflow: 'hidden',
                                                    width: 'initial',
                                                    height: 'initial',
                                                    background: 'none',
                                                    opacity: 1,
                                                    border: 0,
                                                    margin: 0,
                                                    padding: 0,
                                                    position: 'relative',
                                                    maxWidth: '100%'
                                                }}
                                            >
                                                <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
                                                    <img
                                                        style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }}
                                                        alt="pic"
                                                        aria-hidden="true"
                                                        src={pic8}
                                                    />
                                                </span>
                                                <img
                                                    alt="Free Real-Time Parcel Tracking"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                    decoding="async"
                                                    data-nimg="intrinsic"
                                                    style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        bottom: 0,
                                                        right: 0,
                                                        boxSizing: 'border-box',
                                                        padding: 0,
                                                        border: 'none',
                                                        margin: 'auto',
                                                        display: 'block',
                                                        width: 0,
                                                        height: 0,
                                                        minWidth: '100%',
                                                        maxWidth: '100%',
                                                        minHeight: '100%',
                                                        maxHeight: '100%'
                                                    }}
                                                />
                                                <noscript>
                                                    <img
                                                        alt="Free Real-Time Parcel Tracking"
                                                        srcset="
                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F24dc742579f29b8d8484abc15927ca6c4335b3da-500x500.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=640&amp;q=75  1x,
                                                /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F24dc742579f29b8d8484abc15927ca6c4335b3da-500x500.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1080&amp;q=75 2x
                                            "
                                                        src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F24dc742579f29b8d8484abc15927ca6c4335b3da-500x500.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1080&amp;q=75"
                                                        decoding="async"
                                                        data-nimg="intrinsic"
                                                        style={{
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            bottom: 0,
                                                            right: 0,
                                                            boxSizing: 'border-box',
                                                            padding: 0,
                                                            border: 'none',
                                                            margin: 'auto',
                                                            display: 'block',
                                                            width: 0,
                                                            height: 0,
                                                            minWidth: '100%',
                                                            maxWidth: '100%',
                                                            minHeight: '100%',
                                                            maxHeight: '100%'
                                                        }}
                                                        loading="lazy"
                                                    />
                                                </noscript>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute hidden sm:flex flex-col justify-center w-full h-full inset-0 text-center text-dark-purple text-sm lg:text-base lg:leading-snug font-medium opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out"
                                    >
                                        <p>Know your parcel’s location at every point</p>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <div className="font-semibold leading-snug lg:leading-snug text-base lg:text-lg">
                                        <p>
                                            Real-Time
                                            <br />
                                            Parcel Tracking
                                        </p>
                                    </div>
                                    <div className="mt-0.5 space-x-2">
                                        <div className="inline-block text-sm text-dark-purple font-semibold whitespace-nowrap"><span className="text-white px-3 py-0.5 rounded-md text-xs" style={{ backgroundColor: '#844ffa' }}>Free</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:hidden flex-1 flex items-center text-center text-dark-purple text-sm font-medium">
                                <p>Know your parcel’s location at every point</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;