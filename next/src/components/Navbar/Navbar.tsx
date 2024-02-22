import React from "react";
import { NavbarMobile } from "./components/NavbarMobile";
import { NavbarDesktop } from "./components/NavbarDesktop";

export const Navbar = () => {
  return (
    <>
      <div className="hidden xl:block">
        <NavbarDesktop />
      </div>
      <div className="block xl:hidden">
        <NavbarMobile />
      </div>
    </>
  );
};
