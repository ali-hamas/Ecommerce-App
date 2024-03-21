import React from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
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
            <a>SignUp</a>
          </div>
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="auth-field">
              <input
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: { value: true, message: "Name is required" },
                })}
              />
              {errors.name && (
                <span className="auth-error">{errors.name.message}</span>
              )}
            </div>
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
            <div className="auth-field">
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: { value: true, message: "Password is required" },
                  minLength: {
                    value: 6,
                    message: "Minimum length of password should be 6",
                  },
                })}
              />
              {errors.password && (
                <span className="auth-error">{errors.password.message}</span>
              )}
            </div>
            <button type="submit" className="btn fill-btn">
              Sign Up
            </button>
          </form>
          <span className="auth-page-text">
            Already a user?
            <Link to={"/login"} className="auth-page-link">
              Login
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default SignUp;
