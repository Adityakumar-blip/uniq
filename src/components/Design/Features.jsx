import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FeatureComponent = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [currentFeature, setCurrentFeature] = useState({});

  const features = [
    {
      id: 0,
      title: "Practice Real Interview Questions",
      description:
        "Practice from a curated question bank covering DSA, System Design, Behavioral & More",
      icon: "",
      image:
        "https://images.unsplash.com/photo-1741620979760-bccef3bb5b17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "Mock Interviews with Real People",
      description:
        "Pair up with peers & professionals for live practice sessions",
      icon: "",
      image:
        "https://images.unsplash.com/photo-1742268351241-b1b2ccae70c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
    },
    {
      id: 2,
      title: "Work on Real-World Projects",
      description:
        "Hands-on projects built by engineers from top tech companies.Hands-on projects built by engineers from top tech companiesHands-on projects built by engineers from top tech companiesHands-on projects built by engineers from top tech companiesHands-on projects built by engineers from top tech companiesHands-on projects built by engineers from top tech companiesHands-on projects built by engineers from top tech companiesHands-on projects built by engineers from top tech companiesHands-on projects built by engineers from top tech companies",
      icon: "",
      image:
        "https://images.unsplash.com/photo-1742268351428-ba1366f7dae3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
    },
    {
      id: 3,
      title: "Community Forum for Discussions",
      description: "Engage in Q&A, discussions, and expert-led AMAs",
      icon: "",
      image:
        "https://images.unsplash.com/photo-1741851373559-6879db14fd8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
    },
  ];

  return (
    <div className="mt-24 px-6 lg:px-12">
      <div className="w-full flex flex-col items-center justify-center mb-12">
        <h2 className="text-4xl md:text-5xl text-center font-bold w-full md:w-[60%] leading-tight bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
          Master Your Interviews With Our Professional Tools
        </h2>
        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Everything you need to prepare, practice, and succeed in your next
          technical interview - all in one place.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between py-10 gap-8">
        <div className="md:w-1/2 space-y-2">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex items-start p-6 rounded-xl cursor-pointer transition-all duration-300 `}
              onClick={() => setActiveFeature(index)}
            >
              <div className="flex flex-col w-full">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      activeFeature === index
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <h3
                    className={`text-xl font-bold transition-colors duration-300 ${
                      activeFeature === index ? "text-primary" : "text-gray-700"
                    }`}
                  >
                    {feature.title}
                  </h3>
                </div>

                <AnimatePresence mode="wait">
                  {activeFeature === index && (
                    <motion.div
                      className="ml-9 mt-3"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>

        <div className="md:w-1/2">
          <div className="bg-primary rounded-2xl overflow-hidden relative h-[450px] shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                <img
                  src={features[activeFeature].image}
                  alt={features[activeFeature].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
                  <h4 className="text-xl font-bold">
                    {features[activeFeature].title}
                  </h4>
                  <p className="text-sm text-white/80 mt-1">
                    {features[activeFeature].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureComponent;
