import React, { useState } from "react";
import NavbarMenuItems from "./NavbarMenuItems";
import { useNavigate } from "react-router-dom";
import MainButton from "./button/MainButton";

function Navbar() {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("Home");
  const menuItems = [
    { page: "About", path: "/about" },
    { page: "Portfolio", path: "/portfolio" },
    { page: "Investors", path: "/investors" },
    { page: "Carees", path: "/careers" },
    { page: "Blog", path: "/blog" },
  ];
  return (
    <div className="sticky top-0 left-0 w-full border bg-white">
      <div className="container mx-auto flex h-26 items-center justify-between">
        <img
          src="/logo-written.png"
          alt="Company logo"
          className="w-60 cursor-pointer"
          onClick={() => {
            {
              navigate("/");
              setActivePage("Home");
            }
          }}
        />
        <div className="flex flex-row gap-2">
          <ul className="flex flex-row items-center gap-1">
            {menuItems.map((item, idx) => {
              return (
                <NavbarMenuItems
                  text={item.page}
                  key={idx}
                  path={item.path}
                  activePage={activePage}
                  setActivePage={setActivePage}
                />
              );
            })}
          </ul>
          <MainButton />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
