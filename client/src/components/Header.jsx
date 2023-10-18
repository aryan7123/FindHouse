import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../context/context";

const Header = () => {
  const { handleSidebar } = useGlobalContext();
  return (
    <>
      {/* Mobile Header */}
      <header className="w-full bg-white shadow-lg block md:hidden">
        <nav className="max-w-6xl flex items-center justify-between p-6">
          <button type="button" onClick={handleSidebar}>
            <HiMenuAlt1 className="text-[#484848]" size={30} />
          </button>
          <Link className="flex items-center gap-2" to="/">
            <img src="/images/logo-2.png" alt="house" className="w-full" />
            <span className="text-[#484848] text-lg font-semibold">
              FindHouse
            </span>
          </Link>
          <button type="button">
            <AiOutlineUser className="text-[#0d638f]" size={30} />
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
