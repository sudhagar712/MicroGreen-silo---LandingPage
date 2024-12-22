import React from "react";
import { FiChevronDown } from "react-icons/fi";

const Button = () => {
  return (
    <button className="flex items-center justify-center bg-green-500 text-white font-bold py-3 px-6 rounded-md shadow-md hover:bg-green-600 hover:shadow-lg transition-all duration-300">
      <FiChevronDown className="mr-2 text-xl" />
      LEARN MORE!
    </button>
  );
};

export default Button;
