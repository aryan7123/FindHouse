import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineMessage } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { BsEye, BsHeart } from "react-icons/bs";
import { PiHouseLine } from "react-icons/pi";

import ScrollToTop from "../components/ScrollToTop";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";

import { useGlobalContext } from "../context/context";

const UserDashboard = () => {
  const { scrollButton, getUserDetails, userData, token, handleDashboardSidebar, setDashboardSidebar } =
    useGlobalContext();

  useEffect(() => {
    setDashboardSidebar(false)
    if (token) {
      getUserDetails();
    } else {
      console.log("You have to login");
    }
  }, []);

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
            Howdy, {userData.username}
          </h3>
          <span className="text-sm font-medium text-[#484848]">
            We are glad to see you again!
          </span>
        </div>
        <div className="flex md:flex-row gap-6 my-0 md:my-8 flex-col items-center justify-between">
          <div className="flex w-full md:w-1/4 items-center justify-between gap-3 rounded-lg p-6 bg-white shadow-sm border border-[#ebebeb]">
            <div className="flex flex-col items-start gap-1">
              <h3 className="text-3xl text-[#484848] font-semibold">37</h3>
              <span className="text-sm font-medium text-[#777]">
                All Properties
              </span>
            </div>
            <div className="bg-[#1d293e1a] rounded-full flex items-center justify-center w-20 h-20">
              <BsHouseDoor className="text-[#1d293e]" size={40}/>
            </div>
          </div>
          <div className="flex w-full md:w-1/4 items-center justify-between gap-3 rounded-lg p-6 bg-white shadow-sm border border-[#ebebeb]">
            <div className="flex flex-col items-start gap-1">
              <h3 className="text-3xl text-[#484848] font-semibold">18</h3>
              <span className="text-sm font-medium text-[#777]">
                Total Views
              </span>
            </div>
            <div className="bg-[#9499da26] rounded-full flex items-center justify-center w-20 h-20">
              <BsEye className="text-[#9499da]" size={40}/>
            </div>
          </div>
          <div className="flex w-full md:w-1/4 items-center justify-between gap-3 rounded-lg p-6 bg-white shadow-sm border border-[#ebebeb]">
            <div className="flex flex-col items-start gap-1">
              <h3 className="text-3xl text-[#484848] font-semibold">28</h3>
              <span className="text-sm font-medium text-[#777]">
                Total Visitor Reviews
              </span>
            </div>
            <div className="bg-[#ff5a5f26] rounded-full flex items-center justify-center w-20 h-20">
              <AiOutlineMessage className="text-[#ff5a5f]" size={40}/>
            </div>
          </div>
          <div className="flex w-full md:w-1/4 items-center justify-between gap-3 rounded-lg p-6 bg-white shadow-sm border border-[#ebebeb]">
            <div className="flex flex-col items-start gap-1">
              <h3 className="text-3xl text-[#484848] font-semibold">24</h3>
              <span className="text-sm font-medium text-[#777]">
              Total Favorites
              </span>
            </div>
            <div className="bg-[#ffbc7d26] rounded-full flex items-center justify-center w-20 h-20">
              <BsHeart className="text-[#ffbc7d]" size={40}/>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row gap-6 flex-col md:mt-0 mt-8 items-start justify-between w-full">
          <div className="md:w-1/2 w-full bg-white shadow-sm border border-[#ebebeb] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#484848] mb-6">View Statistics</h3>
            <img src="/images/statistics.png" className="w-full h-full object-cover" alt="statistics" />
          </div>
          <div className="md:w-1/2 w-full bg-white shadow-sm border border-[#ebebeb] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#484848] mb-6">Recent Activities</h3>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#ffe8e9] rounded-full w-10 h-10 flex items-center justify-center">
                <PiHouseLine className="text-[#ff5a5f]" size={20}/>
              </div>
              <span className="text-sm font-medium text-[#484848]">Your listing Luxury Family Home has been approved!</span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#ffe8e9] rounded-full w-10 h-10 flex items-center justify-center">
                <AiOutlineMessage className="text-[#ff5a5f]" size={20}/>
              </div>
              <span className="text-sm font-medium text-[#484848]">Kathy Brown left a review on Renovated Apartment.</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#ffe8e9] rounded-full w-10 h-10 flex items-center justify-center">
                <BsHeart className="text-[#ff5a5f]" size={20}/>
              </div>
              <span className="text-sm font-medium text-[#484848]">Someone favorites your Gorgeous Villa Bay View listing!</span>
            </div>
          </div>
        </div>
        <div className="w-full text-center mt-12">
          <h3 className="text-sm font-medium text-[#8a99b3]">© 2020 Find House. Made with love.</h3>
        </div>
      </main>
    </>
  );
};

export default UserDashboard;
