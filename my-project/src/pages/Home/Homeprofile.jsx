import React from "react";
import logo from "../../assets/images/logo.png"

const Homeprofile = () => {
  return (
    <div className="bg-gray-100 py-10">
      {/* Profile Section */}
      <div className="max-w-6xl mx-auto text-center md:mt-10">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-5xl mb-6">
            <span className="text-green-500">A</span>bout{" "}
          </h1>
          <img
            src={logo}
            alt="Profile"
            className="rounded-full w-[400px] h-[400px]  md:w-[360px] md:h-[350px] object-cover border-8 border-green-300"
          />
          {/* <h1 className="text-3xl font-bold text-gray-600 mt-4 p-3">
            Hi, I'm Milos! Are You Ready To Master Growing Microgreens?
          </h1>
          <p className="text-2xl  text-gray-600 mt-3">
            You’ve come to the right place to learn everything there is about
            microgreens.
          </p> */}
        </div>

        {/* Divider with Icon */}
        <div className="flex justify-center my-10">
          <div className="border-t border-gray-300 w-20 relative">
            <div className="absolute top-[-15px] left-[50%] translate-x-[-50%] bg-white p-2 rounded-full border-2 border-gray-300">
              <svg
                className="h-6 w-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 20l9-5-9-5-9 5 9 5z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 12V4l3 3m0 0l3-3M9 7l3-3"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* What LeafitMicroGreens is About Section */}
        {/* <h2 className="text-4xl md:text-5xl p-3 font-bold text-gray-600 mb-8">What LeafitMicroGreens Is All About</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-10">
          <p className="text-gray-700 text-xl text-left">
            If you’ve ever thought: “Where can I find actionable microgreen growing advice, help, tips, and guides that get results?” you’re in the right place.
          </p>
          <p className="text-gray-700 text-xl text-left">
            I created the LeafitMicroGreens so I can share with you my FREE practical growing advice, expert tips, and techniques, so you can grow your own right now.
          </p>
          <p className="text-gray-700 text-xl text-left">
     LeafitMicroGreens is where new and veteran microgreen growers turn for proven advice.
        </p>
        <p className="text-gray-700 text-xl text-left">
     No fluff or hard to follow advice, just insanely actionable growing tips that work!
        </p>
        
        </div> */}

        <p className="text-xl  p-4">
          Leafit, a pioneering microgreens company with a proud heritage of 25
          years in the market, stands at the forefront of sustainable and
          nutritious food solutions. With decades of expertise, we cultivate
          premium-quality microgreens, harnessing innovation and eco-friendly
          practices to bring fresh, flavorful, and nutrient-rich greens to your
          table. Our commitment to quality and sustainability has earned us the
          trust of health-conscious consumers, chefs, and businesses alike. At
          Leafit, we blend tradition with cutting-edge techniques, ensuring
          every product delivers unmatched taste and wellness benefits.
          Experience the legacy of excellence that has defined us for a quarter
          of a century.
        </p>
      </div>
    </div>
  );
};

export default Homeprofile;
