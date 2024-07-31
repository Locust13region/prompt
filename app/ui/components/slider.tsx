"use client";

import { leftArrow, rightArrow } from "@/app/lib/arrows";
import { manufacturersImages } from "@/app/lib/placeholders";
import Carousel from "@itseasy21/react-elastic-carousel";
import Image from "next/image";
import { MouseEventHandler } from "react";

function customArrow({
	type,
	onClick,
}: {
	type: string;
	onClick: MouseEventHandler<HTMLDivElement>;
}) {
	const pointer = type === "PREV" ? leftArrow : rightArrow;
	return (
		<div
			className={type === "PREV" ? "mt-16 mr-16" : "mt-16 ml-16"}
			onClick={onClick}
		>
			{pointer}
		</div>
	);
}
export default function SwiperManufacturers() {
	return (
		<Carousel
			isRTL={false}
			itemsToShow={5}
			pagination={false}
			disableArrowsOnEnd={false}
			renderArrow={customArrow}
		>
			{manufacturersImages.map((image, index) => (
				<div
					key={index}
					className="w-[242px] h-[174px] flex items-center justify-center rounded-lg bg-white"
				>
					<Image
						src={image.src}
						alt={image.alt}
						className="block"
					/>
				</div>
			))}
		</Carousel>
	);
}
