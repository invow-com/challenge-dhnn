import { NavbarItemProps } from "@/interfaces/interfaces";
import React from "react";

export const NavbarItem: React.FC<NavbarItemProps> = ({
  title,
  handleClick,
  selectedItem,
}) => {
  return (
    <div
      onClick={() => handleClick(title)}
      className={
        "h-18 flex justify-center items-center hover:border-b-2 border-primary-700 cursor-pointer"
      }
    >
      <li className={"mx-4 text-sm my-7"}>
        <a
          className={`${
            selectedItem === title ? "text-primary-700" : "text-gray-300"
          }`}
        >
          {title}
        </a>
      </li>
    </div>
  );
};
