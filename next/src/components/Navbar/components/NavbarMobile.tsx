"use client";
import React, { useState } from "react";
import { AeroNex } from "./AeroNex";
import { IoMenuSharp } from "react-icons/io5";
import { NavbarItemMobile } from "./NavbarItemMobile";
import { menuItemsMobile } from "@/data/data";

export const NavbarMobile = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleClick = (item: string) => {
    setSelectedItem(item);
    setOpenMenu(false);
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav>
      <div className="shadow-sm w-full h-auto fixed z-50">
        <div className="flex h-auto w-full justify-between bg-white px-4 border-b">
          <AeroNex />
          <div className="flex border-l pl-4 text-gray-700 text-xl">
            <button className="cursor-pointer" onClick={toggleMenu}>
              <IoMenuSharp />
            </button>
          </div>
        </div>
        <ul className="text-left w-full transition-all ease-in duration-900 bg-white">
          {openMenu &&
            menuItemsMobile.map((menuItem) => (
              <NavbarItemMobile
                key={menuItem.id}
                title={menuItem.title}
                handleClick={() => handleClick(menuItem.id)}
              />
            ))}
        </ul>
      </div>
    </nav>
  );
};
