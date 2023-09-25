import React from "react";
import { Link } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-[#24324a]">
        <div className="max-w-6xl mx-auto px-8 md:px-0 py-9 flex flex-col md:flex-row items-start justify-between">
          <div className="flex flex-col gap-3 mb-4 md:mb-0">
            <h3 className="text-white text-lg font-semibold">About Site</h3>
            <span className="text-[#8a99b3] text-sm font-medium w-72 leading-7">
              We’re reimagining how you buy, sell and rent. It’s now easier to
              get into a place you love. So let’s do this, together.
            </span>
          </div>
          <div className="flex flex-col gap-3 mb-4 md:mb-0">
            <h3 className="text-white text-lg font-semibold">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link className="text-[#8a99b3] transition text-sm font-medium hover:text-white">About Us</Link>
              </li>
              <li className="mb-2">
                <Link className="text-[#8a99b3] transition text-sm font-medium hover:text-white">Terms & Condition</Link>
              </li>
              <li className="mb-2">
                <Link className="text-[#8a99b3] transition text-sm font-medium hover:text-white">User's Guide</Link>
              </li>
              <li className="mb-2">
                <Link className="text-[#8a99b3] transition text-sm font-medium hover:text-white">Support Center</Link>
              </li>
              <li className="mb-2">
                <Link className="text-[#8a99b3] transition text-sm font-medium hover:text-white">Press Info</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 mb-4 md:mb-0">
            <h3 className="text-white text-lg font-semibold">Contact Us</h3>
            <ul>
              <li className="mb-2">
                <Link className="text-[#8a99b3] transition text-sm font-medium hover:text-white">info@findhouse.com</Link>
              </li>
              <li className="mb-2">
                <Link className="text-[#8a99b3] transition text-sm font-medium hover:text-white">Collins Street West, Victoria</Link>
              </li>
              <li className="mb-2">
                <Link className="text-[#8a99b3] transition text-sm font-medium hover:text-white">8007, Australia.</Link>
              </li>
              <li className="mb-2">
                <Link className="text-[#8a99b3] transition text-sm font-medium hover:text-white">+1 246-345-0699</Link>
              </li>
              <li className="mb-2">
                <Link className="text-[#8a99b3] transition text-sm font-medium hover:text-white">+1 246-345-0753</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-lg font-semibold">Follow Us</h3>
            <div className="flex items-center gap-3">
              <FaFacebookF className="text-sm font-medium text-[#8a99b3] cursor-pointer hover:text-white"/>
              <FaTwitter className="text-sm font-medium text-[#8a99b3] cursor-pointer hover:text-white"/>
              <FaInstagram className="text-sm font-medium text-[#8a99b3] cursor-pointer hover:text-white"/>
              <FaPinterestP className="text-sm font-medium text-[#8a99b3] cursor-pointer hover:text-white"/>
              <FaDribbble className="text-sm font-medium text-[#8a99b3] cursor-pointer hover:text-white"/>
            </div>
            <h3 className="text-white text-lg font-semibold my-3">Subscribe</h3>
            <div className="flex items-center gap-3">
              <input type="text" placeholder="Your Name" className="bg-[#354765] rounded-3xl px-3 outline-none py-4 text-sm font-medium text-white"/>
              <button type="button" className="text-white rounded-full p-[18px] bg-[#354765] hover:bg-[#ff5a5f]">
                <FiChevronRight className="text-base"/>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#1d293e]">
          <div className="max-w-6xl mx-auto text-center px-8 md:px-0 py-8">
            <span className="text-[#8a99b3] text-base font-medium">© 2023 by ib-themes. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
