import React from "react";
import { NavbarMobin } from "./navbar/NavbarMobin";

export const Header = () => {
  return (
    <div className="sticky-top  bg-white d-flex justify-content-center align-items-center ">
      <div className="container">
        <NavbarMobin />
      </div>
    </div>
  );
};

