import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import ServiceCard from "../Shared/ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useTitle("Services");

  useEffect(() => {
    fetch("https://city-smiles-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="mb-12 flex justify-center items-center h-40 bg-gradient-to-tr from-blue-400 to-pink-400">
        <p className="text-4xl font-bold text-white text-center capitalize">
          my services
        </p>
      </div>
      <div className="w-[90%] mx-auto my-24">
        {loading && (
          <div className="flex flex-col justify-center items-center h-96 w-[90%]">
            <div className="w-28 h-28 border-8 border-blue-500 border-dotted rounded-full animate-spin"></div>
            <p className="text-2xl font-bold text-pink-400">Loading ...</p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
