import { useNavigate } from "react-router-dom";

function NavbarMenuItems({
  text,
  path,
  activePage,
  setActivePage,
  isResponsiveMenuOpen,
  toggleResponsiveMenu,
}) {
  const navigate = useNavigate();
  function handleClick(path) {
    navigate(path);
    setActivePage(path);
    toggleResponsiveMenu();
  }
  return (
    <li
      className={`border-main-orange-800 cursor-pointer px-2 ${isResponsiveMenuOpen ? "py-2" : "py-1"} transition-all duration-75 hover:border-b ${activePage === path && activePage !== "Home" && "border-b"}`}
      onClick={() => {
        handleClick(path);
      }}
    >
      {text}
    </li>
  );
}

export default NavbarMenuItems;
