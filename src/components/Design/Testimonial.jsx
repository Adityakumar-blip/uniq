import React from "react";

const Testimonial = () => {
  return (
    <div className="py-24">
      <div className=" px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center flex justify-center flex-col w-full mb-16">
          <h2 className="text-4xl md:text-5xl  font-bold  mb-4">
            Success Stories From Our Community
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of developers who have transformed their interview
            preparation and landed their dream roles.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Carousel Navigation */}
          <div className="absolute -top-12 right-0 flex space-x-2">
            <button className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-primary hover:text-white transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-primary hover:text-white transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Software Engineer",
                company: "Google",
                image:
                  "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
                logo: "/logos/google.svg",
                quote:
                  "The mock interviews were incredibly realistic. I felt completely prepared for my Google interview after practicing here.",
              },
              {
                name: "Michael Rodriguez",
                role: "Full Stack Developer",
                company: "Microsoft",
                image:
                  "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D",
                logo: "/logos/microsoft.svg",
                quote:
                  "The personalized study plan helped me focus on my weak areas. After 2 months of practice, I received offers from 3 companies!",
              },
              {
                name: "Priya Patel",
                role: "Frontend Engineer",
                company: "Airbnb",
                image:
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVzaW5lc3MlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
                logo: "/logos/airbnb.svg",
                quote:
                  "I was struggling with system design questions before using this platform. The interactive challenges and detailed solutions made all the difference.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white relative rounded-2xl flex flex-col justify-between border border-primary shadow-sm  p-8 "
              >
                {/* Testimonial Content */}
                <div className="mb-6">
                  <p className="text-gray-700 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* User Info */}
                <div className="flex items-center ">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                  <div className="w-10 h-10">
                    <img
                      src={testimonial.logo}
                      alt={testimonial.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Company Tag */}
                <div className="absolute -bottom-3 left-8 bg-primary text-white text-xs py-1 px-3 rounded-full">
                  {testimonial.company}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary  text-white rounded-full font-medium transition-colors shadow-md hover:shadow-lg hover:bg-indigo-500 flex items-center mx-auto">
            Read More Success Stories
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
