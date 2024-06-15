import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { imgUrl } from "../../utils/HTTP";
import { clearToken } from "@/Store/Reducers/CommonSlice";

const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState(null);
  const path = router.asPath;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");

      if (user && user !== "undefined") {
        setUserInfo(JSON.parse(user));
      }
    }
  }, []);
  const { token } = useSelector(({ CommonSlice }) => CommonSlice);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(clearToken());
  };

  return (
    <div>
      <nav class="bg-white border-gray-200 ">
        <div class="w-full-xl px-10 flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8"
              alt="Flowbite Logo"
            /> */}

            <span class="self-center text-2xl font-semibold font-mono text-black whitespace-nowrap ">
              dlabss_
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul class="flex items-center flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
              <li>
                <a
                  href="/home "
                  class={`block py-2 px-3 ${
                    path === "/" ? "text-primary" : "text-black"
                  } `}
                  aria-current="page"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/projects"
                  class={`block py-2 px-3 ${
                    path === "/projects" ? "text-primary" : "text-gray-900"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/developers"
                  class={`block py-2 px-3 ${
                    path === "/developers" ? "text-primary" : "text-gray-900"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  Developers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class={`block py-2 px-3 ${
                    path === "/contact" ? "text-primary" : "text-gray-900"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  Contact
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
                        className="flex items-center gap-2 m-1  font-semibold"
                        onClick={() => router.push("/user/profile")}
                      >
                        <img
                          class="w-12 h-12 border-2 border-white rounded-full dark:border-gray-800"
                          src={`${imgUrl}${userInfo?.img}`}
                          alt=""
                        />
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu  p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <a>Profile</a>
                        </li>
                        <li onClick={() => handleLogout()}>
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
                    <button className="btn btn-primary rounded-full w-[100px] text-white">
                      Sign up
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
