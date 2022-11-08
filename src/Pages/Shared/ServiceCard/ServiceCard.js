import React from "react";

const ServiceCard = ({ service }) => {
  const { _id, title, image, description } = service;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {description.length > 100
            ? description.slice(0, 100) + " ..."
            : description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary border-none rounded text-white bg-blue-400 hover:bg-gradient-to-r from-blue-400 to-pink-400 hover:border-none">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
