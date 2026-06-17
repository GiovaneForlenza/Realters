import MainButton from "../button/MainButton";

function HomeHero() {
  return (
    <div className="wrapper full-size flex items-center justify-center bg-blue-500 px-6 py-6 md:h-100">
      <div className="mx-6 flex w-full max-w-175 flex-col items-end justify-end gap-8 text-center">
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
