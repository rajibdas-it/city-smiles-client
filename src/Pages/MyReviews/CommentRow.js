import React from "react";

const CommentRow = ({ index, review }) => {
  const { _id, serviceName, comment } = review;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{serviceName}</td>
      <td>{comment}</td>
      <td>
        <div className="flex gap-2">
          <button className="btn btn-ghost">Edit</button>
          <button className="btn btn-ghost">delete</button>
        </div>
      </td>
    </tr>
  );
};

export default CommentRow;
