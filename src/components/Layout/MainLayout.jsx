import React from "react";
import Navbar from "../Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <div className="h-screen flex flex-col">
        <div className="sticky  top-0 z-50 ">
          <Navbar />
        </div>

        <div className="flex-1 bg-white overflow-y-auto flex flex-col justify-between gap-y-10">
          <div className="">{children}</div>
          {/* <div className="z-50"><Footer /></div> */}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
