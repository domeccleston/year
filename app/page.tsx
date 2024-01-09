import cn from "classnames";

function yearProgess() {
	const now = new Date();
	const start = new Date(now.getFullYear(), 0, 0).getTime();
	const end = new Date(now.getFullYear() + 1, 0, 0).getTime();
	const oneDay = 1000 * 60 * 60 * 24;
	const day = Math.floor((now.getTime() - start) / oneDay);
	const percent = Math.round((day / 365) * 100);
	return percent;
}

function getWeekAndDayInYear() {
	const now = new Date();
	const start = new Date(now.getFullYear(), 0, 0);
	const diff = now.getTime() - start.getTime();
	const oneDay = 1000 * 60 * 60 * 24;
	const day = Math.floor(diff / oneDay);
	const week = Math.floor(day / 7) + 1;
	const dayOfWeek = day % 7;
	return { week, dayOfWeek };
}

function getDayInYear() {
	const now = new Date();
	const start = new Date(now.getFullYear(), 0, 0);
	const diff = now.getTime() - start.getTime();
	const oneDay = 1000 * 60 * 60 * 24;
	const day = Math.floor(diff / oneDay);
	return day;
}

function YearGrid({ currentDay }: { currentDay: number }) {
	const totalDays = 366;

	const days = Array.from(Array(totalDays).keys());
	return (
		<div className="border rounded-lg border-gray-400 px-3 pt-3 mt-10">
			<div className="flex flex-col flex-wrap h-[120px] min-w-[848px]  items-center gap-[4px]">
				{days.map((_, i) => {
					return (
						<div
							key={`day-${i}`}
							className={cn("h-[12px] w-[12px] rounded-sm bg-white", {
								"bg-green-500": i < currentDay,
							})}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default function Home() {
	const progress = yearProgess();

	const { week, dayOfWeek } = getWeekAndDayInYear();
	const currentDay = getDayInYear();
	return (
		<div className="flex h-screen flex-col justify-center items-center">
			<h1 className="text-7xl font-medium tracking-[-0.035em]">
				2024 is {progress}% complete.
			</h1>
			<h2 className="text-2xl mt-10 text-gray-400">
				It&apos;s week {week}, day {dayOfWeek} of 2024.
			</h2>
			<YearGrid currentDay={currentDay} />
		</div>
	);
}
