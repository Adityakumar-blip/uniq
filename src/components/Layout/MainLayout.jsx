import React from "react";
import Navbar from "../Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "@/Store/Reducers/CommonSlice";
import LoginModal from "../LoginModal";

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { showLogin } = useSelector(({ CommonSlice }) => CommonSlice);
  return (
    <div>
      <div className="h-screen flex flex-col">
        <div className="sticky  top-0 z-50 ">
          <Navbar />
        </div>

        <div className="flex-1 bg-white overflow-y-auto flex flex-col justify-between gap-y-10">
          <div className="">{children}</div>
          {showLogin && (
            <LoginModal
              isOpen={showLogin}
              onClose={() => dispatch(setLogin(false))}
            />
          )}
          {/* <div className="z-50"><Footer /></div> */}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
