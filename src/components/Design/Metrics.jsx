import React from "react";

// MetricsBentoGrid.jsx component
const MetricsBentoGrid = () => {
  return (
    <div className=" px-6 lg:px-12 mb-20">
      <div className="grid grid-cols-2 sm:grid-cols-4 sm:grid-rows-2 gap-4 sm:gap-6 h-auto sm:h-[500px]">
        {/* Large Card - Questions Practiced (spans 2 rows, 2 columns on larger screens) */}
        <div className="col-span-2 sm:row-span-2 bg-white border border-primary rounded-2xl  p-6 flex flex-col justify-between transition duration-300 hover:shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>

          <div>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary text-3xl">✓</span>
            </div>
            <h3 className="text-4xl font-bold text-primary mb-3">100,000+</h3>
            <p className="text-gray-600 text-lg mb-4">Questions Practiced</p>
            <p className="text-gray-500 max-w-xs">
              Our extensive library covers everything from algorithms to system
              design, prepared by industry experts.
            </p>
          </div>

          <div className="mt-6">
            <button className="px-5 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              Browse Questions
            </button>
          </div>
        </div>

        {/* Interactive Playground Box (spans 1 column, 1 row) */}
        <div className="col-span-2 sm:col-span-2 bg-gradient-to-br from-primary to-indigo-600 rounded-2xl  p-6 text-white relative overflow-hidden transition duration-300 hover:shadow-lg">
          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute right-8 bottom-8 w-16 h-16 bg-white/20 rounded-full"></div>

          <h3 className="text-xl font-bold mb-3">Try Our Playground</h3>
          <div className="bg-white/10 rounded-lg p-3 mb-4 font-mono text-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-3 w-3 rounded-full bg-red-400"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
              <span className="h-3 w-3 rounded-full bg-green-400"></span>
            </div>
            <div className="animate-pulse">
              <span className="text-blue-200">function</span>{" "}
              <span className="text-green-200">solve</span>() {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-purple-200">return</span>{" "}
              success;
              <br />
              {"}"}
            </div>
          </div>
          <button className="text-sm px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
            Try Now
          </button>
        </div>

        {/* Mock Interviews Box (spans 1 column, 1 row) */}
        <div className="col-span-1 bg-white rounded-2xl border border-primary  p-5 transition duration-300 hover:shadow-lg flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
              <span className="text-primary text-xl">👥</span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-1">50,000+</h3>
            <p className="text-gray-600 text-sm">Mock Interviews Completed</p>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <a href="#" className="text-primary text-sm hover:underline">
              View Details →
            </a>
          </div>
        </div>

        {/* Job Placements Box (spans 1 column, 1 row) */}
        <div className="col-span-1 bg-white rounded-2xl border border-primary  p-5 transition duration-300 hover:shadow-lg flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
              <span className="text-primary text-xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-1">5,000+</h3>
            <p className="text-gray-600 text-sm">Successful Job Placements</p>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <a href="#" className="text-primary text-sm hover:underline">
              Success Stories →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsBentoGrid;
