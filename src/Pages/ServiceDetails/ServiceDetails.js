import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import moment from "moment/moment";
import { toast } from "react-toastify";
import UserReview from "../UserReview/UserReview";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { _id, title, image, description } = service;
  const currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
  const [comments, setComments] = useState([]);
  //   var newDate = new Date();
  //   const day = newDate.getDate();
  //   const month = newDate.getMonth();
  //   const year = newDate.getFullYear();
  //   const hr = newDate.getHours();
  //   const min = newDate.getMinutes();
  //   const sec = newDate.getSeconds();
  //   console.log(newDate.toLocaleString());
  useEffect(() => {
    fetch(`http://localhost:5000/all-reviews?sId=${_id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          setComments(data.result);
        }
      });
  }, [_id]);
  // console.log(comments);
  const handleSubmitComment = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.username.value;
    const email = form.email.value;
    const comment = form.comment.value;
    // console.log(userName, comment, email, currentDate);
    const review = {
      userName,
      email,
      comment,
      date: currentDate,
      serviceId: _id,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data?.acknowledged) {
          toast.success("Review Created", { autoClose: 1000 });
          const newComments = [review, ...comments];
          setComments(newComments);
        }
      });
    // console.log("comment will be like this: ", review);
  };
  return (
    <div className="w-[90%] mx-auto">
      <h1>This is a service details page of {_id}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="border-2 border-pink-400 lg:col-span-8">
          <div className="card card-compact w-full bg-base-100 shadow-xl rounded-none">
            <figure className="rounded-none h-1/3">
              <img src={image} className="w-full" alt={title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="border-2 border-blue-400 lg:col-span-4">
          <h1>review Side</h1>
          <div>
            <div>
              <h1>Add Review</h1>
              <form className="w-full" onSubmit={handleSubmitComment}>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    name="username"
                    placeholder="type your name"
                    className="input input-bordered w-full rounded-md input-info"
                    required
                  />

                  <input
                    type="text"
                    name="email"
                    placeholder="type your email"
                    className="input input-bordered w-full rounded-md input-info"
                  />
                  {/* <div>
                    <label className="label">
                      <span className="label-text">What is your name?</span>
                    </label>
                    <input
                      type="text"
                      placeholder="type your email"
                      className="input input-bordered w-full rounded-md input-info"
                    />
                  </div> */}
                </div>
                <div>
                  <textarea
                    name="comment"
                    className="textarea textarea-info rounded-md mt-3 w-full h-14"
                    placeholder="write your comment here..."
                  ></textarea>
                </div>
                <div className="flex justify-center mt-1">
                  <button className="btn border-none rounded text-white bg-blue-400 hover:bg-gradient-to-r from-blue-400 to-pink-400 hover:border-none">
                    Add Review
                  </button>
                </div>
              </form>
            </div>
            <div>
              <h1>Patient Review </h1>

              {comments.map((cmt) => (
                <UserReview key={cmt._id} cmt={cmt}></UserReview>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
