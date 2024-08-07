import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { imgUrl } from "../../utils/HTTP";
import { clearToken } from "@/Store/Reducers/CommonSlice";
import UseNavigateToRoute from "../../utils/navigtion";
import Link from "next/link";

import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const router = useRouter();
  const NavigateToRoute = UseNavigateToRoute();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const path = router.asPath;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      if (user && user !== "undefined") {
        setUserInfo(JSON.parse(user));
      }
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  const { token } = useSelector(({ CommonSlice }) => CommonSlice);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(clearToken());
    closeMenu();
  };

  const toggleMenu = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsMenuOpen(!isMenuOpen);
      setTimeout(() => setIsAnimating(false), 500); // Match this with your animation duration
    }
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  return (
    <nav className="bg-white border-gray-200">
      <div className="w-full-xl px-10 flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/projects"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold font-mono text-black whitespace-nowrap">
            dlabss_
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 z-50"
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Toggle menu</span>
          {isMenuOpen ? (
            <RxCross1 size="small" />
          ) : (
            <RxHamburgerMenu size="small" />
          )}
        </button>
        {/* Desktop menu */}
        <div className="hidden md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex items-center flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li onClick={() => NavigateToRoute("/projects")}>
              <a
                className={`block py-2 px-3 ${
                  path === "/projects" ? "text-primary" : "text-gray-900"
                } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:cursor-pointer`}
              >
                Projects
              </a>
            </li>
            <li onClick={() => NavigateToRoute("/discussion")}>
              <a
                className={`block py-2 px-3 ${
                  path === "/discussion" ? "text-primary" : "text-gray-900"
                } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:cursor-pointer`}
              >
                Community
              </a>
            </li>
            {token ? (
              <>
                <li>
                  <button
                    className="btn btn-primary text-white"
                    onClick={() => router.push("/add-project")}
                  >
                    Submit Project
                  </button>
                </li>
                <li>
                  <div className="dropdown dropdown-hover dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="flex items-center gap-2 m-1 font-semibold"
                    >
                      <img
                        className="w-12 h-12 border-2 border-white rounded-full dark:border-gray-400"
                        src={`${imgUrl}${userInfo?.img}`}
                        alt=""
                      />
                    </div>
                    <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                      <li onClick={() => router.push("/user/profile")}>
                        <a>Profile</a>
                      </li>
                      <li onClick={() => router.push("/about")}>
                        <a>About Dlabbs</a>
                      </li>
                      <li onClick={handleLogout}>
                        <a>Logout</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </>
            ) : (
              <>
                <li
                  className="cursor-pointer"
                  onClick={() => router.push("/auth/login")}
                >
                  <p className="text-black">Login</p>
                </li>
                <li>
                  <button
                    className="btn btn-primary rounded-full w-[100px] text-white"
                    onClick={() => router.push("/auth/signup")}
                  >
                    Sign up
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        style={{
          clipPath: isMenuOpen
            ? "circle(150% at 95% 5%)"
            : "circle(0% at 95% 5%)",
        }}
      >
        <div className="flex flex-col h-full justify-center items-center">
          <ul className="flex flex-col items-center space-y-6">
            <li
              onClick={() => {
                NavigateToRoute("/projects");
                closeMenu();
              }}
            >
              <a
                className={`text-3xl font-semibold ${
                  path === "/projects" ? "text-primary" : "text-gray-900"
                }`}
              >
                Projects
              </a>
            </li>
            <li
              onClick={() => {
                NavigateToRoute("/discussion");
                closeMenu();
              }}
            >
              <a
                className={`text-3xl font-semibold ${
                  path === "/discussion" ? "text-primary" : "text-gray-900"
                }`}
              >
                Community
              </a>
            </li>
            {token ? (
              <>
                <li>
                  <button
                    className="btn btn-primary text-white text-xl px-6 py-3"
                    onClick={() => {
                      router.push("/add-project");
                      closeMenu();
                    }}
                  >
                    Submit Project
                  </button>
                </li>
                <li
                  onClick={() => {
                    router.push("/user/profile");
                    closeMenu();
                  }}
                >
                  <a className="text-3xl font-semibold text-gray-900">
                    Profile
                  </a>
                </li>
                <li
                  onClick={() => {
                    router.push("/about");
                    closeMenu();
                  }}
                >
                  <a className="text-3xl font-semibold text-gray-900">
                    About Dlabbs
                  </a>
                </li>
                <li onClick={handleLogout}>
                  <a className="text-3xl font-semibold text-gray-900">Logout</a>
                </li>
              </>
            ) : (
              <>
                <li
                  onClick={() => {
                    router.push("/auth/login");
                    closeMenu();
                  }}
                >
                  <a className="text-3xl font-semibold text-gray-900">Login</a>
                </li>
                <li>
                  <button
                    className="btn btn-primary rounded-full w-[180px] text-white text-xl py-3"
                    onClick={() => {
                      router.push("/auth/signup");
                      closeMenu();
                    }}
                  >
                    Sign up
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
