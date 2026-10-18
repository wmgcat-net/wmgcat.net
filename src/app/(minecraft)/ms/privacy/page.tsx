import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy",
	category: "privacy",
	alternates: {
		canonical: "/ms/privacy"
	},
	referrer: "strict-origin-when-cross-origin",
	creator: "wmgcat",
	robots: {
		index: false,
		follow: false,
		nocache: false
	}
};

export default async function Terms() {
	return (
		<>
			<Link
				href="/ms"
				className="w-fit hover:underline cursor-pointer hover:opacity-60 text-xl"
			>
				Назад
			</Link>
			<h1 className="text-3xl text-[#f9c629]!">Приватность</h1>
			<h2 className="text-xl">Данные для обработки:</h2>
			<ul className="pl-4 list-disc">
				<li>Никнейм</li>
				<li>Почта</li>
			</ul>
			<h2 className="text-xl">Что хранится на сервере?</h2>
			<p>Только введенный никнейм, он нужен для добавление вашего аккаунта в белый список сервера. Почта требуется только для отправки чека и письма с данными для входа</p>
			<h2 className="text-xl">Время хранения данных</h2>
			<p>Данные хранятся пока не закроется сервер, удалить данные можно по запросу у Администрации сайта.</p>
			<p>Электронная почта (Email): developer@wmgcat.net</p>
		</>
	);
}
