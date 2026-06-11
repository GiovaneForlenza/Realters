import React from "react";
import MainButton from "./button/MainButton";

function HomeHero() {
  return (
    <div className="flex h-100 w-screen items-center justify-center bg-blue-500">
      <div className="flex w-full max-w-175 flex-col items-end justify-end gap-8 border text-center">
        <h1 className="text-5xl font-bold text-white">
          Experience Matters in Real Estate Investments
        </h1>
        <p className="text-white">
          Vertically integrated real estate investment platform focused on
          value-add and opportunistic investments across high-growth markets via
          commingled investment funds.
        </p>
        <MainButton />
      </div>
    </div>
  );
}

export default HomeHero;
