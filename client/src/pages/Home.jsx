import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { VscAdd } from "react-icons/vsc";
import { SlLocationPin } from "react-icons/sl";
import { CiMenuKebab } from "react-icons/ci";
import { BiTransfer, BiHeart } from "react-icons/bi";
import { TfiLocationPin } from "react-icons/tfi";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { useGlobalContext } from "../context/context";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const {
    scrollHeader,
    handleModal,
    openModal,
    scrollButton,
    getFeaturedProperty,
    featuredProperty,
  } = useGlobalContext();

  useEffect(() => {
    getFeaturedProperty();
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      {scrollButton && <ScrollToTop />}
      {openModal && <Modal />}

      <header
        className={
          scrollHeader
            ? "fixed top-0 left-0 z-[99] w-full bg-white shadow-md transition-all hidden md:block"
            : "fixed top-0 left-0 z-[99] w-full bg-transparent transition-all hidden md:block"
        }
      >
        <nav className="flex items-center justify-between px-8 py-6">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={scrollHeader ? "/images/logo-2.png" : "/images/logo.png"}
              className="w-full h-full"
              alt="house-logo"
            />
            <span
              className={
                scrollHeader
                  ? "text-[#484848] text-xl font-semibold"
                  : "text-white text-xl font-semibold"
              }
            >
              FindHouse
            </span>
          </Link>
          <ul className="flex items-center justify-between gap-10">
            <li>
              <Link
                className={
                  scrollHeader
                    ? "text-[#484848] font-medium text-base hover:text-[#ff5a5f]"
                    : "text-white font-medium text-base hover:text-[#ff5a5f]"
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={
                  scrollHeader
                    ? "text-[#484848] font-medium text-base hover:text-[#ff5a5f]"
                    : "text-white font-medium text-base hover:text-[#ff5a5f]"
                }
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className={
                  scrollHeader
                    ? "text-[#484848] font-medium text-base hover:text-[#ff5a5f]"
                    : "text-white font-medium text-base hover:text-[#ff5a5f]"
                }
              >
                Contact
              </Link>
            </li>
            <li>
              <button
                onClick={handleModal}
                data-modal-target="defaultModal"
                data-modal-toggle="defaultModal"
                className={
                  scrollHeader
                    ? "text-[#484848] font-medium text-base flex items-center gap-1 hover:text-[#ff5a5f]"
                    : "text-white font-medium text-base flex items-center gap-1 hover:text-[#ff5a5f]"
                }
              >
                <BiUser size={20} />
                <span>Login/Register</span>
              </button>
            </li>
            <li>
              <Link
                className={
                  scrollHeader
                    ? "px-6 border-2 py-3 flex items-center bg-[#ff5a5f] rounded-3xl text-white font-medium text-base gap-1 transition hover:border-[#ff5a5f] hover:bg-white hover:text-[#ff5a5f]"
                    : "px-6 border-2 py-3 flex items-center bg-white rounded-3xl text-[#ff5a5f] font-medium text-base gap-1 transition hover:border-[#ff5a5f]"
                }
              >
                <VscAdd size={20} />
                <span>Create Listing</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className="home-section py-32 md:py-52 px-8 md:px-0">
        <div className="max-w-6xl relative z-[1] flex flex-col items-center justify-center mx-auto">
          <h3 className="text-white text-center text-3xl whitespace-nowrap md:text-6xl font-bold mb-3">
            Find Your Dream Home
          </h3>
          <span className="text-white text-center md:text-base font-medium">
            From as low as $10 per day with limited time offer discounts.
          </span>
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              type="button"
              className="buy-button relative w-24 rounded-md bg-[#ff5a5f] px-5 py-3 text-white font-medium"
            >
              Buy
            </button>
            <button
              type="button"
              className="w-24 rounded-md bg-white px-5 py-3 text-[#ff5a5f] font-medium"
            >
              Rent
            </button>
          </div>
          <div className="search-box w-full relative bg-white rounded-md mt-8 px-4 py-6">
            <div className="flex flex-col items-center md:flex-row gap-3">
              <input
                type="text"
                className="text-[#484848] text-sm w-full md:w-52 rounded-md border border-[#ebebeb] p-3 font-medium outline-none"
                placeholder="Enter Keyword"
              />
              <select
                name=""
                className="text-[#484848] text-sm w-full md:w-52 rounded-md border border-[#ebebeb] px-3 py-[13px] font-medium outline-none"
              >
                <option value="">Property Type</option>
                <option value="Apartment">Apartment</option>
                <option value="Bungalow">Bungalow</option>
                <option value="Condo">Condo</option>
                <option value="Family House">Family House</option>
                <option value="Land">Land</option>
              </select>
              <div className="flex items-center justify-between rounded-md w-full md:w-52 p-3 border border-[#ebebeb]">
                <input
                  type="text"
                  placeholder="Location"
                  className="outline-none text-[#484848] text-sm w-full font-medium"
                />
                <SlLocationPin size={20} />
              </div>
              <input
                type="tel"
                className="text-[#484848] text-sm w-full md:w-52 rounded-md border border-[#ebebeb] p-3 font-medium outline-none"
                placeholder="Price"
              />
              <div className="flex items-center justify-between rounded-md w-full md:w-52 p-3 border border-[#ebebeb]">
                <input
                  type="text"
                  placeholder="Advanced"
                  className="outline-none text-[#484848] text-sm w-full font-medium"
                />
                <CiMenuKebab size={20} />
              </div>
              <button
                type="button"
                className="bg-[#ff5a5f] text-white rounded-md shadow-sm w-full md:w-36 px-4 py-3 font-medium text-sm border-2 border-[#ff5a5f] hover:text-[#ff5a5f] hover:bg-white"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="w-full bg-[#f7f7f7]">
        <div className="max-w-6xl flex flex-col gap-4 items-center justify-between mx-auto px-8 py-16 md:px-0">
          <h3 className="text-[#484848] text-center text-3xl font-semibold">
            Featured Properties
          </h3>
          <span className="text-[#484848] text-center text-sm font-medium">
            Handpicked properties by our team
          </span>
          <div className="w-full">
            <Slider {...settings} className="my-0 mx-[-16px]">
              {featuredProperty.map((item, index) => {
                const imagePathWithForwardslashes = item.images[0].replace(/\\/g, '/');
                return (
                  <div key={index} className="py-0 px-3">
                    <div className="bg-white shadow-sm border border-[#ebebeb] rounded-lg overflow-hidden relative mb-4">
                      <div className="thumb rounded-lg mt-[10px] mr-[9px] mb-[10px] ml-[9px] bg-[#1d293e] relative overflow-hidden">
                        <img
                          className="max-w-full opacity-60"
                          src={`http://localhost:8080/images/${imagePathWithForwardslashes}`}
                          alt={item.property_title}
                        />
                        <div className="thumb-content absolute top-[10px] left-[10px] bottom-0 right-[10px]">
                          <div className="flex items-center gap-3 mt-[10px] ml-[5px]">
                            <div className="bg-[#3e4c66] rounded text-white px-3 py-2 font-medium text-sm">Featured</div>
                            <div className="bg-[#ff5a5f] rounded text-white px-3 py-2 font-medium text-sm">{item.status}</div>
                          </div>
                          <div className="absolute bottom-[15px] w-full flex items-end justify-between ml-[5px]">
                            <h3 className="text-white font-semibold text-base">₹{item.price}</h3>
                            <div className="flex items-center gap-2">
                              <button className="bg-[#0f151f] rounded-md text-white p-3 opacity-70 transition hover:bg-[#ff5a5f]"><BiTransfer size={16}/></button>
                              <button className="bg-[#0f151f] rounded-md text-white p-3 opacity-70 transition hover:bg-[#ff5a5f]"><BiHeart size={16}/></button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-3">
                        <h3 className="text-sm font-medium text-[#ff5a5f]">{item.property_type}</h3>
                      </div>
                      <div className="pt-0 pb-3 px-3 truncate w-full">
                        <Link to={`/listing/${item._id}`} className="text-[#484848] text-base font-medium transition-colors hover:text-[#ff5a5f]">{item.property_title}</Link>
                      </div>
                      <div className="flex items-center gap-1 px-3 pb-2">
                        <TfiLocationPin size={15}/> 
                        <span className="text-sm font-medium text-[#484848]">{item.location[0].address}</span>
                      </div>
                      <div className="flex items-center gap-4 p-3">
                        <span className="whitespace-nowrap text-sm font-medium text-[#484848]">Beds: {item.bedrooms}</span>
                        <span className="whitespace-nowrap text-sm font-medium text-[#484848]">Baths: {item.bathrooms}</span>
                        <span className="whitespace-nowrap text-sm font-medium text-[#484848]">Size: {item.area}</span>
                      </div>
                      <div className="border-t py-3 border-[#eee]">
                        <span className="text-sm px-3 font-medium text-[#777]">{item.year_built}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>

      {/* find properties section */}
      <section className="w-full bg-white">
        <div className="max-w-6xl flex flex-col gap-4 items-center justify-between mx-auto p-8 md:px-0">
          <h3 className="text-[#484848] text-center text-3xl font-semibold">
            Find Properties in These Cities
          </h3>
          <span className="text-[#484848] text-center text-sm font-medium">
            Properties located in your beloved cities
          </span>
        </div>
      </section>

      {/* choose us section */}
      <section className="w-full bg-[#f7f7f7]">
        <div className="max-w-6xl flex flex-col gap-4 items-center justify-between mx-auto p-8 md:px-0">
          <h3 className="text-[#484848] text-center text-3xl font-semibold">
            Why Choose Us
          </h3>
          <span className="text-[#484848] text-center text-sm font-medium">
            We provide full service at every step
          </span>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between my-4">
            <div className="w-full md:w-1/3 bg-white shadow rounded-lg px-6 py-10 flex flex-col items-center justify-center hover:shadow-lg">
              <div className="rounded-full text-center bg-[#ffe8e9] p-6 w-32 h-32">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="60.000000pt"
                  height="60.000000pt"
                  viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="#ff5a5f"
                    stroke="none"
                  >
                    <path
                      d="M777 4856 c-69 -19 -151 -80 -190 -140 -96 -147 -107 -189 -61 -225
54 -43 89 -25 143 71 45 83 80 120 133 142 130 55 274 -59 254 -200 -4 -33
-72 -160 -272 -507 -147 -254 -278 -477 -292 -495 -90 -122 -274 -97 -328 43
-31 82 -22 105 161 421 180 311 191 339 146 375 -31 26 -73 24 -98 -3 -36 -40
-343 -581 -358 -632 -46 -155 31 -327 179 -397 80 -38 146 -45 229 -24 l66 17
54 -33 54 -32 6 -76 c8 -92 216 -880 252 -950 51 -101 149 -162 270 -169 108
-5 179 21 251 92 92 93 115 206 73 368 -11 44 -19 82 -17 83 2 2 44 -20 93
-49 l90 -52 6 -485 c6 -516 6 -521 60 -645 33 -79 106 -180 174 -242 l65 -59
0 -90 0 -89 -43 -46 c-72 -74 -92 -126 -92 -238 0 -84 3 -101 28 -148 37 -70
97 -128 166 -161 l56 -26 610 0 610 0 67 33 c124 61 190 169 190 310 -1 89
-30 159 -96 230 -45 48 -46 51 -46 113 0 64 0 65 37 84 21 11 84 64 140 119
80 76 103 104 103 125 0 56 -56 94 -103 70 -12 -7 -58 -46 -103 -89 -44 -42
-107 -91 -141 -109 -71 -38 -83 -59 -83 -146 l0 -65 -575 0 -575 0 0 100 0 99
-70 56 c-118 94 -186 203 -216 344 -12 60 -14 188 -12 801 3 718 3 729 24 756
68 92 170 92 238 0 20 -26 21 -43 26 -421 6 -436 4 -425 70 -427 25 -1 40 6
57 26 l23 27 0 471 c0 411 2 474 16 504 45 95 184 100 245 8 18 -27 19 -56 19
-506 l0 -477 23 -27 c28 -32 78 -37 105 -10 15 15 17 66 22 556 5 524 6 539
26 566 35 48 70 67 117 67 56 0 104 -27 128 -73 18 -33 19 -67 19 -557 0 -287
3 -529 6 -538 10 -26 63 -45 93 -34 51 20 50 11 51 517 0 510 -1 500 54 551
36 34 118 40 163 12 71 -45 68 -7 71 -792 2 -690 3 -707 22 -724 11 -10 34
-18 51 -18 25 0 52 21 167 136 81 79 153 143 175 152 120 50 247 -34 247 -165
0 -21 -5 -51 -10 -67 -6 -15 -76 -93 -155 -173 -162 -163 -177 -189 -132 -234
51 -51 67 -42 239 132 191 192 203 212 203 342 0 79 -4 103 -24 142 -32 66
-93 125 -159 156 -48 23 -71 27 -142 27 -108 0 -156 -22 -257 -118 l-73 -70 0
134 1 134 211 120 c410 233 456 263 532 338 107 105 173 230 200 376 l12 64
76 45 77 44 67 -17 c84 -21 150 -14 230 24 146 69 225 240 181 392 -23 79
-563 1012 -618 1068 -67 68 -136 96 -239 95 -101 -1 -156 -21 -225 -85 -56
-52 -83 -94 -104 -167 -15 -51 -22 -59 -71 -88 l-55 -32 -49 25 c-75 38 -102
46 -521 160 -458 124 -490 128 -599 74 -71 -35 -121 -86 -158 -160 -33 -68
-33 -207 1 -271 57 -106 123 -158 246 -191 112 -30 113 -31 52 -63 l-53 -29
-367 212 c-202 117 -396 223 -430 236 -144 54 -311 57 -467 10 l-88 -28 -76
44 c-67 39 -77 48 -82 79 -19 101 -106 210 -201 251 -61 26 -163 33 -226 15z
m3548 -155 c22 -10 52 -31 66 -47 14 -16 149 -242 299 -503 296 -515 298 -520
266 -606 -54 -140 -238 -165 -329 -43 -13 18 -145 242 -292 498 -201 349 -269
475 -273 506 -16 144 133 255 263 195z m-1113 -177 c411 -110 436 -118 509
-164 25 -17 56 -30 68 -30 13 0 51 16 85 35 l63 35 11 -24 c15 -34 532 -929
543 -941 19 -20 6 -35 -71 -80 -54 -31 -81 -54 -84 -68 -3 -12 -11 -60 -20
-107 -22 -120 -71 -214 -155 -298 -57 -56 -112 -92 -346 -227 -152 -88 -281
-161 -285 -163 -5 -2 -10 171 -12 385 l-3 388 -28 57 c-16 33 -49 76 -76 100
-45 40 -49 47 -54 100 -7 70 -47 149 -98 191 -20 17 -116 76 -213 133 -172 99
-177 103 -154 117 12 8 59 36 103 62 44 26 83 52 87 59 15 23 8 76 -12 93 -16
14 -177 62 -357 108 -33 8 -94 65 -109 102 -20 46 -17 100 7 150 33 68 106
108 179 97 19 -3 209 -53 422 -110z m-1946 -175 c80 -47 98 -47 214 -3 67 26
87 29 190 28 98 0 125 -4 181 -26 97 -36 1307 -736 1330 -770 11 -14 22 -40
25 -57 6 -29 5 -31 -22 -31 -16 0 -53 -11 -83 -25 -30 -14 -55 -24 -55 -23
-18 33 -69 87 -104 109 -69 44 -140 55 -223 35 l-67 -17 -139 81 c-80 46 -151
80 -166 80 -61 0 -91 -85 -44 -127 12 -11 68 -46 125 -78 56 -31 104 -61 107
-65 12 -20 -17 -19 -57 2 -30 16 -65 24 -116 26 -66 4 -79 1 -137 -27 -70 -35
-115 -82 -142 -149 -15 -35 -22 -42 -38 -36 -110 34 -127 36 -192 20 -80 -19
-142 -62 -181 -123 -46 -72 -52 -111 -52 -320 0 -106 -2 -193 -5 -193 -3 0
-67 36 -143 80 -154 89 -187 97 -221 54 -12 -15 -21 -32 -21 -39 0 -7 20 -89
45 -182 25 -92 45 -188 45 -213 0 -59 -34 -118 -85 -148 -85 -49 -212 -12
-251 71 -8 18 -62 210 -120 427 -84 316 -106 413 -110 485 -8 133 -6 130 -78
170 l-64 36 105 182 c58 100 186 323 286 495 99 171 183 312 187 312 4 0 39
-18 76 -41z m1994 -3589 c128 -65 138 -248 18 -328 l-42 -27 -575 -3 -575 -3
-50 25 c-67 33 -99 80 -104 155 -6 89 37 157 119 190 14 6 263 10 597 10 553
1 574 0 612 -19z"
                    />
                  </g>
                </svg>
              </div>
              <h3 className="text-center text-[#484848] text-lg font-semibold mt-6 my-3">
                Trusted By Thousands
              </h3>
              <p className="text-sm text-[#484848] text-center leading-6">
                Our team of experienced real estate professionals is here to
                provide expert guidance, answer your questions, and make your
                property journey as smooth as possible.
              </p>
            </div>
            <div className="w-full md:w-1/3 bg-white shadow rounded-lg px-6 py-10 flex flex-col items-center justify-center hover:shadow-lg">
              <div className="rounded-full text-center bg-[#ffe8e9] p-6 w-32 h-32">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="60.000000pt"
                  height="60.000000pt"
                  viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="#ff5a5f"
                    stroke="none"
                  >
                    <path
                      d="M3425 4759 c-726 -65 -1333 -118 -1348 -118 -16 -1 -39 -12 -52 -26
-25 -24 -25 -26 -25 -215 0 -189 0 -191 25 -215 22 -23 32 -25 120 -25 l95 0
0 -640 0 -640 80 0 80 0 0 640 0 640 1040 0 1040 0 0 -1920 0 -1920 -260 0
c-143 0 -260 2 -260 5 0 4 8 20 17 38 12 22 17 57 17 112 1 95 -15 132 -95
219 -49 54 -52 60 -60 130 -16 146 -51 227 -129 300 -108 101 -273 100 -382
-2 -77 -72 -111 -151 -127 -289 -9 -81 -10 -84 -60 -139 -109 -119 -126 -215
-66 -356 7 -17 -17 -18 -414 -18 l-421 0 0 535 0 536 -25 24 -24 25 -271 0
-271 0 -24 -25 -25 -24 0 -536 0 -535 -120 0 -120 0 2 707 3 707 478 209 478
210 477 -209 477 -209 3 -228 2 -227 80 0 80 0 0 190 c0 105 2 190 4 190 2 0
34 -14 71 -30 81 -36 108 -37 140 -5 l25 24 0 229 c0 204 -2 232 -17 251 -26
30 -1321 594 -1353 588 -47 -8 -1315 -568 -1332 -589 -16 -18 -18 -46 -18
-250 l0 -229 25 -24 c32 -32 59 -31 140 5 37 16 69 30 71 30 2 0 4 -301 4
-670 l0 -670 -280 0 -280 0 0 680 0 680 80 0 80 0 0 80 0 80 -240 0 -240 0 0
880 0 880 880 0 880 0 0 80 0 80 -262 0 -262 0 -161 160 -161 160 -353 0 -352
0 -24 -25 c-24 -23 -25 -29 -25 -160 l0 -135 -135 0 c-131 0 -137 -1 -160 -25
l-25 -24 0 -991 0 -991 25 -24 c23 -24 29 -25 160 -25 l135 0 0 -680 0 -680
-160 0 -160 0 0 -80 0 -80 2400 0 2400 0 0 80 0 80 -160 0 -160 0 0 1920 0
1920 95 0 c88 0 98 2 120 25 l25 24 0 311 0 311 -25 24 c-19 19 -34 25 -67 24
-24 -1 -637 -55 -1363 -120z m1295 -244 l0 -195 -1280 0 -1280 0 0 85 c0 81 1
85 23 85 21 0 1342 116 2092 184 204 18 387 34 408 35 l37 1 0 -195z m-3475
-675 l80 -80 -343 0 -342 0 0 80 0 80 263 0 262 0 80 -80z m1666 -1546 c321
-141 590 -258 597 -261 8 -4 12 -37 12 -118 l0 -112 -591 258 c-325 143 -598
259 -608 259 -14 0 -1159 -495 -1192 -516 -5 -3 -9 42 -9 109 l0 114 593 261
c325 143 597 260 603 261 6 1 274 -114 595 -255z m-831 -1494 l0 -480 -160 0
-160 0 0 480 0 480 160 0 160 0 0 -480z m1500 225 c57 -29 86 -95 100 -221 10
-96 32 -144 100 -219 27 -30 52 -66 56 -80 16 -63 -22 -131 -89 -164 -39 -19
-61 -21 -225 -21 -165 0 -187 2 -227 21 -50 24 -82 61 -91 108 -10 47 2 77 56
136 70 77 90 123 100 224 5 47 13 99 19 115 37 96 125 140 201 101z"
                    />
                    <path
                      d="M2665 3895 l-25 -24 0 -271 0 -271 25 -24 24 -25 271 0 271 0 24 25
25 24 0 271 0 271 -25 24 -24 25 -271 0 -271 0 -24 -25z m455 -295 l0 -160
-160 0 -160 0 0 160 0 160 160 0 160 0 0 -160z"
                    />
                    <path
                      d="M3625 3895 l-25 -24 0 -271 0 -271 25 -24 24 -25 271 0 271 0 24 25
25 24 0 271 0 271 -25 24 -24 25 -271 0 -271 0 -24 -25z m455 -295 l0 -160
-160 0 -160 0 0 160 0 160 160 0 160 0 0 -160z"
                    />
                    <path
                      d="M505 3415 l-25 -24 0 -671 0 -671 25 -24 c23 -24 29 -25 160 -25
l135 0 0 80 0 80 -80 0 -80 0 0 560 0 560 280 0 280 0 0 -400 0 -400 80 0 80
0 0 400 0 400 360 0 360 0 0 80 0 80 -775 0 -776 0 -24 -25z"
                    />
                    <path
                      d="M2665 3015 c-24 -23 -25 -29 -25 -160 l0 -135 80 0 80 0 0 80 0 80
160 0 160 0 0 -200 0 -200 80 0 80 0 0 255 0 256 -25 24 -24 25 -271 0 -271 0
-24 -25z"
                    />
                    <path
                      d="M3625 3015 l-25 -24 0 -271 0 -271 25 -24 24 -25 271 0 271 0 24 25
25 24 0 271 0 271 -25 24 -24 25 -271 0 -271 0 -24 -25z m455 -295 l0 -160
-160 0 -160 0 0 160 0 160 160 0 160 0 0 -160z"
                    />
                    <path
                      d="M3840 2080 l0 -80 120 0 120 0 0 -160 0 -160 -120 0 -120 0 0 -80 0
-80 175 0 c173 0 176 0 200 25 l25 24 0 271 0 271 -25 24 c-24 25 -27 25 -200
25 l-175 0 0 -80z"
                    />
                    <path d="M1840 1680 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z" />
                    <path d="M800 1360 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z" />
                    <path
                      d="M2425 1255 l-25 -24 0 -231 0 -231 25 -24 24 -25 271 0 271 0 24 25
25 24 0 231 0 231 -25 24 -24 25 -271 0 -271 0 -24 -25z m455 -255 l0 -120
-160 0 -160 0 0 120 0 120 160 0 160 0 0 -120z"
                    />
                  </g>
                </svg>
              </div>
              <h3 className="text-center text-[#484848] text-lg font-semibold mt-6 my-3">
                Wide Range Of Properties
              </h3>
              <p className="text-sm text-[#484848] text-center leading-6">
                Whether you're in the market for a cozy apartment, a spacious
                family house, a commercial space, or a serene piece of land, our
                app has it all. We cater to every property type and budget.
              </p>
            </div>
            <div className="w-full md:w-1/3 bg-white shadow rounded-lg px-6 py-10 flex flex-col items-center justify-center hover:shadow-lg">
              <div className="rounded-full text-center bg-[#ffe8e9] p-6 w-32 h-32">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="60.000000pt"
                  height="60.000000pt"
                  viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="#ff5a5f"
                    stroke="none"
                  >
                    <path
                      d="M803 4899 c-39 -25 -73 -92 -73 -145 0 -108 98 -337 258 -601 100
-165 110 -197 69 -236 -13 -12 -64 -50 -114 -85 -492 -341 -908 -1120 -940
-1758 -18 -360 108 -694 357 -944 267 -269 620 -421 1068 -461 72 -6 168 -9
212 -7 75 3 84 6 106 31 31 36 31 71 -1 102 -22 23 -32 25 -117 25 -639 1
-1137 257 -1353 695 -89 181 -122 349 -112 555 31 574 388 1268 824 1597 149
113 104 103 476 103 330 0 367 4 393 38 21 28 17 76 -9 100 -23 22 -29 22
-315 22 l-292 0 0 53 c0 61 -10 83 -119 261 -124 201 -231 432 -231 498 0 15
8 18 51 18 75 0 179 -18 329 -57 232 -60 433 -58 704 8 124 31 301 57 311 47
18 -18 -89 -267 -201 -469 l-66 -119 -319 0 -320 0 -24 -25 c-30 -29 -32 -74
-6 -106 l19 -24 291 -3 291 -3 0 -42 c0 -53 38 -135 77 -167 17 -14 73 -54
124 -90 122 -84 352 -314 441 -440 37 -52 90 -137 119 -188 28 -51 60 -97 70
-102 52 -29 119 8 119 65 0 40 -103 218 -204 352 -102 138 -281 317 -416 416
-58 43 -120 89 -137 103 -53 40 -46 70 49 236 150 261 240 471 254 591 8 68
-19 132 -67 161 -28 17 -45 18 -143 13 -61 -4 -160 -18 -221 -32 -258 -60
-255 -60 -425 -59 -155 0 -172 2 -285 33 -235 64 -439 81 -502 40z"
                    />
                    <path
                      d="M3880 3529 c-476 -20 -826 -138 -901 -304 -17 -36 -19 -72 -19 -385
0 -393 0 -391 83 -467 102 -94 314 -165 612 -205 134 -18 635 -18 770 0 203
27 361 69 518 137 15 6 17 1 17 -47 0 -64 -13 -80 -105 -126 -179 -89 -451
-132 -829 -133 -120 0 -226 -4 -236 -9 -28 -15 -45 -66 -32 -95 24 -53 43 -56
279 -56 364 0 661 46 852 132 35 16 65 29 67 29 2 0 4 -24 4 -54 0 -49 -3 -57
-32 -82 -108 -90 -391 -157 -748 -175 -113 -6 -215 -15 -228 -20 -52 -21 -53
-93 0 -132 26 -20 33 -20 235 -8 332 18 570 64 715 137 26 13 50 24 53 24 3 0
5 -24 5 -53 0 -65 -23 -92 -120 -135 -156 -71 -383 -112 -694 -128 -128 -6
-142 -9 -163 -30 -32 -32 -29 -69 6 -105 34 -34 40 -34 261 -19 269 19 461 57
625 123 l85 34 0 -58 c0 -54 -2 -59 -37 -88 -110 -91 -420 -159 -793 -176
-160 -7 -184 -15 -195 -65 -8 -38 14 -76 53 -91 33 -13 356 4 506 27 305 45
521 137 591 249 l30 48 3 976 c3 1102 8 1024 -77 1104 -74 69 -247 147 -327
147 -63 0 -98 -85 -51 -127 12 -12 51 -31 87 -43 87 -29 179 -79 197 -106 19
-30 5 -56 -50 -88 -155 -91 -421 -144 -767 -153 -400 -11 -760 46 -938 148
-65 37 -83 70 -56 101 50 56 263 129 475 163 147 24 559 32 732 14 73 -8 141
-13 152 -11 27 3 65 48 65 77 0 13 -10 35 -22 49 -28 32 -98 43 -303 51 -77 3
-153 7 -170 8 -16 2 -100 0 -185 -4z m-585 -664 c432 -141 1244 -121 1591 40
l74 34 0 -55 c0 -44 -5 -59 -24 -79 -74 -74 -329 -148 -605 -175 -133 -13
-449 -13 -582 0 -276 27 -531 101 -605 175 -20 20 -24 35 -24 80 l0 55 50 -25
c27 -14 83 -36 125 -50z m-110 -270 c216 -96 544 -142 944 -132 360 9 582 50
819 154 10 4 12 -8 10 -53 -3 -58 -4 -60 -50 -90 -88 -59 -242 -107 -453 -141
-158 -26 -672 -26 -830 0 -211 34 -365 82 -453 141 -46 30 -47 32 -50 89 -2
31 -1 57 1 57 3 0 30 -11 62 -25z"
                    />
                    <path
                      d="M2740 2294 c-14 -2 -56 -9 -95 -15 -124 -20 -312 -95 -355 -141 -27
-30 -26 -73 5 -103 33 -34 60 -31 157 15 135 65 220 83 383 83 170 0 251 -19
400 -92 177 -87 306 -216 395 -396 71 -142 92 -230 93 -390 1 -103 -3 -148
-21 -218 -84 -335 -349 -592 -683 -662 -103 -22 -285 -19 -388 5 -258 62 -473
235 -595 477 -100 200 -117 452 -45 668 38 115 83 194 170 302 71 89 82 120
55 155 -19 25 -62 39 -88 29 -68 -27 -206 -219 -268 -374 -210 -525 43 -1135
563 -1354 152 -64 223 -77 412 -78 154 0 179 3 267 27 367 102 637 369 743
733 45 158 49 361 10 530 -75 325 -329 613 -645 731 -49 19 -122 41 -162 49
-73 16 -261 27 -308 19z"
                    />
                    <path
                      d="M2769 1931 c-28 -28 -29 -33 -29 -120 l0 -91 -34 0 c-92 0 -180 -61
-227 -156 -29 -58 -31 -71 -27 -131 8 -112 63 -193 163 -239 45 -21 64 -24
191 -24 130 0 144 -2 175 -23 18 -12 40 -34 47 -47 20 -39 8 -98 -27 -134
l-31 -31 -138 -3 c-130 -3 -139 -2 -172 20 -25 17 -39 37 -49 68 -22 73 -35
94 -64 105 -35 12 -74 -8 -96 -47 -12 -21 -13 -34 -2 -82 26 -115 110 -196
229 -219 l60 -11 4 -94 c3 -84 5 -96 27 -113 32 -26 77 -24 106 6 23 22 25 32
25 113 l0 89 51 7 c98 13 174 67 220 156 18 35 24 61 24 120 0 66 -4 82 -31
130 -65 115 -147 150 -352 150 l-134 0 -34 34 c-29 29 -34 41 -34 81 0 40 5
52 34 81 l34 34 144 0 c114 0 148 -3 166 -16 27 -19 52 -65 52 -97 0 -42 36
-77 80 -77 139 0 79 251 -78 326 -20 10 -61 20 -89 22 l-53 4 0 88 c0 104 -4
116 -41 135 -40 21 -57 19 -90 -14z"
                    />
                  </g>
                </svg>
              </div>
              <h3 className="text-center text-[#484848] text-lg font-semibold mt-6 my-3">
                Financing Made Easy
              </h3>
              <p className="text-sm text-[#484848] text-center leading-6">
                {" "}
                We partner with trusted financial institutions to offer mortgage
                solutions tailored to your needs. Our app provides tools to
                calculate mortgage rates, helping you understand your borrowing
                capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* articles section */}
      <section className="w-full bg-[#f7f7f7]">
        <div className="max-w-6xl flex flex-col gap-4 items-center justify-between mx-auto p-8 md:px-0">
          <h3 className="text-[#484848] text-center text-3xl font-semibold">
            Articles & Tips
          </h3>
          <span className="text-[#484848] text-center text-sm font-medium">
            Maximizing Your Hotel Booking with tips from professionals
          </span>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between my-4">
            <div className="w-full md:w-1/3 bg-white border border-[#ebebeb] rounded-lg transition hover:shadow-md">
              <div className="thumb p-3">
                <img
                  src="/images/_assets_images_blog_1.jpg"
                  className="w-full object-cover min-h-[230px] rounded-lg"
                  alt="blog"
                />
              </div>
              <h4 className="text-sm font-medium text-[#ff5a5f] p-4">
                Business
              </h4>
              <h3 className="text-lg font-semibold text-[#484848] px-4 pb-4 cursor-pointer hover:text-[#ff5a5f]">
                Skills That You Can Learn In The Real Estate Market
              </h3>
              <div className="border-t border-[#ebebeb] text-center py-4">
                <span className="w-full text-sm font-medium text-[#777]">
                  7 Aug 2023
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-white border border-[#ebebeb] rounded-lg transition hover:shadow-md">
              <div className="thumb p-3">
                <img
                  src="/images/_assets_images_blog_2.jpg"
                  className="w-[420px] object-cover min-h-[230px] rounded-lg"
                  alt="blog"
                />
              </div>
              <h4 className="text-sm font-medium text-[#ff5a5f] p-4">
                Construction
              </h4>
              <h3 className="text-lg font-semibold text-[#484848] px-4 pb-4 cursor-pointer hover:text-[#ff5a5f]">
                Bedroom Colors You will Never this Regret
              </h3>
              <div className="border-t border-[#ebebeb] text-center py-4">
                <span className="w-full text-sm font-medium text-[#777]">
                  7 Aug 2023
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-white border border-[#ebebeb] rounded-lg transition hover:shadow-md">
              <div className="thumb p-3">
                <img
                  src="/images/_assets_images_blog_3.jpg"
                  className="w-full object-cover min-h-[230px] rounded-lg"
                  alt="blog"
                />
              </div>
              <h4 className="text-sm font-medium text-[#ff5a5f] p-4">
                Finance
              </h4>
              <h3 className="text-lg font-semibold text-[#484848] px-4 pb-4 cursor-pointer hover:text-[#ff5a5f]">
                5 Essential Steps for Buying everyone Investment
              </h3>
              <div className="border-t border-[#ebebeb] text-center py-4">
                <span className="w-full text-sm font-medium text-[#777]">
                  7 Aug 2023
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* partners section */}
      <section className="w-full bg-white">
        <div className="max-w-6xl flex flex-col gap-4 items-center justify-between mx-auto p-8 md:px-0">
          <h3 className="text-[#484848] text-center text-3xl font-semibold">
            Our Partners
          </h3>
          <span className="text-[#484848] text-center text-sm font-medium">
            We only work with the best companies around the globe
          </span>
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 my-4">
            <img src="/images/_assets_images_partners_1.png" alt="company" />
            <img src="/images/_assets_images_partners_2.png" alt="company" />
            <img src="/images/_assets_images_partners_3.png" alt="company" />
            <img src="/images/_assets_images_partners_4.png" alt="company" />
            <img src="/images/_assets_images_partners_5.png" alt="company" />
          </div>
        </div>
      </section>

      {/* footer section */}
      <section className="w-full bg-[#ff5a5f]">
        <div className="max-w-6xl flex flex-col md:gap-0 gap-5 md:flex-row items-center justify-between mx-auto p-8 md:px-0">
          <div className="flex flex-col gap-2">
            <h3 className="text-white md:text-start text-center text-2xl md:text-3xl font-semibold">
              Become a Real Estate Agent
            </h3>
            <span className="text-white text-xs md:text-start text-center md:text-sm font-medium">
              We only work with the best companies around the globe
            </span>
          </div>
          <Link
            to="/register"
            type="button"
            className="bg-[#ff787c] rounded-md text-white text-base font-medium px-8 py-4 shadow-[0 1px 4px 0 rgba(255,90,95,.3)] hover:text-[#ff5a5f] hover:bg-white"
          >
            Register Now
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
