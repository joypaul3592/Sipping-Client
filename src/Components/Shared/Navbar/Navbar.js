import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';

const Navbar = () => {

    // For Menu
    const ref = useRef()

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [countries, setCountries] = useState(false)
    const [features, setFeatures] = useState(false)
    const [price, setPrice] = useState(false)
    const [learn, setLearn] = useState(false)
    const [scroll, setScroll] = useState(false)



    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
                setIsMenuOpen(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isMenuOpen])



    // Navbar Style
    function resizeHeaderOnScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop;
        const shrinkOn = 10;

        if (distanceY > shrinkOn) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    window.addEventListener('scroll', resizeHeaderOnScroll);



    return (
        <div className=' bg-white z-50 sticky top-0  '>
            <nav className="max-w-7xl mx-auto px-4 md:px-3 lg:px-6">
                <div className={`${scroll ? ' h-10 md:h-14 xl:h-26' : ' h-16 md:h-18 xl:h-20'}   flex justify-between items-center md:justify-end md:flex-row transition-all duration-300 ease-in-out `}>
                    <div className={`${scroll ? 'w-28 lg:w-40 pr-2' : 'w-40 lg:w-52 pr-2'} transition-all duration-300 ease-in-out`}>
                        <NavLink to={'/'}>
                            <svg viewBox="0 0 276 60" fill="none" className="w-full transition-all duration-300 ease-in-out">
                                <path
                                    d="M102.418 38.795C102.458 39.5629 102.75 40.2952 103.247 40.8741C103.516 41.1439 103.84 41.3517 104.195 41.4836C104.55 41.6155 104.928 41.6683 105.305 41.6385C105.962 41.6625 106.612 41.5044 107.187 41.1813C107.674 40.8862 108.091 40.4863 108.41 40.0096C108.745 39.5087 108.998 38.9563 109.161 38.3735C109.331 37.7509 109.465 37.1187 109.561 36.4802L111.549 22.2982H113.656L111.549 37.3589C111.442 38.0941 111.248 38.8137 110.973 39.5023C110.683 40.2359 110.267 40.911 109.744 41.4956C109.139 42.1802 108.395 42.7217 107.562 43.0821C106.73 43.4425 105.83 43.6131 104.926 43.5819C103.712 43.6441 102.518 43.2527 101.569 42.4816C101.135 42.0691 100.793 41.5667 100.567 41.0084C100.34 40.45 100.234 39.8488 100.255 39.2451L102.418 38.795Z"
                                    fill="#844FFA"
                                ></path>
                                <path
                                    d="M137.417 35.3084C137.273 36.2443 137.037 37.1634 136.715 38.0519C136.375 39.0257 135.869 39.9305 135.219 40.724C134.507 41.5764 133.629 42.2697 132.641 42.7602C131.436 43.3355 130.116 43.6168 128.785 43.5818C127.523 43.646 126.267 43.3674 125.147 42.7745C124.313 42.288 123.625 41.5789 123.159 40.724C122.714 39.8987 122.453 38.9841 122.393 38.0448C122.324 37.1302 122.348 36.2109 122.464 35.3013L124.318 22.2982H126.425L124.606 35.0726C124.477 35.9214 124.458 36.7837 124.55 37.6375C124.607 38.26 124.766 38.8685 125.02 39.438C125.237 39.8874 125.549 40.2826 125.933 40.5954C126.266 40.8679 126.635 41.0916 127.029 41.2598C127.38 41.4098 127.748 41.513 128.125 41.567C128.436 41.6126 128.751 41.6365 129.066 41.6385C129.581 41.6228 130.094 41.5582 130.597 41.4456C131.283 41.3003 131.931 41.0107 132.5 40.5954C133.213 40.0762 133.809 39.4089 134.249 38.6378C134.852 37.5353 135.23 36.3202 135.359 35.0655L137.15 22.291H139.222L137.417 35.3084Z"
                                    fill="#844FFA"
                                ></path>
                                <path
                                    d="M159.303 25.7205C158.6 24.3701 157.385 23.6985 155.636 23.6985C155.088 23.6984 154.542 23.7729 154.014 23.92C153.485 24.0608 152.982 24.2876 152.525 24.5916C152.066 24.9031 151.671 25.3008 151.359 25.7633C151.021 26.2651 150.811 26.8445 150.748 27.4494C150.639 28.0381 150.71 28.6463 150.951 29.1927C151.193 29.6596 151.545 30.0575 151.977 30.3501C152.466 30.6821 152.994 30.9486 153.55 31.1432L155.39 31.8005C156.015 32.0291 156.62 32.272 157.209 32.5149C157.774 32.7787 158.289 33.1387 158.734 33.5795C159.179 34.0255 159.512 34.5746 159.703 35.1799C159.92 35.9462 159.958 36.7535 159.815 37.5376C159.692 38.4451 159.368 39.3124 158.867 40.0739C158.382 40.8102 157.767 41.4495 157.055 41.96C156.342 42.4672 155.559 42.8622 154.73 43.1317C153.937 43.399 153.108 43.5388 152.272 43.5461C151.083 43.56 149.905 43.3165 148.816 42.8317C147.745 42.3422 146.856 41.5158 146.281 40.474L148.353 39.0951C148.681 39.8604 149.236 40.5023 149.94 40.9312C150.757 41.4233 151.695 41.6709 152.644 41.6457C153.182 41.6414 153.717 41.5571 154.231 41.3956C154.763 41.2364 155.268 40.9955 155.728 40.6812C156.188 40.3584 156.587 39.9543 156.907 39.488C157.237 39.0085 157.453 38.4585 157.54 37.8805C157.659 37.3133 157.607 36.7224 157.388 36.1864C157.17 35.6504 156.797 35.1946 156.317 34.8798C155.833 34.5362 155.304 34.2644 154.744 34.0724L152.918 33.4294C152.293 33.208 151.689 32.965 151.106 32.715C150.548 32.4422 150.04 32.075 149.603 31.629C149.16 31.191 148.829 30.6487 148.641 30.0501C148.42 29.2747 148.379 28.4579 148.521 27.6638C148.634 26.7347 148.95 25.8433 149.448 25.056C149.909 24.3332 150.5 23.7054 151.19 23.2056C151.872 22.7242 152.63 22.3664 153.431 22.1482C154.237 21.9138 155.071 21.7936 155.91 21.791C156.957 21.7716 157.997 21.961 158.972 22.3482C159.919 22.761 160.734 23.434 161.325 24.2915L159.303 25.7205Z"
                                    fill="#844FFA"
                                ></path>
                                <path d="M175.59 43.046H173.483L176.075 24.2344H169.269L169.557 22.2982H185.262L184.974 24.2344H178.147L175.59 43.046Z" fill="#844FFA"></path>
                                <path
                                    d="M202.884 27.3708C202.557 26.8845 202.084 26.5186 201.536 26.3277C200.981 26.113 200.394 25.9994 199.801 25.9919C199.454 25.9934 199.108 26.0317 198.768 26.1063C198.411 26.1803 198.066 26.3054 197.743 26.4778C197.43 26.6409 197.151 26.8641 196.921 27.1351C196.69 27.4189 196.542 27.7629 196.493 28.1282C196.457 28.328 196.46 28.5333 196.502 28.7319C196.544 28.9306 196.624 29.1188 196.739 29.2856C196.988 29.6162 197.314 29.8788 197.687 30.0501C198.15 30.2749 198.632 30.4567 199.127 30.593C199.675 30.7502 200.229 30.9217 200.784 31.1217C201.343 31.3223 201.887 31.561 202.414 31.8362C202.925 32.0929 203.387 32.4414 203.776 32.865C204.181 33.3137 204.473 33.8555 204.626 34.444C204.815 35.1961 204.841 35.981 204.703 36.7445C204.577 37.8167 204.217 38.8466 203.65 39.7595C203.122 40.6012 202.437 41.3294 201.634 41.9029C200.82 42.4764 199.915 42.9018 198.958 43.1603C197.957 43.4355 196.925 43.5748 195.889 43.5747C194.661 43.5909 193.441 43.3828 192.286 42.9603C191.182 42.526 190.188 41.8447 189.378 40.9669L193.093 37.3947C193.469 38.0041 194.001 38.498 194.632 38.8236C195.282 39.1689 196.005 39.3456 196.739 39.338C197.117 39.3364 197.493 39.2933 197.862 39.2094C198.232 39.1236 198.588 38.9891 198.923 38.8093C199.24 38.6463 199.52 38.4175 199.745 38.1377C199.969 37.8609 200.114 37.5276 200.166 37.1732C200.224 36.9032 200.207 36.6222 200.118 36.3613C200.029 36.1003 199.87 35.8695 199.66 35.6943C199.162 35.2939 198.602 34.9801 198.003 34.7655C197.301 34.5154 196.598 34.2582 195.812 34.0081C195.051 33.7631 194.327 33.4171 193.655 32.9793C193.007 32.5571 192.477 31.9713 192.117 31.2789C191.715 30.4132 191.597 29.4389 191.78 28.4997C191.909 27.4548 192.269 26.4532 192.834 25.5704C193.368 24.7294 194.057 24.0016 194.863 23.4271C195.684 22.8575 196.59 22.428 197.546 22.1553C198.51 21.8716 199.507 21.7273 200.51 21.7266C201.618 21.7222 202.719 21.8909 203.776 22.2268C204.788 22.5512 205.705 23.1256 206.445 23.8986L202.884 27.3708Z"
                                    fill="#844FFA"
                                ></path>
                                <path d="M215.793 22.2982H220.282L219.221 30.0072H227.944L229.012 22.2697H233.507L230.655 42.9889H226.16L227.397 34.0225H218.673L217.43 42.9889H212.942L215.793 22.2982Z" fill="#844FFA"></path>
                                <path d="M243.355 22.2982H247.85L244.998 43.0174H240.503L243.355 22.2982Z" fill="#844FFA"></path>
                                <path
                                    d="M257.704 22.2982H265.275C266.268 22.2927 267.259 22.3908 268.232 22.5911C269.065 22.7484 269.855 23.0845 270.55 23.5771C271.189 24.0709 271.676 24.7401 271.955 25.5061C272.272 26.4947 272.34 27.5489 272.151 28.5711C272.029 29.6458 271.687 30.6825 271.147 31.6147C270.683 32.4038 270.049 33.0756 269.293 33.5795C268.519 34.0855 267.659 34.4394 266.757 34.6226C265.759 34.8337 264.742 34.9366 263.723 34.9298H260.436L259.34 43.0174H254.852L257.704 22.2982ZM260.984 31.0931H263.983C264.379 31.0924 264.774 31.0517 265.163 30.9717C265.536 30.8969 265.896 30.7644 266.23 30.5787C266.559 30.3891 266.842 30.1281 267.059 29.8143C267.306 29.4548 267.456 29.0362 267.495 28.5997C267.587 28.1665 267.52 27.7137 267.305 27.328C267.099 27.0135 266.809 26.7656 266.469 26.6135C266.089 26.4299 265.68 26.3162 265.261 26.2777C264.827 26.2297 264.391 26.2059 263.955 26.2063H261.644L260.984 31.0931Z"
                                    fill="#844FFA"
                                ></path>
                                <path d="M3.74365 6.51587C3.74365 6.51587 4.97279 36.6873 30.8337 43.5247L17.2922 52.0982C17.2922 52.0982 52.614 61.9076 81.2984 29.2927H52.614L3.74365 6.51587Z" fill="url(#paint0_linear_69_1357)"></path>
                                <path d="M56.8423 26.6349H82.5136C82.5136 26.6349 87.6057 18.9903 89.7269 6.51587L56.8423 26.6349Z" fill="url(#paint1_linear_69_1357)" stroke="url(#paint2_linear_69_1357)" stroke-miterlimit="10"></path>
                                <path d="M71.5566 32.6721C71.9292 32.6721 72.2865 32.5215 72.5499 32.2536C72.8134 31.9856 72.9614 31.6221 72.9614 31.2432H71.5566V32.6721Z" fill="white"></path>
                                <defs>
                                    <linearGradient id="paint0_linear_69_1357" x1="3.74365" y1="30" x2="81.2984" y2="30" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#A25CF6"></stop>
                                        <stop offset="1" stop-color="#5C65F7"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_69_1357" x1="2718.19" y1="473.278" x2="4257.85" y2="473.278" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#A25CF6"></stop>
                                        <stop offset="1" stop-color="#5C65F7"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_69_1357" x1="2659" y1="468.249" x2="4280.21" y2="468.249" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#A25CF6"></stop>
                                        <stop offset="1" stop-color="#5C65F7"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </NavLink>
                    </div>
                    <div className="flex h-full items-center space-x-2 sm:space-x-6 md:hidden">
                        <NavLink
                            to={'shipNow'}
                            className={({ isActive }) => (`py-2 px-5 rounded-full border border-[#844FFA] text-white bg-[#844FFA] hover:bg-[#6621DF]  text-[13px]   ${isActive ? 'text-white' : 'text-white'}`)}
                        >Ship Now
                        </NavLink>
                        {/* cancle button */}
                        <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 md:mr-4 rounded-md md:hidden text-dark-purple">
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    {/* website */}
                    <div className="hidden ml-auto md:block md:self-stretch basis-4/5 md:flex-none ">
                        <div className="h-full flex md:gap-x-6 lg:gap-x-8 xl:gap-x-10 justify-between items-center relative" >
                            <NavLink
                                onClick={() => setCountries(!countries)}
                                to={'countries'}
                                className={({ isActive }) => (`  text-[13px] font-semibold ${isActive ? 'text-purple-500' : 'text-black'}`)}
                            >Countries
                            </NavLink>

                            <NavLink
                                onClick={() => setFeatures(!features)}
                                to={'features'}
                                className={({ isActive }) => (` rounded-md text-[13px] font-semibold  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                            >Features
                            </NavLink>

                            <NavLink
                                onClick={() => setPrice(!price)}
                                to={'prices'}
                                className={({ isActive }) => (` rounded-md text-[13px] font-semibold  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                            >Prices
                            </NavLink>

                            <NavLink
                                onClick={() => setLearn(!learn)}
                                to={'learn'}
                                className={({ isActive }) => (` rounded-md text-[13px] font-semibold  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                            >Learn
                            </NavLink>

                            <NavLink
                                to={'dashboard'}
                                className={({ isActive }) => (`rounded-md text-[13px] font-semibold  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                            >Dashboard
                            </NavLink>

                            <NavLink
                                to={'shipnow'}
                                className={({ isActive }) => (`py-1 px-5 rounded-full border font-semibold border-[#844FFA] hover:text-white hover:bg-[#844FFA]  text-[13px]   ${isActive ? 'text-[#844FFA]' : 'text-black'}`)}
                            >Ship Now
                            </NavLink>

                            <NavLink
                                to={'signin'}
                                className={({ isActive }) => (`rounded-md text-[13px] font-semibold ${isActive ? 'text-purple-500' : 'text-black'}`)}
                            >Sign In
                            </NavLink>
                        </div>

                        {/* Mega Menu for Countries */}
                        <OutsideClickHandler
                            onOutsideClick={() => {
                                setCountries(false)
                            }}
                        >
                            <div className={`absolute w-screen   border-y border-gray-200 left-0 p-4 bg-white h-[27rem] shadow-sm ${countries ? 'block' : 'hidden'}`}>

                                {/* cancle button */}
                                <button onClick={() => setCountries(false)}>
                                    <svg className="h-6 w-6  text-gray-800 cursor-pointer  hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>

                            </div>

                            <div className={`absolute  pt-8 ${countries ? 'block' : 'hidden'}`}>
                                <div className=' flex md:gap-x-6 lg:gap-x-8 xl:gap-x-16'>
                                    <div >
                                        <h1 className=' text-[13px]
                                     font-semibold text-[#595959] mb-3'>Asia</h1>
                                        <nav className=' flex flex-col gap-3'>
                                            <NavLink
                                                to={'hongkong'}
                                                className={({ isActive }) => (`rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa] ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                            >Hong Kong
                                            </NavLink>

                                            <NavLink
                                                to={'japan'}
                                                className={({ isActive }) => (`rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                            >Japan
                                            </NavLink>

                                            <NavLink
                                                to={'malaysia'}
                                                className={({ isActive }) => (`rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                            >Malaysia
                                            </NavLink>

                                            <NavLink
                                                to={'southkorea'}
                                                className={({ isActive }) => (`rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                            >South korea
                                            </NavLink>
                                        </nav>
                                    </div>
                                    <div>
                                        <h1 className=' text-[13px]
                                     font-semibold text-[#595959] mb-3'>Europe</h1>
                                        <nav className=' flex flex-col gap-3'>

                                            <NavLink
                                                to={'belgium'}
                                                className={({ isActive }) => (`rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                            >Belgium
                                            </NavLink>

                                            <NavLink
                                                to={'France'}
                                                className={({ isActive }) => (`rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                            >France
                                            </NavLink>

                                            <NavLink
                                                to={'germany'}
                                                className={({ isActive }) => (`rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                            >Germany
                                            </NavLink>

                                            <NavLink
                                                to={'greece'}
                                                className={({ isActive }) => (`rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                            >Greece
                                            </NavLink>


                                            <NavLink
                                                to={'italy'}
                                                className={({ isActive }) => (`rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                            >Italy
                                            </NavLink>

                                            <NavLink
                                                to={'netherlands'}
                                                className={({ isActive }) => (`rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                            >Netherlands
                                            </NavLink>

                                            <NavLink
                                                to={'portugal'}
                                                className={({ isActive }) => (`rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                            >Portugal
                                            </NavLink>

                                            <NavLink
                                                to={'spain'}
                                                className={({ isActive }) => (`rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                            >Spain
                                            </NavLink>

                                            <NavLink
                                                to={'sweden'}
                                                className={({ isActive }) => (`rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                            >Sweden
                                            </NavLink>

                                            <NavLink
                                                to={'uk'}
                                                className={({ isActive }) => (`rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]   ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                            >Uk
                                            </NavLink>
                                        </nav>
                                    </div>
                                    <div>
                                        <h1 className=' text-[13px]
                                      font-semibold text-[#595959] mb-3'>N. America</h1>
                                        <nav className=' flex flex-col gap-3'>
                                            <NavLink
                                                to={'canada'}
                                                className={({ isActive }) => (`rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                            >Canada
                                            </NavLink>
                                            <NavLink
                                                to={'usa'}
                                                className={({ isActive }) => (`rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                            >USA
                                            </NavLink>
                                        </nav>
                                    </div>
                                    <div>
                                        <h1 className=' text-[13px]
                                      font-semibold text-[#595959] mb-3'>Oceania</h1>
                                        <nav className=' flex flex-col gap-3'>
                                            <NavLink
                                                to={'australia'}
                                                className={({ isActive }) => (`rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                            >Australia
                                            </NavLink>
                                            <NavLink
                                                to={'newzealand'}
                                                className={({ isActive }) => (`rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                            >Newzealand
                                            </NavLink>

                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </OutsideClickHandler>


                        {/* Mega Menu for features */}
                        <OutsideClickHandler
                            onOutsideClick={() => {
                                setFeatures(false)
                            }}
                        >
                            <div className={`absolute w-screen   border-y border-gray-200 left-0 p-4 bg-white h-[14rem] shadow-sm ${features ? 'block' : 'hidden'}`}>
                                {/* cancle button */}
                                <button onClick={() => setFeatures(false)}>
                                    <svg className="h-6 w-6  text-gray-800 cursor-pointer  hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className={`absolute pl-24 xl:pl-[6.4rem]  pt-8 ${features ? 'block' : 'hidden'}`}>
                                <div >
                                    <div >
                                        <nav className=' flex flex-col gap-3'>
                                            <NavLink
                                                to={'packing'}
                                                className={({ isActive }) => (`rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa] ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                            >Packing
                                            </NavLink>

                                            <NavLink
                                                to={'taxray'}
                                                className={({ isActive }) => (`rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                            >Tax-Ray Vision
                                            </NavLink>

                                            <NavLink
                                                to={'dangerousgoods'}
                                                className={({ isActive }) => (`rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                            >Dangerous Goods
                                            </NavLink>

                                            <NavLink
                                                to={'relocation'}
                                                className={({ isActive }) => (`rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                            >Relocation
                                            </NavLink>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </OutsideClickHandler>

                        {/* Mega Menu for Price */}
                        <OutsideClickHandler
                            onOutsideClick={() => {
                                setPrice(false)
                            }}
                        >
                            <div className={`absolute w-screen   border-y border-gray-200 left-0 p-4 bg-white h-[10rem] shadow-sm ${price ? 'block' : 'hidden'}`}>
                                {/* cancle button */}
                                <button onClick={() => setPrice(false)}>
                                    <svg className="h-6 w-6  text-gray-800 cursor-pointer  hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className={`absolute pl-[11.8rem] xl:pl-[12.7rem]  pt-8 ${price ? 'block' : 'hidden'}`}>
                                <div >
                                    <div >
                                        <nav className=' flex flex-col gap-3'>
                                            <NavLink
                                                to={'ourPrices'}
                                                className={({ isActive }) => (`rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa] ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                            >Our Prices
                                            </NavLink>

                                            <NavLink
                                                to={'/rateCalculator'}
                                                className={({ isActive }) => (`rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                            >Rate Calculator
                                            </NavLink>

                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </OutsideClickHandler>

                        {/* Mega Menu for Learn */}
                        <OutsideClickHandler
                            onOutsideClick={() => {
                                setLearn(false)
                            }}
                        >
                            <div className={`absolute w-screen   border-y border-gray-200 left-0 p-4 bg-white h-[10rem] shadow-sm ${learn ? 'block' : 'hidden'}`}>
                                {/* cancle button */}
                                <button onClick={() => setLearn(false)}>
                                    <svg className="h-6 w-6  text-gray-800 cursor-pointer  hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className={`absolute pl-[16rem] xl:pl-[17.7rem]  pt-8 ${learn ? 'block' : 'hidden'}`}>
                                <div >
                                    <div >
                                        <nav className=' flex flex-col gap-3'>
                                            <NavLink
                                                to={'blog'}
                                                className={({ isActive }) => (`rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa] ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                            >Blog
                                            </NavLink>

                                            <NavLink
                                                to={'faq'}
                                                className={({ isActive }) => (`rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                            >FAQ
                                            </NavLink>

                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </OutsideClickHandler>
                    </div>




                    {/* Mobile */}
                    <div className={`w-full absolute md:hidden transition-all duration-300 ease-in-out top-0 bottom-0 left-0 right-0 bg-black opacity-40 z-10 ${isMenuOpen ? 'block' : 'hidden'}`}></div>
                    <div ref={ref} className={`${isMenuOpen ? 'left-0 bottom-0 top-0 z-20 ' : '-left-96 bottom-0 top-0'} transition-all duration-300 ease-in-out fixed md:hidden  flex flex-col w-3/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto`}>

                        <div className="h-full  flex flex-col md:gap-x-6 lg:gap-x-8 xl:gap-x-10  items-start pl-1" >

                            <div className=' flex justify-end items-end w-full'>
                                <button onClick={() => setIsMenuOpen(false)}>
                                    <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>

                            <NavLink
                                to={'dashboard'}
                                className={({ isActive }) => (`py-2 px-8 rounded-full border border-[#844FFA] text-white font-semibold bg-[#844FFA]  hover:bg-[#6621DF]  text-[14px]   ${isActive ? 'text-white' : 'text-white'}`)}
                            >Ship Now
                            </NavLink>

                            <div className=' flex flex-col gap-4 mt-8'>
                                <NavLink
                                    to={'getaQuote'}
                                    className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                >Get A Quote
                                </NavLink>

                                <NavLink
                                    to={'register'}
                                    className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                >Register
                                </NavLink>

                                <NavLink
                                    to={'signIn'}
                                    className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                >Sign In
                                </NavLink>
                            </div>


                            <div className='w-full mt-14'>
                                <h1 className=' text-[14px]
                                     font-semibold text-[#595959] mb-3'>Countries</h1>
                                <hr className=' mb-7' />
                                <div>
                                    <h1 className=' text-[14px]
                                     font-semibold text-[#595959] mb-4'>Asia</h1>
                                    <nav className=' flex flex-col gap-4'>
                                        <NavLink
                                            to={'hongkong'}
                                            className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa] ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >Hong Kong
                                        </NavLink>

                                        <NavLink
                                            to={'japan'}
                                            className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >Japan
                                        </NavLink>

                                        <NavLink
                                            to={'malaysia'}
                                            className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >Malaysia
                                        </NavLink>

                                        <NavLink
                                            to={'southkorea'}
                                            className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >South korea
                                        </NavLink>
                                    </nav>
                                </div>
                                <div className='  mt-7'>
                                    <h1 className=' text-[14px]
                                     font-semibold text-[#595959] mb-4'>Europe</h1>
                                    <nav className=' flex flex-col gap-4'>

                                        <NavLink
                                            to={'belgium'}
                                            className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >Belgium
                                        </NavLink>

                                        <NavLink
                                            to={'France'}
                                            className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >France
                                        </NavLink>

                                        <NavLink
                                            to={'germany'}
                                            className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >Germany
                                        </NavLink>

                                        <NavLink
                                            to={'greece'}
                                            className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >Greece
                                        </NavLink>


                                        <NavLink
                                            to={'italy'}
                                            className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >Italy
                                        </NavLink>

                                        <NavLink
                                            to={'netherlands'}
                                            className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >Netherlands
                                        </NavLink>

                                        <NavLink
                                            to={'portugal'}
                                            className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >Portugal
                                        </NavLink>

                                        <NavLink
                                            to={'spain'}
                                            className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >Spain
                                        </NavLink>

                                        <NavLink
                                            to={'sweden'}
                                            className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >Sweden
                                        </NavLink>

                                        <NavLink
                                            to={'uk'}
                                            className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]   ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >Uk
                                        </NavLink>
                                    </nav>
                                </div>
                                <div className='  mt-7'>
                                    <h1 className=' text-[13px]
                                      font-semibold text-[#595959] mb-4'>N. America</h1>
                                    <nav className=' flex flex-col gap-4'>
                                        <NavLink
                                            to={'canada'}
                                            className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >Canada
                                        </NavLink>
                                        <NavLink
                                            to={'usa'}
                                            className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >USA
                                        </NavLink>
                                    </nav>
                                </div>
                                <div className='  mt-7'>
                                    <h1 className=' text-[13px]
                                      font-semibold text-[#595959] mb-4'>Oceania</h1>
                                    <nav className=' flex flex-col gap-4'>
                                        <NavLink
                                            to={'australia'}
                                            className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >Australia
                                        </NavLink>
                                        <NavLink
                                            to={'newzealand'}
                                            className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >Newzealand
                                        </NavLink>

                                    </nav>
                                </div>
                            </div>

                            <div className='w-full mt-14'>
                                <h1 className=' text-[14px]
                                     font-semibold text-[#595959] mb-4'>Features</h1>
                                <hr className=' mb-7' />
                                <div >
                                    <nav className=' flex flex-col gap-4'>
                                        <NavLink
                                            to={'packing'}
                                            className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa] ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >Packing
                                        </NavLink>

                                        <NavLink
                                            to={'taxray'}
                                            className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >Tax-Ray Vision
                                        </NavLink>

                                        <NavLink
                                            to={'dangerousgoods'}
                                            className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >Dangerous Goods
                                        </NavLink>

                                        <NavLink
                                            to={'relocation'}
                                            className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >Relocation
                                        </NavLink>
                                    </nav>
                                </div>
                            </div>

                            <div className='w-full mt-14'>
                                <h1 className=' text-[14px]
                                     font-semibold text-[#595959] mb-4'>Prices</h1>
                                <hr className=' mb-7' />
                                <div >
                                    <nav className=' flex flex-col gap-4'>
                                        <NavLink
                                            to={'ourPrices'}
                                            className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa] ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >Our Prices
                                        </NavLink>

                                        <NavLink
                                            to={'rateCalculator'}
                                            className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >Rate Calculator
                                        </NavLink>

                                    </nav>
                                </div>
                            </div>

                            <div className='w-full mt-14 pb-20'>
                                <h1 className=' text-[14px]
                                     font-semibold text-[#595959] mb-4'>Learn</h1>
                                <hr className=' mb-7' />
                                <div >
                                    <nav className=' flex flex-col gap-4'>
                                        <NavLink
                                            to={'blog'}
                                            className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa] ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >Blog
                                        </NavLink>

                                        <NavLink
                                            to={'faq'}
                                            className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >FAQ
                                        </NavLink>

                                    </nav>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;