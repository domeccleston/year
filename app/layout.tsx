import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "2024 Progress Tracker",
	description:
		"2024 Progress Tracker: how far we into 2024? See the percentage progress, and track the current day and week.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="antialiased">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
