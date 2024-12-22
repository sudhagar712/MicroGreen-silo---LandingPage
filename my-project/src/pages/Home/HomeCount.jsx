import { useState, useEffect } from "react";
import landimg from "../../assets/images/landimg.jpg";
import { FaRegCalendarDays } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLeaf } from "react-icons/lu";
import { FaChartLine } from "react-icons/fa";

const HomeCount = () => {
  const backgroundimg = `url(${landimg})`;

  const statsData = [
    {
      id: 1,
      icon: <FaRegCalendarDays />,
      number: 6,
      description: "Days Until Harvest For Some Types",
      key: "daysUntilHarvest",
    },
    {
      id: 2,
      icon: <FaChartLine />,
      number: 100,
      description: "Intense Flavor With A Wicked Kick",
      key: "intenseFlavor",
    },
    {
      id: 3,
      icon: <IoSettingsOutline />,
      number: 20,
      description: "Growing Methods To Choose From",
      key: "growingMethods",
    },
    {
      id: 4,
      icon: <LuLeaf />,
      number: 130,
      description: "Different Varieties You Can Grow",
      key: "varieties",
    },
  ];

  const [counts, setCounts] = useState({
    daysUntilHarvest: 0,
    intenseFlavor: 0,
    growingMethods: 0,
    varieties: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) => ({
        daysUntilHarvest:
          prevCounts.daysUntilHarvest < 6
            ? prevCounts.daysUntilHarvest + 1
            : 6,
        intenseFlavor:
          prevCounts.intenseFlavor < 100
            ? prevCounts.intenseFlavor + 10
            : 100,
        growingMethods:
          prevCounts.growingMethods < 20
            ? prevCounts.growingMethods + 2
            : 20,
        varieties:
          prevCounts.varieties < 130 ? prevCounts.varieties + 13 : 130,
      }));
    }, 100); // Increment every 100ms

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div
      className="relative h-[100%] bg-center bg-cover py-16"
      style={{ backgroundImage: backgroundimg }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
           
      {/* Content */}
      
      <div className="relative z-10 text-center text-white mt-7 mb-10">
         
        
        <h2 className="text-4xl md:text-4xl">
           
          <em>Microgreens Facts</em>
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold">
          DID YOU <span className="text-green-500">KNOW</span>
        </h1>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        {statsData.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center">
<div className="relative flex items-center hover:border-none justify-center mt-5 mb-[50px] w-20 h-20 md:w-[190px] md:h-[190px] rounded-full border-4 border-green-600 hover:bg-white group">
  <div className="absolute w-[170px] h-[170px] hover:border-none md:w-[170px] md:h-[170px] rounded-full border-2 border-green-600"></div>
  <div className="text-4xl md:text-6xl text-white group-hover:text-green-600">
    {stat.icon}
  </div>
</div>

            <h2 className="text-4xl md:text-5xl font-bold text-white">{counts[stat.key]}</h2>
            <p className="mt-2 md:text-2xl md:mb-[60px]  text-white">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCount;
