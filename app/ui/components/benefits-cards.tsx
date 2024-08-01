import { cardsItems } from "@/app/lib/placeholders";
import Image from "next/image";

export default function BenefitsCards() {
	return (
		<>
			{cardsItems.map((card) => (
				<div
					key={card.title}
					className="w-[369px] h-[406px] px-7 py-10 flex flex-col justify-start items-center rounded-3xl bg-white bg-[url('/img/card-bg.svg')] [background-position-x:35px] [background-position-y:245px] bg-no-repeat"
				>
					<Image
						src={card.icon}
						alt={card.title}
						width={157}
						height={162}
						style={{ width: 157, height: 162 }}
					/>
					<p className="mt-10 font-futurisBold text-xl text-center text-[#2A336C]">
						{card.title}
					</p>
					<p className="mt-3 px-1 font-book text-xl leading-5 whitespace-break-spaces text-center text-[#555555]">
						{card.description}
					</p>
				</div>
			))}
		</>
	);
}
