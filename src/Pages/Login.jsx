import React from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="auth-screen">
        <div className="auth-box">
          <div className="section-heading">
            <a>Login</a>
          </div>
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="auth-field">
              <input
                type="text"
                placeholder="Email"
                {...register("username", {
                  required: { value: true, message: "Email is required" },
                })}
              />
              {errors.username && (
                <span className="auth-error">{errors.username.message}</span>
              )}
            </div>
            <div className="auth-field" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: { value: true, message: "Password is required" },
                  minLength: {
                    value: 6,
                    message: "Minimum length of password is 6",
                  },
                })}
              />
              {errors.password && (
                <span className="auth-error">{errors.password.message}</span>
              )}
            </div>
            <button type="submit" className="btn fill-btn">
              Login
            </button>
          </form>
          <span className="auth-page-text">
            Not a user?
            <Link to={"/signup"} className="auth-page-link">
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
