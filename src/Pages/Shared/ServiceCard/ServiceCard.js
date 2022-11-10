import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = ({ service }) => {
  const { _id, title, image, description } = service;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={image}>
            <img src={image} alt="" className="h-[370px] w-full" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      {/* <figure>
        <img src={image} alt="Shoes" />
      </figure> */}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="badge badge-outline">Price: $</div>
        <p>
          {description.length > 100
            ? description.slice(0, 100) + " ..."
            : description}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/services/${_id}`}>
            <button className="btn btn-primary border-none rounded text-white bg-blue-400 hover:bg-gradient-to-r from-blue-400 to-pink-400 hover:border-none">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
