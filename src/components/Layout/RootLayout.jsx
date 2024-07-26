import React, { useEffect } from "react";
import MainLayout from "./MainLayout";
import AuthLayout from "./AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { loadTokenFromLocalStorage } from "@/Store/Reducers/CommonSlice";
import Lottie from "react-lottie";

import * as animationData from "@/assets/loader1.json";

const RootLayout = ({ children, router }) => {
  const isError = router.pathname.includes("/_error");
  const path = router.asPath;
  const dispatch = useDispatch();
  const { loading } = useSelector(({ CommonSlice }) => CommonSlice);

  useEffect(() => {
    dispatch(loadTokenFromLocalStorage());
  }, [dispatch]);

  return (
    <div style={{ position: "relative" }}>
      {loading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999, // Ensure the loader is on top of everything
          }}
        >
          <Lottie
            options={{ animationData: animationData }}
            height={250}
            width={250}
          />
        </div>
      )}
      {isError ? (
        { children }
      ) : router.pathname.startsWith("/auth") ? (
        <AuthLayout>{children}</AuthLayout>
      ) : (
        <MainLayout>{children}</MainLayout>
      )}
    </div>
  );
};

export default RootLayout;
