import React from "react";
import "../../public/logo-icon.png";
import { MoveUpRight } from "lucide-react";

function Navbar() {
  return (
    <div className=" bg-white sticky top-0 left-0 w-full border ">
      <div className="container h-20 flex items-center justify-between mx-auto">
        <img
          src="../../public/logo-written.png"
          alt="Company logo"
          className="w-60"
        />
        <div className="flex flex-row gap-8">
          <ul className="flex flex-row gap-8 items-center">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Investors</li>
            <li>Carees</li>
            <li>Blog</li>
          </ul>
          <div className="btn-main">
            <div className="">Invest with us</div>
            <div className="icon bg-">
              <MoveUpRight strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Navbar;
