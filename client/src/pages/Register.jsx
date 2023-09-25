import React,{ useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import axios from "axios";

import { useGlobalContext } from "../context/context";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { VscAdd } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiLock } from "react-icons/bi";

const Register = () => {
  const { scrollHeader, handleModal, openModal, scrollButton } = useGlobalContext();
  const registerState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [registerData, setRegisterData] = useState(registerState);
  const [isChecked, setIsChecked] = useState(false);
  const [messages, setMessages] = useState("");
  const { username, email, password, confirmPassword } = registerData;

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  }

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleRegister = async () => {
    try {
      const formData = {
        username,
        email,
        password,
        confirmPassword,
        isChecked
      };
      const res = await axios.post("http://localhost:8080/user/register", formData);
      if(res) {
        console.log(res);
        setMessages(res.data.message);
        if(res.data.message === "You have been registered successfully!") {
          setTimeout(() => {
            window.location.href = "/login";
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
            Home / Register
          </span>
          <h2 className="text-white text-4xl font-semibold">Register</h2>
        </div>
      </section>

      <section className="w-full bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-6 py-14 md:px-0">
          <h3 className="text-center font-semibold text-[#484848] text-2xl mb-2">
            Register to your account
          </h3>
          <h3 className="text-center font-medium text-[#484848] text-sm mb-4">
            Already have an account?{" "}
            <Link to="/login" className="text-sm text-[#ff5a5f]">
              Login
            </Link>
          </h3>
          <div className="w-full flex flex-col items-center gap-4 mt-2">
            <div className="w-full md:w-96 flex items-center justify-between bg-white rounded border border-[#ddd] p-3">
              <input
                type="text"
                className="w-full text-[#484848] text-sm font-medium outline-none"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
              />
              <AiOutlineUser className="text-[#0d638f]" size={20} />
            </div>
            <div className="w-full md:w-96 flex items-center justify-between bg-white rounded border border-[#ddd] p-3">
              <input
                type="email"
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
            <div className="w-full md:w-96 flex items-center justify-between bg-white rounded border border-[#ddd] p-3">
              <input
                type="password"
                className="w-full text-[#484848] text-sm font-medium outline-none"
                placeholder="Re-enter your password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
              />
              <BiLock className="text-[#0d638f]" size={20} />
            </div>
            {messages && (
              <span className="text-[#484848] text-base font-semibold">
                {messages}
              </span>
            )}
            <div className="flex justify-start gap-2 ml-[-56px] md:ml-[-32px]">
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} className="bg-white rounded-md w-4 h-4 border-[#ebebeb] accent-[#ff5a5f]" />
              <span className=" text-xs md:text-sm font-medium text-[#484848] whitespace-nowrap">I have read and accept the Terms and Privacy Policy</span>
            </div>
            <button
              type="button"
              className="w-full md:w-96 bg-[#ff5a5f] text-white text-base border-2 border-[#ff5a5f] font-medium rounded-md p-3 transition hover:bg-white hover:text-[#ff5a5f]"
              onClick={handleRegister}
            >
              Register
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Register;
