import React from "react";
import MainLayout from "./MainLayout";
import AuthLayout from "./AuthLayout";

const RootLayout = ({ children, router }) => {
  const isError = router.pathname.includes("/_error");
  const path = router.asPath;

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
