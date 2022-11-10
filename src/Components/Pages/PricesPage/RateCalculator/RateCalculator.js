import React, { useState } from 'react';
import boxImg from '../../../../Assect/3x3x3.png'
import fragileImg from '../../../../Assect/fragile.png'



const RateCalculator = () => {




    const dimensions = [
        {
            id: 1,
            name: 'slim-1',
            height: 23,
            width: 15,
            length: 9,
            dimention: 'Slim 1 kg (23 x 15 x 9)',
            imgURL: 'https://i.ibb.co/dr6qX8W/3x3x3.png'
        },
        {
            id: 2,
            name: 'slim-2',
            height: 26,
            width: 26,
            length: 9,
            dimention: 'Slim 1.5 kg (26 x 26 x 9)',
            imgURL: 'https://i.ibb.co/DbWKrS7/3x3x1.png'
        },
        {
            id: 3,
            name: 'slim-3',
            height: 44,
            width: 39,
            length: 10,
            dimention: 'Slim 3.5 kg (44 x 39 x 10)',
            imgURL: 'https://i.ibb.co/QD57S4r/3x2x1.png'
        },
        {
            id: 4,
            name: 'slim-4',
            height: 33,
            width: 24,
            length: 31,
            dimention: 'Standard 5 kg (33 x 24 x 31)',
            imgURL: 'https://i.ibb.co/mtrQcXG/3x1x3.png'
        },
        {
            id: 5,
            name: 'slim-5',
            height: 42,
            width: 26,
            length: 32,
            dimention: 'Standard 7 kg (42 x 26 x 32)',
            imgURL: 'https://i.ibb.co/vjzT3QX/3x1x1.png'
        },
        {
            id: 6,
            name: 'slim-6',
            height: 49,
            width: 35,
            length: 35,
            dimention: 'Standard 12 kg (49 x 35 x 35)',
            imgURL: 'https://i.ibb.co/zh4HKTZ/2x1x3.png'
        },
        {
            id: 7,
            name: 'slim-7',
            height: 56,
            width: 43,
            length: 35,
            dimention: 'Standard 17 kg (56 x 43 x 35)',
            imgURL: 'https://i.ibb.co/2sk8zB7/2x1x1.png'
        },
        {
            id: 8,
            name: 'slim-8',
            height: 43,
            width: 40,
            length: 65,
            dimention: 'Standard 22 kg (43 x 40 x 65)',
            imgURL: 'https://i.ibb.co/7jpLDgz/1x1x2.png'
        },
        {
            id: 9,
            name: 'slim-9',
            height: 61,
            width: 120,
            length: 42,
            dimention: 'Standard 62 kg (61 x 120 x 42)',
            imgURL: 'https://i.ibb.co/vjzT3QX/3x1x1.png'
        }
    ]




    const [height, setHeight] = useState()
    const [width, setWidth] = useState()
    const [length, setLength] = useState()
    const [weight, setWeight] = useState()
    const [pack, setPack] = useState(false)
    const [fragile, setFragile] = useState(false)
    const [task, setTask] = useState(false)
    const [img, setImg] = useState('https://i.ibb.co/dr6qX8W/3x3x3.png')
    const [dymention, setDymention] = useState('Custom Box (61 x 120 x 42)')

    const handelChange = (newSize) => {
        console.log(newSize);
        const newnumber = parseFloat(newSize) + 1;
        console.log(newnumber)
        const clickedsize = dimensions.filter((click) => click.id == newnumber);
        console.log(clickedsize[0]);
        if (clickedsize[0]) {
            const imglink = clickedsize[0]?.imgURL;
            setImg(imglink)
            const newHeight = clickedsize[0]?.height;
            const newWidth = clickedsize[0]?.width;
            const newLength = clickedsize[0]?.length;
            const newDymention = clickedsize[0]?.dimention;
            console.log(newHeight, newWidth, newLength)

            setHeight(newHeight)
            setWidth(newWidth)
            setLength(newLength)
            setDymention(newDymention)
        }

    }



    return (
        <div>
            <main>
                <div class="bg-[#F6F6F6] min-h-[100vh]">
                    <div class="container max-w-5xl 2xl:max-w-6xl mx-auto sm:px-5 py-8 sm:py-12">



                        <div class=" w-full pb-8 ">
                            <div class="max-w-4xl mx-auto">
                                <div class="rounded-xl overflow-hidden ">
                                    <div class="bg-white px-6 md:px-8 pb-5 md:pt-12">
                                        <div class="flex flex-col">
                                            <p class="hidden md:block  font-extrabold text-3xl">Ship from</p>
                                            <div class="grid grid-cols-[56px_auto] md:flex items-center gap-y-3 md:gap-y-0 md:gap-x-6 mt-6">
                                                <p class="md:hidden font-semibold">From</p>
                                                <div class="px-3  bg-[#DDE2E5] rounded-3xl text-gray-600 font-semibold text-left md:text-center w-full max-w-[280px] md:w-[240px] border-2 py-2 bg-gray-2 border-[#7B8794]"><span class="pl-4 md:pl-0">Singapore</span></div>
                                                <p class="font-semibold">to</p>
                                                <div class="pill-button border-2 border-[#844FFA] rounded-full relative flex items-center text-[#9450FA] w-full max-w-[280px] md:w-[240px] hover:cursor-pointer px-3 pl-4 md:pl-3">
                                                    <select id="recipientCountry" name="country" class="rounded-xl focus:outline-none w-full h-full py-2 hover:cursor-pointer font-semibold appearance-none bg-transparent text-left md:text-center">
                                                        <option value="none" disabled=""></option>
                                                        <optgroup label="Frequent Picks">
                                                            <option value="AU">Australia</option><option value="BE">Belgium</option><option value="CA">Canada</option><option value="FI">Finland</option>
                                                            <option value="FR">France</option><option value="DE">Germany</option><option value="HK">Hong Kong</option><option value="ID">Indonesia</option>
                                                            <option value="JP">Japan</option><option value="MY">Malaysia</option><option value="NL">Netherlands</option><option value="NZ">New Zealand</option>
                                                            <option value="PH">Philippines</option><option value="ES">Spain</option><option value="SE">Sweden</option><option value="GB">United Kingdom</option>
                                                            <option value="US" selected>United States</option>
                                                        </optgroup>
                                                        <optgroup label="All">
                                                            <option value="AF">Afghanistan</option><option value="AL">Albania</option><option value="DZ">Algeria</option><option value="AS">American Samoa</option>
                                                            <option value="AD">Andorra</option><option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AG">Antigua &amp; Barbuda</option>
                                                            <option value="AR">Argentina</option><option value="AM">Armenia</option><option value="AW">Aruba</option><option value="AU">Australia</option>
                                                            <option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option>
                                                            <option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BE">Belgium</option><option value="BZ">Belize</option>
                                                            <option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">Bolivia</option>
                                                            <option value="BQ">Bonaire</option><option value="BA">Bosnia and Herzegovina</option><option value="BW">Botswana</option><option value="BR">Brazil</option>
                                                            <option value="BN">Brunei</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option>
                                                            <option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CA">Canada</option><option value="CV">Cape Verde</option>
                                                            <option value="KY">Cayman Islands</option><option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option>
                                                            <option value="CO">Colombia</option><option value="CG">Congo</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option>
                                                            <option value="HR">Croatia</option><option value="CW">Curacao</option><option value="CY">Cyprus</option><option value="CZ">Czech Republic</option>
                                                            <option value="CD">Democratic Republic of the Congo</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option>
                                                            <option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="TL">East Timor</option><option value="EC">Ecuador</option>
                                                            <option value="EG">Egypt</option><option value="SV">El Salvador</option><option value="ER">Eritrea</option><option value="EE">Estonia</option>
                                                            <option value="SZ">Eswatini</option><option value="ET">Ethiopia</option><option value="FO">Faroe Islands</option><option value="FJ">Fiji</option>
                                                            <option value="FI">Finland</option><option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option>
                                                            <option value="GA">Gabon</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany</option>
                                                            <option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GR">Greece</option><option value="GL">Greenland</option>
                                                            <option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option>
                                                            <option value="GN">Guinea</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="HN">Honduras</option>
                                                            <option value="HK">Hong Kong</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option>
                                                            <option value="ID">Indonesia</option><option value="IQ">Iraq</option><option value="IE">Ireland</option><option value="IL">Israel</option>
                                                            <option value="IT">Italy</option><option value="CI">Ivory Coast / Cote d&#x27;Ivoire</option><option value="JM">Jamaica</option>
                                                            <option value="JP">Japan</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option>
                                                            <option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Laos</option><option value="LV">Latvia</option>
                                                            <option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libya</option>
                                                            <option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macau</option>
                                                            <option value="MK">Macedonia</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option>
                                                            <option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option>
                                                            <option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="MX">Mexico</option>
                                                            <option value="FM">Micronesia</option><option value="MD">Moldova</option><option value="MC">Monaco</option><option value="MN">Mongolia</option>
                                                            <option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option>
                                                            <option value="NA">Namibia</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="AN">Netherlands Antilles</option>
                                                            <option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option>
                                                            <option value="NG">Nigeria</option><option value="MP">Northern Mariana Islands</option><option value="NO">Norway</option><option value="OM">Oman</option>
                                                            <option value="PK">Pakistan</option><option value="PW">Palau</option><option value="PS">Palestine</option><option value="PA">Panama</option>
                                                            <option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option>
                                                            <option value="PL">Poland</option><option value="PT">Portugal</option><option value="QA">Qatar</option><option value="RO">Romania</option>
                                                            <option value="RW">Rwanda</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option>
                                                            <option value="SX">Saint Maarten</option><option value="MF">Saint Martin</option><option value="VC">Saint Vincent and the Grenadines</option>
                                                            <option value="WS">Samoa</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option>
                                                            <option value="SC">Seychelles</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="ZA">South Africa</option>
                                                            <option value="KR">South Korea</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="SR">Suriname</option>
                                                            <option value="SE">Sweden</option><option value="CH">Switzerland</option><option value="SY">Syrian Arab Republic</option><option value="TW">Taiwan</option>
                                                            <option value="TZ">Tanzania, United Republic of Tanzania</option><option value="TH">Thailand</option><option value="TG">Togo</option>
                                                            <option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TN">Tunisia</option><option value="TR">Turkey</option>
                                                            <option value="TC">Turks and Caicos Islands</option><option value="UG">Uganda</option><option value="AE">United Arab Emirates</option>
                                                            <option value="GB">United Kingdom</option><option value="US" selected="">United States</option><option value="UY">Uruguay</option>
                                                            <option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VE">Venezuela</option><option value="VN">Vietnam</option>
                                                            <option value="VG">Virgin Islands, British</option><option value="VI">Virgin Islands, U.S.</option><option value="WF">Wallis and Futuna</option>
                                                            <option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option>
                                                        </optgroup>
                                                    </select>
                                                    <svg width="16px" height="12px" className="absolute right-3 w-[12px] h-[8px]" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                                        <path d="M1 1L8 9L15 1" stroke="#844FFA" stroke-width="2" stroke-linecap="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="border-border-gray border-t m-0" />
                                    <div className="bg-white py-4 md:py-8 px-6 md:px-8">
                                        <div className="flex flex-col">
                                            <p>Add-on Services</p>
                                            <div class="grid grid-cols-2 gap-y-1 w-full md:w-[80%] text-xs md:text-base">
                                                <div class="flex items-start mt-4 md:md-2 " >
                                                    <input type="checkbox"
                                                        onChange={() => setPack(!pack)} id="pack-items" class={`appearance-none checked:bg-[#844ffa] border-2 border-[#844ffa] checked:border-transparent hover:cursor-pointer w-4 h-4 mt-[2px] mr-1.5 ${fragile ? 'bg-[#844ffa] checked:border-transparent' : ''}`} />
                                                    <div class="inline">
                                                        <label for="pack-items" class="text-[#9250FB] inline text-true-black leading-snug"><span>Pack my items</span></label>
                                                        <div class="inline md:pl-0.5"></div>
                                                    </div>
                                                </div>
                                                <div class="flex items-start mt-4 md:md-2">
                                                    <input type="checkbox" onChange={() => setTask(!task)} id="charge-taxes" class="appearance-none checked:bg-[#844ffa] border-2 border-[#844ffa] checked:border-transparent hover:cursor-pointer w-4 h-4 mt-[2px] mr-1.5" />
                                                    <div class="inline">
                                                        <label for="charge-taxes" class="text-[#9250FB] inline text-true-black leading-snug"><span>Pre-pay taxes</span></label>
                                                        <div class="inline md:pl-0.5">
                                                            <div class="relative inline-block">
                                                                <div class="relative">
                                                                    <div
                                                                        id="tooltip"
                                                                        className="absolute -translate-y-[calc(100%+14px)] -right-[100%] sm:right-auto sm:-translate-x-[calc(50%-14px)] pointer-events-none opacity-0 text-sm transition-opacity duration-300"
                                                                    >
                                                                        <div className="font-medium text-white bg-[#495057] rounded-lg shadow-sm relative z-10 py-2 md:px-3">
                                                                            <p className="max-w-[300px] w-max text-center">If not charged to sender, amount will be determined by Customs and charged to the recipient.</p>
                                                                            <div className="absolute hidden md:block w-full h-[30px] opacity-0"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="arrow absolute -translate-y-[calc(100%+4px)] left-[50%] -translate-x-[40%] border-t-[10px] border-x-[8px] border-x-transparent border-[#495057] w-0 h-0 pointer-events-none opacity-0 text-sm transition-opacity duration-300"
                                                                    ></div>
                                                                    <svg className="inline w-4 md:w-5 mb-1 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            clip-rule="evenodd"
                                                                            d="M12 21.9999C17.5228 21.9999 22 17.5228 22 11.9999C22 6.47709 17.5228 1.99994 12 1.99994C6.47715 1.99994 2 6.47709 2 11.9999C2 17.5228 6.47715 21.9999 12 21.9999Z"
                                                                            stroke="#7B8794"
                                                                            stroke-width="2"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                        ></path>
                                                                        <path d="M12 7.99994V11.9999" stroke="#7B8794" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                        <circle cx="12" cy="15.9999" r="1" fill="#7B8794"></circle>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex items-start mt-4 md:md-2">
                                                    <input type="checkbox"
                                                        onChange={() => {
                                                            setPack(!pack)
                                                            setFragile(!fragile)
                                                        }}
                                                        id="fragile-pack" class="appearance-none checked:bg-[#844ffa] border-2 border-[#844ffa] checked:border-transparent hover:cursor-pointer w-4 h-4 mt-[2px] mr-1.5" />
                                                    <div class="inline">
                                                        <label for="fragile-pack" class="text-[#9250FB] inline text-true-black leading-snug"><span>Fragile pack</span></label>
                                                        <div class="inline md:pl-0.5"></div>
                                                    </div>
                                                </div>
                                                <div class="flex items-start mt-4 md:md-2">
                                                    <input type="checkbox" onChange={() => setTask(!task)} id="insure-shipment" class="appearance-none checked:bg-[#844ffa] border-2 border-[#844ffa] checked:border-transparent hover:cursor-pointer w-4 h-4 mt-[2px] mr-1.5" />
                                                    <div class="inline">
                                                        <label for="insure-shipment" class="text-[#9250FB] inline text-true-black leading-snug"><span>Insure Shipment</span></label>
                                                        <div class="inline md:pl-0.5">
                                                            <div class="relative inline-block">
                                                                <div class="relative">
                                                                    <div
                                                                        id="tooltip"
                                                                        className="absolute -translate-y-[calc(100%+14px)] -right-[100%] sm:right-auto sm:-translate-x-[calc(50%-14px)] pointer-events-none opacity-0 text-sm transition-opacity duration-300"
                                                                    >
                                                                        <div className="font-medium text-white bg-[#495057] rounded-lg shadow-sm relative z-10 py-2 md:px-3">
                                                                            <p className="max-w-[300px] w-max text-center">
                                                                                <span>
                                                                                    Scope the max. value that FedEx is liable to pay in the event of shipment loss/damage resulting from their failure.
                                                                                    <br />
                                                                                    <br />
                                                                                    You pay 2.4% of this maximum value

                                                                                    <br />
                                                                                    (i.e. your declared value) to scope FedEx’s liability.

                                                                                    <br />
                                                                                    <br />
                                                                                    See

                                                                                    <a href="https://www.fedex.com/content/dam/fedex/apac-asia-pacific/downloads/fedex-scc-spac.pdf" target="_blank" rel="noreferrer noopener">
                                                                                        <span className="text-blue-400 underline underline-offset-1 cursor-pointer">T&amp;C</span>
                                                                                    </a>
                                                                                    (Declared Value and Limits of Liability, pg 10-11)
                                                                                </span>
                                                                            </p>
                                                                            <div className="absolute hidden md:block w-full h-[30px] opacity-0"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="arrow absolute -translate-y-[calc(100%+4px)] left-[50%] -translate-x-[40%] border-t-[10px] border-x-[8px] border-x-transparent border-[#495057] w-0 h-0 pointer-events-none opacity-0 text-sm transition-opacity duration-300"
                                                                    ></div>
                                                                    <svg className="inline w-4 md:w-5 mb-1 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            clip-rule="evenodd"
                                                                            d="M12 21.9999C17.5228 21.9999 22 17.5228 22 11.9999C22 6.47709 17.5228 1.99994 12 1.99994C6.47715 1.99994 2 6.47709 2 11.9999C2 17.5228 6.47715 21.9999 12 21.9999Z"
                                                                            stroke="#7B8794"
                                                                            stroke-width="2"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                        ></path>
                                                                        <path d="M12 7.99994V11.9999" stroke="#7B8794" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                        <circle cx="12" cy="15.9999" r="1" fill="#7B8794"></circle>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div class={`mb-10 ${fragile ? 'block' : 'hidden'}`}>
                                        <div class="bg-[#F0E8FE] flex flex-col md:flex-row md:mt-0 pt-10 md:pt-6 md:pb-6">
                                            <div class="md:w-[40%] md:text-[14px] text-center md:text-left mb-4 md:mb-0 px-6">
                                                <p class="font-semibold">Opted for fragile packing?</p>
                                                <br />
                                                <p>Note that a bigger box will be needed to fit fragile packing materials. This will increase shipping costs.</p>
                                                <br />
                                                <p>The exact padding required depends on the number of fragile items, the shape of the items, and how fragile they are.</p>
                                                <div class="hidden md:flex items-center mt-4">
                                                    <div class="flex items-center mt-1 justify-self-end">
                                                        <input type="checkbox" id="fragile-do-not-show-again" class="appearance-none checked:bg-[#844FFA] border-2 border-[#844FFA] checked:border-transparent hover:cursor-pointer w-[13px] h-[13px] mr-2" />
                                                        <div class="inline">
                                                            <label for="fragile-do-not-show-again" class="text-[#9250FB] inline">Do not show this again</label>
                                                            <div class="inline md:pl-0.5"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="w-[60%] place-self-center hidden md:block">
                                                <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
                                                    <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
                                                        <img
                                                            aria-hidden="true"
                                                            src={fragileImg}
                                                            style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }}
                                                            alt="pic"
                                                        />
                                                    </span>

                                                </span>
                                            </div>

                                            <div class="px-6 md:hidden">
                                                <p class="text-center">Account for extra space needed for <span class="text-pink">fragile packing materials.</span></p>
                                                <div class="text-center mt-6">
                                                    <div class="flex items-center mt-1">
                                                        <input type="checkbox" id="mobile-fragile-do-not-show-again" class="appearance-none checked:bg-[#844FFA] border-2 border-[#844FFA] checked:border-transparent hover:cursor-pointer w-[13px] h-[13px] mr-2" />
                                                        <div class="inline">
                                                            <label for="mobile-fragile-do-not-show-again" class="text-[#9250FB] inline">Do not show this again</label>
                                                            <div class="inline md:pl-0.5"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                    <div id="box-start" class="bg-[#F0E8FE] pt-4 md:pt-8 md:mt-0 scroll-mt-[80px]">
                                        <div class={`md:mb-4 ${pack ? 'hidden' : 'block'}`}>
                                            <div class="grid md:grid-cols-2 px-6 md:px-8">
                                                <div class="order-last md:order-first place-self-center">
                                                    <img className=' w-48' src={img && img} />
                                                </div>
                                                <div className="text-sm text-left my-4 mr-4 pb-6 md:pb-0 prose marker:text-subtext-gray hidden md:block">
                                                    <p className="font-semibold">Don’t want to top-up later?</p>
                                                    <ul>
                                                        <li>Measure from the longest cross-section of each side of your box</li>
                                                        <li>Round up to the nearest 0.5 cm when you measure</li>
                                                    </ul>
                                                    <p>Don’t worry about over-declaring, we will refund you the excess if that happens.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`text-center ${pack ? 'block' : 'hidden'}`}>
                                            <h1 className='text-[#9250FB]'>To order, estimate the box size needed for your unpacked items</h1>
                                            <img className=' w-48 mx-auto' src={img && img} />
                                            <h1 className='text-[#9250FB]'>{dymention && dymention}</h1>
                                        </div>
                                        <hr class="border-border-gray border-t mt-1 mb-0" />
                                        <div class="w-full px-8 md:px-16 lg:px-24 pb-2">
                                            <div class="flex flex-col md:flex-row md:justify-between md:pt-8 md:pb-8 mt-4 md:mt-0">
                                                <div class="flex flex-col mb-3 md:mb-0 relative">
                                                    <p class="mb-2">Estimate Box Size</p>
                                                    <div class="relative w-[90%] max-w-[285px] md:max-w-[230px] bg-white rounded-xl">
                                                        <select
                                                            id="box-selection-p0"
                                                            name="box-selection"
                                                            class="rounded-xl border border-border-gray shadow-border focus:border-light-purple focus:shadow-border-focus focus:outline-none w-full h-[40px] appearance-none bg-transparent pl-3 pr-6"
                                                            onChange={(event) => handelChange(event.target.value)}
                                                        >
                                                            <option value="-1" >Own Box</option>
                                                            <option value="0">Slim 1 kg (23 x 15 x 9)</option>
                                                            <option value="1">Slim 1.5 kg (26 x 26 x 9)</option>
                                                            <option value="2">Slim 3.5 kg (44 x 39 x 10)</option>
                                                            <option value="3">Standard 5 kg (33 x 24 x 31)</option>
                                                            <option value="4">Standard 7 kg (42 x 26 x 32)</option>
                                                            <option value="5">Standard 12 kg (49 x 35 x 35)</option>
                                                            <option value="6">Standard 17 kg (56 x 43 x 35)</option>
                                                            <option value="7">Standard 22 kg (43 x 40 x 65)</option>
                                                            <option value="8">Standard 62 kg (61 x 120 x 42)</option>
                                                        </select>
                                                        <svg width="16px" height="12px" className="absolute w-[12px] h-[8px] right-3.5 top-[45%]" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                                            <path d="M1 1L8 9L15 1" stroke="#373F41" stroke-width="2" stroke-linecap="round"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div class="flex flex-col">
                                                    <p class="md:mb-2">Box Dimensions</p>
                                                    <div class="flex items-center mb-4 md:mb-0">
                                                        <input type="text" inputmode="decimal" id="length-p0" class="form-input rounded-xl w-[65px] md:w-[55px] h-[40px] text-center text-[#611ECB] font-semibold border-transparent  focus:outline-[#844FFA]" value={height && height} onChange={(e) => setHeight(e.target.value)} />
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 mx-3.5 md:mx-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                                        </svg>
                                                        <input type="text" inputmode="decimal" id="width-p0" class="form-input rounded-xl w-[65px] md:w-[55px] h-[40px] text-center text-[#611ECB] font-semibold border-transparent focus:outline-[#844FFA]" value={width && width} onChange={(e) => setWidth(e.target.value)} />
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 mx-3.5 md:mx-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                                        </svg>
                                                        <input type="text" inputmode="decimal" id="height-p0" class="form-input rounded-xl w-[65px] md:w-[55px] h-[40px] text-center text-[#611ECB] font-semibold border-transparent focus:outline-[#844FFA]" value={length && length} onChange={(e) => setLength(e.target.value)} />
                                                        <span class="text-[#9250FB] ml-3 md:ml-1">cm</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col mb-6 md:mb-0">
                                                    <p className="md:mb-2">Weight</p>
                                                    <div className="flex items-center">
                                                        <input
                                                            type="text"
                                                            inputmode="decimal"
                                                            id="weight-p0"
                                                            class="form-input rounded-xl w-full max-w-[285px] md:w-[55px] md:max-w-full h-[40px] text-[#611ECB] font-semibold text-center mr-2 md:mr-0 border-transparent focus:outline-[#844FFA]"
                                                            value={weight && weight}
                                                            onChange={(e) => setWeight(e.target.value)}
                                                        />
                                                        <span class="text-[#9250FB] ml-1">kg</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-xs text-subtext-gray">
                                                For large fragile items like paintings, speakers, monitors, and bicycles, please

                                                <a href="https://wa.me/6591187971" class="text-[#611ECB]" target="_blank" rel="noopener noreferrer" tabindex="-1">WhatsApp us</a>
                                                for a custom quote.
                                            </p>
                                        </div>
                                    </div>





                                    <div className={`${task ? 'block' : 'hidden'}`}>
                                        <div class="bg-white md:px-12 py-6 relative">
                                            <div class="grid grid-cols-[38%_19%_38%_5%] gap-x-6 w-[calc(100%-4rem)] pb-2">
                                                <p>Item Category:</p>
                                                <p>Currency:</p>
                                                <p>Item Price:</p>
                                            </div>
                                            <div class="grid grid-cols-[38%_19%_38%_5%] gap-x-6 w-[calc(100%-4rem)] pt-4 pb-2">
                                                <div class="border-[#844FFA] border-2 rounded-3xl  flex flex-wrap items-center relative h-[40px] hover:bg-white hover:border-light-purple">
                                                    <select id="category-i0" class="focus:outline-none appearance-none rounded-2xl h-full w-full pl-3 mx-0.5 text-placeholder-gray">
                                                        <option value="none" disabled="" selected="">Category</option>
                                                        <option value="mobiles" class="text-black">Mobiles</option>
                                                        <option value="tablets" class="text-black">Tablets</option>
                                                        <option value="computers" class="text-black">Computers</option>
                                                        <option value="cameras" class="text-black">Cameras</option>
                                                        <option value="accessories" class="text-black">Accessories</option>
                                                        <option value="accessoriesbattery" class="text-black">Accessories (Battery)</option>
                                                        <option value="healthbeauty" class="text-black">Health &amp; Beauty</option>
                                                        <option value="fashion" class="text-black">Fashion</option>
                                                        <option value="watches" class="text-black">Watches</option>
                                                        <option value="jewelry" class="text-black">Jewelry</option>
                                                        <option value="petsaccessories" class="text-black">Pets Accessories</option>
                                                        <option value="dryfoodsupplements" class="text-black">Dry Food &amp; Supplements</option>
                                                        <option value="homeappliances" class="text-black">Home Appliances</option>
                                                        <option value="homedecor" class="text-black">Home Decor</option>
                                                        <option value="toys" class="text-black">Toys</option>
                                                        <option value="sports" class="text-black">Sports</option>
                                                        <option value="handbags" class="text-black">Handbags</option>
                                                        <option value="audiovideo" class="text-black">Audio Video</option>
                                                        <option value="documents" class="text-black">Documents</option>
                                                        <option value="gaming" class="text-black">Gaming</option>
                                                        <option value="bookscollectibles" class="text-black">Books &amp; Collectibles</option>
                                                    </select>
                                                    <svg width="16px" height="12px" class="absolute right-6 w-[12px] h-[8px]" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                                        <path d="M1 1L8 9L15 1" stroke="#844FFA" stroke-width="2" stroke-linecap="round"></path>
                                                    </svg>
                                                </div>
                                                <input class="border-[#844FFA]  w-full h-[40px] text-left pl-3.5 bg-[#DDE2E5] rounded-3xl disabled:bg-[#DDE2E5] disabled:border-none text-black font-bold" disabled="" value="SGD" />
                                                <div class="border-[#844FFA] border-2 rounded-3xl pl-1 h-[40px] flex items-center hover:bg-transparent hover:border-[#844FFA] ">
                                                    <p class="text-[#844FFA] font-bold pl-3">S$</p>
                                                    <input type="text" id="total-value-i0" class="focus:outline-none w-[80%] h-full rounded-2xl pl-1 placeholder:text-placeholder-gray " placeholder="60" value="" />
                                                </div>
                                                <div class="rounded-full group  items-center my-auto border border-[#844FFA] hover:border-[#844FFA] bg-transparent hidden hover:bg-dark-purple w-[24px] h-[24px] hover:cursor-pointer " title="Remove">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-auto w-3/4 stroke-[#844FFA]  group-hover:stroke-white" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="mt-4 mb-6 px-6 md:px-0">
                                                <button
                                                    type="button"
                                                    class="pill-button group flex justify-center items-center rounded-3xl  bg-[#efe8fe] hover:bg-[#C3B1F3] border-transparent hover:bg-disabled-purple font-normal text-sm text-[#844FFA]  w-full h-10 shadow-none focus:outline-[#844FFA]  max-w-[280px] md:max-w-full mx-auto"
                                                >
                                                    <svg width="19" height="19" class="group-hover:stroke-white stroke-[#844FFA] mx-2" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="14" cy="14" r="13" stroke="currentColor" stroke-width="2"></circle>
                                                        <line x1="7.22266" y1="13.1353" x2="20.44" y2="13.1353" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line>
                                                        <line x1="14.3574" y1="7.22217" x2="14.3574" y2="20.4396" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line>
                                                    </svg>
                                                    Add Item
                                                </button>
                                            </div>
                                        </div>

                                    </div>





                                    <div class="bg-white md:px-12 py-6 relative">
                                        <button
                                            type="button"
                                            id="get-a-quote-button"
                                            className="pill-button button-hover b cursor-pointer select-none flex items-center justify-center focus:outline-purple-200  hover:bg-[#6211cb] bg-[#844ffa]  w-[calc(100%-6rem)] max-w-[280px] md:w-[180px] h-[40px] mx-auto font-bold text-white rounded-full disabled:bg-disabled-purple disabled:border-transparent"
                                        >
                                            Get A Quote
                                        </button>
                                    </div>
                                </div>
                                <div className="h-20 mt-2">
                                    <div className="transition-[height] duration-500 ease-in-out pointer-events-none overflow-hidden h-0 invisible">
                                        <svg width="5" height="147" className="mx-auto undefined" viewBox="0 0 5 147" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="2.5" y1="2.5" x2="2.49999" y2="144.5" stroke="#6211CB" stroke-width="5" stroke-linecap="round" stroke-dasharray="3 20"></line>
                                        </svg>
                                    </div>
                                </div>
                                <div id="quote-summary" className="transition-all duration-300 scroll-mb-[500px] scroll-pb-[500px] opacity-0 -translate-y-[20%] invisible">
                                    <div className="bg-white rounded-xl">
                                        <div className="px-8 pt-6">
                                            <p className="px-4 sm:px-8 pb-8 text-center">
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    className="w-[24px] inline-block self-center stroke-dark-purple mb-1"
                                                >
                                                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                                    <line x1="12" y1="9" x2="12" y2="13"></line>
                                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                                </svg>
                                                <br />
                                                Your package is very heavy/large, please check that your stated dimensions are correct or contact our customer service by

                                                <a href="https://wa.me/6591187971" class="text-[#611ECB]" target="_blank" rel="noopener noreferrer" tabindex="-1">WhatsApp</a>
                                                for a custom quote
                                            </p>
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

export default RateCalculator;