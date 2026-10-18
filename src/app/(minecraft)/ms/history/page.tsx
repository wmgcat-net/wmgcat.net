import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "History",
  description: "A minecraft private server",
	category: "minecraft",
	alternates: {
		canonical: "/ms/history"
	},
	referrer: "strict-origin-when-cross-origin",
	keywords: [
		"minecraft",
		"wmgcat",
		"very secret world",
		"private",
		"server",
		"story",
		"history"
	],
	creator: "wmgcat",
	robots: {
		index: true,
		follow: true,
		nocache: false
	}
};

export default async function MSHistory() {
	return (
		<>
			<Link
				href="/ms"
				className="w-fit hover:underline cursor-pointer hover:opacity-60 text-xl"
			>
				Назад
			</Link>
			<p className="text-default text-[#f9c629]!">
				2025 - 2026
			</p>
			<Image
				src="/minecraft/1.png"
				alt="Hero"
				width={1280}
				height={720}
				className="w-full"
			/>
			<p className="text-default indent-8">
				Сервер был создан в качестве новогоднего подарка для подписчиков,
				чтобы весело провести время в новогодние каникулы.
			</p>
			<div className="grid grid-cols-2 gap-4 w-full">
				<Image
					src="/minecraft/2.png"
					alt="Santa"
					width={1280}
					height={720}
					className="w-full"
				/>
				<Image
					src="/minecraft/3.png"
					alt="Group selfie"
					width={1280}
					height={720}
					className="w-full"
				/>
			</div>
			<p className="text-default text-white indent-8">
					Мы смогли победить злого Санту, одолеть дракона и уничтожить Херобрина!
			</p>
			<p className="text-default text-[#f9c629]! text-center">
				История этого мира только начинается...
			</p>
		</>
	);
}
