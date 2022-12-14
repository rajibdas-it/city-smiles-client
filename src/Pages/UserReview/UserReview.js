import React from "react";
import noImg from "../../assets/imgNotFound.webp";

const UserReview = ({ cmt }) => {
  const { _id, date, authorName, email, authorImg, phone, comment, ratings } =
    cmt;
  return (
    <div className="mb-3 bg-gradient-to-tr p-4 from-purple-400 to-blue-400 flex flex-col w-full divide-y rounded-md divide-gray-700 shadow-lg">
      <div className="flex justify-between p-3">
        <div className="flex space-x-4">
          <div>
            {authorImg ? (
              <img src={authorImg} alt="" className="w-12 h-12 rounded-full" />
            ) : (
              <img src={noImg} alt="" className="w-12 h-12 rounded-full" />
            )}
          </div>
          <div>
            <h4 className="font-bold">{authorName}</h4>
            <span className="text-xs">{date}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-5 h-5 fill-current text-yellow-500"
          >
            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
          </svg>{" "}
          <span className="text-xl font-bold">{ratings}</span>
        </div>
      </div>
      <div className="p-2 text-sm">
        <p className="w-full text-justify">{comment}</p>
      </div>
    </div>
  );
};

export default UserReview;
