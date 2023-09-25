import React from "react";
import { useGlobalContext } from "../context/context";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { SlPencil } from "react-icons/sl";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { openSidebar, setOpenSidebar } = useGlobalContext();
  return (
    <>
      <aside
        className={
          openSidebar
            ? "fixed top-0 left-0 bg-white h-full w-[270px] z-[99] transition translate-x-0 shadow"
            : "fixed top-0 left-0 h-full w-[270px] transition translate-x-[-100%]"
        }
      >
        <div className="flex items-center justify-between p-4 bg-white shadow-sm">
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/logo-2.png" alt="house" className="w-full" />
            <span className="text-lg font-semibold text-[#484848]">
              FindHouse
            </span>
          </Link>
          <button type="button" onClick={() => setOpenSidebar(false)}>
            <RxCross2 size={30} />
          </button>
        </div>
        <div className="bg-[#f5f5f5] w-full h-full">
          <ul className="flex flex-col gap-2 items-start justify-start">
            <li className="w-full p-4 border-b-2 border-[hsla(0,0%,68%,.2)]">
              <Link className="text-[#484848] text-base font-medium">Home</Link>
            </li>
            <li className="w-full p-4 border-b-2 border-[hsla(0,0%,68%,.2)]">
              <Link className="text-[#484848] text-base font-medium">About</Link>
            </li>
            <li className="w-full p-4 border-b-2 border-[hsla(0,0%,68%,.2)]">
              <Link className="text-[#484848] text-base font-medium">Contact</Link>
            </li>
            <li className="w-full p-4 border-b-2 border-[hsla(0,0%,68%,.2)]">
              <Link className="flex items-center gap-2" to="/register">
                <SlPencil className='text-[#484848] text-base font-medium'/>
                <span className="text-base font-medium text-[#484848]">Register</span>
              </Link>
            </li>
            <li className="w-full p-4 border-b-2 border-[hsla(0,0%,68%,.2)]">
              <Link className="flex items-center gap-2" to="/login">
                <AiOutlineUser className='text-[#484848] text-base font-medium'/>
                <span className="text-base font-medium text-[#484848]">Login</span>
              </Link>
            </li>
          </ul>
          <div className="p-4 relative bottom-[-310px]">
            <button type="button" className="w-full flex items-center justify-center gap-2 bg-[#ff5a5f] rounded-2xl p-3">
              <AiOutlinePlus size={20} className="text-white text-base font-medium"/>
              <span className="text-white text-base font-medium">Create Listing</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
