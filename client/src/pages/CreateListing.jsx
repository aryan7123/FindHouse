import React, { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { AiOutlineMenu } from "react-icons/ai";
import { BsCloudUpload } from "react-icons/bs";

import ScrollToTop from "../components/ScrollToTop";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";

import { useGlobalContext } from "../context/context";

const CreateListing = () => {
  const { scrollButton, getUserDetails, userData, token, handleDashboardSidebar, setDashboardSidebar } = useGlobalContext();

  useEffect(() => {
    setDashboardSidebar(false)
    if (token) {
      getUserDetails();
    } else {
      console.log("You have to login");
    }
  }, []);

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  return (
    <>
      <Header />
      <Sidebar />
      {scrollButton && <ScrollToTop />}

      <DashboardHeader userData={userData} />
      <DashboardSidebar />

      <main className="bg-[#f7f7f7] w-full md:pl-[340px] md:pr-[30px] md:py-[100px] py-12 px-6 md:mt-[100px] mt-0">
        <button onClick={handleDashboardSidebar} className="bg-white w-full shadow-md rounded-md flex md:hidden items-center gap-2 px-4 py-6">
          <AiOutlineMenu size={20} className="text-[#484848]" />
          <span className="text-sm font-medium text-[#484848]">
            Dashboard Menu
          </span>
        </button>
        <div className="flex items-start py-8 md:py-0 flex-col gap-2">
          <h3 className="text-3xl text-[#484848] font-semibold">
            Add New Property
          </h3>
          <span className="text-sm font-medium text-[#484848]">
            We are glad to see you again!
          </span>
        </div>
        <div className="w-full bg-white border border-[#ebebeb] rounded-lg shadow-sm my-6 p-6">
          <h3 className="text-xl font-semibold text-[#484848]">
            Create Listing
          </h3>
          <form className="mt-8">
            <div className="w-full flex flex-col gap-2 mb-4">
              <label
                className="text-base font-semibold text-[#484848]"
                htmlFor="property_title"
              >
                Property Title
              </label>
              <input
                type="text"
                name="property_title"
                className="w-full border border-[#ebebeb] px-2 py-3 outline-none rounded-lg text-base font-medium text-[#484848]"
              />
            </div>
            <div className="w-full flex flex-col gap-2 mb-4">
              <label
                className="text-base font-semibold text-[#484848]"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                rows="7"
                name="description"
                className="w-full border border-[#ebebeb] px-2 py-3 outline-none rounded-lg text-base font-medium text-[#484848]"
              />
            </div>
            <div className="w-full flex md:flex-row flex-col gap-4 mb-4">
              <div className="md:w-1/2 w-full flex flex-col gap-2">
                <label
                  className="text-base font-semibold text-[#484848]"
                  htmlFor="property_type"
                >
                  Property Type
                </label>
                <select
                  name="property_type"
                  className="w-full border border-[#ebebeb] px-2 py-3 outline-none rounded-lg text-base font-medium text-[#484848]"
                >
                  <option value="">Select Property Type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Bungalow">Bungalow</option>
                  <option value="Condo">Condo</option>
                  <option value="Modern Villa">Modern Villa</option>
                </select>
              </div>
              <div className="md:w-1/2 w-full flex flex-col gap-2">
                <label
                  className="text-base font-semibold text-[#484848]"
                  htmlFor="status"
                >
                  Property Status
                </label>
                <select
                  name="status"
                  className="w-full border border-[#ebebeb] px-2 py-3 outline-none rounded-lg text-base font-medium text-[#484848]"
                >
                  <option value="">Select Property Status</option>
                  <option value="For Rent">For Rent</option>
                  <option value="For Sale">For Sale</option>
                </select>
              </div>
            </div>
            <div className="w-full flex md:flex-row flex-col gap-4">
              <div className="md:w-1/3 w-full flex flex-col gap-2">
                <label
                  className="text-base font-semibold text-[#484848]"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  type="tel"
                  name="price"
                  className="w-full border border-[#ebebeb] px-2 py-3 outline-none rounded-lg text-base font-medium text-[#484848]"
                />
              </div>
              <div className="md:w-1/3 w-full flex flex-col gap-2">
                <label
                  className="text-base font-semibold text-[#484848]"
                  htmlFor="area"
                >
                  Area
                </label>
                <input
                  type="text"
                  name="area"
                  className="w-full border border-[#ebebeb] px-2 py-3 outline-none rounded-lg text-base font-medium text-[#484848]"
                />
              </div>
              <div className="md:w-1/3 w-full flex flex-col gap-2">
                <label
                  className="text-base font-semibold text-[#484848]"
                  htmlFor="rooms"
                >
                  Rooms
                </label>
                <input
                  type="tel"
                  name="rooms"
                  className="w-full border border-[#ebebeb] px-2 py-3 outline-none rounded-lg text-base font-medium text-[#484848]"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="w-full bg-white border border-[#ebebeb] rounded-lg shadow-sm my-6 p-6">
          <h3 className="text-xl font-semibold text-[#484848]">Location</h3>
          <form className="mt-8">
            <div className="w-full flex flex-col gap-2 mb-4">
              <label
                className="text-base font-semibold text-[#484848]"
                htmlFor="address"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                className="w-full border border-[#ebebeb] px-2 py-3 outline-none rounded-lg text-base font-medium text-[#484848]"
              />
            </div>
            <div className="w-full flex md:flex-row flex-col gap-4">
              <div className="md:w-1/3 w-full flex flex-col gap-2">
                <label
                  className="text-base font-semibold text-[#484848]"
                  htmlFor="country"
                >
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  className="w-full border border-[#ebebeb] px-2 py-3 outline-none rounded-lg text-base font-medium text-[#484848]"
                />
              </div>
              <div className="md:w-1/3 w-full flex flex-col gap-2">
                <label
                  className="text-base font-semibold text-[#484848]"
                  htmlFor="state"
                >
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  className="w-full border border-[#ebebeb] px-2 py-3 outline-none rounded-lg text-base font-medium text-[#484848]"
                />
              </div>
              <div className="md:w-1/3 w-full flex flex-col gap-2">
                <label
                  className="text-base font-semibold text-[#484848]"
                  htmlFor="zip"
                >
                  Zip Code
                </label>
                <input
                  type="tel"
                  name="zip"
                  className="w-full border border-[#ebebeb] px-2 py-3 outline-none rounded-lg text-base font-medium text-[#484848]"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-2 mt-4">
              <label
                className="text-base font-semibold text-[#484848]"
                htmlFor="city"
              >
                City
              </label>
              <input
                type="text"
                name="city"
                className="w-full border border-[#ebebeb] px-2 py-3 outline-none rounded-lg text-base font-medium text-[#484848]"
              />
            </div>
          </form>
        </div>
        <div className="w-full bg-white border border-[#ebebeb] rounded-lg shadow-sm my-6 p-6">
          <h3 className="text-xl font-semibold text-[#484848]">Detailed Information</h3>
          <form className="mt-8">
            <div className="w-full flex flex-col gap-2 mb-4">
              <label
                className="text-base font-semibold text-[#484848]"
                htmlFor="property_id"
              >
                Property ID
              </label>
              <input
                type="text"
                name="property_id"
                className="w-full border border-[#ebebeb] px-2 py-3 outline-none rounded-lg text-base font-medium text-[#484848]"
              />
            </div>
            <div className="w-full flex md:flex-row flex-col gap-4">
              <div className="md:w-1/3 w-full flex flex-col gap-2">
                <label
                  className="text-base font-semibold text-[#484848]"
                  htmlFor="bedrooms"
                >
                  Bedrooms
                </label>
                <input
                  type="tel"
                  name="bedrooms"
                  className="w-full border border-[#ebebeb] px-2 py-3 outline-none rounded-lg text-base font-medium text-[#484848]"
                />
              </div>
              <div className="md:w-1/3 w-full flex flex-col gap-2">
                <label
                  className="text-base font-semibold text-[#484848]"
                  htmlFor="bathrooms"
                >
                  Bathrooms
                </label>
                <input
                  type="tel"
                  name="bathrooms"
                  className="w-full border border-[#ebebeb] px-2 py-3 outline-none rounded-lg text-base font-medium text-[#484848]"
                />
              </div>
              <div className="md:w-1/3 w-full flex flex-col gap-2">
                <label
                  className="text-base font-semibold text-[#484848]"
                  htmlFor="garage"
                >
                Garages
                </label>
                <input
                  type="text"
                  name="garage"
                  className="w-full border border-[#ebebeb] px-2 py-3 outline-none rounded-lg text-base font-medium text-[#484848]"
                />
              </div>
            </div>
            <div className="w-full flex md:flex-row flex-col gap-4 mt-4">
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <label
                  className="text-base font-semibold text-[#484848]"
                  htmlFor="garage_size"
                >
                  Garage Size
                </label>
                <input
                  type="text"
                  name="garage_size"
                  className="w-full border border-[#ebebeb] px-2 py-3 outline-none rounded-lg text-base font-medium text-[#484848]"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <label
                  className="text-base font-semibold text-[#484848]"
                  htmlFor="year_built"
                >
                  Year Built
                </label>
                <input
                  type="tel"
                  name="year_built"
                  className="w-full border border-[#ebebeb] px-2 py-3 outline-none rounded-lg text-base font-medium text-[#484848]"
                />
              </div>
            </div>
            <div className="w-full flex flex-col mt-4">
              <label htmlFor="amenities" className="text-base font-semibold text-[#484848]">Amenities</label>
              <div className="flex items-start md:items-center flex-col md:flex-row gap-4 my-4">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border border-[#dee2e6] rounded-2xl cursor-pointer accent-[#ff5a5f]" />
                  <span className="text-sm font-medium text-[#484848]">Air Conditioner</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border border-[#dee2e6] rounded-2xl cursor-pointer accent-[#ff5a5f]" />
                  <span className="text-sm font-medium text-[#484848]">Barbeque</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border border-[#dee2e6] rounded-2xl cursor-pointer accent-[#ff5a5f]" />
                  <span className="text-sm font-medium text-[#484848]">Laundry</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border border-[#dee2e6] rounded-2xl cursor-pointer accent-[#ff5a5f]" />
                  <span className="text-sm font-medium text-[#484848]">Gym</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border border-[#dee2e6] rounded-2xl cursor-pointer accent-[#ff5a5f]" />
                  <span className="text-sm font-medium text-[#484848]">TV Cable</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border border-[#dee2e6] rounded-2xl cursor-pointer accent-[#ff5a5f]" />
                  <span className="text-sm font-medium text-[#484848]">Rooftop</span>
                </div>
              </div>
              <div className="flex items-start md:items-center flex-col md:flex-row gap-4 md:my-4 my-0">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border border-[#dee2e6] rounded-2xl cursor-pointer accent-[#ff5a5f]" />
                  <span className="text-sm font-medium text-[#484848]">WiFi</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border border-[#dee2e6] rounded-2xl cursor-pointer accent-[#ff5a5f]" />
                  <span className="text-sm font-medium text-[#484848]">Microwave</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border border-[#dee2e6] rounded-2xl cursor-pointer accent-[#ff5a5f]" />
                  <span className="text-sm font-medium text-[#484848]">Outdoor Shower</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border border-[#dee2e6] rounded-2xl cursor-pointer accent-[#ff5a5f]" />
                  <span className="text-sm font-medium text-[#484848]">Swimming Pool</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border border-[#dee2e6] rounded-2xl cursor-pointer accent-[#ff5a5f]" />
                  <span className="text-sm font-medium text-[#484848]">Lawn</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border border-[#dee2e6] rounded-2xl cursor-pointer accent-[#ff5a5f]" />
                  <span className="text-sm font-medium text-[#484848]">Refrigerator</span>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="w-full bg-white border border-[#ebebeb] rounded-lg shadow-sm my-6 p-6">
          <h3 className="text-xl font-semibold text-[#484848]">Property Media</h3>
          <div className="w-full mt-8 bg-[#f7f7f7] cursor-pointer">
            <div className="border border-[#ebebeb] py-10 rounded-lg text-center">
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <BsCloudUpload size={50} className='text-[#ff5a5f] mb-3 text-center mx-auto'/>
                <p className='text-base font-semibold text-[#484848]'>Drag & Drop an image here, or click to select one</p>
              </div>
            </div>
          </div>
        </div>
        <span className='text-lg font-medium text-[#484848]'></span>
        <div className='w-full mt-4'>
          <button className='bg-[#ff5a5f] rounded-lg text-white text-base font-semibold p-4 w-40 border-2 border-[#ff5a5f] hover:bg-white hover:text-[#ff5a5f] transition'>Create</button>
        </div>
        <div className="text-center mx-auto text-sm font-medium mt-8 text-[#8a99b3]">© 2020 Find House. Made with love.</div>
      </main>
    </>
  );
};

export default CreateListing;
