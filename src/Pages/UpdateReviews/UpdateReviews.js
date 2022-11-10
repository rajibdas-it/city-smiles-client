import React, { useContext } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/UserContext";

const UpdateReviews = () => {
  const { logOut } = useContext(AuthContext);
  const review = useLoaderData();
  const navigate = useNavigate();

  const { _id, comment, ratings, phone } = review;
  //   console.log(review);

  const handleUpdateComment = (event) => {
    event.preventDefault();
    const form = event.target;
    const ratings = form.ratings.value;
    const phone = form.phone.value;
    const comment = form.comment.value;
    // console.log(ratings, phone, comment);
    const review = {
      ratings,
      phone,
      comment,
    };
    fetch(`http://localhost:5000/reviews/${_id}`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("user-token")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          navigate("/login");
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Review updated.", { autoClose: 1000 });
          navigate("/my-reviews");
        }
      });
  };
  return (
    <div>
      <h1 className="text-center mt-12">Review Update Page</h1>
      <div className="my-12 w-[80%] mx-auto flex justify-center">
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <form onSubmit={handleUpdateComment} className="card-body">
            <div className="grid md:grid-cols-2 gap-3">
              <input
                type="text"
                name="phone"
                defaultValue={phone}
                placeholder="Type here phone"
                className="input input-bordered w-full rounded"
              />
              <input
                type="text"
                name="ratings"
                defaultValue={ratings}
                placeholder="Type here ratings"
                className="input input-bordered w-full rounded"
              />
            </div>
            <textarea
              className="textarea textarea-bordered w-full h-16 rounded"
              name="comment"
              defaultValue={comment}
              placeholder="write your comment here..."
            ></textarea>

            <div className="card-actions justify-center md:justify-end">
              <button className="btn btn-primary border-none rounded text-white bg-blue-400 hover:bg-gradient-to-r from-blue-400 to-pink-400 hover:border-none">
                Update Comment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateReviews;
