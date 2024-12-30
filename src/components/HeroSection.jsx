import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { GOOGLE_DRIVE_FILE_URL } from "../service/constants";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";


function HeroSection() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Frontend Developer", "Tech Explorer","Basketball Player...."],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 md:px-10 bg-gray-200 py-24"
      id="home"
    >
      <div className="text-center lg:text-left lg:max-w-xl mb-4 lg:mb-0 ml-16">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hello, My name is{" "}
          <span className="text-purple-600 text-5xl md:text-6xl">Versha Yadav</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mt-2">
          I am a Passionate
        </h2>
        <span
          className="text-xl text-purple-500 font-medium"
          ref={typedRef}
        ></span>
        
       {/* Social Media Links */}
        <div className="social-media flex justify-center lg:justify-start space-x-6 mt-4">
          <a href="https://www.linkedin.com/in/versha-yadav-491583225/" className="hover:text-blue-600">
            <FaLinkedinIn size={32} />
          </a>
          <a href="https://github.com/vershat" className="hover:text-blue-400">
            <FaTwitter size={32} />
          </a>
          <a href="https://www.linkedin.com/in/versha-yadav-491583225/" className="hover:text-pink-500">
            <FaInstagram size={32} />
          </a>
          <a href="https://github.com/vershat" className="hover:text-blue-500">
            <FaFacebook size={32} />
          </a>
        </div>



        <a
          href={GOOGLE_DRIVE_FILE_URL}
          download="Versha_Yadav_Resume.pdf"
          className="inline-block mt-4 bg-purple-600 text-white px-4 md:px-6 py-2 rounded-lg hover:bg-purple-500"
        >
          Download Resume
        </a>
      </div>
      <div className="mt-4 lg:mt-0 lg:mr-20 mx-auto">
        <img
          src="/image1.jpg"
          alt="Hero"
          className="rounded-lg shadow-lg max-w-xs sm:max-w-sm md:max-w-md mx-auto"
        />
      </div>
    </section>
  );
}

export default HeroSection;
