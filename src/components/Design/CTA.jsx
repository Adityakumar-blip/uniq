import React from "react";

const CTA = () => {
  return (
    <div>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-primary opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuMSAxNC4xQzQyLjUgNS44IDU0LjMgODMgMTAxLjggNzMuNmM0Ny41LTkuMyA2NS44LTk3LjggMTEzLjQtODcuNCA0Ny41IDEwLjQgNTUuMyA5MC42IDEwMi44IDEwMi4zIDQ3LjUgMTEuNyA4MS45LTc2LjQgMTEzLjQtNTQuMiAzMS41IDIyLjIgMzguNyAxMDEuMiA3MC4zIDEyMy45IDMxLjUgMjIuOCA2NC4yLTQ3LjkgOTUuNy0yMy45IDMxLjUgMjQgMTEuNiAxMzQuOCAyNy4yIDE1Ny40IDE1LjcgMjIuNyAzNi44LTY0LjkgNTEuNS00Mi44IDE0LjcgMjIgLTYuNiA5OC4zLTkuNiAxMjAuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==')] bg-no-repeat bg-cover opacity-10"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto backdrop-blur-sm bg-white/10 rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              {/* Content side */}
              <div className="md:col-span-8 p-10 md:p-16">
                <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                  Limited Time Offer
                </span>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Accelerate Your{" "}
                  <span className="text-yellow-300">Career Growth</span> With
                  Expert Interview Preparation
                </h2>

                <p className="text-white/80 text-lg mb-8 max-w-xl">
                  Join thousands of professionals who have transformed their
                  interview performance and landed their dream jobs.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="px-8 py-4 bg-white hover:bg-gray-100 text-primary font-medium rounded-xl transition-all shadow-lg hover:shadow-xl flex-1 flex items-center justify-center">
                    <span>Start Free Trial</span>
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                  <button className="px-8 py-4 bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium rounded-xl transition-all flex-1 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Watch Demo</span>
                  </button>
                </div>

                <div className="flex items-center">
                  <div className="flex -space-x-3 mr-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full ring-2 ring-indigo-600 bg-gray-200 bg-gradient-to-br from-gray-100 to-gray-300"
                      ></div>
                    ))}
                  </div>
                  <div>
                    <div className="text-white font-bold">4.9/5 rating</div>
                    <div className="text-white/70 text-sm">
                      from over 2,000+ reviews
                    </div>
                  </div>
                </div>
              </div>

              {/* Image/Graphic side */}
              <div className="md:col-span-4 bg-gradient-to-br from-indigo-700 to-indigo-900 p-8 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-10">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
                    <defs>
                      <pattern
                        id="grid"
                        width="10"
                        height="10"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 10 0 L 0 0 0 10"
                          fill="none"
                          stroke="white"
                          strokeWidth="0.5"
                        />
                      </pattern>
                    </defs>
                  </svg>
                </div>

                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 15a3 3 0 100-6 3 3 0 000 6z"
                        fill="currentColor"
                      />
                      <path
                        d="M19.071 18.3714C20.9447 16.5286 21.7678 13.7543 21.1109 10.9212C20.4541 8.08809 18.3739 5.71254 15.6095 4.49707C12.8452 3.28161 9.67284 3.37702 7.29118 4.75568C4.90953 6.13434 3.50949 8.61292 3.5 11.3M4.13138 19.0009C6.21701 21.2903 9.26607 22.5017 12.3969 22.249C15.5278 21.9964 18.3371 20.312 19.9419 17.7372"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 8L12 12L15 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-2">
                    Save 40% Time
                  </h3>
                  <p className="text-white/70">With our interview practices</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="py-2 px-4 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Trusted by 500+ companies
            </div>
            <div className="py-2 px-4 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              4.9 Star Rating
            </div>
            <div className="py-2 px-4 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v-1l1-1 1-1 .257-.257A6 6 0 1118 8zm-6-4a1 1 0 100 2h5a1 1 0 100-2h-5z"
                  clipRule="evenodd"
                />
              </svg>
              2,500+ Interview Questions
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
