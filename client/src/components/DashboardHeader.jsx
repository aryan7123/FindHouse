import React from "react";
import { Link } from "react-router-dom";
import { VscAdd } from "react-icons/vsc";

const DashboardHeader = ({ userData }) => {
  return (
    <>
      <header className="bg-white w-full hidden md:block shadow-md fixed top-0 left-0 transition">
        <div className="flex items-center justify-end py-6 pr-8 gap-8">
          <li className="list-none">
            <Link to="/" className="text-[#484848] text-base font-medium hover:text-[#ff5a5f]">Home</Link>
          </li>
          <li className="list-none">
            <Link className="text-[#484848] text-base font-medium hover:text-[#ff5a5f]">About Us</Link>
          </li>
          <li className="list-none">
            <Link className="text-[#484848] text-base font-medium hover:text-[#ff5a5f]">Contact</Link>
          </li>
          <li className="border-l-2 list-none flex items-center gap-2 cursor-pointer">
            <img src="/images/user.png" className="w-10 h-10 ml-3" alt="user" />
            <span className="text-[#484848] text-base">{userData.username}</span>
          </li>
          <li className="list-none">
            <Link className="px-6 border-2 py-3 flex items-center bg-[#ff5a5f] rounded-3xl text-white font-medium text-base gap-1 transition hover:border-[#ff5a5f] hover:text-[#ff5a5f] hover:bg-white">
              <VscAdd size={20} />
              <span>Create Listing</span>
            </Link>
          </li>
        </div>
      </header>
    </>
  );
};

export default DashboardHeader;
