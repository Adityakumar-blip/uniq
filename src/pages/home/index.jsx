import Features from "@/components/Home/Features";
import HeroSection from "@/components/Home/HeroSection";
import VideoComponent from "@/components/Home/VideoComponent";
import React from "react";

const index = () => {
  return (
    <div>
      {/* <div className="">
        <main>
          <section className="bg-white py-20">
            <div className="container mx-auto flex justify-between items-center">
              <div className="w-1/2">
                <img
                  src="/path/to/your/image.png"
                  alt="Dashboard"
                  className="w-full"
                />
              </div>
              <div className="w-1/2 px-10">
                <h2 className="text-4xl font-bold">Less trouble. More fun.</h2>
                <p className="mt-4 text-lg">
                  Builder helps you get your models into production faster by
                  simplifying the set-up of backend, frontend, and MLOps.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-100 py-20">
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold text-center">
                Models can be served in minutes, not months.
              </h2>
              <p className="mt-4 text-lg text-center">
                With Builder, you can go from building and training a model to
                serving, managing, and monitoring it.
              </p>
              <div className="flex mt-10">
                <div className="w-1/2 p-4">
                  <h3 className="text-2xl font-bold">
                    Fast, flexible deployment
                  </h3>
                  <p className="mt-2">
                    Deploy to your infrastructure or ours with the flexibility
                    to switch environments to suit your business needs.
                  </p>
                </div>
                <div className="w-1/2 p-4">
                  <h3 className="text-2xl font-bold">Version control</h3>
                  <p className="mt-2">
                    Easily rollback changes and rollouts to previous versions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-20">
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold text-center">
                Include custom business logic
              </h2>
              <p className="mt-4 text-lg text-center">
                Easily sync data sources and assemble business logic around your
                models.
              </p>
              <div className="flex mt-10 justify-center">
                <div className="w-1/3 p-4">
                  <h3 className="text-2xl font-bold">REST APIs</h3>
                  <p className="mt-2">
                    Connect your model to other services and data stores with a
                    fully customizable set of API endpoints.
                  </p>
                </div>
                <div className="w-1/3 p-4">
                  <h3 className="text-2xl font-bold">
                    Fully customizable environment
                  </h3>
                  <p className="mt-2">
                    Reach users with any type of device or browser with our
                    built-in API targets database.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-100 py-20">
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold text-center">
                Design powerful front-ends
              </h2>
              <p className="mt-4 text-lg text-center">
                Drag-and-drop components to create a fully-featured UI without
                learning HTML, CSS, or React.
              </p>
              <div className="flex mt-10">
                <div className="w-1/3 p-4">
                  <h3 className="text-2xl font-bold">Display</h3>
                  <p className="mt-2">
                    Create clear, engaging interfaces for business users with
                    tables, charts, and more.
                  </p>
                </div>
                <div className="w-1/3 p-4">
                  <h3 className="text-2xl font-bold">Forms</h3>
                  <p className="mt-2">
                    Add interactive forms and trigger actions to start workflows
                    and integrate with your APIs.
                  </p>
                </div>
                <div className="w-1/3 p-4">
                  <h3 className="text-2xl font-bold">Charts</h3>
                  <p className="mt-2">
                    Build dashboards and self-service tools for end-users by
                    visualizing data with beautiful, responsive charts.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-20">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-bold">
                See why developers love Builder
              </h2>
              <div className="mt-10 flex justify-center space-x-4">
                <div className="w-1/4 p-4 border rounded">
                  <p className="text-lg">
                    "Builder allows us to iterate very fast and release features
                    with confidence, thanks to the powerful custom SaaS
                    platform."
                  </p>
                  <h4 className="mt-4 text-xl font-bold">Emanuel S.</h4>
                  <p className="text-sm text-gray-500">Data Scientist, CD</p>
                </div>
                <div className="w-1/4 p-4 border rounded">
                  <p className="text-lg">
                    "The Builder ecosystem, with its APIs, UI components, and
                    pre-built integrations, enabled us to connect our data
                    warehouse to operational systems."
                  </p>
                  <h4 className="mt-4 text-xl font-bold">Brenda S.</h4>
                  <p className="text-sm text-gray-500">CTO</p>
                </div>
                <div className="w-1/4 p-4 border rounded">
                  <p className="text-lg">
                    "Builder provides an easy-to-use interface for my team. Out
                    of the box, it comes with great integrations and tools for
                    seamless development."
                  </p>
                  <h4 className="mt-4 text-xl font-bold">Jagadish R.</h4>
                  <p className="text-sm text-gray-500">CEO</p>
                </div>
                <div className="w-1/4 p-4 border rounded">
                  <p className="text-lg">
                    "Builder gives the speed of local iterations to the testing
                    and problem-solving."
                  </p>
                  <h4 className="mt-4 text-xl font-bold">Fini L.</h4>
                  <p className="text-sm text-gray-500">Lead Developer</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        
      </div> */}
      <HeroSection />
      <VideoComponent />
      <Features />
    </div>
  );
};

export default index;
