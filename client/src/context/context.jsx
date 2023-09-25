import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const token = localStorage.getItem("user_fh_token");
  const [openSidebar, setOpenSidebar] = useState(false);
  const [scrollHeader, setScrollHeader] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [scrollButton, setScrollButton] = useState(false);
  const [userData, setUserData] = useState([]);

  const onScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getUserDetails = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/user/details",
        { token },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if(res.status === 200) {
        console.log(res);
        setUserData(res.data.user);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleModal = () => {
    setOpenModal(true);
  };

  const handleSidebar = () => {
    setOpenSidebar(true);
  };

  const handleScrollHeader = () => {
    if (window.scrollY > 0) {
      setScrollHeader(true);
      setScrollButton(true);
    } else {
      setScrollHeader(false);
      setScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollHeader);
    return () => {
      window.removeEventListener("scroll", handleScrollHeader);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        scrollHeader,
        openModal,
        scrollButton,
        userData,
        token,
        setOpenSidebar,
        onScrollTop,
        handleSidebar,
        handleModal,
        setOpenModal,
        getUserDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };