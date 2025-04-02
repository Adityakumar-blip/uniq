import { setToken } from "@/Store/Reducers/CommonSlice";
import { SignUp } from "@/store/Reducers/AuthSlice";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

const SignupPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  // Form validation schema
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    isAgreed: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      password: "",
      isAgreed: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const response = await dispatch(SignUp(values));
        if (response.payload.status === 200) {
          dispatch(setToken(response.payload.data.data.token));
          router.push({
            pathname: "/prefferances",
            query: { id: response.payload.data.data._id },
          });
        }
      } catch (error) {
        console.error("Signup failed:", error);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className="bg-gradient-to-br from-primary to-accent-foreground w-full h-screen flex flex-col md:flex-row-reverse">
      {/* Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center py-8 px-4">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
            <p className="mt-2 text-sm text-gray-500">
              Join thousands of developers preparing for interviews
            </p>
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center px-4 py-3 border border-gray-200 rounded-lg shadow-sm bg-gray-400 transition-all duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
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
            Sign up with Google
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">
                or sign up with email
              </span>
            </div>
          </div>

          <form className="space-y-5" onSubmit={formik.handleSubmit}>
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  autoComplete="name"
                  placeholder="John Doe"
                  className={`appearance-none block w-full px-3 py-3 border ${
                    formik.touched.fullName && formik.errors.fullName
                      ? "border-red-300"
                      : "border-gray-300"
                  } rounded-lg shadow-sm placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.fullName && formik.errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">
                    {formik.errors.fullName}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={`appearance-none block w-full px-3 py-3 border ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-300"
                      : "border-gray-300"
                  } rounded-lg shadow-sm placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {formik.errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="new-password"
                  placeholder="••••••••"
                  className={`appearance-none block w-full px-3 py-3 border ${
                    formik.touched.password && formik.errors.password
                      ? "border-red-300"
                      : "border-gray-300"
                  } rounded-lg shadow-sm placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="mt-1 text-sm text-red-600">
                    {formik.errors.password}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="isAgreed"
                  name="isAgreed"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 bg-gray-50 rounded"
                  checked={formik.values.isAgreed}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="isAgreed" className="text-gray-700">
                  I agree to the{" "}
                  <a href="#" className="text-blue-600 hover:text-blue-500">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 hover:text-blue-500">
                    Privacy Policy
                  </a>
                </label>
                {formik.touched.isAgreed && formik.errors.isAgreed && (
                  <p className="mt-1 text-sm text-red-600">
                    {formik.errors.isAgreed}
                  </p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                {isLoading ? (
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : null}
                Create Account
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <span
                onClick={() => router.push("/auth/login")}
                className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer hover:underline"
              >
                Sign in
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hidden md:block md:w-1/2 relative overflow-hidden ">
        {/* Improved overlay pattern with better opacity */}
        <div className="absolute inset-0 bg-grid-white/[0.15] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_80%)]"></div>

        {/* Added subtle animated glow effect */}
        <div className="absolute -inset-0 "></div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full p-12 text-white">
          <div className="mb-10">
            <svg
              className="h-12 w-auto mb-6"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 5L30 10L20 15L10 10L20 5Z" fill="white" />
              <path
                d="M30 10V20L20 25V15L30 10Z"
                fill="white"
                fillOpacity="0.8"
              />
              <path
                d="M10 10V20L20 25V15L10 10Z"
                fill="white"
                fillOpacity="0.6"
              />
              <path
                d="M20 25L30 20L30 30L20 35L10 30V20L20 25Z"
                fill="white"
                fillOpacity="0.4"
              />
            </svg>
            <h2 className="text-3xl font-bold mb-3 text-white drop-shadow-md">
              Start Your Prep Journey
            </h2>
            <p className="text-lg text-white drop-shadow-sm">
              Master technical interviews with our comprehensive platform
            </p>
          </div>

          {/* Benefits section */}
          <div className="w-full max-w-md mb-10 space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-blue-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-white">
                  Real Interview Questions
                </h3>
                <p className="mt-1 text-sm text-white/90">
                  Practice with questions sourced from actual interviews
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-blue-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-white">
                  Personalized Learning Path
                </h3>
                <p className="mt-1 text-sm text-white/90">
                  Adaptive system that focuses on your weak areas
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-blue-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-white">
                  Expert Mentorship
                </h3>
                <p className="mt-1 text-sm text-white/90">
                  Get feedback from professionals in the industry
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial card */}
          <div className="mt-4 px-6 py-4 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30 max-w-md shadow-lg">
            <div className="flex items-center mb-3">
              <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center mr-3 border-2 border-white/30">
                <span className="text-white font-bold text-sm">MJ</span>
              </div>
              <div>
                <p className="font-medium text-white">Michael Johnson</p>
                <p className="text-xs text-white/90">
                  Senior Developer @ Google
                </p>
              </div>
              <div className="ml-auto flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
            <p className="italic text-sm text-white font-medium">
              "This platform transformed my interview preparation. I went from
              rejection to multiple offers in just two months."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
