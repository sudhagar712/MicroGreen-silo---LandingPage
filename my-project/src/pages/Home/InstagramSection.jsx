import React from "react";
import landimg from "../../assets/images/landimg.jpg";
import post1 from "../../assets/images/post1.jpg"
import post2 from "../../assets/images/post2.jpg"
import post3 from "../../assets/images/post3.jpg"
import post4 from "../../assets/images/post4.jpg"
import post5 from "../../assets/images/post5.jpg"

const InstagramSection = () => {

    const backgroundimg = `url(${landimg})`;

  const images = [
   post1, 
    post2, 
     post3, 
      post4, 
       post5
   
  ];

  return (
    <section
      className="relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: backgroundimg }}
    >
      <div className="bg-black bg-opacity-50 py-12">
        <div className="container mx-auto text-center">
           <i className="fab fa-instagram text-green-500 text-5xl mb-4"></i>
          <h2 className="text-white text-4xl font-medium">
            {" "}
            <em>Follow Me</em>
          </h2>
          <h1 className="text-4xl font-bold text-green-500 mt-2">
            On Instagram
          </h1>
          <p className="text-xl font-bold text-white mt-4">
            Follow me on Instagram for microgreen inspiration. Get an exclusive
            peek into my microgreen world with captivating visuals, insights,
            and updates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-8">
  {images.map((image, index) => (
    <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
      <img
        src={image}
        alt={`Instagram ${index + 1}`}
        className="w-full h-64 object-cover transform transition duration-300 group-hover:scale-110"
      />
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-teal-500 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-10 h-10 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9.75v.75M15.75 4.75H8.25a2 2 0 00-2 2v10.5a2 2 0 002 2h7.5a2 2 0 002-2V6.75a2 2 0 00-2-2z"
          />
        </svg>
      </div>
    </div>
  ))}
</div>

          <button className="mt-8 bg-green-500 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300">
            <i className="fab fa-instagram mr-2"></i>Follow Microgreen Silo on
            Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
