import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const { registerUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleRegister = (data) => {
    console.log(data);
    const profileImg = data.photo[0];
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        const formData = new FormData();
        formData.append("image", profileImg);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Create an Account</h1>
            <p>Register with ZapShift</p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit(handleRegister)}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="name"
                    {...register("name", { required: true })}
                    className="input"
                    placeholder="Your Name"
                  />
                  <label className="label">Photo</label>
                  <input
                    type="file"
                    {...register("photo", { required: true })}
                    className="file-input"
                    placeholder="Email"
                  />
                  <label className="label">Email</label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    className="input"
                    placeholder="Email"
                  />
                  {errors.email?.type === "required" && (
                    <p className="text-error">Email is required</p>
                  )}
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    {...register("password", { required: true, minLength: 6 })}
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-error">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-error">
                      Password must be 6 character or longer
                    </p>
                  )}
                  <div>
                    <p>
                      Already have account?{" "}
                      <Link
                        state={location.state}
                        to="/login"
                        className="link link-hover"
                      >
                        Login!
                      </Link>
                    </p>
                  </div>
                  <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
              </form>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
