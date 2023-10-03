import React, { useEffect } from "react";
import { AiOutlineMenu, AiOutlineMessage } from "react-icons/ai";

import ScrollToTop from "../components/ScrollToTop";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";

import { useGlobalContext } from "../context/context";

const CreateListing = () => {
  const { scrollHeader, scrollButton, getUserDetails, userData, token } =
    useGlobalContext();

  useEffect(() => {
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
        <button className="bg-white w-full shadow-md rounded-md flex md:hidden items-center gap-2 px-4 py-6">
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
          </form>
        </div>
      </main>
    </>
  );
};

export default CreateListing;
