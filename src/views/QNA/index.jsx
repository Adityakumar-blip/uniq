// pages/practice.js
import { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiSpringboot,
  SiDjango,
  SiTensorflow,
  SiKubernetes,
  SiGooglecloud,
} from "react-icons/si";

export default function PracticePage() {
  const [activeTab, setActiveTab] = useState("technologies");

  const technologies = [
    {
      name: "React",
      icon: <FaReact className="text-[#61DAFB] text-3xl" />,
      color: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
      count: 145,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-[#F7DF1E] text-3xl" />,
      color: "bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200",
      count: 210,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-[#3178C6] text-3xl" />,
      color: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
      count: 178,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-[#539E43] text-3xl" />,
      color: "bg-gradient-to-br from-green-50 to-green-100 border-green-200",
      count: 132,
    },
    {
      name: "Python",
      icon: <FaPython className="text-[#3776AB] text-3xl" />,
      color: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
      count: 189,
    },
    {
      name: "Java",
      icon: <FaJava className="text-[#007396] text-3xl" />,
      color: "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200",
      count: 162,
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot className="text-[#6DB33F] text-3xl" />,
      color: "bg-gradient-to-br from-green-50 to-green-100 border-green-200",
      count: 98,
    },
    {
      name: "Django",
      icon: <SiDjango className="text-[#092E20] text-3xl" />,
      color: "bg-gradient-to-br from-green-50 to-green-100 border-green-200",
      count: 87,
    },
    {
      name: "SQL",
      icon: <FaDatabase className="text-[#336791] text-3xl" />,
      color: "bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200",
      count: 156,
    },
    {
      name: "TensorFlow",
      icon: <SiTensorflow className="text-[#FF6F00] text-3xl" />,
      color: "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200",
      count: 72,
    },
    {
      name: "Docker",
      icon: <FaDocker className="text-[#2496ED] text-3xl" />,
      color: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
      count: 110,
    },
    {
      name: "Kubernetes",
      icon: <SiKubernetes className="text-[#326CE5] text-3xl" />,
      color: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
      count: 95,
    },
    {
      name: "AWS",
      icon: <FaAws className="text-[#232F3E] text-3xl" />,
      color: "bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200",
      count: 128,
    },
    {
      name: "GCP",
      icon: <SiGooglecloud className="text-[#4285F4] text-3xl" />,
      color: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
      count: 82,
    },
  ];

  const categories = [
    { name: "Frontend", count: 325 },
    { name: "Backend", count: 410 },
    { name: "Database", count: 210 },
    { name: "DevOps", count: 186 },
    { name: "Mobile", count: 145 },
    { name: "Machine Learning", count: 97 },
    { name: "System Design", count: 124 },
    { name: "Data Structures", count: 236 },
    { name: "Algorithms", count: 287 },
  ];

  const companyQuestions = [
    { name: "Google", count: 245, logo: "/logos/google.svg" },
    { name: "Amazon", count: 278, logo: "/logos/amazon.svg" },
    { name: "Microsoft", count: 234, logo: "/logos/microsoft.svg" },
    { name: "Meta", count: 189, logo: "/logos/meta.svg" },
    { name: "Apple", count: 156, logo: "/logos/apple.svg" },
    { name: "Netflix", count: 112, logo: "/logos/netflix.svg" },
  ];

  const recentlyAttempted = [
    {
      name: "React Hooks: useEffect Cleanup",
      category: "React",
      difficulty: "Medium",
      date: "2 days ago",
    },
    {
      name: "Binary Tree Level Order Traversal",
      category: "Data Structures",
      difficulty: "Medium",
      date: "3 days ago",
    },
    {
      name: "Design a URL Shortening Service",
      category: "System Design",
      difficulty: "Hard",
      date: "1 week ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm text-gray-500">
            <a href="#" className="hover:text-indigo-600">
              Home
            </a>
            <span className="mx-2">/</span>
            <span className="text-gray-700 font-medium">Practice</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 sm:p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Practice Questions
            </h1>
            <p className="text-gray-600 mb-8">
              Choose a technology or category to start practicing interview
              questions
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-indigo-100 rounded-lg p-5">
                <h3 className="text-indigo-600 text-sm font-medium mb-1">
                  Total Questions
                </h3>
                <p className="text-3xl font-bold text-gray-800">2,450+</p>
                <p className="text-gray-600 text-sm mt-1">
                  Across all categories
                </p>
              </div>
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-green-100 rounded-lg p-5">
                <h3 className="text-green-600 text-sm font-medium mb-1">
                  Your Progress
                </h3>
                <p className="text-3xl font-bold text-gray-800">24%</p>
                <p className="text-gray-600 text-sm mt-1">
                  89 questions completed
                </p>
              </div>
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-yellow-100 rounded-lg p-5">
                <h3 className="text-amber-600 text-sm font-medium mb-1">
                  Streak
                </h3>
                <p className="text-3xl font-bold text-gray-800">5 days</p>
                <p className="text-gray-600 text-sm mt-1">Keep it going!</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="flex -mb-px space-x-8">
                <button
                  onClick={() => setActiveTab("technologies")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "technologies"
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Technologies
                </button>
                <button
                  onClick={() => setActiveTab("categories")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "categories"
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Categories
                </button>
                <button
                  onClick={() => setActiveTab("companies")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "companies"
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Company Questions
                </button>
              </nav>
            </div>

            {/* Search and filter */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div className="relative flex-grow max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search questions..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="flex items-center space-x-4">
                <select className="block pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                  <option>All Difficulty</option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <svg
                    className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Filter
                </button>
              </div>
            </div>

            {/* Technologies Tab */}
            {activeTab === "technologies" && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
                {technologies.map((tech, index) => (
                  <a
                    href={`/practice/${tech.name.toLowerCase()}`}
                    key={index}
                    className="group"
                  >
                    <div
                      className={`flex flex-col items-center p-4 rounded-lg border ${tech.color} group-hover:shadow-md transition-all duration-200 h-full`}
                    >
                      <div className="w-12 h-12 flex items-center justify-center mb-3">
                        {tech.icon}
                      </div>
                      <h3 className="text-gray-800 font-medium text-center">
                        {tech.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {tech.count} questions
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            )}

            {/* Categories Tab */}
            {activeTab === "categories" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                  <a
                    href={`/practice/category/${category.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    key={index}
                    className="group"
                  >
                    <div className="flex items-center p-4 rounded-lg border border-gray-200 group-hover:border-indigo-200 bg-white group-hover:bg-indigo-50 transition-all duration-200">
                      <div className="mr-4 w-10 h-10 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-lg">
                        <span className="text-lg font-semibold">
                          {category.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-gray-800 font-medium">
                          {category.name}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {category.count} questions
                        </p>
                      </div>
                      <div className="ml-auto">
                        <svg
                          className="h-5 w-5 text-gray-400 group-hover:text-indigo-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}

            {/* Companies Tab */}
            {activeTab === "companies" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {companyQuestions.map((company, index) => (
                  <a
                    href={`/practice/company/${company.name.toLowerCase()}`}
                    key={index}
                    className="group"
                  >
                    <div className="flex items-center p-4 rounded-lg border border-gray-200 group-hover:border-indigo-200 bg-white group-hover:bg-indigo-50 transition-all duration-200">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                        <span className="text-gray-700 font-medium">
                          {company.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-gray-800 font-medium">
                          {company.name}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {company.count} questions
                        </p>
                      </div>
                      <div className="ml-auto">
                        <svg
                          className="h-5 w-5 text-gray-400 group-hover:text-indigo-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Recently Attempted
              </h2>
              {recentlyAttempted.length > 0 ? (
                <div className="divide-y divide-gray-200">
                  {recentlyAttempted.map((item, index) => (
                    <div key={index} className="py-4 flex justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 hover:text-indigo-600">
                          <a href="#">{item.name}</a>
                        </h3>
                        <div className="flex items-center mt-1">
                          <span className="text-xs text-gray-500">
                            {item.category}
                          </span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${
                              item.difficulty === "Easy"
                                ? "bg-green-100 text-green-800"
                                : item.difficulty === "Medium"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {item.difficulty}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-gray-500">
                          {item.date}
                        </span>
                        <button className="block mt-1 text-xs text-indigo-600 hover:text-indigo-800">
                          Retry
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  <p className="mt-2 text-sm text-gray-500">
                    You haven't attempted any questions yet
                  </p>
                  <button className="mt-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Start Practicing
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Your Progress
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      Frontend
                    </span>
                    <span className="text-sm text-gray-500">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      Backend
                    </span>
                    <span className="text-sm text-gray-500">32%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: "32%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      Data Structures
                    </span>
                    <span className="text-sm text-gray-500">68%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: "68%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      System Design
                    </span>
                    <span className="text-sm text-gray-500">12%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: "12%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Recommended Next Steps
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Complete React Router practice questions
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Try some system design questions
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Take a full mock interview
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
