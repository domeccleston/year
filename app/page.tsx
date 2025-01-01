import cn from "classnames";

import { yearProgress, getWeekAndDayInYear, getDayInYear } from "@/lib";

export const dynamic = "force-dynamic";

function YearGrid({ currentDay }: { currentDay: number }) {
  const totalDays = 365;

  const days = Array.from(Array(totalDays).keys());
  return (
    <div className="border-0 md:border-2 rounded-lg border-slate-600 pl-3 md:px-3 pt-3 mt-10 pb-3 md:pb-0">
      <div className="flex flex-row md:flex-col flex-wrap max-w-[120px] md:h-[120px] md:min-w-[848px] md:max-w-full items-center gap-[4px]">
        {days.map((_, i) => {
          return (
            <div
              key={`day-${i}`}
              className={cn("h-[12px] w-[12px] rounded-sm", {
                "bg-green-500": i < currentDay,
                "bg-white": i >= currentDay,
              })}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function Home() {
  const progress = yearProgress();

  const { week, dayOfWeek } = getWeekAndDayInYear();
  const currentDay = getDayInYear();
  return (
    <div className="flex min-h-screen flex-col justify-center items-center pb-4">
      <h1 className="text-3xl md:text-7xl mt-20 md:mt-0 text-white font-medium tracking-[-0.035em]">
        2025 is {progress}% complete.
      </h1>
      <h2 className="text-xl md:text-2xl mt-10 text-slate-400 tracking-tight">
        It&apos;s week {week}, day {dayOfWeek} of 2025.
      </h2>
      <YearGrid currentDay={currentDay} />
    </div>
  );
}
