import React from "react";
import { Header } from "../common/header/Header";
import { Footer } from "../common/footer/Footer";
import { useLocation } from "react-router";
import BackgroundHeader from "../common/header/backgroundHeader/BackgroundHeader";

const MainLayout = (props) => {
  const location = useLocation();

  const { children } = props;
  return (
    <>
      <Header />
      {location.pathname === "/" ||
      location.pathname === "/hamrah" ||
      location.pathname === "/error" ? null : (
        <BackgroundHeader />
      )}
      {children}
      <Footer />
    </>
  );
};
export default MainLayout;
