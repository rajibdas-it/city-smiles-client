import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import moment from "moment/moment";
import { AuthContext } from "../../Context/UserContext";

const AddServices = () => {
  const { logOut } = useContext(AuthContext);
  const currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");

  const handleAddServices = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const ratings = form.ratings.value;
    const price = form.price.value;
    const image = form.image.value;
    const description = form.description.value;

    const service = {
      date: currentDate,
      title,
      ratings,
      price,
      image,
      description,
    };

    // console.log(service);

    fetch("http://localhost:5000/add-services", {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("user-token")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Added New Services", { autoClose: 1000 });
        }
      });
  };
  return (
    <div>
      <h1 className="text-center mt-12">Add New Service</h1>
      <div className="my-12 w-[80%] mx-auto flex justify-center">
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <form onSubmit={handleAddServices} className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Service Title
                  </span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="type title here"
                  className="input input-bordered w-full rounded"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Ratings
                  </span>
                </label>
                <input
                  type="text"
                  name="ratings"
                  placeholder="type ratings here"
                  className="input input-bordered w-full rounded"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Price
                  </span>
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="type price here"
                  className="input input-bordered w-full rounded"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-lg">
                  Service Image Url
                </span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="type url here"
                className="input input-bordered w-full rounded"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-lg">
                  Service Descriptions
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full h-80 rounded"
                name="description"
                placeholder="type descriptions here..."
              ></textarea>
            </div>

            <div className="card-actions justify-center md:justify-end">
              <button className="btn btn-primary border-none rounded text-white bg-blue-400 hover:bg-gradient-to-r from-blue-400 to-pink-400 hover:border-none">
                Add New Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
