import { NavbarItemProps } from "@/interfaces/interfaces";
import React from "react";

export const NavbarItemMobile: React.FC<NavbarItemProps> = ({
  title,
  handleClick,
}) => {
  return (
    <li
      onClick={() => handleClick(title)}
      className="cursor-pointer text-gray-300 pl-3 py-3 border-b"
    >
      {title}
    </li>
  );
};
