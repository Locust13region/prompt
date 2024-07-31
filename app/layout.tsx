import type { Metadata } from "next";
import "./ui/globals.css";
import {
	inter,
	futuraBook,
	futuraFuturis,
	futuraFuturisBold,
	futuraDemi,
	futuraLight,
} from "./ui/fonts";
import Header from "./ui/components/header";
import Footer from "./ui/components/footer";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${inter.variable} ${futuraBook.variable} ${futuraFuturis.variable} ${futuraFuturisBold.variable} ${futuraDemi.variable} ${futuraLight.variable}`}
		>
			<body>
				<header className="relative">
					<div className="mt-14 max-w-7xl h-8 mx-auto ">
						<Header />
					</div>
				</header>
				<main className="-mt-[88px]">{children}</main>
				<footer className="bg-footerBG">
					<div className="max-w-7xl h-44 py-14 mx-auto text-white">
						<Footer />
					</div>
				</footer>
			</body>
		</html>
	);
}
