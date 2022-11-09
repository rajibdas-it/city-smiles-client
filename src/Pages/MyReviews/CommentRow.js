import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CommentRow = ({ index, review, handleDeleteComment }) => {
  const { _id, serviceName, comment } = review;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{serviceName}</td>
      <td>{comment}</td>
      <td>
        <div className="flex gap-2 ">
          <Link to={`/edit-review/${_id}`}>
            <button className="text-lime-400">
              <FaEdit className="h-8 w-8" />
            </button>
          </Link>

          <button
            onClick={() => handleDeleteComment(_id)}
            className="text-red-500"
          >
            <FaTrashAlt className="h-8 w-8" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CommentRow;
