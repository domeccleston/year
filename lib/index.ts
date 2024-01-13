export function yearProgress() {
	const now = new Date();
	const start = new Date(now.getFullYear(), 0, 0).getTime();
	const oneDay = 1000 * 60 * 60 * 24;
	const day = Math.floor((now.getTime() - start) / oneDay);
	const percent = Math.round((day / 365) * 100);
	return percent;
}

export function getWeekAndDayInYear() {
	const now = new Date();
	const start = new Date(now.getFullYear(), 0, 0);
	const diff = now.getTime() - start.getTime();
	const oneDay = 1000 * 60 * 60 * 24;
	const day = Math.floor(diff / oneDay);
	const week = Math.floor(day / 7) + 1;
	const dayOfWeek = day % 7;
	return { week, dayOfWeek };
}

export function getDayInYear() {
	const now = new Date();
	const start = new Date(now.getFullYear(), 0, 0);
	const diff = now.getTime() - start.getTime();
	const oneDay = 1000 * 60 * 60 * 24;
	const day = Math.floor(diff / oneDay);
	return day;
}