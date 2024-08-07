import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaUsers, FaLightbulb } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-32">
        <motion.div
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-extrabold mb-4 tracking-tight">
            CodeConnect
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Where passionate developers unite, learn, and create the future of
            software.
          </p>
        </motion.div>
      </header>

      <main className="container mx-auto px-4 py-24">
        <section className="mb-32">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Our Vision
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We envision a world where every developer, regardless of
                experience, has access to a supportive community and
                cutting-edge resources. CodeConnect is more than a platform;
                it's a movement towards collaborative innovation in software
                development.
              </p>
            </div>
            <div className="md:w-1/2 relative">
              <img
                src="https://source.unsplash.com/random/600x400?coding"
                alt="Developers collaborating"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
                <blockquote className="text-lg italic text-gray-800">
                  "In the world of code, we are all students and teachers."
                </blockquote>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<FaCode />}
              title="Learn"
              description="Access a vast library of tutorials, workshops, and coding challenges."
            />
            <FeatureCard
              icon={<FaUsers />}
              title="Connect"
              description="Join a global network of developers and find your coding tribe."
            />
            <FeatureCard
              icon={<FaLightbulb />}
              title="Create"
              description="Bring your ideas to life with collaborative tools and expert feedback."
            />
          </div>
        </section>

        <section>
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-16 text-white text-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Code Together?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Join CodeConnect today and be part of a community that's shaping
              the future of software development.
            </p>
            <motion.button
              className="bg-white text-indigo-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">CodeConnect</h3>
          <p className="mb-8 opacity-70">Empowering developers worldwide</p>
          <div className="flex justify-center space-x-6">
            {["Twitter", "GitHub", "LinkedIn"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="hover:text-pink-400 transition duration-300"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-8 text-center"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-4xl mb-6 text-pink-500">{icon}</div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default AboutPage;
