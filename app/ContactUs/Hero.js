import React from "react";
import Navbar from "../_components/Navbar";
function Hero() {

  return (
    <div className="">
      <Navbar />
      <div>
        <div className="text-center sm:text-left">
          <h1 className="sm:ml-24 py-3 sm:py-10 sm:text-4xl text-[28px] font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text inline-block text-transparent">CONTACT US</h1>
        </div>
        <div className="text-center flex justify-center flex-col items-center gap-2 sm:gap-5">
          <div className=" text-red-500 text-[24px] sm:text-4xl font-bold ">
            <h1>Reach Out</h1>
          </div>
          <div className=" text-black text-[24px] sm:text-4xl font-bold">
            <hi>Marketecture</hi>
          </div>
          <div className=" text-black font-bold flex justify-center text-[15px] sm:text-[20px] whitespace-nowrap ">
            <h1>Please Get In Touch Let’s Talk</h1>
          </div>
          <div className=" text-gray-500 flex justify-center">
            <h1 className="w-[90%] sm:w-[694px]">When, while the lovely valley teems with vapour around me, and the meridian teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees.</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
