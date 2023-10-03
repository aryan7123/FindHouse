import React from "react";
import { Link } from "react-router-dom";

import {
  PiStackSimple,
  PiPlusThin,
  PiHouseLine,
  PiHandHeart,
} from "react-icons/pi";
import { FiMessageCircle } from "react-icons/fi";
import { TbMessageCode } from "react-icons/tb";
import { CgProfile, CgLogOut } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

import { useGlobalContext } from "../context/context";

const DashboardSidebar = () => {
  const { dashboardSidebar, setDashboardSidebar } = useGlobalContext();
  return (
    <>
      <aside
        className={`max-w-[300px] dashboard-sidebar fixed h-auto inset-0 z-10 ${
          dashboardSidebar ? "translate-x-0" : "translate-x-[-100%]"
        } transition overflow-y-auto bg-[#1d293e] md:translate-x-0`}
      >
        <div className="bg-[#24324a] p-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/logo-2.png" alt="house-logo" />
            <h4 className="text-white text-xl font-semibold">FindHouse</h4>
          </Link>
          <RxCross2
            onClick={() => setDashboardSidebar(false)}
            size={20}
            className="text-white cursor-pointer block md:hidden"
          />
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
                  <PiHouseLine size={20} className="text-white text-sm" />
                  <span className="text-white text-sm font-medium">
                    My Properties
                  </span>
                </Link>
              </li>
              <li className="list-none bg-[#172133] px-6 py-4 mb-3 border-l-2 border-[#ff5a5f] hover:bg-[#ff5a5f] hover:border-[#172133]">
                <Link className="flex items-center gap-2" to="/dashboard">
                  <PiHandHeart size={20} className="text-white text-sm" />
                  <span className="text-white text-sm font-medium">
                    My Favoruites
                  </span>
                </Link>
              </li>
              <li className="list-none bg-[#172133] px-6 py-4 border-l-2 border-[#ff5a5f] hover:bg-[#ff5a5f] hover:border-[#172133]">
                <Link className="flex items-center gap-2" to="/dashboard">
                  <TbMessageCode size={20} className="text-white text-sm" />
                  <span className="text-white text-sm font-medium">
                    Reviews
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
                  <CgProfile size={20} className="text-white text-sm" />
                  <span className="text-white text-sm font-medium">
                    My Profile
                  </span>
                </Link>
              </li>
              <li className="list-none bg-[#172133] px-6 py-4 mb-3 border-l-2 border-[#ff5a5f] hover:bg-[#ff5a5f] hover:border-[#172133]">
                <Link className="flex items-center gap-2" to="/dashboard">
                  <CgLogOut size={20} className="text-white text-sm" />
                  <span className="text-white text-sm font-medium">Logout</span>
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
