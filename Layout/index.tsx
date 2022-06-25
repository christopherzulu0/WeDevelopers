import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/clientApp";
import useAuth from "../hooks/useAuth";
import AuthHeader from "../Components/AuthHeader";
import AuthModal from "../Auth/AuthModal";

interface LayoutProps{
  children?: React.ReactNode;
}
const Layout: React.FC <LayoutProps>=( children ) => {
  // useAuth(); // will implement later at end of tutorial

  return (
    <>
      <AuthHeader />
      {children}
    </>
  );
};

export default Layout;
