import React from "react";
import landimg from "../../assets/images/landimg.jpg";
import bannerimg from "../../assets/images/logo.png"
import { FiSearch } from "react-icons/fi";
const Banner = () => {

    const backgroundimg = `url(${landimg})`;


  return (
    <section
      className="relative h-[100vh] bg-cover bg-center"
      style={{ backgroundImage: backgroundimg }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col  items-center justify-center text-center text-white h-full px-4">
        {/* Logo */}
        <img
          src={bannerimg} 
          alt="MicroGreen Large Logo"
          className="w-[290px] h-[250px] md:w-[300px] mt-6 md:h-[250px] mb-4"
        />

        {/* Main Title */}
        <h1 className="text-4xl md:text-8xl font-bold mb-2">
        
          LeafitMicro<span className="text-green-500 md:text-8xl">Green</span> 
        </h1>
       
        <p className="text-lg md:text-2xl font-medium mb-6">
          Your Online Source For Mastering Microgreen Cultivation
        </p>

        {/* Search Box */}
        <div className="relative w-full max-w-md mx-auto mb-6">
          <input
            type="text"
            placeholder="Search Microgreens..."
            className="w-full py-3 pl-4 pr-12 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <FiSearch className="absolute top-4 right-4 text-green-600"/>
        </div>

        {/* Button */}
        <a
          href="#learn-more"
          className="bg-green-500 font-bold    text-white  py-4 px-10 rounded-md shadow-lg text-lg"
        >
          LEARN MORE!
        </a>
      </div>
    </section>
  );
};

export default Banner;
