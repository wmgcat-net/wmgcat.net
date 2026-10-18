import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contacts",
  description: "Contacts",
	category: "contacts",
	alternates: {
		canonical: "/ms/contacts"
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
			<h1 className="text-3xl text-[#f9c629]!">Контакты</h1>
			<ul className="pl-4 list-disc">
				<li>ИНН: 770307625408</li>
				<li>Адрес электронной почты (Email): developer@wmgcat.net</li>
			</ul>
		</>
	);
}
