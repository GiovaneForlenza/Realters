import { MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainButton from "./button/MainButton";
import NavbarMenuItems from "./NavbarMenuItems";

function Navbar() {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("Home");
  const [isResponsiveMenuOpen, setIsResponsiveMenuOpen] = useState(true);
  const menuItems = [
    { page: "About", path: "/about" },
    { page: "Portfolio", path: "/portfolio" },
    { page: "Investors", path: "/investors" },
    { page: "Carees", path: "/careers" },
    { page: "Blog", path: "/blog" },
  ];

  useEffect(() => {
    setIsResponsiveMenuOpen(false);
  }, []);

  function handleClick() {
    toggleResponsiveMenu();
  }
  function toggleResponsiveMenu() {
    setIsResponsiveMenuOpen(!isResponsiveMenuOpen);
  }
  return (
    <div className="sticky top-0 left-0 w-full bg-yellow-300 sm:bg-green-300 md:bg-pink-300 lg:bg-white">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-6 px-4 py-6 sm:justify-between">
        <img
          src="/logo-written.png"
          alt="Company logo"
          className="w-30 cursor-pointer sm:w-40"
          onClick={() => {
            {
              navigate("/");
              setActivePage("Home");
            }
          }}
        />
        <div className="flex flex-row items-center gap-2">
          <div className="mr-1 ml-8 flex cursor-pointer sm:mr-4 md:hidden">
            {isResponsiveMenuOpen ? (
              <X onClick={handleClick} />
            ) : (
              <MenuIcon onClick={handleClick} />
            )}
          </div>
          <ul className="hidden flex-row items-center gap-2 md:flex">
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
      <div
        className={`${isResponsiveMenuOpen ? "h-fit" : "h-0"} flex flex-col items-center gap-2 overflow-hidden pb-2 md:hidden`}
      >
        <ul className="flex flex-col items-center">
          {menuItems.map((item, idx) => {
            return (
              <NavbarMenuItems
                text={item.page}
                key={idx}
                path={item.path}
                activePage={activePage}
                setActivePage={setActivePage}
                isResponsiveMenuOpen={isResponsiveMenuOpen}
                toggleResponsiveMenu={toggleResponsiveMenu}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
