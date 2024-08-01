import Link from "next/link";
import Image from "next/image";

export default function Modal() {
	return (
		<div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
			<div className="max-w-7xl mx-auto relative">
				<div className=" absolute top-[202px] right-0 w-[380px] h-[475px] shadow-[0_4px_15px_0_rgba(0,0,0,0.15)]; rounded-xl bg-white">
					<div className="text-center">
						<div className="h-28 pt-8 bg-gradient-to-b from-[rgb(106,50,180)] to-[rgb(85,38,147)] to-100%) text-[23px] leading-7 font-futuris rounded-t-xl text-white uppercase">
							<p>Закажите</p>
							<p>обратный звонок</p>
						</div>
						<div className="w-full h-full px-10 pt-7 font-book text-left">
							<p className="pl-4 text-lg text-[#626366]">Ваше имя*</p>
							<div className="pt-5 pl-5 pb-3 rounded-xl text-xl text-[#BCBFC4] bg-[rgb(245,243,255)]">
								Петров Петр
							</div>
							<p className="mt-2 pl-4 text-lg text-[#626366]">Ваш номер*</p>
							<div className="pt-5 pl-5 pb-3 rounded-xl text-xl text-[#BCBFC4] bg-[rgb(245,243,255)]">
								+7 (_&thinsp;_&thinsp;_)
								_&thinsp;_&thinsp;_-_&thinsp;_-_&thinsp;_
							</div>
							<Link
								href="/"
								className="block mt-7 pt-3 pl-5 pb-4 rounded-xl font-futuris text-lg text-center text-white bg-[#FFA500] uppercase"
							>
								Заказать звонок
							</Link>
							<div className="mt-4 flex gap-3">
								<Image
									src={"/icons/lock.svg"}
									alt="lock"
									width={16}
									height={16}
								/>
								<p className="text-sm text-[#C0C0C0]">
									Мы гарантируем конфиденциальность данных
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
