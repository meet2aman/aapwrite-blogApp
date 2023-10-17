import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as StoreLogin } from "../Slices/auth/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const login = async (data) => {
    setError("");

    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(StoreLogin(userData));
          navigate("/");
        }
      }
      toast.success("Logged in");
    } catch (error) {
      setError(error.message);
      toast(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center w-full mt-10 max-md:scale-[0.8]">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black-10">
        <div className="mb-2 grid justify-center items-center">
          <span className="inline-block w-full items-center max-w-[100px]">
            <Logo className="flex justify-center items-center" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          don&apos;t have any account?&nbsp;
          <Link
            className="font-medium text-primary transition-all duration-200 underline hover:text-sky-500"
            to="/signup"
          >
            Sign Up
          </Link>
        </p>
        {error && (
          <p className="text-center text-xl text-red-500 tracking-wide leading-relaxed">
            {error}
          </p>
        )}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email:"
              placeholder="Enter your e-mail"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password"
              placeholder="Enter Password"
              type="password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit">Sign in</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
