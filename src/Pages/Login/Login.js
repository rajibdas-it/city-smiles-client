import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";

const Login = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Login Page of {user.userName}</h1>
    </div>
  );
};

export default Login;
