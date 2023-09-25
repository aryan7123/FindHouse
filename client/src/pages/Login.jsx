import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

import { useGlobalContext } from "../context/context";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { VscAdd } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import axios from "axios";

const Login = () => {
  const { scrollHeader, handleModal, openModal, scrollButton } = useGlobalContext();
  const loginState = {
    email: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(loginState);
  const [messages, setMessages] = useState("");
  const { email, password } = loginData;

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  const handleLogin = async() => {
    try {
      const formData = {
        email,
        password
      }
      const res = await axios.post("http://localhost:8080/user/login", formData);
      if(res) {
        console.log(res);
        setMessages(res.data.message);
        if(res.data.message === "You have been successfully logged in") {
          localStorage.setItem("user_fh_token", res.data.token);
          setTimeout(() => {
            window.location.href = "/dashboard";
          }, 1500);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

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
            Home / Login
          </span>
          <h2 className="text-white text-4xl font-semibold">Login</h2>
        </div>
      </section>

      <section className="w-full bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-6 py-14 md:px-0">
          <h3 className="text-center font-semibold text-[#484848] text-2xl mb-2">
            Login to your account
          </h3>
          <h3 className="text-center font-medium text-[#484848] text-sm mb-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-sm text-[#ff5a5f]">
              Register
            </Link>
          </h3>
          <div className="w-full flex flex-col items-center gap-4 mt-2">
            <div className="w-full md:w-96 flex items-center justify-between bg-white rounded border border-[#ddd] p-3">
              <input
                type="text"
                className="w-full text-[#484848] text-sm font-medium outline-none"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleChange}
              />
              <AiOutlineMail className="text-[#0d638f]" size={20} />
            </div>
            <div className="w-full md:w-96 flex items-center justify-between bg-white rounded border border-[#ddd] p-3">
              <input
                type="password"
                className="w-full text-[#484848] text-sm font-medium outline-none"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
              <BiLock className="text-[#0d638f]" size={20} />
            </div>
            {messages && (
              <span className="text-[#484848] text-base font-semibold">
                {messages}
              </span>
            )}
            <div className="flex items-center justify-between gap-[130px] md:gap-[152px]">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" className="rounded-lg accent-[#ff5a5f] w-4 h-4 bg-white border border-[#dee2e6]" />
                <span className="text-[#484848] text-sm font-medium mt-1">Remember Me</span>
              </div>
              <Link to="/forgot-password" className="text-[#ff5a5f] text-sm font-medium">
                Forgot Password?
              </Link>
            </div>
            <button
              onClick={handleLogin}
              type="button"
              className="w-full md:w-96 bg-[#ff5a5f] text-white text-base border-2 border-[#ff5a5f] font-medium rounded-md p-3 transition hover:bg-white hover:text-[#ff5a5f]"
            >
              Login
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Login;
