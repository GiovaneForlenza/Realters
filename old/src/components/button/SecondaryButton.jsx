import { LucideArrowUpRight } from "lucide-react";

function SecondaryButton({ text }) {
  return (
    <div className="m-auto flex w-fit items-center justify-center gap-4 rounded-full border border-orange-500 px-6 py-2 text-lg text-orange-500 md:m-0">
      {text} <LucideArrowUpRight />
    </div>
  );
}

export default SecondaryButton;
