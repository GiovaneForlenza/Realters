import { MenuIcon, MoveUpRight, X } from "lucide-react";
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
    <div className="top-0 left-0 w-full bg-yellow-300 sm:bg-green-300 md:sticky md:bg-pink-300 lg:bg-white">
      <div className="wrapper mx-auto flex items-center justify-between gap-6 px-6 py-6">
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
          <div className="flex cursor-pointer sm:mr-4 md:hidden">
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
          <div className="hidden md:inline">
            <MainButton />
          </div>
        </div>
      </div>

      <div
        className={`${isResponsiveMenuOpen ? "h-fit" : "h-0"} flex flex-col items-center gap-2 overflow-hidden md:hidden`}
      >
        <ul className="mb-4 flex flex-col items-center">
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
      <div className="bg-main-orange-100 border-main-orange-900 flex cursor-pointer items-center justify-center gap-4 border border-r-0 border-l-0 py-2 md:hidden">
        <div className="">Invest with us</div>
        <div className="text-main-orange-100 bg-main-orange-800 rounded-full p-1 transition-all">
          <MoveUpRight strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
