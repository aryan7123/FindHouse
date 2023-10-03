import React from "react";
import { Link } from "react-router-dom";

import { PiStackSimple, PiPlusThin } from "react-icons/pi";
import { FiMessageCircle } from "react-icons/fi";

const DashboardSidebar = () => {
  return (
    <>
      <aside className="max-w-[300px] dashboard-sidebar fixed h-auto inset-0 z-10 translate-x-0 transition hidden md:block overflow-y-auto bg-[#1d293e]">
        <div className="bg-[#24324a] p-6">
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/logo-2.png" alt="house-logo" />
            <h4 className="text-white text-xl font-semibold">FindHouse</h4>
          </Link>
        </div>
        <div className="py-6 w-full">
          <div>
            <span className="text-[#60708c] px-6 py-3 text-base font-medium">
              Main
            </span>
            <ul className="my-3">
              <li className="list-none bg-[#172133] px-6 py-4 mb-3 border-l-2 border-[#ff5a5f] hover:bg-[#ff5a5f] hover:border-[#172133]">
                <Link className="flex items-center gap-2" to="/dashboard">
                  <PiStackSimple size={20} className="text-white text-sm" />
                  <span className="text-white text-sm font-medium">
                    Dashboard
                  </span>
                </Link>
              </li>
              <li className="list-none bg-[#172133] px-6 py-4 mb-3 border-l-2 border-[#ff5a5f] hover:bg-[#ff5a5f] hover:border-[#172133]">
                <Link className="flex items-center gap-2" to="/create-listing">
                  <PiPlusThin size={20} className="text-white text-sm" />
                  <span className="text-white text-sm font-medium">
                    Create Listing
                  </span>
                </Link>
              </li>
              <li className="list-none bg-[#172133] px-6 py-4 border-l-2 border-[#ff5a5f] hover:bg-[#ff5a5f] hover:border-[#172133]">
                <Link className="flex items-center gap-2" to="/dashboard">
                  <FiMessageCircle size={20} className="text-white text-sm" />
                  <span className="text-white text-sm font-medium">
                    Messages
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <span className="text-[#60708c] px-6 py-3 text-base font-medium">
              Manage Listings
            </span>
            <ul className="my-3">
              <li className="list-none bg-[#172133] px-6 py-4 mb-3 border-l-2 border-[#ff5a5f] hover:bg-[#ff5a5f] hover:border-[#172133]">
                <Link className="flex items-center gap-2" to="/dashboard">
                  <PiStackSimple size={20} className="text-white text-sm" />
                  <span className="text-white text-sm font-medium">
                    Dashboard
                  </span>
                </Link>
              </li>
              <li className="list-none bg-[#172133] px-6 py-4 mb-3 border-l-2 border-[#ff5a5f] hover:bg-[#ff5a5f] hover:border-[#172133]">
                <Link className="flex items-center gap-2" to="/dashboard">
                  <PiPlusThin size={20} className="text-white text-sm" />
                  <span className="text-white text-sm font-medium">
                    Create Listing
                  </span>
                </Link>
              </li>
              <li className="list-none bg-[#172133] px-6 py-4 border-l-2 border-[#ff5a5f] hover:bg-[#ff5a5f] hover:border-[#172133]">
                <Link className="flex items-center gap-2" to="/dashboard">
                  <FiMessageCircle size={20} className="text-white text-sm" />
                  <span className="text-white text-sm font-medium">
                    Messages
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <span className="text-[#60708c] px-6 py-3 text-base font-medium">
              Manage Account
            </span>
            <ul className="my-3">
              <li className="list-none bg-[#172133] px-6 py-4 mb-3 border-l-2 border-[#ff5a5f] hover:bg-[#ff5a5f] hover:border-[#172133]">
                <Link className="flex items-center gap-2" to="/dashboard">
                  <PiStackSimple size={20} className="text-white text-sm" />
                  <span className="text-white text-sm font-medium">
                    Dashboard
                  </span>
                </Link>
              </li>
              <li className="list-none bg-[#172133] px-6 py-4 mb-3 border-l-2 border-[#ff5a5f] hover:bg-[#ff5a5f] hover:border-[#172133]">
                <Link className="flex items-center gap-2" to="/dashboard">
                  <PiPlusThin size={20} className="text-white text-sm" />
                  <span className="text-white text-sm font-medium">
                    Create Listing
                  </span>
                </Link>
              </li>
              <li className="list-none bg-[#172133] px-6 py-4 border-l-2 border-[#ff5a5f] hover:bg-[#ff5a5f] hover:border-[#172133]">
                <Link className="flex items-center gap-2" to="/dashboard">
                  <FiMessageCircle size={20} className="text-white text-sm" />
                  <span className="text-white text-sm font-medium">
                    Messages
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
