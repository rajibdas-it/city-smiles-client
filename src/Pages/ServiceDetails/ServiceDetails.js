import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import moment from "moment/moment";
import { toast } from "react-toastify";
import UserReview from "../UserReview/UserReview";
import { AuthContext } from "../../Context/UserContext";
import useTitle from "../../hooks/useTitle";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, title, image, description } = service;
  const currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
  const [comments, setComments] = useState([]);

  useTitle(`Service Details of ${title}`);

  // console.log(user.user.displayName);
  // console.log(user.user.email);
  // console.log(user.user.photoURL);
  //   var newDate = new Date();
  //   const day = newDate.getDate();
  //   const month = newDate.getMonth();
  //   const year = newDate.getFullYear();
  //   const hr = newDate.getHours();
  //   const min = newDate.getMinutes();
  //   const sec = newDate.getSeconds();
  //   console.log(newDate.toLocaleString());
  useEffect(() => {
    fetch(`https://city-smiles-server.vercel.app/all-reviews?sId=${_id}`)
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
    // const userName = form.username.value;
    // console.log("userName from default value", userName);
    // const email = form.email.value;
    // console.log(userName, comment, email, currentDate);
    const comment = form.comment.value;
    const phone = form.phone.value;
    const ratings = form.ratings.value;
    const review = {
      date: currentDate,
      authorName: user.displayName,
      email: user.email,
      authorImg: user.photoURL,
      phone,
      comment,
      ratings,
      serviceId: _id,
      serviceName: title,
    };

    // console.log(review);

    fetch("https://city-smiles-server.vercel.app/reviews", {
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
          form.reset();
          const newComments = [review, ...comments];
          setComments(newComments);
        }
      });
    // console.log("comment will be like this: ", review);
  };

  return (
    <div>
      <div className="flex w-full bg-gradient-to-tr from-blue-400 to-pink-400 rounded-md  h-40 justify-center items-center">
        <h1 className="font-bold text-2xl md:text-3xl text-white text-center">
          Service Details of {title}
        </h1>
      </div>
      <div className="w-[90%] lg:w-[70%] mx-auto mb-20">
        <div className="grid grid-cols-1 gap-4">
          <div className="">
            <div className="card card-compact w-full bg-base-100 rounded-none">
              <div className="lg:w-full xl:w-full dark:bg-gray-800">
                <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                  <img
                    src={image}
                    alt=""
                    className="rounded-lg shadow-lg aspect-video "
                  />
                </div>
              </div>
              {/* <figure className="rounded-none w-[70%] mx-auto">
                <img src={image} className="w-full" alt={title} />
              </figure> */}
              <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-justify">{description}</p>
              </div>
            </div>
          </div>
          <div className="border-2 p-3">
            <div>
              {user?.uid ? (
                <div>
                  <h1 className="text-xl mb-3 font-semibold">
                    Add your review here...
                  </h1>
                  {user ? (
                    <form className="w-full" onSubmit={handleSubmitComment}>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          name="username"
                          defaultValue={user.displayName}
                          placeholder="your name"
                          className="input input-bordered w-full rounded-md input-info"
                          required
                          readOnly
                        />

                        <input
                          type="text"
                          name="email"
                          defaultValue={user.email}
                          placeholder="type your email"
                          className="input input-bordered w-full rounded-md input-info"
                          readOnly
                        />
                        <input
                          type="text"
                          name="phone"
                          placeholder="phone no."
                          className="input input-bordered w-full rounded-md input-info"
                          required
                        />
                        <input
                          type="text"
                          name="ratings"
                          placeholder="rating here"
                          className="input input-bordered w-full rounded-md input-info"
                          required
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
                  ) : (
                    "Login for posted review here..."
                  )}
                </div>
              ) : (
                <div>
                  <p className="text-center">Please login to add a review.</p>
                  <div className="flex justify-center mt-1">
                    <Link to="/login">
                      <button className="btn border-none rounded text-white bg-blue-400 hover:bg-gradient-to-r from-blue-400 to-pink-400 hover:border-none">
                        Login
                      </button>
                    </Link>
                  </div>
                </div>
              )}
              <div className="my-5">
                {comments?.map((cmt) => (
                  <UserReview key={cmt._id} cmt={cmt}></UserReview>
                ))}

                {/* {user
                ? comments?.map((cmt) => (
                    <UserReview key={cmt._id} cmt={cmt}></UserReview>
                  ))
                : "Please login for commented here..."} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
