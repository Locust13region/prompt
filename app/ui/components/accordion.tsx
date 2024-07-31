"use client";

import { downArrow, upArrow } from "@/app/lib/arrows";
import { accordionItems } from "@/app/lib/placeholders";
import { useState } from "react";

export default function Accordion() {
	const [open, setOpen] = useState<number | null>(null);
	return (
		<div className="w-full flex flex-col gap-3">
			{accordionItems.map((item) => {
				const isOpen = item.id === open;
				return (
					<div key={item.id}>
						<div className="rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
							<div
								className={
									"h-[87px] rounded-xl flex justify-between items-center pl-14 pr-9 shadow-[0_0_50px_-10px_rgba(22,126,194,0.2)] " +
									" " +
									(isOpen
										? "bg-secondary"
										: "bg-gradient-to-b from-white from-50% to-[#BDC0FF]")
								}
							>
								<div className="font-demi text-2xl">{item.title}</div>
								<div
									className="cursor-pointer"
									onClick={() => setOpen(isOpen ? null : item.id)}
								>
									{isOpen ? upArrow : downArrow}
								</div>
							</div>
						</div>
						{isOpen && (
							<div className="flex flex-col gap-5 -mt-11 pt-20 pl-14 pr-9 pb-9 font-book text-xl rounded-xl border border-solid border-[rgb(22,126,194)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] relative -z-10">
								{item.description.map((paragraph) => (
									<p
										key={paragraph.p}
										className=""
									>
										{paragraph.content}
									</p>
								))}
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
}
