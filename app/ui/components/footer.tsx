import Link from "next/link";
import SemitexLogo from "./semitex-logo";
import NavLinks from "./nav-links";
import { menuLinks } from "@/app/lib/menu-links";

export default function Footer() {
	const items = menuLinks.filter((item) => item.name !== "FAQ");
	return (
		<div className="flex h-full justify-between items-center text-white ">
			<Link
				className=""
				href="/"
			>
				<SemitexLogo
					width={189}
					height={34}
				/>
			</Link>
			<NavLinks items={items} />
			<div className="flex justify-center items-center w-64 h-14 bg-secondary rounded-lg ">
				<p className="font-futuris text-lg uppercase">Оставить заявку</p>
			</div>
		</div>
	);
}
