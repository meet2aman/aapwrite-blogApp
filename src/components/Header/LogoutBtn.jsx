import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../Slices/auth/authSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
        toast.success("Logged Out");
        navigate("/login");
      })
      .catch((error) => {
        console.log(`${error.message} error : while logouting`);
      });
  };
  return (
    <button
      className="inline px-6 py-2 duration-200 neons !font-nunito drop-shadow[0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em] tracking-wider text-base font-semibold hover:opacity-70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
