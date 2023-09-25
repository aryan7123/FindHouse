import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import ScrollToTop from "../components/ScrollToTop";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DashboardHeader from '../components/DashboardHeader';
import DashboardSidebar from '../components/DashboardSidebar';

import { useGlobalContext } from "../context/context";

const UserDashboard = () => {
  const { scrollHeader, scrollButton, getUserDetails, userData, token } = useGlobalContext();

  useEffect(() => {
    if (token) {
      getUserDetails();
    } else {
      console.log("You have to login");
    }
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      {scrollButton && <ScrollToTop />}

      <DashboardHeader userData={userData}/>
      <DashboardSidebar />

      <main className='bg-[#f7f7f7] w-full md:pl-[340px] md:pr-[30px] md:py-[100px] py-12 px-6 md:mt-[100px] mt-0'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod omnis architecto ratione modi nemo, exercitationem iste officia suscipit vel voluptates eius veniam, eum cum cumque nihil porro necessitatibus dignissimos, nulla at consequatur reiciendis! Vitae corporis laborum repellendus rem omnis ipsam explicabo, maiores dolorem odit dicta veniam praesentium distinctio blanditiis est hic necessitatibus facere aspernatur reprehenderit voluptas nobis harum molestias eum numquam sunt. Debitis earum, est consequuntur nisi cupiditate temporibus quos impedit laudantium itaque at quis expedita magni vero nemo consectetur nihil accusantium eius totam quibusdam soluta voluptate. Corporis, nobis amet? Fuga corporis soluta sapiente? Voluptatibus numquam sit sed! Excepturi!
      </main>
    </>
  )
}

export default UserDashboard;