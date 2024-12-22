import React from "react";
import landimg from "../assets/images/landimg.jpg";
import bannerimg from "../assets/images/logo.png"

const Footer = () => {

      const backgroundimg = `url(${landimg})`;


  return (
    <footer className="relative bg-black text-white py-8"  style={{ backgroundImage: backgroundimg }} >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto text-center">
         <div className="flex justify-center items-center mb-5">
          <img
            src={bannerimg}
            alt="MicroGreen Logo"
            className=" w-[100px] h-[80px]"
          />
         <span className=" font-bold text-white  mb-2 text-xl">
        
          LeafitMicro<span className="text-[#a0ecb1] text-2xl">Green</span> 
        </span>
        </div>

         <div className="flex justify-center space-x-4 mb-4">
          {/* Add social media icons */}
          <a
            href="#"
            className="text-white hover:text-green-500 transition-colors"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="#"
            className="text-white hover:text-green-500 transition-colors"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            className="text-white hover:text-green-500 transition-colors"
            aria-label="YouTube"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="#"
            className="text-white hover:text-green-500 transition-colors"
            aria-label="Pinterest"
          >
            <i className="fab fa-pinterest"></i>
          </a>
          <a
            href="#"
            className="text-white hover:text-green-500 transition-colors"
            aria-label="TikTok"
          >
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
        <p className="text-[15px] mb-4">
          Microgreen Silo is reader-supported. We may earn an affiliate
          commission when you buy through links on our site. <br />
          As an Amazon Associate, we earn from qualifying purchases.
        </p>
        <p className="text-sm mb-4">
          © Copyright 2024. All Rights Reserved To{" "}
          <span className="font-bold">LeafitMicroGreen</span>.
        </p>
       
        <div className="text-sm text-green-500 font-bold">
          <a
            href="/privacy-policy"
            className="hover:text-green-500 transition-colors"
          >
            Privacy Policy
          </a>{" "}
          |{" "}
          <a
            href="/terms-and-conditions"
            className="hover:text-green-500 transition-colors"
          >
            Terms and Conditions
          </a>{" "}
          |{" "}
          <a href="/sitemap" className="hover:text-green-500 transition-colors">
            Site Map
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
