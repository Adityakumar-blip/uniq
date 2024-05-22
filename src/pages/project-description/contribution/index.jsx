import React from "react";

const Index = () => {
  return (
    <div className="project-pg relative text-black h-screen w-screen overflow-hidden">
      <div className="relative h-full w-full flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1482977036925-e8fcaa643657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGdyZXklMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background"
        />
        <div className="relative z-10 p-8 w-full  rounded-lg m-10 bg-white bg-opacity-75">
          <div className="flex  gap-4">
            <div>
              <img
                src="https://images.unsplash.com/photo-1515008736322-38eadfce9ece?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGtlbmRyYSUyMGx1c3R8ZW58MHx8MHx8fDA%3D"
                className="h-[100px] w-[100px] rounded-md"
              />
            </div>
            <div>
              <p className="text-3xl font-semibold">Wallpy</p>
              <p className="text-md text-gray-700">by Aditya Kumar</p>
              <p className="text-xl">Total Clones: 17k</p>
            </div>
          </div>
          <p>This is the overlay content with padding.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
