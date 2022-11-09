import React, { useEffect, useState } from "react";
import CommentRow from "./CommentRow";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-12">
      <div className="mb-12 flex justify-center items-center h-40 bg-gradient-to-tr from-blue-400 to-pink-400">
        <p className="text-4xl font-bold text-white text-center">
          Table of Your Reviews
        </p>
      </div>
      <div>
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
                ></CommentRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
