import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/UserContext";
import useTitle from "../../hooks/useTitle";
import CommentRow from "./CommentRow";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitle("My Review");

  // console.log(url);
  // const userToken = localStorage.getItem("user-token");
  // console.log(userToken);
  useEffect(() => {
    fetch(
      `https://city-smiles-server.vercel.app/reviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("user-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => setReviews(data));
  }, [user?.email, logOut]);

  const handleDeleteComment = (id) => {
    fetch(`https://city-smiles-server.vercel.app/reviews/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("user-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Comment Deleted", { autoClose: 1000 });
          const remainingComment = reviews.filter(
            (review) => review._id !== id
          );
          setReviews(remainingComment);
        }
      });
  };
  return (
    <div className="my-12 min-h-screen">
      <div className="mb-12 flex justify-center items-center h-40 bg-gradient-to-tr from-blue-400 to-pink-400">
        <p className="text-4xl font-bold text-white text-center">
          Table of Your Reviews
        </p>
      </div>
      {reviews.length > 0 ? (
        <div className="w-[80%] mx-auto">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Sl No.</th>
                  <th>Service Name</th>
                  <th>Reviews</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review, index) => (
                  <CommentRow
                    key={review._id}
                    index={index}
                    review={review}
                    handleDeleteComment={handleDeleteComment}
                  ></CommentRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p className="text-center text-2xl">No review added</p>
      )}
    </div>
  );
};

export default MyReviews;
