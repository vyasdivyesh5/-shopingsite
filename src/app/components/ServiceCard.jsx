import React from "react";
import "../globals.css";

const ServiceCard = ({ Icon, title, description }) => {
  return (
    <div className="p-6 bg-white shadow-md  hover:shadow-lg transition-all rounded-2xl">
      <div className="text-blue-600 mb-4">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
