import React from "react";
import { MoveUpRight } from "lucide-react";

function MainButton() {
  return (
    <div className="btn-main">
      <div className="">Invest with us</div>
      <div className="icon bg-">
        <MoveUpRight strokeWidth={1.5} />
      </div>
    </div>
  );
}

export default MainButton;
