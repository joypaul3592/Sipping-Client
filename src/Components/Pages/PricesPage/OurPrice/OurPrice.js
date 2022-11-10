import Price1 from '../../../../Assect/Price.png'
import Price2 from '../../../../Assect/Price2.png'
import Price3 from '../../../../Assect/Price3.png'
import GetStart from '../../../../Assect/GetStart.png'
import rating1 from '../../../../Assect/rating1.png'
import rating2 from '../../../../Assect/rating2.png'
import rating3 from '../../../../Assect/rating3.png'
import { AiFillStar } from "react-icons/ai";
import { Carousel } from '3d-react-carousal';


const OurPrice = () => {

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



    return (
        <div>
            <main>
                <div className="bg-[#E5E5E5]">
                    <div>
                        <div
                            style={{ backgroundImage: 'url(https://cdn.sanity.io/images/bm4duuk0/production/4b3e132019965a2a6d3a1fda07efb0bd05f66953-1440x758.png?fit=max&amp;auto=format)', backgroundPosition: 'center' }}
                            className="relative h-[280px] bg-cover bg-left sm:bg-center shadow sm:h-[50vh] sm:max-h-[540px] lg:h-[60vh] 2xl:max-h-[45vh]"
                        >
                            <div className="absolute inset-0 opacity-75 md:opacity-50" style={{ background: 'linear-gradient(to right, #ffc3a7, #5c65f7)' }}></div>
                            <div className="bg-cover bg-center pt-12 md:pt-16 text-center sm:text-left h-full">
                                <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                                    <div className="w-full sm:max-w-[61.8%] xl:max-w-[50%]">
                                        <div className="hidden md:block md:text-4xl xl:text-4.5xl leading-snug xl:leading-tight whitespace-nowrap text-white md:text-inherit font-bold">
                                            <h1>
                                                <span style={{ color: '#ffffff' }}>Shipping Rates</span>
                                            </h1>
                                        </div>
                                        <div className="md:hidden text-2xl sm:text-3xl font-semibold leading-snug sm:leading-snug whitespace-nowrap text-white">
                                            <h1>
                                                <span style={{ color: '#ffffff' }}>Shipping Rates</span>
                                            </h1>
                                        </div>
                                        <div className="hidden md:block md:text-lg 2xl:text-xl md:mt-6 space-y-6 leading-snug prose text-white text-inherit">
                                            <p>
                                                <span style={{ color: '#ffffff' }}>
                                                    Same-day shipping.
                                                    <br />
                                                    All packages will be delivered within 2-5 working days.
                                                </span>
                                            </p>
                                        </div>
                                        <div className="md:hidden text-base mt-4 space-y-6 sm:leading-snug prose text-white">
                                            <p>
                                                <span style={{ color: '#ffffff' }}>
                                                    Same-day shipping.
                                                    <br />
                                                    All packages will be delivered within 2-5 working days.
                                                    <br />
                                                </span>
                                            </p>
                                        </div>
                                        <div className="mt-6 sm:mt-10">
                                            <a target="_blank" href="/get-a-quote">
                                                <button
                                                    className="rounded-full font-bold  whitespace-nowrap px-12 py-4 focus:outline-purple-200  hover:bg-[#6211cb] bg-[#844ffa] text-white shadow-md w-52 lg:w-64  sm:!py-4"
                                                    rel="noopener noreferrer"
                                                    _key="0f839103ef22"
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
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-cover bg-center pt-8 md:pt-12 pb-8 md:pb-12">
                            <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                                <div className="w-full relative flex flex-wrap sm:flex-row gap-y-10 justify-between text-center sm:text-left">
                                    <div className="w-full sm:w-1/2 grid">
                                        <div className="sm:pr-[6%] space-y-8">
                                            <div className="leading-snug font-semibold text-black whitespace-pre-line text-xl sm:text-2xl">
                                                <h2>Shipping from Singapore to USA</h2>
                                            </div>
                                            <div className="sm:text-lg prose marker:text-subheading-gray marker:text-sm">
                                                <p>
                                                    <strong>
                                                        <span style={{ color: '#6211cb' }}>Send a Parcel to the USA</span>

                                                        <br />
                                                        <br />
                                                    </strong>
                                                    With JustShip, sending a parcel to USA has never been cheaper or easier. Simply get a quote, and if it is within your budget, submit our shipping form! We offer free next weekday pick-up. You won’t
                                                    even need to print any labels, just make sure your Order ID is indicated somewhere on the parcel and we’ll do the rest!
                                                </p>
                                                <p></p>
                                                <p>
                                                    <strong>
                                                        <span style={{ color: '#6211cb' }}>Cheapest Courier Service to USA</span>

                                                    </strong>
                                                    <br />
                                                    <br />
                                                    We offer the cheapest shipping from Singapore to USA, amongst many other local courier services. Our delivery time takes 2 -5 working days. Not only are we the cheapest, but we are also the fastest.
                                                    <br />
                                                    <br />
                                                    Don’t believe us? Check this out.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full sm:w-1/2 sm:mt-0 grid">
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
                                                                src={Price1}
                                                            />
                                                        </span>
                                                        <img
                                                            alt="shipping singapore to usa"
                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                            decoding="async"
                                                            data-nimg="intrinsic"
                                                            style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                                                        />
                                                        <noscript>
                                                            <img
                                                                alt="shipping singapore to usa"
                                                                srcset="
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Ff789bf946223d15ebe43ef256f76faf391c6d5bd-638x417.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=640&amp;q=75  1x,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Ff789bf946223d15ebe43ef256f76faf391c6d5bd-638x417.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1920&amp;q=75 2x
                                                    "
                                                                src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2Ff789bf946223d15ebe43ef256f76faf391c6d5bd-638x417.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1920&amp;q=75"
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
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-cover bg-center pt-8 md:pt-12 pb-8 md:pb-12">
                            <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                                <div className="leading-snug text-center sm:text-left space-y-8 w-full">
                                    <div className="leading-snug font-semibold text-2xl md:text-3xl">
                                        <h3>Price Comparison - Shipping Cost From Singapore to USA</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-6xl m-auto px-6 sm:px-12">
                            <table className="border-collapse border-y border-[#611ECB] text-sm md:text-base w-full table-fixed">
                                <thead className="text-left align-top">
                                    <tr>
                                        <th className="py-2 md:px-4"><p>Company</p></th>
                                        <th className="py-2 px-2 md:px-4"><p>Duration</p></th>
                                        <th className="py-2 px-2 md:px-4"><p>Price 2kg</p></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-y border-[#611ECB] text-xs md:text-base">
                                        <td className="py-2 md:px-4"><p className="w-min pr-2 md:pr-0">JustShip</p></td>
                                        <td className="py-2 px-2 md:px-4">
                                            <p className="md:whitespace-nowrap">
                                                2 - 5
                                                Days
                                            </p>
                                        </td>
                                        <td className="py-2 px-2 md:px-4"><p className="">$72.91</p></td>
                                    </tr>
                                    <tr className="border-y border-[#611ECB] text-xs md:text-base">
                                        <td className="py-2 md:px-4"><p className="w-min pr-2 md:pr-0">Singpost (Speedpost Express)</p></td>
                                        <td className="py-2 px-2 md:px-4">
                                            <p className="md:whitespace-nowrap">
                                                6
                                                Days
                                            </p>
                                        </td>
                                        <td className="py-2 px-2 md:px-4"><p className="">$159.00</p></td>
                                    </tr>
                                    <tr className="border-y border-[#611ECB] text-xs md:text-base">
                                        <td className="py-2 md:px-4"><p className="w-min pr-2 md:pr-0">DHL</p></td>
                                        <td className="py-2 px-2 md:px-4">
                                            <p className="md:whitespace-nowrap">
                                                3 - 4
                                                Days
                                            </p>
                                        </td>
                                        <td className="py-2 px-2 md:px-4"><p className="">$210.00</p></td>
                                    </tr>
                                    <tr className="border-y border-[#611ECB] text-xs md:text-base">
                                        <td className="py-2 md:px-4"><p className="w-min pr-2 md:pr-0">FedEx International Priority</p></td>
                                        <td className="py-2 px-2 md:px-4">
                                            <p className="md:whitespace-nowrap">
                                                1 - 3
                                                Days
                                            </p>
                                        </td>
                                        <td className="py-2 px-2 md:px-4"><p className="">$504.00</p></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <div className="bg-cover bg-center pt-8 md:pt-12">
                            <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                                <div className="leading-snug text-center sm:text-left space-y-8 w-full">
                                    <div className="leading-snug font-semibold text-2xl md:text-3xl">
                                        <h3>Our Shipping Rates From Singapore to USA</h3>
                                    </div>
                                    <div className="md:text-lg space-y-6 prose-ul:space-y-2 prose max-w-full md:prose-li:text-lg prose-li:text-left prose-li:mx-4 lg:prose-li:mx-8 prose-strong:text-inherit marker:text-subheading-gray marker:text-sm">
                                        <div className="max-w-6xl m-auto mb-8 md:mb-16">
                                            <table className="border-collapse border-y border-[#611ECB] text-sm md:text-base w-full">
                                                <thead className="text-left align-top">
                                                    <tr>
                                                        <th className="py-2 px-2 md:px-4"><p className="my-1">Weight</p></th>
                                                        <th className="py-2 px-2 md:px-4"><p className="my-1">Price</p></th>
                                                        <th className="py-2 px-2 md:px-4"><p className="my-1">What can I ship</p></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="border-y border-[#611ECB] text-xs md:text-base">
                                                        <td className="py-2 px-2 md:px-4"><p className="max-w-max pr-2 md:pr-0 my-1">1kg</p></td>
                                                        <td className="py-2 px-2 md:px-4"><p className="max-w-max pr-2 md:pr-0 my-1">$55.82</p></td>
                                                        <td className="py-2 px-2 md:px-4"><p className="max-w-max pr-2 md:pr-0 my-1">Clothing, Accesories</p></td>
                                                    </tr>
                                                    <tr className="border-y border-[#611ECB] text-xs md:text-base">
                                                        <td className="py-2 px-2 md:px-4"><p className="max-w-max pr-2 md:pr-0 my-1">5kg</p></td>
                                                        <td className="py-2 px-2 md:px-4"><p className="max-w-max pr-2 md:pr-0 my-1">$129.29</p></td>
                                                        <td className="py-2 px-2 md:px-4"><p className="max-w-max pr-2 md:pr-0 my-1">Toys, Care Packages, Dry Foods</p></td>
                                                    </tr>
                                                    <tr className="border-y border-[#611ECB] text-xs md:text-base">
                                                        <td className="py-2 px-2 md:px-4"><p className="max-w-max pr-2 md:pr-0 my-1">10kg</p></td>
                                                        <td className="py-2 px-2 md:px-4"><p className="max-w-max pr-2 md:pr-0 my-1">$224.19</p></td>
                                                        <td className="py-2 px-2 md:px-4"><p className="max-w-max pr-2 md:pr-0 my-1">Electronics, Furniture</p></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-cover bg-center pt-8 md:pt-12 pb-8 md:pb-12">
                            <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                                <div className="w-full relative flex flex-wrap sm:flex-row gap-y-10 justify-between text-center sm:text-left">
                                    <div className="w-full sm:w-1/2 grid">
                                        <div className="sm:pr-[6%] space-y-8">
                                            <div className="leading-snug font-semibold text-black whitespace-pre-line text-xl sm:text-2xl">
                                                <h2>Shipping from Singapore to Malaysia</h2>
                                            </div>
                                            <div className="sm:text-lg prose marker:text-subheading-gray marker:text-sm">
                                                <p>
                                                    <strong>
                                                        <span style={{ color: '#6211cb' }}>Send a Parcel to Malaysia</span>

                                                        <br />
                                                    </strong>
                                                    <br />
                                                    With JustShip, sending a parcel to Malaysia has never been cheaper or easier. Simply get a quote, and if it is within your budget, submit our shipping form! We offer free next weekday pick-up. You
                                                    won’t even need to print any labels, just make sure your Order ID is indicated somewhere on the parcel and we’ll do the rest!
                                                </p>
                                                <p></p>
                                                <p>
                                                    <strong>
                                                        <span style={{ color: '#6211cb' }}>Cheapest Courier Service to Malaysia</span>

                                                    </strong>
                                                    <br />
                                                    <br />
                                                    We offer the cheapest shipping from Singapore to Malaysia, amongst many other local courier services. Our delivery time takes 2 – 5 working days. Not only are we the cheapest, but we are also the
                                                    fastest.
                                                    <br />

                                                    <br />
                                                    Don’t believe us? Check this out.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full sm:w-1/2 sm:mt-0 grid">
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
                                                                src={Price2}
                                                            />
                                                        </span>
                                                        <img
                                                            alt="shipping singapore to malaysia"
                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                            decoding="async"
                                                            data-nimg="intrinsic"
                                                            style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                                                        />
                                                        <noscript>
                                                            <img
                                                                alt="shipping singapore to malaysia"
                                                                srcset="
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F22f194712ea2462069bf8efa265d4ea254d248a8-638x417.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=640&amp;q=75  1x,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F22f194712ea2462069bf8efa265d4ea254d248a8-638x417.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1920&amp;q=75 2x
                                                    "
                                                                src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F22f194712ea2462069bf8efa265d4ea254d248a8-638x417.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1920&amp;q=75"
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
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-cover bg-center pt-8 md:pt-12 pb-8 md:pb-12">
                            <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                                <div className="leading-snug text-center sm:text-left space-y-8 w-full">
                                    <div className="leading-snug font-semibold text-2xl md:text-3xl">
                                        <h3>Price Comparison - Shipping Cost From Singapore to Malaysia</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-6xl m-auto px-6 sm:px-12">
                            <table className="border-collapse border-y border-[#611ECB] text-sm md:text-base w-full table-fixed">
                                <thead className="text-left align-top">
                                    <tr>
                                        <th className="py-2 md:px-4"><p>Company</p></th>
                                        <th className="py-2 px-2 md:px-4"><p>Duration</p></th>
                                        <th className="py-2 px-2 md:px-4"><p>Price 2kg</p></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-y border-[#611ECB] text-xs md:text-base">
                                        <td className="py-2 md:px-4"><p className="w-min pr-2 md:pr-0">JustShip</p></td>
                                        <td className="py-2 px-2 md:px-4">
                                            <p className="md:whitespace-nowrap">
                                                2 - 5
                                                Days
                                            </p>
                                        </td>
                                        <td className="py-2 px-2 md:px-4"><p className="">$39.46</p></td>
                                    </tr>
                                    <tr className="border-y border-[#611ECB] text-xs md:text-base">
                                        <td className="py-2 md:px-4"><p className="w-min pr-2 md:pr-0">Singpost (Speedpost Express)</p></td>
                                        <td className="py-2 px-2 md:px-4">
                                            <p className="md:whitespace-nowrap">
                                                2 - 3
                                                Days
                                            </p>
                                        </td>
                                        <td className="py-2 px-2 md:px-4"><p className="">$61.00</p></td>
                                    </tr>
                                    <tr className="border-y border-[#611ECB] text-xs md:text-base">
                                        <td className="py-2 md:px-4"><p className="w-min pr-2 md:pr-0">DHL</p></td>
                                        <td className="py-2 px-2 md:px-4">
                                            <p className="md:whitespace-nowrap">
                                                1 - 3
                                                Days
                                            </p>
                                        </td>
                                        <td className="py-2 px-2 md:px-4"><p className="">$80.37</p></td>
                                    </tr>
                                    <tr className="border-y border-[#611ECB] text-xs md:text-base">
                                        <td className="py-2 md:px-4"><p className="w-min pr-2 md:pr-0">FedEx International Priority</p></td>
                                        <td className="py-2 px-2 md:px-4">
                                            <p className="md:whitespace-nowrap">
                                                1 - 3
                                                Days
                                            </p>
                                        </td>
                                        <td className="py-2 px-2 md:px-4"><p className="">$196.26</p></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <div className="bg-cover bg-center pt-8 md:pt-12 pb-8 md:pb-12">
                            <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                                <div className="leading-snug text-center sm:text-left space-y-8 w-full">
                                    <div className="md:text-lg md:space-y-6 space-y-2  max-w-full  marker:text-sm">
                                        <p>While driving to Malaysia does seem to be the most obvious option, air shipping is still the cheapest way for a few reasons:
                                        </p>
                                        <ol type="A" >
                                            <li classNameName=' mb-3 flex  ml-8'>
                                                <h1 classNameName=' mr-2'>1. </h1>
                                                <strong>Time.</strong> It takes time to drive up, and you could use that time for something else. Especially if you get caught in the causeway jam!
                                            </li>
                                            <li classNameName=' mb-3 flex  ml-8'>
                                                <h1 classNameName=' mr-2'>2. </h1>
                                                <strong>Petrol.</strong> Yes, it’s cheaper there, but wouldn’t it be better to just save on the extra cost and deliver it straight from your doorstep?
                                            </li>
                                            <li classNameName=' mb-3 flex  ml-8'>
                                                <h1 classNameName=' mr-2'>3. </h1>
                                                <strong>
                                                    You need a car.

                                                </strong>
                                                Using FedEx International Priority means we use planes – cheap and fast shipping to Malaysia!
                                            </li>
                                        </ol>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-cover bg-center pt-8 md:pt-12 pb-8 md:pb-12">
                            <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                                <div className="leading-snug text-center sm:text-left space-y-8 w-full">
                                    <div className="leading-snug font-semibold text-2xl md:text-3xl">
                                        <h3>Our Shipping Rates From Singapore to Malaysia</h3>
                                    </div>
                                    <div className="md:text-lg space-y-6 prose-ul:space-y-2 prose max-w-full md:prose-li:text-lg prose-li:text-left prose-li:mx-4 lg:prose-li:mx-8 prose-strong:text-inherit marker:text-subheading-gray marker:text-sm">
                                        <p></p>
                                        <div className="max-w-6xl m-auto mb-8 md:mb-16">
                                            <table className="border-collapse border-y border-[#611ECB] text-sm md:text-base w-full">
                                                <thead className="text-left align-top">
                                                    <tr>
                                                        <th className="py-2 px-2 md:px-4"><p className="my-1">Weight</p></th>
                                                        <th className="py-2 px-2 md:px-4"><p className="my-1">Price</p></th>
                                                        <th className="py-2 px-2 md:px-4"><p className="my-1">What can I ship</p></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="border-y border-[#611ECB] text-xs md:text-base">
                                                        <td className="py-2 px-2 md:px-4"><p className="max-w-max pr-2 md:pr-0 my-1">1kg</p></td>
                                                        <td className="py-2 px-2 md:px-4"><p className="max-w-max pr-2 md:pr-0 my-1">$34.41</p></td>
                                                        <td className="py-2 px-2 md:px-4"><p className="max-w-max pr-2 md:pr-0 my-1">Clothing, Accesories</p></td>
                                                    </tr>
                                                    <tr className="border-y border-[#611ECB] text-xs md:text-base">
                                                        <td className="py-2 px-2 md:px-4"><p className="max-w-max pr-2 md:pr-0 my-1">5kg</p></td>
                                                        <td className="py-2 px-2 md:px-4"><p className="max-w-max pr-2 md:pr-0 my-1">$76.15</p></td>
                                                        <td className="py-2 px-2 md:px-4"><p className="max-w-max pr-2 md:pr-0 my-1">Toys, Care Packages, Dry Foods</p></td>
                                                    </tr>
                                                    <tr className="border-y border-[#611ECB] text-xs md:text-base">
                                                        <td className="py-2 px-2 md:px-4"><p className="max-w-max pr-2 md:pr-0 my-1">10kg</p></td>
                                                        <td className="py-2 px-2 md:px-4"><p className="max-w-max pr-2 md:pr-0 my-1">$115.52</p></td>
                                                        <td className="py-2 px-2 md:px-4"><p className="max-w-max pr-2 md:pr-0 my-1">Electronics, Furniture</p></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-cover bg-center pt-12 md:pt-16 pb-12 md:pb-16 overflow-hidden " style={{ backgroundColor: '#fed430' }}  >
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
                                    <div className="w-full sm:w-2/3 pl-10">
                                        <div className="sm:pl-[6%] space-y-8 ">
                                            <div className="w-full">

                                                <div className="w-[calc{100%)] mx-auto relative ">
                                                    <div className='xl:w-[70%] lg:w-[50%] w-[65%] mx-auto shadow-none relative ml-36'>
                                                        <Carousel className=' w-full z-10' slides={slides} autoplay={true} interval={1000} arrows={false} />
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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
                                                                src={GetStart}
                                                            />
                                                        </span>
                                                        <img
                                                            alt="Get Started With A Quote"
                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                            decoding="async"
                                                            data-nimg="intrinsic"
                                                            style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                                                        />
                                                        <noscript>
                                                            <img
                                                                alt="Get Started With A Quote"
                                                                srcset="
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F78362593228b9fe115993d4faee7eda60d0084dd-1106x770.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=1200&amp;q=75 1x,
                                                        /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F78362593228b9fe115993d4faee7eda60d0084dd-1106x770.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=3840&amp;q=75 2x
                                                    "
                                                                src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbm4duuk0%2Fproduction%2F78362593228b9fe115993d4faee7eda60d0084dd-1106x770.png%3Ffit%3Dmax%26auto%3Dformat&amp;w=3840&amp;q=75"
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
};





export default OurPrice;





