import { MenuItems } from "@/app/lib/definitions";
import Link from "next/link";

export default function NavLinks({ items }: { items: MenuItems[] }) {
	return (
		<div className="flex gap-9 font-light text-lg">
			{items.map((item) => (
				<Link
					key={item.name}
					href={item.href}
				>
					<p>{item.name}</p>
				</Link>
			))}
		</div>
	);
}
