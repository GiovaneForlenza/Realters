import React from "react";
import { useNavigate } from "react-router-dom";

function NavbarMenuItems({ text, path, activePage, setActivePage }) {
  const navigate = useNavigate();
  return (
    <li
      className={`border-main-orange-800 cursor-pointer px-4 py-2 transition-all duration-75 hover:border-b ${activePage === path && activePage !== "Home" && "border-b"}`}
      onClick={() => {
        navigate(path);
        setActivePage(path);
      }}
    >
      {text}
    </li>
  );
}

export default NavbarMenuItems;
