import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/Banner/banner.gif";
import emergencyphone from "../../assets/homecontact/emergencyphone.png";
import address from "../../assets/homecontact/address.png";
import booking from "../../assets/homecontact/bookByPhone.png";
import email from "../../assets/homecontact/emailUs.png";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card w-full bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary border-none rounded bg-blue-400 hover:bg-gradient-to-r from-blue-400 to-pink-400 hover:border-none">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* service section end */}
      {/* appointment form start */}
      <div className="my-15">
        <div className="card lg:card-side w-full shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/400/arch" alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center">Book Your Visit</h2>
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
                value="01-Jan-2022"
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
      {/* appointment form end */}

      {/* emergency contact start */}
      <div className="w-[90%] mx-auto border border-red-400 mt-10">
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
