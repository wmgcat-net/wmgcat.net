import Image from "next/image";
import Link from "next/link";

export default async function MS() {
	return (
		<div className="min-h-full flex-1 flex flex-col gap-8">
			<h1 className="text-[#f9c629]! text-3xl">Very secret world</h1>
			<div className="flex gap-4 w-full">
				<Image
					src="/minecraft/icon.png"
					width={64}
					height={64}
					className="aspect-square w-24 h-24"
					alt="Icon"
				/>
				<div className="flex flex-col gap-4">
					<h2 className="text-danger! text-xl">Требуется для игры:</h2>
					<ul className="list-disc pl-4">
						<li className="font-extrabold underline">Лицензионная версия Minecraft!</li>
						<li>Ознакомиться с <Link href="/ms/terms" className="underline">пользовательским соглашением</Link></li>
					</ul>
				</div>
			</div>
			<form
				className="flex-1 flex flex-col gap-4"
			>
				<h2 className="text-[#f9c629]! text-2xl">Доступ к серверу</h2>
				<p className="text-lg">Вы получаете доступ к серверу в игре Minecraft</p>
				<input
					name="nickname"
					placeholder="Ваш никнейм"
					className="border-2 border-br p-2 bg-[#8e8f87] text-text!"
					required
				/>
				<input
					name="email"
					placeholder="Ваша почта"
					className="border-2 border-br p-2 bg-[#8e8f87] text-text!"
					required
				/>
				<button className="text-[#5ea919]! border-2 border-[#5ea919] p-2 cursor-pointer">
					Купить 150 RUB
				</button>
				<p className="text-center">или</p>
				<div className="grid grid-cols-12 gap-4 w-full">
					<input
						name="code"
						placeholder="Введите код"
						className="border-2 border-br p-2 bg-[#8e8f87] text-text! col-span-8 w-full"
					/>
					<button className="text-[#5ea919]! border-2 border-[#5ea919] p-2 col-span-4 w-full cursor-pointer">
						Применить
					</button>
				</div>
			</form>
			<div className="flex flex-col gap-4">
				<h2 className="text-[#5ea919]! text-xl">Ссылки:</h2>
				<ul className="pl-4 list-disc">
					<li>
						<Link
							href="/ms/history"
							className="w-fit hover:underline cursor-pointer hover:opacity-60 text-xl"
						>
							История сервера
						</Link>
					</li>
					<li>
						<Link
							href="/ms/terms"
							className="w-fit hover:underline cursor-pointer hover:opacity-60 text-xl"
						>
							Пользовательское соглашение
						</Link>
					</li>
					<li>
						<Link
							href="/ms/contacts"
							className="w-fit hover:underline cursor-pointer hover:opacity-60 text-xl"
						>
							Контакты
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
