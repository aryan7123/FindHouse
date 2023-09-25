import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

import axios from "axios";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { BiUser } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { VscAdd } from "react-icons/vsc";

const ForgotPassword = () => {
  const { scrollHeader, handleModal, openModal, scrollButton } = useGlobalContext();
  const initialState = {
    email: "",
  };

  const [emailData, setEmailData] = useState(initialState);
  const [messages, setMessages] = useState("");
  const { email } = emailData;

  const handleChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const sendEmail = async () => {
    try {
      const formData = { email };
      const res = await axios.post(
        "http://localhost:8080/user/send-email",
        formData
      );
      if (res.status === 200) {
        console.log(res);
        setMessages(res.data.message);
        if(res.data.message === "Mail sent to your email address") {
          setTimeout(() => {
            window.location.href = "/otp-verification";
          }, 1500);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <Sidebar />
      {scrollButton && <ScrollToTop />}
      {openModal && <Modal />}

      <header
        className={
          scrollHeader
            ? "fixed top-0 left-0 z-[99] w-full bg-white shadow-md transition-all hidden md:block"
            : "fixed top-0 left-0 z-[99] w-full bg-white transition-all hidden md:block"
        }
      >
        <nav className="flex items-center justify-between px-8 py-6">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/logo-2.png"
              className="w-full h-full"
              alt="house-logo"
            />
            <span className="text-[#484848] text-xl font-semibold">
              FindHouse
            </span>
          </Link>
          <ul className="flex items-center justify-between gap-10">
            <li>
              <Link className="text-[#484848] font-medium text-base hover:text-[#ff5a5f]">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-[#484848] font-medium text-base hover:text-[#ff5a5f]">
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-[#484848] font-medium text-base hover:text-[#ff5a5f]">
                Contact
              </Link>
            </li>
            <li>
              <button
                onClick={handleModal}
                data-modal-target="defaultModal"
                data-modal-toggle="defaultModal"
                className="text-[#484848] font-medium text-base flex items-center gap-1 hover:text-[#ff5a5f]"
              >
                <BiUser size={20} />
                <span>Login/Register</span>
              </button>
            </li>
            <li>
              <Link className="px-6 border-2 py-3 flex items-center bg-[#ff5a5f] rounded-3xl text-white font-medium text-base gap-1 transition hover:border-[#ff5a5f] hover:bg-white hover:text-[#ff5a5f]">
                <VscAdd size={20} />
                <span>Create Listing</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="inner-page-section py-28 md:py-48 px-6 md:px-0">
        <div className="max-w-6xl relative z-[1] flex flex-col items-start mx-auto">
          <span className="text-white text-base font-medium mb-3">
            Home / Forgot Password
          </span>
          <h2 className="text-white text-4xl font-semibold">Forgot Password</h2>
        </div>
      </section>

      <section className="w-full bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-6 py-14 md:px-0">
          <h3 className="text-center font-semibold text-[#484848] text-2xl mb-4">
            Send Reset Link
          </h3>
          <div className="w-full flex flex-col items-center gap-4 mt-2">
            <div className="w-full md:w-96 flex items-center justify-between bg-white rounded border border-[#ddd] p-3">
              <input
                type="text"
                name="email"
                className="w-full text-[#484848] text-sm font-medium outline-none"
                placeholder="Email"
                value={email}
                onChange={handleChange}
              />
              <AiOutlineMail className="text-[#0d638f]" size={20} />
            </div>
            {messages && (
              <span className="text-[#484848] flex items-start text-base font-medium">
                {messages}
              </span>
            )}
            <button
              onClick={sendEmail}
              type="button"
              className="w-full md:w-96 bg-[#ff5a5f] text-white text-base border-2 border-[#ff5a5f] font-medium rounded-md p-3 transition hover:bg-white hover:text-[#ff5a5f]"
            >
              Send
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ForgotPassword;
