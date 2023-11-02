import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { useGlobalContext } from "../context/context";

import { Link, useParams } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { VscAdd } from "react-icons/vsc";
import { TfiLocationPin } from "react-icons/tfi";
import {
  BiTransfer,
  BiHeart,
  BiShareAlt,
  BiPrinter,
  BiChevronRight,
  BiCheck
} from "react-icons/bi";
import axios from "axios";

const SingleListing = () => {
  const { handleModal, openModal, scrollButton } = useGlobalContext();
  const [propertyDetails, setPropertyDetails] = useState([]);
  const [readMore, setReadMore] = useState(false);

  const { id } = useParams();

  const fetchPropertyDetails = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/properties/single_listing",
        { id }
      );
      if (res) {
        console.log(res);
        setPropertyDetails(res.data.property);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleReadMore = () => {
    setReadMore(true);
  };

  useEffect(() => {
    fetchPropertyDetails();
  }, []);

  const imagePathWithForwardslashes =
    propertyDetails.images && propertyDetails.images[0].replace(/\\/g, "/");
  const displayedText =
    propertyDetails.description &&
    (readMore
      ? propertyDetails.description
      : propertyDetails.description.slice(0, 350)
    );

    let splitArray = [];
    if(propertyDetails.amenities && propertyDetails.amenities.length > 0) {
      splitArray = propertyDetails.amenities[0].split(",");
    }
    console.log(splitArray);

  return (
    <>
      <Header />
      <Sidebar />
      {scrollButton && <ScrollToTop />}
      {openModal && <Modal />}

      <header
        className={
          "fixed top-0 left-0 z-[99] w-full shadow-md bg-white transition-all hidden md:block"
        }
      >
        <nav className="flex items-center justify-between px-8 py-6">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={"/images/logo-2.png"}
              className="w-full h-full"
              alt="house-logo"
            />
            <span className={"text-[#484848] text-xl font-semibold"}>
              FindHouse
            </span>
          </Link>
          <ul className="flex items-center justify-between gap-10">
            <li>
              <Link
                className={
                  "text-[#484848] font-medium text-base hover:text-[#ff5a5f]"
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={
                  "text-[#484848] font-medium text-base hover:text-[#ff5a5f]"
                }
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className={
                  "text-[#484848] font-medium text-base hover:text-[#ff5a5f]"
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
                  "text-[#484848] font-medium text-base flex items-center gap-1 hover:text-[#ff5a5f]"
                }
              >
                <BiUser size={20} />
                <span>Login/Register</span>
              </button>
            </li>
            <li>
              <Link
                className={
                  "px-6 border-2 py-3 flex items-center bg-[#ff5a5f] rounded-3xl text-white font-medium text-base gap-1 transition hover:border-[#ff5a5f] hover:bg-white hover:text-[#ff5a5f]"
                }
              >
                <VscAdd size={20} />
                <span>Create Listing</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto mt-0 md:mt-24 px-8 py-10 md:py-16 md:px-0">
          <div className="flex md:flex-row flex-col items-start md:items-center gap-8 md:gap-0 justify-between">
            <div className="flex flex-col gap-2">
              <h3 className="text-base md:text-xl font-semibold text-[#484848]">
                {propertyDetails?.property_title}
              </h3>
              {propertyDetails.location && (
                <div className="flex items-center gap-1">
                  <TfiLocationPin size={16} />
                  <p className="text-sm font-medium text-[#484848]">
                    {propertyDetails.location[0].address}
                  </p>
                </div>
              )}
            </div>
            <div className="md:w-[inherit] w-full flex items-center justify-between gap-16">
              <h3 className="text-xl font-semibold text-[#484848]">
                INR {propertyDetails.price}
              </h3>
              <div className="flex items-center gap-2">
                <BiTransfer className="p-2 w-9 h-9 cursor-pointer rounded-md font-medium transition hover:bg-[#ff5a5f] hover:text-white" />
                <BiHeart className="p-2 w-9 h-9 cursor-pointer rounded-md font-medium transition hover:bg-[#ff5a5f] hover:text-white" />
                <BiShareAlt className="p-2 w-9 h-9 cursor-pointer rounded-md font-medium transition hover:bg-[#ff5a5f] hover:text-white" />
                <BiPrinter className="p-2 w-9 h-9 cursor-pointer rounded-md font-medium transition hover:bg-[#ff5a5f] hover:text-white" />
              </div>
            </div>
          </div>
          <div className="w-full mx-auto mt-8">
            <img
              src={`http://localhost:8080/images/${imagePathWithForwardslashes}`}
              className="w-full h-full object-cover rounded-md"
              alt={propertyDetails.property_title}
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto px-8 py-10 md:py-16 md:px-0">
          <div className="w-full flex flex-col gap-4">
            <div className="bg-white rounded-md shadow-sm border border-[#ebebeb]">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-3 p-6">
                <div className="bg-[#f7f7f7] w-full md:w-32 text-center rounded-md text-[#484848] py-[10px] text-sm font-medium cursor-pointer hover:text-[#ff5a5f]">
                  {propertyDetails.property_type}
                </div>
                <div className="bg-[#f7f7f7] w-full md:w-32 text-center rounded-md text-[#484848] py-[10px] text-sm font-medium cursor-pointer hover:text-[#ff5a5f]">
                  Beds: {propertyDetails.bedrooms}
                </div>
                <div className="bg-[#f7f7f7] w-full md:w-32 text-center rounded-md text-[#484848] py-[10px] text-sm font-medium cursor-pointer hover:text-[#ff5a5f]">
                  Baths: {propertyDetails.bathrooms}
                </div>
                <div className="bg-[#f7f7f7] w-full md:w-32 text-center rounded-md text-[#484848] py-[10px] text-sm font-medium cursor-pointer hover:text-[#ff5a5f]">
                  Area: {propertyDetails.area}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#484848] px-6 mb-2">
                Description
              </h3>
              <p className="text-sm text-[#484848] transition-all px-6 pt-4 pb-8">
                {readMore ? displayedText : displayedText + "..."}
                <button
                  onClick={() => {
                    readMore ? setReadMore(false) : toggleReadMore();
                  }}
                  type="button"
                  className="text-[#ff5a5f] text-sm flex items-center pt-1"
                >
                  {readMore ? "Read Less" : "Read More"}  <BiChevronRight className="text-sm" />
                </button>
              </p>
              <hr className="border-b border-[#ebebeb]"/>
              <h3 className="text-lg font-semibold text-[#484848] px-6 pt-6">
                Property Details
              </h3>
              <div className="w-full border-b border-[#ebebeb]">
                <div className="flex flex-col md:flex-row items-start md:items-center md:gap-0 gap-2 justify-between px-6 py-6">
                  <div className="flex flex-col gap-2 items-start">
                    <div className="flex items-center gap-1">
                      <span className="text-base font-medium text-[#777]">Property ID: </span>
                      <span className="text-base font-medium text-[#484848]">{propertyDetails.property_id}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-base font-medium text-[#777]">Property Type: </span>
                      <span className="text-base font-medium text-[#484848]">{propertyDetails.property_type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-base font-medium text-[#777]">Property Status: </span>
                      <span className="text-base font-medium text-[#484848]">{propertyDetails.status}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-start">
                    <div className="flex items-center gap-1">
                      <span className="text-base font-medium text-[#777]">Area: </span>
                      <span className="text-base font-medium text-[#484848]">{propertyDetails.area}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-base font-medium text-[#777]">Bedrooms: </span>
                      <span className="text-base font-medium text-[#484848]">{propertyDetails.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-base font-medium text-[#777]">Bathrooms: </span>
                      <span className="text-base font-medium text-[#484848]">{propertyDetails.bathrooms}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-start">
                    <div className="flex items-center gap-1">
                      <span className="text-base font-medium text-[#777]">Garage: </span>
                      <span className="text-base font-medium text-[#484848]">{propertyDetails.garage}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-base font-medium text-[#777]">Garage Size: </span>
                      <span className="text-base font-medium text-[#484848]">{propertyDetails.garage_size}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-base font-medium text-[#777]">Year Built: </span>
                      <span className="text-base font-medium text-[#484848]">{propertyDetails.year_built}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white mt-4 rounded-md shadow-sm p-6 border w-full border-[#ebebeb]">
              <h3 className="text-lg font-semibold text-[#484848]">Amenities</h3>
              <div className="pt-3">
                <div className="flex flex-col md:flex-row justify-between md:gap-0 gap-2 items-start md:items-center">
                  {splitArray.map((item, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <BiCheck size={20} className="text-[#ff5a5f]"/>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SingleListing;
