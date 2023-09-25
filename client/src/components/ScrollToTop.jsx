import React from "react";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";
import { useGlobalContext } from "../context/context";

const ScrollToTop = () => {
  const { onScrollTop } = useGlobalContext();
  return (
    <>
      <button
        type="button"
        onClick={onScrollTop}
        className="bg-[#141e2f] text-white text-sm p-3 z-[999] fixed bottom-8 right-8 rounded-full"
      >
        <HiOutlineArrowNarrowUp size={20} />
      </button>
    </>
  );
};

export default ScrollToTop;
