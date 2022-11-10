import React from 'react';
import userImg from '../../../Assect/userImg.jpg'


const MyProfile = () => {
    return (
        <div>

            <div className="bg-[#F6F6F6] min-h-[100vh]">
                <div className="container max-w-5xl 2xl:max-w-6xl mx-auto sm:px-5 py-8 sm:py-12">
                    <div>
                        <h1 className="px-6 lg:px-10 text-3xl sm:text-2.5xl font-extrabold text-center sm:text-left">User Profile</h1>
                        <div className="sm:rounded-xl p-6 lg:p-10 mt-4 bg-white">
                            <div className="flex items-center">
                                <div className="w-[64px] md:w-[80px]">
                                    <span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative' }}>
                                        <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, paddingTop: '100%' }}></span>
                                        <img
                                            alt="user-image"
                                            src={userImg}
                                            decoding="async"
                                            data-nimg="responsive"
                                            className="rounded-full"
                                            style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                                        />
                                        <noscript>
                                            <img
                                                alt="user-image"
                                                sizes="100vw"
                                                srcset="
                                            /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FALm5wu0sQcDP95bVQLGgxP9aYqRGmeiGkqZMKKhP6tueSw%3Ds96-c&amp;w=640&amp;q=75   640w,
                                            /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FALm5wu0sQcDP95bVQLGgxP9aYqRGmeiGkqZMKKhP6tueSw%3Ds96-c&amp;w=750&amp;q=75   750w,
                                            /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FALm5wu0sQcDP95bVQLGgxP9aYqRGmeiGkqZMKKhP6tueSw%3Ds96-c&amp;w=828&amp;q=75   828w,
                                            /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FALm5wu0sQcDP95bVQLGgxP9aYqRGmeiGkqZMKKhP6tueSw%3Ds96-c&amp;w=1080&amp;q=75 1080w,
                                            /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FALm5wu0sQcDP95bVQLGgxP9aYqRGmeiGkqZMKKhP6tueSw%3Ds96-c&amp;w=1200&amp;q=75 1200w,
                                            /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FALm5wu0sQcDP95bVQLGgxP9aYqRGmeiGkqZMKKhP6tueSw%3Ds96-c&amp;w=1920&amp;q=75 1920w,
                                            /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FALm5wu0sQcDP95bVQLGgxP9aYqRGmeiGkqZMKKhP6tueSw%3Ds96-c&amp;w=2048&amp;q=75 2048w,
                                            /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FALm5wu0sQcDP95bVQLGgxP9aYqRGmeiGkqZMKKhP6tueSw%3Ds96-c&amp;w=3840&amp;q=75 3840w
                                        "
                                                src="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FALm5wu0sQcDP95bVQLGgxP9aYqRGmeiGkqZMKKhP6tueSw%3Ds96-c&amp;w=3840&amp;q=75"
                                                decoding="async"
                                                data-nimg="responsive"
                                                style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                                                className="rounded-full"
                                                loading="lazy"
                                            />
                                        </noscript>
                                    </span>
                                </div>
                                <div className="ml-6">
                                    <h2 className="text-lg lg:text-xl font-semibold">
                                        Joy
                                        Paul
                                    </h2>
                                </div>
                            </div>
                            <form method="post" className="relative">
                                <div className="mt-8 grid md:grid-cols-2 gap-x-10 gap-y-5 md:gap-y-6">
                                    <div className="group">
                                        <label className="block font-normal text-subheading-gray text-sm group-focus-within:text-dark-purple" for="firstName">First Name</label>
                                        <div className="flex h-10 mt-1 relative rounded-xl">
                                            <input
                                                className="block w-full pl-3 pr-10 py-2.5 text-gray-4 text-sm rounded-xl border focus:outline-none focus:border-[#6047D3] focus:shadow disabled:bg-gray-2 disabled:text-subtext-gray border-gray-400 shadow-sm "
                                                required=""
                                                id="firstName"
                                                type="text"
                                                name="firstName"
                                                value="Joy"
                                            />
                                            <svg
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                stroke="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-[18px] inline-block absolute right-2.5 top-[calc(50%-9px)]  group-focus-within:invisible stroke-[#611ECB]"
                                            >
                                                <circle r="10" transform="matrix(1 0 0 -1 11 11)" stroke-width="2"></circle>
                                                <path d="M6 11.9375L9.04348 15L16 8" stroke-width="2" stroke-linecap="round"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="group">
                                        <label className="block font-normal text-subheading-gray text-sm group-focus-within:text-dark-purple" for="lastName">Last Name</label>
                                        <div className="flex h-10 mt-1 relative rounded-xl">
                                            <input
                                                className="block w-full pl-3 pr-10 py-2.5 text-gray-4 text-sm rounded-xl border focus:outline-none focus:border-[#6047D3] focus:shadow disabled:bg-gray-2 disabled:text-subtext-gray border-gray-400 shadow-sm "
                                                id="lastName"
                                                type="text"
                                                name="lastName"
                                                value="Paul"
                                            />
                                            <svg
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                stroke="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-[18px] inline-block absolute right-2.5 top-[calc(50%-9px)]  group-focus-within:invisible stroke-[#611ECB]"
                                            >
                                                <circle r="10" transform="matrix(1 0 0 -1 11 11)" stroke-width="2"></circle>
                                                <path d="M6 11.9375L9.04348 15L16 8" stroke-width="2" stroke-linecap="round"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="group">
                                        <label className="block font-normal text-subheading-gray text-sm group-focus-within:text-dark-purple" for="email">Email</label>
                                        <div className="flex h-10 mt-1 relative rounded-xl">
                                            <input
                                                className="block w-full pl-3 pr-10 py-2.5 text-gray-4 text-sm rounded-xl border focus:outline-none focus:border-[#6047D3] focus:shadow disabled:bg-gray-2 disabled:text-subtext-gray border-gray-400 shadow-sm bg-[#DDE2E5]"
                                                required
                                                id="email"
                                                type="email"
                                                name="email"
                                                readonly=""
                                                disabled
                                                value="joypaul3592@gmail.com"
                                            />
                                            <p className="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5"></p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="group">
                                            <label className="block font-normal text-subheading-gray text-sm group-focus-within:text-dark-purple" for="contactNumber">Contact No.</label>
                                            <div className="flex h-10 mt-1 mb-6 relative rounded-xl border-gray-400 focus:border-[#6047D3]  border focus:shadow shadow-sm">
                                                <div className="relative text-gray-4 text-sm">

                                                    <select id="country-call-code" name="country-call-code" className="absolute w-full h-full opacity-0 disabled:bg-gray-2 cursor-pointer" tabindex="-1">
                                                        <option value="" disabled=""></option>
                                                        <option value="AF/+93">
                                                            Afghanistan
                                                            +93
                                                        </option>
                                                        <option value="AL/+355">
                                                            Albania
                                                            +355
                                                        </option>
                                                        <option value="DZ/+213">
                                                            Algeria
                                                            +213
                                                        </option>
                                                        <option value="AS/+1684">
                                                            American Samoa
                                                            +1684
                                                        </option>
                                                        <option value="AD/+376">
                                                            Andorra
                                                            +376
                                                        </option>
                                                        <option value="AO/+244">
                                                            Angola
                                                            +244
                                                        </option>
                                                        <option value="AI/+1264">
                                                            Anguilla
                                                            +1264
                                                        </option>
                                                        <option value="AG/+1268">
                                                            Antigua &amp; Barbuda
                                                            +1268
                                                        </option>
                                                        <option value="AR/+54">
                                                            Argentina
                                                            +54
                                                        </option>
                                                        <option value="AM/+374">
                                                            Armenia
                                                            +374
                                                        </option>
                                                        <option value="AW/+297">
                                                            Aruba
                                                            +297
                                                        </option>
                                                        <option value="AU/+61">
                                                            Australia
                                                            +61
                                                        </option>
                                                        <option value="AT/+43">
                                                            Austria
                                                            +43
                                                        </option>
                                                        <option value="AZ/+994">
                                                            Azerbaijan
                                                            +994
                                                        </option>
                                                        <option value="BS/+1242">
                                                            Bahamas
                                                            +1242
                                                        </option>
                                                        <option value="BH/+973">
                                                            Bahrain
                                                            +973
                                                        </option>
                                                        <option value="BD/+880" selected>
                                                            Bangladesh
                                                            +880
                                                        </option>
                                                        <option value="BB/+1246">
                                                            Barbados
                                                            +1246
                                                        </option>
                                                        <option value="BY/+375">
                                                            Belarus
                                                            +375
                                                        </option>
                                                        <option value="BE/+32">
                                                            Belgium
                                                            +32
                                                        </option>
                                                        <option value="BZ/+501">
                                                            Belize
                                                            +501
                                                        </option>
                                                        <option value="BJ/+229">
                                                            Benin
                                                            +229
                                                        </option>
                                                        <option value="BM/+1441">
                                                            Bermuda
                                                            +1441
                                                        </option>
                                                        <option value="BT/+975">
                                                            Bhutan
                                                            +975
                                                        </option>
                                                        <option value="BO/+591">
                                                            Bolivia
                                                            +591
                                                        </option>
                                                        <option value="BQ/+5997">
                                                            Bonaire
                                                            +5997
                                                        </option>
                                                        <option value="BA/+387">
                                                            Bosnia and Herzegovina
                                                            +387
                                                        </option>
                                                        <option value="BW/+267">
                                                            Botswana
                                                            +267
                                                        </option>
                                                        <option value="BR/+55">
                                                            Brazil
                                                            +55
                                                        </option>
                                                        <option value="BN/+673">
                                                            Brunei
                                                            +673
                                                        </option>
                                                        <option value="BG/+359">
                                                            Bulgaria
                                                            +359
                                                        </option>
                                                        <option value="BF/+226">
                                                            Burkina Faso
                                                            +226
                                                        </option>
                                                        <option value="BI/+257">
                                                            Burundi
                                                            +257
                                                        </option>
                                                        <option value="KH/+855">
                                                            Cambodia
                                                            +855
                                                        </option>
                                                        <option value="CM/+237">
                                                            Cameroon
                                                            +237
                                                        </option>
                                                        <option value="CA/+1">
                                                            Canada
                                                            +1
                                                        </option>
                                                        <option value="CV/+238">
                                                            Cape Verde
                                                            +238
                                                        </option>
                                                        <option value="KY/+1345">
                                                            Cayman Islands
                                                            +1345
                                                        </option>
                                                        <option value="TD/+235">
                                                            Chad
                                                            +235
                                                        </option>
                                                        <option value="CL/+56">
                                                            Chile
                                                            +56
                                                        </option>
                                                        <option value="CN/+86">
                                                            China
                                                            +86
                                                        </option>
                                                        <option value="CO/+57">
                                                            Colombia
                                                            +57
                                                        </option>
                                                        <option value="CG/+242">
                                                            Congo
                                                            +242
                                                        </option>
                                                        <option value="CK/+682">
                                                            Cook Islands
                                                            +682
                                                        </option>
                                                        <option value="CR/+506">
                                                            Costa Rica
                                                            +506
                                                        </option>
                                                        <option value="HR/+385">
                                                            Croatia
                                                            +385
                                                        </option>
                                                        <option value="CW/+5999">
                                                            Curacao
                                                            +5999
                                                        </option>
                                                        <option value="CY/+357">
                                                            Cyprus
                                                            +357
                                                        </option>
                                                        <option value="CZ/+420">
                                                            Czech Republic
                                                            +420
                                                        </option>
                                                        <option value="CD/+243">
                                                            Democratic Republic of the Congo
                                                            +243
                                                        </option>
                                                        <option value="DK/+45">
                                                            Denmark
                                                            +45
                                                        </option>
                                                        <option value="DJ/+253">
                                                            Djibouti
                                                            +253
                                                        </option>
                                                        <option value="DM/+1767">
                                                            Dominica
                                                            +1767
                                                        </option>
                                                        <option value="DO/+1849">
                                                            Dominican Republic
                                                            +1849
                                                        </option>
                                                        <option value="TL/+670">
                                                            East Timor
                                                            +670
                                                        </option>
                                                        <option value="EC/+593">
                                                            Ecuador
                                                            +593
                                                        </option>
                                                        <option value="EG/+20">
                                                            Egypt
                                                            +20
                                                        </option>
                                                        <option value="SV/+503">
                                                            El Salvador
                                                            +503
                                                        </option>
                                                        <option value="ER/+291">
                                                            Eritrea
                                                            +291
                                                        </option>
                                                        <option value="EE/+372">
                                                            Estonia
                                                            +372
                                                        </option>
                                                        <option value="SZ/+268">
                                                            Eswatini
                                                            +268
                                                        </option>
                                                        <option value="ET/+251">
                                                            Ethiopia
                                                            +251
                                                        </option>
                                                        <option value="FO/+298">
                                                            Faroe Islands
                                                            +298
                                                        </option>
                                                        <option value="FJ/+679">
                                                            Fiji
                                                            +679
                                                        </option>
                                                        <option value="FI/+358">
                                                            Finland
                                                            +358
                                                        </option>
                                                        <option value="FR/+33">
                                                            France
                                                            +33
                                                        </option>
                                                        <option value="GF/+594">
                                                            French Guiana
                                                            +594
                                                        </option>
                                                        <option value="PF/+689">
                                                            French Polynesia
                                                            +689
                                                        </option>
                                                        <option value="GA/+241">
                                                            Gabon
                                                            +241
                                                        </option>
                                                        <option value="GM/+220">
                                                            Gambia
                                                            +220
                                                        </option>
                                                        <option value="GE/+995">
                                                            Georgia
                                                            +995
                                                        </option>
                                                        <option value="DE/+49">
                                                            Germany
                                                            +49
                                                        </option>
                                                        <option value="GH/+233">
                                                            Ghana
                                                            +233
                                                        </option>
                                                        <option value="GI/+350">
                                                            Gibraltar
                                                            +350
                                                        </option>
                                                        <option value="GR/+30">
                                                            Greece
                                                            +30
                                                        </option>
                                                        <option value="GL/+299">
                                                            Greenland
                                                            +299
                                                        </option>
                                                        <option value="GD/+1473">
                                                            Grenada
                                                            +1473
                                                        </option>
                                                        <option value="GP/+590">
                                                            Guadeloupe
                                                            +590
                                                        </option>
                                                        <option value="GU/+1671">
                                                            Guam
                                                            +1671
                                                        </option>
                                                        <option value="GT/+502">
                                                            Guatemala
                                                            +502
                                                        </option>
                                                        <option value="GN/+224">
                                                            Guinea
                                                            +224
                                                        </option>
                                                        <option value="GY/+592">
                                                            Guyana
                                                            +592
                                                        </option>
                                                        <option value="HT/+509">
                                                            Haiti
                                                            +509
                                                        </option>
                                                        <option value="HN/+504">
                                                            Honduras
                                                            +504
                                                        </option>
                                                        <option value="HK/+852">
                                                            Hong Kong
                                                            +852
                                                        </option>
                                                        <option value="HU/+36">
                                                            Hungary
                                                            +36
                                                        </option>
                                                        <option value="IS/+354">
                                                            Iceland
                                                            +354
                                                        </option>
                                                        <option value="IN/+91">
                                                            India
                                                            +91
                                                        </option>
                                                        <option value="ID/+62">
                                                            Indonesia
                                                            +62
                                                        </option>
                                                        <option value="IQ/+964">
                                                            Iraq
                                                            +964
                                                        </option>
                                                        <option value="IE/+353">
                                                            Ireland
                                                            +353
                                                        </option>
                                                        <option value="IL/+972">
                                                            Israel
                                                            +972
                                                        </option>
                                                        <option value="IT/+39">
                                                            Italy
                                                            +39
                                                        </option>
                                                        <option value="CI/+225">
                                                            Ivory Coast / Cote d&#x27;Ivoire
                                                            +225
                                                        </option>
                                                        <option value="JM/+1876">
                                                            Jamaica
                                                            +1876
                                                        </option>
                                                        <option value="JP/+81">
                                                            Japan
                                                            +81
                                                        </option>
                                                        <option value="JO/+962">
                                                            Jordan
                                                            +962
                                                        </option>
                                                        <option value="KZ/+77">
                                                            Kazakhstan
                                                            +77
                                                        </option>
                                                        <option value="KE/+254">
                                                            Kenya
                                                            +254
                                                        </option>
                                                        <option value="KW/+965">
                                                            Kuwait
                                                            +965
                                                        </option>
                                                        <option value="KG/+996">
                                                            Kyrgyzstan
                                                            +996
                                                        </option>
                                                        <option value="LA/+856">
                                                            Laos
                                                            +856
                                                        </option>
                                                        <option value="LV/+371">
                                                            Latvia
                                                            +371
                                                        </option>
                                                        <option value="LB/+961">
                                                            Lebanon
                                                            +961
                                                        </option>
                                                        <option value="LS/+266">
                                                            Lesotho
                                                            +266
                                                        </option>
                                                        <option value="LR/+231">
                                                            Liberia
                                                            +231
                                                        </option>
                                                        <option value="LY/+218">
                                                            Libya
                                                            +218
                                                        </option>
                                                        <option value="LI/+423">
                                                            Liechtenstein
                                                            +423
                                                        </option>
                                                        <option value="LT/+370">
                                                            Lithuania
                                                            +370
                                                        </option>
                                                        <option value="LU/+352">
                                                            Luxembourg
                                                            +352
                                                        </option>
                                                        <option value="MO/+853">
                                                            Macau
                                                            +853
                                                        </option>
                                                        <option value="MK/+389">
                                                            Macedonia
                                                            +389
                                                        </option>
                                                        <option value="MG/+261">
                                                            Madagascar
                                                            +261
                                                        </option>
                                                        <option value="MW/+265">
                                                            Malawi
                                                            +265
                                                        </option>
                                                        <option value="MY/+60">
                                                            Malaysia
                                                            +60
                                                        </option>
                                                        <option value="MV/+960">
                                                            Maldives
                                                            +960
                                                        </option>
                                                        <option value="ML/+223">
                                                            Mali
                                                            +223
                                                        </option>
                                                        <option value="MT/+356">
                                                            Malta
                                                            +356
                                                        </option>
                                                        <option value="MH/+692">
                                                            Marshall Islands
                                                            +692
                                                        </option>
                                                        <option value="MQ/+596">
                                                            Martinique
                                                            +596
                                                        </option>
                                                        <option value="MR/+222">
                                                            Mauritania
                                                            +222
                                                        </option>
                                                        <option value="MU/+230">
                                                            Mauritius
                                                            +230
                                                        </option>
                                                        <option value="MX/+52">
                                                            Mexico
                                                            +52
                                                        </option>
                                                        <option value="FM/+691">
                                                            Micronesia
                                                            +691
                                                        </option>
                                                        <option value="MD/+373">
                                                            Moldova
                                                            +373
                                                        </option>
                                                        <option value="MC/+377">
                                                            Monaco
                                                            +377
                                                        </option>
                                                        <option value="MN/+976">
                                                            Mongolia
                                                            +976
                                                        </option>
                                                        <option value="ME/+382">
                                                            Montenegro
                                                            +382
                                                        </option>
                                                        <option value="MS/+1664">
                                                            Montserrat
                                                            +1664
                                                        </option>
                                                        <option value="MA/+212">
                                                            Morocco
                                                            +212
                                                        </option>
                                                        <option value="MZ/+258">
                                                            Mozambique
                                                            +258
                                                        </option>
                                                        <option value="NA/+264">
                                                            Namibia
                                                            +264
                                                        </option>
                                                        <option value="NP/+977">
                                                            Nepal
                                                            +977
                                                        </option>
                                                        <option value="NL/+31">
                                                            Netherlands
                                                            +31
                                                        </option>
                                                        <option value="AN/+599">
                                                            Netherlands Antilles
                                                            +599
                                                        </option>
                                                        <option value="NC/+687">
                                                            New Caledonia
                                                            +687
                                                        </option>
                                                        <option value="NZ/+64">
                                                            New Zealand
                                                            +64
                                                        </option>
                                                        <option value="NI/+505">
                                                            Nicaragua
                                                            +505
                                                        </option>
                                                        <option value="NE/+227">
                                                            Niger
                                                            +227
                                                        </option>
                                                        <option value="NG/+234">
                                                            Nigeria
                                                            +234
                                                        </option>
                                                        <option value="MP/+1670">
                                                            Northern Mariana Islands
                                                            +1670
                                                        </option>
                                                        <option value="NO/+47">
                                                            Norway
                                                            +47
                                                        </option>
                                                        <option value="OM/+968">
                                                            Oman
                                                            +968
                                                        </option>
                                                        <option value="PK/+92">
                                                            Pakistan
                                                            +92
                                                        </option>
                                                        <option value="PW/+680">
                                                            Palau
                                                            +680
                                                        </option>
                                                        <option value="PS/+970">
                                                            Palestine
                                                            +970
                                                        </option>
                                                        <option value="PA/+507">
                                                            Panama
                                                            +507
                                                        </option>
                                                        <option value="PG/+675">
                                                            Papua New Guinea
                                                            +675
                                                        </option>
                                                        <option value="PY/+595">
                                                            Paraguay
                                                            +595
                                                        </option>
                                                        <option value="PE/+51">
                                                            Peru
                                                            +51
                                                        </option>
                                                        <option value="PH/+63">
                                                            Philippines
                                                            +63
                                                        </option>
                                                        <option value="PL/+48">
                                                            Poland
                                                            +48
                                                        </option>
                                                        <option value="PT/+351">
                                                            Portugal
                                                            +351
                                                        </option>
                                                        <option value="QA/+974">
                                                            Qatar
                                                            +974
                                                        </option>
                                                        <option value="RO/+40">
                                                            Romania
                                                            +40
                                                        </option>
                                                        <option value="RU/+7">
                                                            Russia
                                                            +7
                                                        </option>
                                                        <option value="RW/+250">
                                                            Rwanda
                                                            +250
                                                        </option>
                                                        <option value="KN/+1869">
                                                            Saint Kitts and Nevis
                                                            +1869
                                                        </option>
                                                        <option value="LC/+1758">
                                                            Saint Lucia
                                                            +1758
                                                        </option>
                                                        <option value="SX/+1721">
                                                            Saint Maarten
                                                            +1721
                                                        </option>
                                                        <option value="MF/+590">
                                                            Saint Martin
                                                            +590
                                                        </option>
                                                        <option value="VC/+1784">
                                                            Saint Vincent and the Grenadines
                                                            +1784
                                                        </option>
                                                        <option value="WS/+685">
                                                            Samoa
                                                            +685
                                                        </option>
                                                        <option value="SA/+966">
                                                            Saudi Arabia
                                                            +966
                                                        </option>
                                                        <option value="SN/+221">
                                                            Senegal
                                                            +221
                                                        </option>
                                                        <option value="RS/+381">
                                                            Serbia
                                                            +381
                                                        </option>
                                                        <option value="SC/+248">
                                                            Seychelles
                                                            +248
                                                        </option>
                                                        <option value="SG/+65">
                                                            Singapore
                                                            +65
                                                        </option>
                                                        <option value="SK/+421">
                                                            Slovakia
                                                            +421
                                                        </option>
                                                        <option value="SI/+386">
                                                            Slovenia
                                                            +386
                                                        </option>
                                                        <option value="ZA/+27">
                                                            South Africa
                                                            +27
                                                        </option>
                                                        <option value="KR/+82">
                                                            South Korea
                                                            +82
                                                        </option>
                                                        <option value="ES/+34">
                                                            Spain
                                                            +34
                                                        </option>
                                                        <option value="LK/+94">
                                                            Sri Lanka
                                                            +94
                                                        </option>
                                                        <option value="SR/+597">
                                                            Suriname
                                                            +597
                                                        </option>
                                                        <option value="SE/+46">
                                                            Sweden
                                                            +46
                                                        </option>
                                                        <option value="CH/+41">
                                                            Switzerland
                                                            +41
                                                        </option>
                                                        <option value="SY/+963">
                                                            Syrian Arab Republic
                                                            +963
                                                        </option>
                                                        <option value="TW/+886">
                                                            Taiwan
                                                            +886
                                                        </option>
                                                        <option value="TZ/+255">
                                                            Tanzania, United Republic of Tanzania
                                                            +255
                                                        </option>
                                                        <option value="TH/+66">
                                                            Thailand
                                                            +66
                                                        </option>
                                                        <option value="TG/+228">
                                                            Togo
                                                            +228
                                                        </option>
                                                        <option value="TO/+676">
                                                            Tonga
                                                            +676
                                                        </option>
                                                        <option value="TT/+1868">
                                                            Trinidad and Tobago
                                                            +1868
                                                        </option>
                                                        <option value="TN/+216">
                                                            Tunisia
                                                            +216
                                                        </option>
                                                        <option value="TR/+90">
                                                            Turkey
                                                            +90
                                                        </option>
                                                        <option value="TC/+1649">
                                                            Turks and Caicos Islands
                                                            +1649
                                                        </option>
                                                        <option value="UG/+256">
                                                            Uganda
                                                            +256
                                                        </option>
                                                        <option value="UA/+380">
                                                            Ukraine
                                                            +380
                                                        </option>
                                                        <option value="AE/+971">
                                                            United Arab Emirates
                                                            +971
                                                        </option>
                                                        <option value="GB/+44">
                                                            United Kingdom
                                                            +44
                                                        </option>
                                                        <option value="US/+1">
                                                            United States
                                                            +1
                                                        </option>
                                                        <option value="UY/+598">
                                                            Uruguay
                                                            +598
                                                        </option>
                                                        <option value="UZ/+998">
                                                            Uzbekistan
                                                            +998
                                                        </option>
                                                        <option value="VU/+678">
                                                            Vanuatu
                                                            +678
                                                        </option>
                                                        <option value="VE/+58">
                                                            Venezuela
                                                            +58
                                                        </option>
                                                        <option value="VN/+84">
                                                            Vietnam
                                                            +84
                                                        </option>
                                                        <option value="VG/+1284">
                                                            Virgin Islands, British
                                                            +1284
                                                        </option>
                                                        <option value="VI/+1340">
                                                            Virgin Islands, U.S.
                                                            +1340
                                                        </option>
                                                        <option value="WF/+681">
                                                            Wallis and Futuna
                                                            +681
                                                        </option>
                                                        <option value="YE/+967">
                                                            Yemen
                                                            +967
                                                        </option>
                                                        <option value="ZM/+260">
                                                            Zambia
                                                            +260
                                                        </option>
                                                        <option value="ZW/+263">
                                                            Zimbabwe
                                                            +263
                                                        </option>
                                                    </select>
                                                    <div className="h-full flex items-center min-w-[40px] px-3 justify-center" aria-hidden="true">+880</div>
                                                </div>
                                                <hr className="h-2/3 self-center border-l border-border-gray group-focus-within:border-light-purple" />
                                                <input type="tel" id="contactNumber" className="block w-full pl-3 pr-10 py-2.5 text-gray-4 disabled:bg-gray-2 text-sm rounded-xl focus:outline-none" value="01732023548" />
                                                <svg
                                                    viewBox="0 0 22 22"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-[18px] inline-block absolute right-0.5 top-[50%] -translate-y-[50%] group-focus-within:invisible mr-2 stroke-[#611ECB]"
                                                >
                                                    <circle r="10" transform="matrix(1 0 0 -1 11 11)" stroke-width="2"></circle>
                                                    <path d="M6 11.9375L9.04348 15L16 8" stroke-width="2" stroke-linecap="round"></path>
                                                </svg>
                                                <p className="min-h-[1rem] text-xs text-error-red absolute top-10 "></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center"></div>
                                <div className="flex mt-4">
                                    <button
                                        className="rounded-full font-bold focus:outline-light-purple whitespace-nowrap px-12 py-4 bg-light-purple hover:bg-dark-purple disabled:bg-disabled-purple bg-[#C3B1F3] text-white w-50 mx-auto "
                                        type="submit"
                                        disabled=""
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="mt-8 md:mt-12">
                        <h1 className="px-6 lg:px-10 text-2xl sm:text-2.5xl font-bold text-center sm:text-left">Sender Addresses</h1>
                        <div className="sm:rounded-xl p-6 lg:p-10 mt-4 bg-white">
                            <form action="#">
                                <div className="divide-y divide-border-gray space-y-2"></div>
                                <div className="mt-4" id="add-sender-address-btn">
                                    <button
                                        type="button"
                                        className="pill-button group flex justify-center items-center bg-[#efe8fe] hover:bg-[#C3B1F3] rounded-3xl border-transparent font-normal text-sm text-dark-purple w-full h-10 shadow-none focus:outline-light-purple"
                                    >
                                        <svg width="19" height="19" className="group-hover:stroke-white stroke-[#844FFA] text-[#844FFA] mx-2" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="14" cy="14" r="13" stroke="currentColor" stroke-width="2"></circle>
                                            <line x1="7.22266" y1="13.1353" x2="20.44" y2="13.1353" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line>
                                            <line x1="14.3574" y1="7.22217" x2="14.3574" y2="20.4396" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line>
                                        </svg>

                                    </button>
                                </div>
                                <div className="flex justify-center"></div>
                                <div className="flex mt-8">
                                    <button
                                        className="rounded-full font-bold focus:outline-light-purple whitespace-nowrap px-12 py-4 bg-light-purple hover:bg-dark-purple disabled:bg-disabled-purple bg-[#C3B1F3] text-white w-50 mx-auto "
                                        type="submit"
                                        disabled=""
                                    >
                                        Save Addresses
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="mt-8 md:mt-12">
                        <h1 className="px-6 lg:px-10 text-2xl sm:text-2.5xl font-bold text-center sm:text-left">Saved Recipients</h1>
                        <div className="sm:rounded-xl p-6 lg:p-10 mt-4 bg-white">
                            <form action="#">
                                <div className="divide-y divide-border-gray space-y-2"></div>
                                <div className="mt-4" id="add-sender-address-btn">
                                    <button
                                        type="button"
                                        className="pill-button group flex justify-center items-center bg-[#efe8fe] hover:bg-[#C3B1F3] rounded-3xl border-transparent font-normal text-sm text-dark-purple w-full h-10 shadow-none focus:outline-light-purple"
                                    >
                                        <svg width="19" height="19" className="group-hover:stroke-white stroke-[#844FFA] text-[#844FFA] mx-2" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="14" cy="14" r="13" stroke="currentColor" stroke-width="2"></circle>
                                            <line x1="7.22266" y1="13.1353" x2="20.44" y2="13.1353" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line>
                                            <line x1="14.3574" y1="7.22217" x2="14.3574" y2="20.4396" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line>
                                        </svg>

                                    </button>
                                </div>
                                <div className="flex justify-center"></div>
                                <div className="flex mt-8">
                                    <button
                                        className="rounded-full font-bold focus:outline-light-purple whitespace-nowrap px-12 py-4 bg-light-purple hover:bg-dark-purple disabled:bg-disabled-purple bg-[#C3B1F3] text-white w-50 mx-auto "
                                        type="submit"
                                        disabled=""
                                    >
                                        Save Recipients
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="mt-8 md:mt-12">
                        <h1 className="px-6 lg:px-10 text-2xl sm:text-2.5xl font-bold text-center sm:text-left">Boxes</h1>
                        <div className="sm:rounded-xl p-6 lg:p-10 mt-4 bg-white">
                            <p className="text-xs text-subtext-gray mb-4">Save boxes you use regularly here for quick retrieval on the shipment form.</p>
                            <form action="#">
                                <div className="divide-y divide-border-gray space-y-2">
                                    <div className="relative pt-4 -mt-4" id="user-box-0">
                                        <h4 className="font-semibold text-base text-[#611ECB]">okk</h4>
                                        <div
                                            className="rounded-full group flex items-center my-auto border border-light-purple hover:border-dark-purple bg-transparent hover:bg-dark-purple w-[24px] h-[24px] hover:cursor-pointer absolute top-4 right-0  text-[#844FFA] border-[#844FFA]  stroke-[#844FFA] "
                                            title="Remove this box"
                                            id="user-box-0-remove-btn"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto w-3/4   text-[#844FFA] border-[#844FFA]  stroke-[#844FFA] group-hover:stroke-white" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
                                                <path className=' text-[#844FFA] border-[#844FFA]  stroke-[#844FFA]  ' stroke-linecap="round" stroke-linejoin="round" d="M20 12H4"></path>
                                            </svg>
                                        </div>
                                        <div className="mt-5 sm:mt-3 grid grid-cols-3 sm:grid-cols-5 gap-x-6 sm:gap-x-8 xl:gap-x-10">
                                            <div className="col-span-full sm:col-span-2">
                                                <div className="group">
                                                    <label className="block font-normal text-subheading-gray text-sm group-focus-within:text-dark-purple" for="boxes[0].name">Name</label>
                                                    <div className="mt-1 relative rounded-xl">
                                                        <input
                                                            className="block w-full h-10 pl-3 pr-8 py-2.5 text-gray-4 text-sm rounded-xl border focus:outline-none focus:border-light-purple focus:shadow-border-focus disabled:bg-gray-2 disabled:text-subtext-gray placeholder:text-placeholder-gray border-border-dark-gray shadow-border"
                                                            name="boxes[0].name"
                                                            type="text"
                                                            placeholder="My nice box 1"
                                                            value="okk"
                                                        />
                                                    </div>
                                                    <p className="min-h-[1rem] text-xs text-error-red  mt-0.5 ml-0.5"></p>
                                                </div>
                                            </div>
                                            <div className="col-span-1">
                                                <div className="group">
                                                    <label className="block font-normal text-subheading-gray text-sm group-focus-within:text-dark-purple" for="boxes[0].length">Length (cm)</label>
                                                    <div className="mt-1 relative rounded-xl">
                                                        <input
                                                            className="block w-full h-10 pl-3 pr-8 py-2.5 text-gray-4 text-sm rounded-xl border focus:outline-none focus:border-light-purple focus:shadow-border-focus disabled:bg-gray-2 disabled:text-subtext-gray placeholder:text-placeholder-gray border-border-dark-gray shadow-border"
                                                            name="boxes[0].length"
                                                            type="number"
                                                            value="45"
                                                        />
                                                    </div>
                                                    <p className="min-h-[1rem] text-xs text-error-red  mt-0.5 ml-0.5"></p>
                                                </div>
                                            </div>
                                            <div className="col-span-1">
                                                <div className="group">
                                                    <label className="block font-normal text-subheading-gray text-sm group-focus-within:text-dark-purple" for="boxes[0].width">Width</label>
                                                    <div className="mt-1 relative rounded-xl">
                                                        <input
                                                            className="block w-full h-10 pl-3 pr-8 py-2.5 text-gray-4 text-sm rounded-xl border focus:outline-none focus:border-light-purple focus:shadow-border-focus disabled:bg-gray-2 disabled:text-subtext-gray placeholder:text-placeholder-gray border-border-dark-gray shadow-border"
                                                            name="boxes[0].width"
                                                            type="number"
                                                            value="15"
                                                        />
                                                    </div>
                                                    <p className="min-h-[1rem] text-xs text-error-red  mt-0.5 ml-0.5"></p>
                                                </div>
                                            </div>
                                            <div className="col-span-1">
                                                <div className="group">
                                                    <label className="block font-normal text-subheading-gray text-sm group-focus-within:text-dark-purple" for="boxes[0].height">Height</label>
                                                    <div className="mt-1 relative rounded-xl">
                                                        <input
                                                            className="block w-full h-10 pl-3 pr-8 py-2.5 text-gray-4 text-sm rounded-xl border focus:outline-none focus:border-light-purple focus:shadow-border-focus disabled:bg-gray-2 disabled:text-subtext-gray placeholder:text-placeholder-gray border-border-dark-gray shadow-border"
                                                            name="boxes[0].height"
                                                            type="number"
                                                            value="15"
                                                        />
                                                    </div>
                                                    <p className="min-h-[1rem] text-xs text-error-red  mt-0.5 ml-0.5"></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4" id="add-user-box-btn">
                                    <button
                                        type="button"
                                        className="pill-button group flex justify-center items-center bg-[#efe8fe] hover:bg-[#C3B1F3] rounded-3xl border-transparent font-normal text-sm text-dark-purple w-full h-10 shadow-none focus:outline-light-purple"
                                    >
                                        <svg width="19" height="19" className="group-hover:stroke-white text-[#844FFA]  stroke-[#844FFA] mx-2" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="14" cy="14" r="13" stroke="currentColor" stroke-width="2"></circle>
                                            <line x1="7.22266" y1="13.1353" x2="20.44" y2="13.1353" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line>
                                            <line x1="14.3574" y1="7.22217" x2="14.3574" y2="20.4396" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line>
                                        </svg>

                                    </button>
                                </div>
                                <div className="flex justify-center"></div>
                                <div className="flex mt-8">
                                    <button
                                        className="rounded-full font-bold focus:outline-light-purple whitespace-nowrap px-12 py-4 bg-light-purple hover:bg-dark-purple disabled:bg-disabled-purple text-white w-50 mx-auto "
                                        type="submit"
                                        disabled=""
                                    >
                                        Save Boxes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MyProfile;