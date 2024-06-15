import React from "react";

const HeroSection = () => {
  return (
    <main>
      <section className="text-center container mx-auto py-20 flex items-center justify-center flex-col gap-6 bg-gradient-to-b from-white-300 to-violet-50">
        <h1 className="text-xl sm:text-5xl md:text7xl lg:text-7xl xl:text-10xl  text-black w-1/2 font-semibold">
          From model to the full-stack app. Quickly.
        </h1>
        <p className="mt-4 text-gray-600 w-1/2 text-lg">
          Builder provides data science teams with APIs and UI components that
          enable them to develop interactive applications for business users.
        </p>
        <button className="mt-6 bg-purple-700 text-white px-6 py-3 rounded">
          Get Started for Free
        </button>
      </section>
    </main>
  );
};

export default HeroSection;
