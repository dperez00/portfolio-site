import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

// created an interface so that TypScript can infer the type of the children in the layout.
// We pass children as a ReactNode type because it can be rendered as anythiing.

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Outlet />
    </>
  );
};

export default Layout;
