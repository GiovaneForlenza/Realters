import {
  ChartNoAxesCombined,
  HandCoins,
  HousePlus,
  PiggyBank,
} from "lucide-react";

import WavePatternBackground from "../assets/background/wave-pattern.png";

function InvestmentCards() {
  const cards = [
    {
      icon: <HousePlus size={48} color="var(--color-accent-title)" />,
      background: WavePatternBackground,
      mainText: "$294M+",
      secondaryText: "in total exits",
    },
    {
      icon: (
        <ChartNoAxesCombined size={48} color="var(--color-main-orange-900)" />
      ),
      background: null,
      mainText: "9,000+",
      secondaryText: "units managed/owned",
    },
    {
      icon: <HandCoins size={48} color="var(--color-main-orange-900)" />,
      background: null,
      mainText: "3x+",
      secondaryText: "equity growth on current portfolio",
    },
    {
      icon: <PiggyBank size={48} color="var(--color-main-orange-900)" />,
      background: null,
      mainText: "$34M",
      secondaryText: "capital deployed → $294M returned on legacy assets",
    },
  ];

  return (
    <div className="wrapper">
      <div className="accent-title">Track Record</div>
      <div className="content-title">
        Investments that don’t follow the crowd.
      </div>
      <div className="flex flex-col justify-stretch gap-5 md:flex-row md:gap-4">
        {cards.map((card, idx) => {
          return (
            <div
              key={idx}
              style={{ "--dynamic-bg": `url(${WavePatternBackground})` }}
              className={`flex w-full flex-col items-center justify-center gap-4 rounded-md px-4 py-6 md:items-start md:justify-start md:py-4 ${card.background !== null ? "bg-(image:--dynamic-bg) bg-cover bg-center text-white" : "bg-gray-100"}`}
            >
              <div className="md:mb-12">{card.icon}</div>
              <div className="texts">
                <div className="text-center text-2xl font-bold md:mb-2 md:text-start md:text-4xl">
                  {card.mainText}
                </div>
                <div className="text-center text-sm md:text-start">
                  {card.secondaryText}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InvestmentCards;
