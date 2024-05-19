import React, { useEffect } from "react";
import MainLayout from "./MainLayout";
import AuthLayout from "./AuthLayout";
import { useDispatch } from "react-redux";
import { loadTokenFromLocalStorage } from "@/Store/Reducers/CommonSlice";

const RootLayout = ({ children, router }) => {
  const isError = router.pathname.includes("/_error");
  const path = router.asPath;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTokenFromLocalStorage());
  }, [dispatch]);

  return (
    <>
      {isError ? (
        { children }
      ) : router.pathname.startsWith("/auth") ? (
        <AuthLayout>{children}</AuthLayout>
      ) : (
        <MainLayout>{children}</MainLayout>
      )}
    </>
  );
};

export default RootLayout;
