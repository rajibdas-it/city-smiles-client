import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/Banner/banner.gif";
import emergencyphone from "../../assets/homecontact/emergencyphone.png";
import address from "../../assets/homecontact/address.png";
import booking from "../../assets/homecontact/bookByPhone.png";
import email from "../../assets/homecontact/emailUs.png";
import { FaArrowRight } from "react-icons/fa";
import ServiceCard from "../Shared/ServiceCard/ServiceCard";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import oneImg from "../../assets/services/1.png";

const Home = () => {
  const [services, setServices] = useState([]);
  const [size, setSize] = useState(3);

  useEffect(() => {
    fetch(`https://city-smiles-server.vercel.app/limited-service?size=${size}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [size]);
  // console.log(services);
  return (
    <div className="w-[90%] mx-auto">
      {/* banner section start */}
      <div className="my-5">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold">
              <span className="text-blue-400">Say Everything</span> <br />{" "}
              <span className="text-pink-400">with your smile</span>
            </h1>
            <p className="mt-6 mb-8 text-xl sm:mb-12">
              Welcome to{" "}
              <span className="text-blue-400 font-bold">
                Dr. Md. Fahad Bin Alam
              </span>{" "}
              Website
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link to="/services">
                <button className="btn btn-wide bg-blue-400 border-none text-white px-8 py-3 text-lg font-semibold rounded hover:bg-gradient-to-r from-blue-400 to-pink-400">
                  My Services<FaArrowRight></FaArrowRight>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src={bannerImg} alt="" className="object-contain h-96" />
          </div>
        </div>
      </div>
      {/* banner section end */}

      {/* service section start */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <div className="mt-5 text-center">
          <Link to="/services">
            <button className="btn btn-primary px-14 border-none rounded text-white bg-pink-400 hover:bg-gradient-to-r from-blue-400 to-pink-400 hover:border-none justify-center">
              See All
            </button>
          </Link>
        </div>
      </div>
      {/* service section end */}
      {/* appointment form start */}
      {/* <PhotoProvider>
        <PhotoView src={oneImg}>
          <img src={oneImg} alt="" className="h-96" />
        </PhotoView>
      </PhotoProvider> */}

      {/* appointment form end */}

      {/* emergency contact start */}
      <div className="w-[90%] mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-10">
          <div className="flex flex-col">
            <div>
              <img src={emergencyphone} className="ml-10 h-28 w-28" alt="" />
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold">Emergency Phone</h1>
              <p className="text-gray-400">+88 01710 000000</p>
              <p className="text-gray-400">Call me Anytime 24/7</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <img src={address} className="ml-10 h-28 w-28" alt="" />
            <div className="text-center">
              <h1 className="text-xl font-bold">Address</h1>
              <p className="text-gray-400">Solimullah Road, Mohammadpur,</p>
              <p className="text-gray-400">Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <img src={booking} className="ml-10 h-28 w-28" alt="" />
            <div className="text-center">
              <h1 className="text-xl font-bold">Booking By Phone</h1>
              <p className="text-gray-400">+88 01710 000000</p>
              <p className="text-gray-400">+88 01710 111111</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <img src={email} className="ml-10 h-28 w-28" alt="" />
            <div className="text-center">
              <h1 className="text-xl font-bold">Email Me</h1>
              <p className="text-gray-400">drfahad@gmail.com</p>
              <p className="text-gray-400">drfahadbds@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* emergency contact end */}
    </div>
  );
};

export default Home;
