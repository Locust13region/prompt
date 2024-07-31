import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
	subsets: ["latin", "cyrillic"],
	weight: ["300", "400", "500", "600", "700", "800"],
	display: "swap",
	style: "normal",
	variable: "--font-inter",
});
export const futuraBook = localFont({
	src: "./fonts/futuraBookCRegular.woff2",
	display: "swap",
	weight: "400",
	style: "normal",
	variable: "--font-futura-book-regular",
});
export const futuraFuturis = localFont({
	src: "./fonts/futuraFuturisC.woff2",
	display: "swap",
	weight: "400",
	style: "normal",
	variable: "--font-futura-futuris-regular",
});
export const futuraFuturisBold = localFont({
	src: "./fonts/futuraFuturisCBold.woff2",
	display: "swap",
	weight: "700",
	style: "normal",
	variable: "--font-futura-futuris-bold",
});
export const futuraDemi = localFont({
	src: "./fonts/futuraDemiCRegular.woff2",
	display: "swap",
	weight: "400",
	style: "normal",
	variable: "--font-futura-demi",
});
export const futuraLight = localFont({
	src: "./fonts/futuraLightC.woff2",
	display: "swap",
	weight: "400",
	style: "normal",
	variable: "--font-futura-light",
});
