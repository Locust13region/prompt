import Image from "next/image";
import BenefitsCards from "./ui/components/benefits-cards";
import SliderManufacturers from "./ui/components/slider";
import Accordion from "./ui/components/accordion";

export default function Home() {
	return (
		<>
			<section className="h-[850px]">
				<div className="w-full h-full pt-52 bg-home-section-1 bg-no-repeat bg-center bg-cover">
					<div className="max-w-7xl mx-auto text-white">
						<h1 className="w-[847px] font-futurisBold text-[69px] leading-none uppercase">
							Оптовые поставки
							<span className="text-[48px] text-secondary">
								{" "}
								электронных компонентов
							</span>{" "}
							<span className="text-[56px]">из Китая день в день</span>
						</h1>
						<p className="mt-1 w-[672px] font-book text-[23px] text-secondary">
							Комплексные поставки электронных компонентов и оборудования.
							Подберем аналоги популярных брендов из Европы в условиях санкций.
						</p>
						<div className="mt-9 w-[835px] p-6 flex flex-col gap-1 font-book text-[22px] rounded-lg bg-gradient-to-r from-secondary/[.3] from 1.3% to-transparent">
							<div className="flex items-center gap-3">
								<Image
									src={"/icons/check.svg"}
									alt="check"
									width={14}
									height={11}
								/>
								<p>Отсрочка платежей для постоянных клиентов</p>
							</div>
							<div className="flex items-center gap-3">
								<Image
									src={"/icons/check.svg"}
									alt="check"
									width={14}
									height={11}
								/>
								<p>Бесплатная доставка по Москве и СПБ в течение 2х часов</p>
							</div>
							<div className="flex items-center gap-3">
								<Image
									src={"/icons/check.svg"}
									alt="check"
									width={14}
									height={11}
								/>
								<p>Квалифицированный персональный менеджер</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="h-[1400px] relative -z-10">
				<div className="-mt-16 pt-36 w-full h-full bg-[#F2F2F4]">
					<div className="max-w-7xl mx-auto">
						<h2 className="font-futurisBold text-5xl text-center text-[#111111]">
							Почему с нами выгодно
						</h2>
						<p className="mt-6 px-28 font-book text-[22px] text-[#030303] text-center">
							С 1996 года мы занимаемся оптовыми поставками электронных
							компонентов от ведущих производителей из Европы и Азии для
							Российских потребителей.
						</p>
						<div className="mt-10 flex justify-center flex-wrap gap-11">
							<BenefitsCards />
						</div>
					</div>
				</div>
			</section>
			<section className="h-[728px] text-white">
				<div className="-mt-14 w-full h-full pt-36 bg-home-section-3 bg-no-repeat bg-center bg-cover">
					<div className="max-w-[1500px] mx-auto">
						<h2 className="mb-16 font-futurisBold text-5xl text-center">
							Наши производители
						</h2>
						<SliderManufacturers />
						<p className="mt-10 max-w-7xl mx-auto font-book text-xl">
							Lorem ipsum dolor sit amet consectetur. Non eget blandit in
							euismod felis id quisque nunc. Non orci lacus elit mauris velit
							gravida imperdiet id. Ipsum pulvinar ac ut sociis. Sed magna
							gravida consequat et euismod aenean quis mauris. Ut etiam egestas
							ultrices faucibus ultrices nisl enim consequat faucibus. Nibh id
							leo ullamcorper eleifend. Id at commodo interdum et leo.
						</p>
					</div>
				</div>
			</section>
			<section className="h-[1200px]">
				<div className="w-full h-full pt-36">
					<div className="max-w-7xl mx-auto">
						<Accordion />
					</div>
				</div>
			</section>
		</>
	);
}
