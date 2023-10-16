import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./Slices/auth/authSlice";
import { ThreeCircles } from "react-loader-spinner";
import { Header, Footer } from "./components";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

function App() {
  const [isloading, isSetLoading] = React.useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => isSetLoading(false));
  }, []);

  return isloading ? (
    <>
      <div className="w-full h-screen flex justify-center items-center align-middle flex-col gap-10 ">
        <Toaster />
        <ThreeCircles
          height="100"
          width="100"
          color="#a17fe0"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
        <h1 className="text-6xl max-md:text-2xl text-center text-white font-bold tracking-wide capitalize font-monserrat">
          Please Wait While We are fetching...
        </h1>
      </div>
    </>
  ) : (
    <>
      <div className="min-h-screen flex- flex-wrap content-between ">
        <div className="w-full block">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
