import Flow from "@/components/Design/Flow";
import { useRouter } from "next/router";
import React from "react";
import {
  FiArrowRight,
  FiCheck,
  FiUsers,
  FiBook,
  FiTrendingUp,
  FiHeart,
} from "react-icons/fi";

const LandingPage = () => {
  const router = useRouter();
  return (
    <div className="bg-white min-h-screen text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-gray-900">
              Fresh Ideas, Seasoned Expertise, One Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with others where new ideas meet expert knowledge. Work on
              projects together, learn from experienced professionals, and grow
              on a platform that brings everyone together.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => router.push("/projects")}
                className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-8 py-3 rounded-md shadow-lg flex items-center justify-center transform hover:scale-105 transition"
              >
                See Projects <FiArrowRight className="ml-2" />
              </button>
              <button
                onClick={() => router.push("/developers")}
                className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition px-8 py-3 rounded-md shadow-lg transform hover:scale-105 transition"
              >
                Connect
              </button>
            </div>
          </div>
          {/* Placeholder for Phone Mockup */}
          <div className="lg:w-1/2 flex justify-center">
            <Flow />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-16 space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="bg-gray-100 rounded-lg shadow-lg p-8 text-center flex-1">
            <FiUsers className="text-indigo-600 text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">Connect</h3>
            <p className="text-gray-600">
              Join a community of learners and experts. Collaborate on projects
              and expand your network.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-lg p-8 text-center flex-1">
            <FiBook className="text-indigo-600 text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">Learn</h3>
            <p className="text-gray-600">
              Access cutting-edge courses and gain insights from industry
              professionals.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-lg p-8 text-center flex-1">
            <FiTrendingUp className="text-indigo-600 text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">Grow</h3>
            <p className="text-gray-600">
              Develop your skills, advance your career, and achieve your goals.
            </p>
          </div>
        </div>

        {/* Middle Section */}
        {/* Support Section */}
        <div className="bg-indigo-50 rounded-lg shadow-lg p-8 mt-16 text-center">
          <FiHeart className="text-indigo-600 text-4xl mb-4" />
          <h2 className="text-3xl font-bold mb-4">Support a Solo Developer</h2>
          <p className="text-lg text-gray-600 mb-8">
            I'm a solo developer working hard to make professional learning
            easily accessible to everyone. If you appreciate my work and want to
            support the project or contribute to its development, please reach
            out!
          </p>
          <button
            onClick={() => (
              (window.location.href =
                "https://mail.google.com/mail/?view=cm&fs=1&to=aditya.kamal004@gmail.com&su=Support%20and%20Contribution&body=Hi%20Aditya%2C%0A%0AI%20would%20like%20to%20contribute%20to%20the%20development%20of%20your%20platform."),
              "_blank"
            )}
            className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-8 py-3 rounded-md shadow-lg transform hover:scale-105 transition"
          >
            Contact Me
          </button>
        </div>

        {/* Footer */}
        {/* <div className="mt-16 text-center text-gray-600">
          <p>&copy; 2024 Your Platform. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <p className="text-indigo-600">[Social Media Icons]</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LandingPage;
