import Link from "next/link";
import SemitexLogo from "./semitex-logo";
import NavLinks from "./nav-links";
import Image from "next/image";
import { menuLinks } from "@/app/lib/menu-links";

export default function Header() {
	return (
		<div className="flex h-full justify-between items-center text-white ">
			<Link
				className=""
				href="/"
			>
				<SemitexLogo
					width={155}
					height={28}
				/>
			</Link>
			<NavLinks items={menuLinks} />
			<div className="flex gap-2 justify-center items-center">
				<Image
					src={"/icons/phone.svg"}
					alt="phone"
					width={32}
					height={32}
				/>
				<p className="font-futuris text-lg">
					+7 (812)<strong>313-58-45</strong>
				</p>
			</div>
		</div>
	);
}
