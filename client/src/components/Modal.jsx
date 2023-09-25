import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMail } from "react-icons/ai";

const Modal = () => {
  const { messages, setOpenModal } = useGlobalContext();
  const [activeTab, setActiveTab] = useState(1);

  const handleTab = (item) => {
    setActiveTab(item);
  };

  return (
    <>
      <div
        className="relative z-[100]"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-[100] w-screen overflow-y-auto">
          <div className="flex min-h-full max-w-3xl mx-auto items-center justify-center p-4 text-center">
            <div className="w-full relative transform rounded-lg bg-white shadow-xl transition-all">
              <RxCross1
                onClick={() => setOpenModal(false)}
                size={30}
                className="bg-[#ff5a5f] cursor-pointer absolute top-[-22px] right-[-22px] w-12 h-12 text-white rounded-full p-3"
              />
              <div className="w-full flex items-center justify-between px-3 pt-3 pb-0">
                <button
                  type="button"
                  onClick={() => handleTab(1)}
                  className={activeTab === 1 ? "text-[#484848] bg-[#f5f5f5] rounded-md w-1/2 text-lg text-center font-semibold px-6 py-4" : "text-[#484848] w-1/2 text-lg rounded-md text-center font-semibold px-6 py-4"}
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => handleTab(2)}
                  className={activeTab === 2 ? "text-[#484848] bg-[#f5f5f5] rounded-md w-1/2 text-lg text-center font-semibold px-6 py-4" : "text-[#484848] w-1/2 text-lg rounded-md text-center font-semibold px-6 py-4"}
                >
                  Register
                </button>
              </div>
              {activeTab === 1 && (
                <div className="flex items-start transition-all gap-6 p-6 border-t border-[#ebebeb]">
                  <div className="w-1/2">
                    <img
                      src="/images/_assets_images_resource_login.jpg"
                      className="w-full h-full object-cover"
                      alt="login"
                    />
                  </div>
                  <div className="flex flex-col items-start w-1/2">
                    <h3 className="text-[#006c70] text-base text-start w-full font-semibold mb-4 border-b border-[#ebebeb] pb-2">
                      Login
                    </h3>
                    <div className="w-full">
                      <div className="flex items-center justify-between px-2 py-3 rounded-md border border-[#ebebeb] mb-4">
                        <input
                          type="text"
                          className="w-full outline-none text-[#484848] text-sm font-medium"
                          placeholder="UserName or Email"
                        />
                        <AiOutlineUser className="text-[#0d638f]" size={20} />
                      </div>
                      <div className="flex items-center justify-between px-2 py-3 rounded-md border border-[#ebebeb] mb-4">
                        <input
                          type="password"
                          className="w-full outline-none text-[#484848] text-sm font-medium"
                          placeholder="Password"
                        />
                        <BiLock className="text-[#0d638f]" size={20} />
                      </div>
                      {messages && (
                        <span className="w-full text-[#484848] flex items-start text-base font-medium">
                          {messages}
                        </span>
                      )}
                      <button
                        type="button"
                        className="w-full bg-[#ff5a5f] my-4 text-white text-sm border-2 border-[#ff5a5f] font-semibold rounded-md p-3 transition hover:bg-white hover:text-[#ff5a5f]"
                      >
                        Log In
                      </button>
                      <span className="text-[#484848] text-base font-medium">
                        Dont have an account?{" "}
                        <Link className="text-[#ff5a5f]" to="/register">Register</Link>
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div className="flex items-start transition-all gap-6 p-6 border-t border-[#ebebeb]">
                  <div className="w-1/2">
                    <img
                      src="/images/_assets_images_resource_regstr.jpg"
                      className="w-full h-full object-cover"
                      alt="register"
                    />
                  </div>
                  <div className="flex flex-col items-start w-1/2">
                    <h3 className="text-[#006c70] text-base text-start w-full font-semibold mb-4 border-b border-[#ebebeb] pb-2">
                      Register
                    </h3>
                    <div className="w-full">
                      <div className="flex items-center justify-between px-2 py-3 rounded-md border border-[#ebebeb] mb-4">
                        <input
                          type="text"
                          className="w-full outline-none text-[#484848] text-sm font-medium"
                          placeholder="UserName"
                        />
                        <AiOutlineUser className="text-[#0d638f]" size={20} />
                      </div>
                      <div className="flex items-center justify-between px-2 py-3 rounded-md border border-[#ebebeb] mb-4">
                        <input
                          type="email"
                          className="w-full outline-none text-[#484848] text-sm font-medium"
                          placeholder="Email"
                        />
                        <AiOutlineMail className="text-[#0d638f]" size={20} />
                      </div>
                      <div className="flex items-center justify-between px-2 py-3 rounded-md border border-[#ebebeb] mb-4">
                        <input
                          type="password"
                          className="w-full outline-none text-[#484848] text-sm font-medium"
                          placeholder="Password"
                        />
                        <BiLock className="text-[#0d638f]" size={20} />
                      </div>
                      <div className="flex items-center justify-between px-2 py-3 rounded-md border border-[#ebebeb] mb-4">
                        <input
                          type="password"
                          className="w-full outline-none text-[#484848] text-sm font-medium"
                          placeholder="Re-enter your password"
                        />
                        <BiLock className="text-[#0d638f]" size={20} />
                      </div>
                      {messages && (
                        <span className="w-full text-[#484848] flex items-start text-base font-medium">
                          {messages}
                        </span>
                      )}
                      <div className="flex items-center justify-start gap-2">
                        <input type="checkbox" className="w-4 h-4 border-[#ebebeb] rounded-md accent-[#ff5a5f]" name="" id="" />
                        <span className="text-sm font-medium mt-[2px] text-[#484848]">I have accept the Terms and Privacy Policy.</span>
                      </div>
                      <button
                        type="button"
                        className="w-full bg-[#ff5a5f] my-4 text-white text-sm border-2 border-[#ff5a5f] font-semibold rounded-md p-3 transition hover:bg-white hover:text-[#ff5a5f]"
                      >
                        Register
                      </button>
                      <span className="text-[#484848] text-base font-medium">
                        Already have an account?{" "}
                        <Link className="text-[#ff5a5f]" to="/login">Login</Link>
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
