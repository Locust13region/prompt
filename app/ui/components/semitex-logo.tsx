import Image from "next/image";

export default function SemitecLogo({
	width,
	height,
}: {
	width: number;
	height: number;
}) {
	return (
		<div className="">
			<Image
				src={"/img/logo.svg"}
				alt="logo"
				width={width}
				height={height}
			/>
		</div>
	);
}
