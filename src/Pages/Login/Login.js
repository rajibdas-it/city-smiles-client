import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/UserContext";

const Login = () => {
  const { userLogin, googleSignIn } = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (event) => {
    event.preventDefault();
    setErrorMsg("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        // form.reset();
        // navigate(from, { replace: true });
        const currentUser = {
          email: user.email,
        };

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            const token = data.token;
            localStorage.setItem("user-token", token);
            form.reset();
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        setErrorMsg(error.message);
        // toast.error(error.message, { autoClose: 1500 });
      });
  };

  // google signin handler code
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // setErrorMsg(error.message);
        toast.error(error.message, { autoClose: 1500 });
      });
  };

  return (
    <div className="mt-20">
      <div className="min-h-screen lg:w-[50%] mx-auto">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              <span className="text-blue-400">Login </span>
              <span className="text-pink-400">now!</span>
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
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link
                    to="/resetpassword"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary border-none text-white bg-blue-400 hover:bg-gradient-to-r from-blue-400 to-pink-400 hover:border-none">
                  Log In
                </button>
              </div>
            </form>
            <div className="mb-2">
              <p className="px-3 text-sm text-center  text-white bg-gradient-to-tr from-blue-400 to bg-pink-400 mb-2">
                Sign In With Google
              </p>
            </div>
            <div className="flex justify-center mb-2">
              <button
                onClick={handleGoogleSignIn}
                aria-label="Log in with Google"
                className="py-3 px-3 rounded shadow-lg btn btn-wide border-none text-white bg-blue-400"
              >
                <svg className="w-6 h-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
                Google
              </button>
            </div>
            <p className="text-xs text-center sm:px-6 mb-5">
              Don't have an account?
              <Link to="/register" className="underline">
                <span className="hover:text-blue-400">Sign up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
