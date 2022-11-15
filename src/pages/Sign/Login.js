import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/axios";
import Sign from "./Sign";
const Login = () => {
  const onSubmit = (email, password) => {
    login(email, password);
  };
  return (
    <div>
      <Sign isLogin onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
