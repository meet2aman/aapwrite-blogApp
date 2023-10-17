import React, { useEffect, useState } from "react";
import { Container, Logo, LogoutBtn, FadeMenu } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-5 px-6 bg-black border border-t-2 border-t-black shadow text-white">
      {isMobile ? (
        <>
          <Container>
            <nav className="flex justify-between flex-wrap items-center align-middle">
              <Logo />
              <FadeMenu/>
            </nav>
          </Container>
        </>
      ) : (
        <>
          <Container>
            <nav className="flex">
              <div className="mr-4">
                <Link to="/">
                  <Logo width="20px" height="20px" />
                </Link>
              </div>
              <ul className="flex ml-auto font-semibold text-lg max-md:text-md">
                {navItems.map((item) =>
                  item.active ? (
                    <li key={item.name}>
                      <button
                        onClick={() => navigate(item.slug)}
                        className="inline-bock px-6 py-2 duration-200 hover:bg-sky-500 hover:text-white rounded-full tracking-wider"
                      >
                        {item.name}
                      </button>
                    </li>
                  ) : null
                )}
                {authStatus && (
                  <li>
                    <LogoutBtn />
                  </li>
                )}
              </ul>
            </nav>
          </Container>
        </>
      )}
    </header>
  );
}

export default Header;
