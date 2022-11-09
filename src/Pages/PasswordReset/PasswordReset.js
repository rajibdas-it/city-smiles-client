import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/UserContext";
import Swal from "sweetalert2";

const PasswordReset = () => {
  const { passwordReset } = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState("");

  const handleResetPassword = (event) => {
    event.preventDefault();
    setErrorMsg("");

    const form = event.target;
    const email = form.email.value;

    passwordReset(email)
      .then((result) => {
        Swal.fire(
          "",
          "Please check your email. Password reset link has been sent to your email. Dont forget to check spam folder.!",
          "success"
        );
      })
      .catch((error) => {
        setErrorMsg(error.message);
        // toast.error(error.message, { autoClose: 2000 });
      });
  };

  return (
    <div className="mt-20">
      <div className="min-h-screen lg:w-[50%] mx-auto">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold italic">
              <span className="text-blue-400">Forgot</span>{" "}
              <span className="text-pink-400">Password</span>
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            {/* error msg show  */}
            {errorMsg && (
              <div className="alert alert-error shadow-lg">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{errorMsg}</span>
                </div>
              </div>
            )}
            <form onSubmit={handleResetPassword} className="card-body w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="type your register email here..."
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary border-none text-white bg-blue-400 hover:bg-gradient-to-r from-blue-400 to-pink-400 hover:border-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
