"use client";
import React, { useState } from "react";
import { AeroNex } from "./AeroNex";
import { NavbarItem } from "./NavbarItem";
import { menuItemsDesktop } from "../../../data/data";

export const NavbarDesktop = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <nav>
      <div className="shadow-sm w-full fixed z-50">
        <div className="flex justify-center bg-white px-[120px]">
          <AeroNex />
          <div className="text-3xl absolute cursor-pointer"></div>
          <ul className="flex flex-wrap justify-between w-full transition-all duration-500 ease-in">
            {menuItemsDesktop.map((menuItem, index) => (
              <React.Fragment key={menuItem.id}>
                <NavbarItem
                  title={menuItem.title}
                  handleClick={() => handleClick(menuItem.id)}
                  selectedItem={selectedItem}
                />
                {index >= 5 && <div className="border-l"></div>}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
