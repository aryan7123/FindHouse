import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import ScrollToTop from "../components/ScrollToTop";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";

import { useGlobalContext } from "../context/context";
import axios from "axios";

const CreateListing = () => {
  const {
    scrollButton,
    getUserDetails,
    userData,
    token,
    handleDashboardSidebar,
    setDashboardSidebar,
  } = useGlobalContext();
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState([]);
  const initialState = {
    property_title: "",
    description: "",
    status: "",
    property_type: "",
    price: "",
    area: "",
    rooms: "",
    address: "",
    state: "",
    city: "",
    zip: "",
    country: "",
    property_id: "",
    bedrooms: "",
    bathrooms: "",
    garage: "",
    garage_size: "",
    year_built: "",
  };
  const [propertyData, setPropertyData] = useState(initialState);
  const {
    property_title,
    property_id,
    description,
    status,
    property_type,
    price,
    area,
    rooms,
    country,
    state,
    city,
    zip,
    address,
    bathrooms,
    bedrooms,
    garage,
    garage_size,
    year_built,
  } = propertyData;

  useEffect(() => {
    setDashboardSidebar(false);
    if (token) {
      getUserDetails();
    } else {
      console.log("You have to login");
    }
  }, []);

  const handleInputChange = (e) => {
    setPropertyData({ ...propertyData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);
  };

  const handleCheckboxChange = (e) => {
    const currentValue = e.target.value;
    if (e.target.checked) {
      setSelectedCheckboxes([...selectedCheckboxes, currentValue]);
    } else {
      setSelectedCheckboxes(
        selectedCheckboxes.filter((item) => item !== currentValue)
      );
    }
  };

  const handleCreateList = async () => {
    try {
      const formData = new FormData();

      formData.append("property_title", property_title);
      formData.append("property_id", property_id);
      formData.append("property_type", property_type);
      formData.append("status", status);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("area", area);
      formData.append("state", state);
      formData.append("city", city);
      formData.append("country", country);
      formData.append("zip", zip);
      formData.append("address", address);
      formData.append("rooms", rooms);
      formData.append("bathrooms", bathrooms);
      formData.append("bedrooms", bedrooms);
      formData.append("garage", garage);
      formData.append("garage_size", garage_size);
      formData.append("year_built", year_built);
      formData.append("amenities", selectedCheckboxes);
      images.forEach((image) => {
        formData.append("images", image);
      });

      const res = await axios.post(
        "http://localhost:8080/properties/create",
        formData
      );
      setMessage(res.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <Sidebar />
      {scrollButton && <ScrollToTop />}

      <DashboardHeader userData={userData} />
      <DashboardSidebar />

      <main className="bg-[#f7f7f7] w-full md:pl-[340px] md:pr-[30px] md:py-[100px] py-12 px-6 md:mt-[100px] mt-0">
        <button
          onClick={handleDashboardSidebar}
          className="bg-white w-full shadow-md rounded-md flex md:hidden items-center gap-2 px-4 py-6"
        >
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
                onChange={handleInputChange}
                value={property_title}
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
                onChange={handleInputChange}
                value={description}
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
                  onChange={handleInputChange}
                  value={property_type}
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
                  onChange={handleInputChange}
                  value={status}
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
                  type="text"
                  name="price"
                  onChange={handleInputChange}
                  value={price}
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
                  onChange={handleInputChange}
                  value={area}
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
                  onChange={handleInputChange}
                  value={rooms}
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
                onChange={handleInputChange}
                value={address}
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
                  onChange={handleInputChange}
                  value={country}
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
                  onChange={handleInputChange}
                  value={state}
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
                  onChange={handleInputChange}
                  value={zip}
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
                onChange={handleInputChange}
                value={city}
                name="city"
                className="w-full border border-[#ebebeb] px-2 py-3 outline-none rounded-lg text-base font-medium text-[#484848]"
              />
            </div>
          </form>
        </div>
        <div className="w-full bg-white border border-[#ebebeb] rounded-lg shadow-sm my-6 p-6">
          <h3 className="text-xl font-semibold text-[#484848]">
            Detailed Information
          </h3>
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
                onChange={handleInputChange}
                value={property_id}
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
                  onChange={handleInputChange}
                  value={bedrooms}
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
                  onChange={handleInputChange}
                  value={bathrooms}
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
                  onChange={handleInputChange}
                  value={garage}
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
                  onChange={handleInputChange}
                  value={garage_size}
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
                  onChange={handleInputChange}
                  value={year_built}
                  className="w-full border border-[#ebebeb] px-2 py-3 outline-none rounded-lg text-base font-medium text-[#484848]"
                />
              </div>
            </div>
            <div className="w-full flex flex-col mt-4">
              <label
                htmlFor="amenities"
                className="text-base font-semibold text-[#484848]"
              >
                Amenities
              </label>
              <div className="flex items-start md:items-center flex-col md:flex-row gap-4 my-4">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="Air Conditioner"
                    onChange={handleCheckboxChange}
                    checked={selectedCheckboxes.includes("Air Conditioner")}
                    className="w-4 h-4 border border-[#dee2e6] rounded-2xl cursor-pointer accent-[#ff5a5f]"
                  />
                  <span className="text-sm font-medium text-[#484848]">
                    Air Conditioner
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="Barbeque"
                    onChange={handleCheckboxChange}
                    checked={selectedCheckboxes.includes("Barbeque")}
                    className="w-4 h-4 border border-[#dee2e6] rounded-2xl cursor-pointer accent-[#ff5a5f]"
                  />
                  <span className="text-sm font-medium text-[#484848]">
                    Barbeque
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="Laundry"
                    onChange={handleCheckboxChange}
                    checked={selectedCheckboxes.includes("Laundry")}
                    className="w-4 h-4 border border-[#dee2e6] rounded-2xl cursor-pointer accent-[#ff5a5f]"
                  />
                  <span className="text-sm font-medium text-[#484848]">
                    Laundry
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="Gym"
                    onChange={handleCheckboxChange}
                    checked={selectedCheckboxes.includes("Gym")}
                    className="w-4 h-4 border border-[#dee2e6] rounded-2xl cursor-pointer accent-[#ff5a5f]"
                  />
                  <span className="text-sm font-medium text-[#484848]">
                    Gym
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="TV Cable"
                    onChange={handleCheckboxChange}
                    checked={selectedCheckboxes.includes("TV Cable")}
                    className="w-4 h-4 border border-[#dee2e6] rounded-2xl cursor-pointer accent-[#ff5a5f]"
                  />
                  <span className="text-sm font-medium text-[#484848]">
                    TV Cable
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="Rooftop"
                    onChange={handleCheckboxChange}
                    checked={selectedCheckboxes.includes("Rooftop")}
                    className="w-4 h-4 border border-[#dee2e6] rounded-2xl cursor-pointer accent-[#ff5a5f]"
                  />
                  <span className="text-sm font-medium text-[#484848]">
                    Rooftop
                  </span>
                </div>
              </div>
              <div className="flex items-start md:items-center flex-col md:flex-row gap-4 md:my-4 my-0">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="WiFi"
                    onChange={handleCheckboxChange}
                    checked={selectedCheckboxes.includes("WiFi")}
                    className="w-4 h-4 border border-[#dee2e6] rounded-2xl cursor-pointer accent-[#ff5a5f]"
                  />
                  <span className="text-sm font-medium text-[#484848]">
                    WiFi
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="Microwave"
                    onChange={handleCheckboxChange}
                    checked={selectedCheckboxes.includes("Microwave")}
                    className="w-4 h-4 border border-[#dee2e6] rounded-2xl cursor-pointer accent-[#ff5a5f]"
                  />
                  <span className="text-sm font-medium text-[#484848]">
                    Microwave
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="Outdoor Shower"
                    onChange={handleCheckboxChange}
                    checked={selectedCheckboxes.includes("Outdoor Shower")}
                    className="w-4 h-4 border border-[#dee2e6] rounded-2xl cursor-pointer accent-[#ff5a5f]"
                  />
                  <span className="text-sm font-medium text-[#484848]">
                    Outdoor Shower
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="Swimming Pool"
                    onChange={handleCheckboxChange}
                    checked={selectedCheckboxes.includes("Swimming Pool")}
                    className="w-4 h-4 border border-[#dee2e6] rounded-2xl cursor-pointer accent-[#ff5a5f]"
                  />
                  <span className="text-sm font-medium text-[#484848]">
                    Swimming Pool
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="Lawn"
                    onChange={handleCheckboxChange}
                    checked={selectedCheckboxes.includes("Lawn")}
                    className="w-4 h-4 border border-[#dee2e6] rounded-2xl cursor-pointer accent-[#ff5a5f]"
                  />
                  <span className="text-sm font-medium text-[#484848]">
                    Lawn
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="Refrigerator"
                    onChange={handleCheckboxChange}
                    checked={selectedCheckboxes.includes("Refrigerator")}
                    className="w-4 h-4 border border-[#dee2e6] rounded-2xl cursor-pointer accent-[#ff5a5f]"
                  />
                  <span className="text-sm font-medium text-[#484848]">
                    Refrigerator
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="w-full bg-white border border-[#ebebeb] rounded-lg shadow-sm my-6 p-6">
          <h3 className="text-xl font-semibold text-[#484848]">
            Property Media
          </h3>
          <form encType="multipart/form-data">
            <div className="w-full mt-8 bg-[#f7f7f7] cursor-pointer">
              <div className="border border-[#ebebeb] py-10 rounded-lg text-center">
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="images"
                    className="flex flex-col items-center justify-center w-full h-64 rounded-lg cursor-pointer"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <svg
                        className="w-20 h-20 mb-4 text-[#ff5a5f]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-base font-medium text-[#484848]">
                        <span className="font-medium text-[#484848]">
                          Click to upload
                        </span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs font-medium text-[#484848]">
                        SVG, PNG, JPG or GIF
                      </p>
                    </div>
                    <input
                      name="images"
                      id="images"
                      multiple
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
        {message && <span className="text-lg font-medium text-[#484848]">{message}</span>}
        <div className="w-full mt-4">
          <button
            onClick={handleCreateList}
            className="bg-[#ff5a5f] rounded-lg text-white text-base font-semibold p-4 w-40 border-2 border-[#ff5a5f] hover:bg-white hover:text-[#ff5a5f] transition"
          >
            Create
          </button>
        </div>
        <div className="text-center mx-auto text-sm font-medium mt-8 text-[#8a99b3]">
          © 2020 Find House. Made with love.
        </div>
      </main>
    </>
  );
};

export default CreateListing;
