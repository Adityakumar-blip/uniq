import { setToken } from "@/Store/Reducers/CommonSlice";
import { SignUp } from "@/store/Reducers/AuthSlice";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

import sea from "@/assets/sea.jpg";

const index = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      password: "",
      isAgreed: false,
    },
    onSubmit: (values) => {
      dispatch(SignUp(values)).then((response) => {
        console.log("signup response", response);
        if (response.payload.status === 200) {
          dispatch(setToken(response.payload.data.data.token));
          // localStorage.setItem(
          //   "user",
          //   JSON.stringify(response.payload.data.data)
          // );
          router.push({
            pathname: "/prefferances",
            query: { id: response.payload.data.data._id },
          });
        }
      });
    },
  });

  return (
    // <div className="text-black text-4xl bg-black h-screen p-12 flex">
    <div className="bg-white w-full h-screen  flex flex-col md:flex-row">
      <div className="w-full flex flex-col  justify-center md:w-1/2 p-4">
        <div className="p-8 md:p-10 lg:p-10">
          <p className="font-semibold text-black text-4xl">Get Started Now</p>
          <p className="text-sm text-gray-500">
            Create account to start your experience.
          </p>
          <button
            type="button"
            className="text-white mt-4 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
          >
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 19"
            >
              <path
                fillRule="evenodd"
                d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                clipRule="evenodd"
              />
            </svg>
            Sign in with Google
          </button>
          <div className="divider divider-primary text-black">OR</div>
          <div className="">
            <form className="" onSubmit={formik.handleSubmit}>
              <div className="mb-5">
                <label
                  htmlFor="fullName"
                  className="block mb-2 text-sm font-medium  text-black"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Aditya Kumar"
                  required
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium  text-black"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@uniqq.com"
                  required
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  placeholder="Enter your password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-white-50 focus:ring-3 focus:ring-blue-300 dark:bg-white-700 dark:border-white-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    checked={formik.values.isAgreed}
                    onChange={(e) =>
                      formik.setFieldValue("isAgreed", e.target.checked)
                    }
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-black-300"
                >
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign up
              </button>
            </form>
            <p
              id="helper-text-explanation"
              className="mt-6 text-sm text-gray-500 dark:text-gray-400"
            >
              Already have an account?
              <a
                href="/auth/login"
                className="font-medium ml-2 text-blue-600 hover:underline dark:text-blue-500"
              >
                Sign in
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-1/2 p-4">
        <img src={sea.src} className="h-full w-full rounded-xl object-cover" />
      </div>
    </div>
    // </div>
  );
};

export default index;
