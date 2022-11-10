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
import appointment from "../../assets/appointment2.gif";
import useTitle from "../../hooks/useTitle";

const Home = () => {
  const [services, setServices] = useState([]);
  const [size, setSize] = useState(3);
  const [loading, setLoading] = useState(true);
  useTitle("Home");

  useEffect(() => {
    fetch(`https://city-smiles-server.vercel.app/limited-service?size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, [size]);
  // console.log(services);
  return (
    <div className="w-[90%] mx-auto">
      {/* banner section start */}
      <div className="my-5">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1
              className="text-5xl font-bold"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="2000"
            >
              <span className="text-blue-400">Say Everything</span> <br />{" "}
              <span className="text-pink-400">with your smile</span>
            </h1>
            <p
              className="mt-6 mb-8 text-xl sm:mb-12"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="2000"
            >
              <span>Welcome to City Smiles a private chamber of </span> <br />
              <span className="text-blue-400 font-bold">
                Dr. Md. Fahad Bin Alam
              </span>{" "}
            </p>
            <div
              className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="2000"
            >
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
        {loading && (
          <div className="flex flex-col justify-center items-center h-96 w-[90%]">
            <div className="w-28 h-28 border-8 border-blue-500 border-dotted rounded-full animate-spin"></div>
            <p className="text-2xl font-bold text-pink-400">Loading ...</p>
          </div>
        )}
        <h1 className="text-center my-5 text-4xl font-bold text-blue-400">
          My Services
        </h1>
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
      <div
        className="mt-10 shadow-lg rounded p-6 bg-gradient-to-tl from-white to-pink-400"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="2000"
      >
        <div className="flex justify-around items-center flex-col lg:flex-row-reverse">
          <div>
            <img src={appointment} alt="" className="h-[500px]" />
          </div>
          <div>
            <div className="card-body">
              <h2 className="card-title justify-start font-semibold text-2xl">
                Book Your Visit At
              </h2>
              <h2 className="card-title justify-start mb-3 font-bold">
                <span className="text-5xl text-blue-400">City</span>
                <span className="text-5xl text-pink-400">Smiles</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered rounded w-full "
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="input input-bordered rounded w-full "
                />
                <input
                  type="text"
                  placeholder="Your Phone No"
                  className="input input-bordered rounded w-full"
                />
                <input
                  type="date"
                  className="input input-bordered rounded w-full"
                />
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-wide btn-primary text-white border-none rounded bg-blue-400 hover:bg-gradient-to-r from-blue-400 to-pink-400 hover:border-none">
                  Book Appointment Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* appointment form end */}

      {/* emergency contact start */}
      <div
        className="w-[90%] mx-auto my-20 rounded-md bg-white"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-10 ">
          <div className="flex flex-col items-center shadow-md p-4 rounded">
            <div>
              <img src={emergencyphone} className="h-28 w-28" alt="" />
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold">Emergency Phone</h1>
              <p className="text-gray-400">+88 01710 000000</p>
              <p className="text-gray-400">Call me Anytime 24/7</p>
            </div>
          </div>
          <div className="flex flex-col items-center shadow-md p-4 rounded">
            <img src={address} className="h-28 w-28" alt="" />
            <div className="text-center">
              <h1 className="text-xl font-bold">Address</h1>
              <p className="text-gray-400">Solimullah Road, Mohammadpur,</p>
              <p className="text-gray-400">Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="flex flex-col items-center shadow-md p-4 rounded">
            <img src={booking} className="h-28 w-28" alt="" />
            <div className="text-center">
              <h1 className="text-xl font-bold">Booking By Phone</h1>
              <p className="text-gray-400">+88 01710 000000</p>
              <p className="text-gray-400">+88 01710 111111</p>
            </div>
          </div>
          <div className="flex flex-col items-center shadow-md p-4 rounded">
            <img src={email} className="h-28 w-28" alt="" />
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
