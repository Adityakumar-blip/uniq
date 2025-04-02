// components/LoginModal.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Make sure these icons are properly imported from lucide-react
import { X, Mail, Lock } from "lucide-react";

// Ensure these actions exist in your AuthSlice (or adjust to match your actual auth actions)
import {
  login,
  loginWithGoogle,
  SignIn,
  signUp,
} from "@/Store/Reducers/AuthSlice";
import { FaGoogle } from "react-icons/fa";
import { setLogin, setToken } from "@/Store/Reducers/CommonSlice";

// Validation schemas
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const signupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  if (!isOpen) return null;

  const handleEmailLogin = async (values, { setSubmitting }) => {
    setError("");
    setIsLoading(true);

    try {
      if (isSignUp) {
        // Handle signup logic
        await dispatch(signUp(values)).unwrap();
      } else {
        dispatch(SignIn(values)).then((response) => {
          if (response.payload.status === 200) {
            dispatch(setToken(response.payload.data.token));
            localStorage.setItem(
              "user",
              JSON.stringify(response.payload.data.data)
            );
          }
        });
      }
      dispatch(setLogin(false));
    } catch (err) {
      setError(err.message || "Authentication failed");
    } finally {
      setIsLoading(false);
      setSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError("");

    try {
      await dispatch(loginWithGoogle()).unwrap();
      onLoginSuccess();
    } catch (err) {
      setError(err.message || "Google authentication failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 h-full backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white text-black rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up">
        {/* Modal header */}
        <div className="relative bg-gradient-to-r from-primary/90 to-primary p-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-black/80 hover:text-black"
          >
            <X size={20} />
          </button>
          <h2 className="text-xl text-primary font-semibold">
            {isSignUp ? "Create an Account" : "Welcome Back"}
          </h2>
          <p className="text-black/80 mt-1">
            {isSignUp
              ? "Sign up to access exclusive content"
              : "Login to unlock the answer and more features"}
          </p>
        </div>

        {/* Modal body */}
        <div className="p-6">
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">
              {error}
            </div>
          )}

          {/* Google login button */}
          <button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 p-3 rounded-lg hover:bg-gray-50 transition-colors mb-4"
          >
            <FaGoogle size={20} />
            <span>Continue with Google</span>
          </button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          {/* Formik Form */}
          <Formik
            initialValues={
              isSignUp
                ? { email: "", password: "", confirmPassword: "" }
                : { email: "", password: "" }
            }
            validationSchema={isSignUp ? signupSchema : loginSchema}
            onSubmit={handleEmailLogin}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Mail size={18} />
                    </div>
                    <Field
                      type="email"
                      name="email"
                      className={`w-full pl-10 pr-3 py-2 bg-white/80 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary ${
                        errors.email && touched.email
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="you@example.com"
                    />
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="mt-1 text-sm text-red-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Lock size={18} />
                    </div>
                    <Field
                      type="password"
                      name="password"
                      className={`w-full pl-10 pr-3 py-2 bg-white/80 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary ${
                        errors.password && touched.password
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="••••••••"
                    />
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="mt-1 text-sm text-red-600"
                  />
                </div>

                {isSignUp && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <Lock size={18} />
                      </div>
                      <Field
                        type="password"
                        name="confirmPassword"
                        className={`w-full pl-10 pr-3 bg-white/80 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary ${
                          errors.confirmPassword && touched.confirmPassword
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="••••••••"
                      />
                    </div>
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>
                )}

                {!isSignUp && (
                  <div className="flex items-center justify-end">
                    <a
                      href="#"
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || isLoading}
                  className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary transition-colors flex items-center justify-center"
                >
                  {isSubmitting || isLoading ? (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
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
                  ) : isSignUp ? (
                    "Create Account"
                  ) : (
                    "Sign In"
                  )}
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Modal footer */}
        <div className="p-6 bg-gray-50 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-600">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="ml-1 text-primary font-medium hover:underline"
            >
              {isSignUp ? "Sign in" : "Sign up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
