import Button from "@/app/atoms/Button";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => (
	<div className="sticky top-0 flex flex-row gap-4 items-center justify-between bg-[#cfd5d6] border-b-2 border-b-[#3f4548] px-4 py-2 shadow-md w-full">
		<div className="flex flex-row gap-4 items-center">
			<Image
				src="/minecraft/icon.png"
				alt="Very secret world"
				width={64}
				height={64}
				className="border-2 border-text"
			/>
			<div className="flex flex-col">
				<p className="text-title text-text!">Very Secret World</p>
				<p className="text-default text-text!">Minecraft 26.3</p>
			</div>
		</div>
		<Link href="/">
			<Button variant="clear">
				<Image
					src="/logo.png"
					alt="Home"
					width={48}
					height={48}
				/>
			</Button>
		</Link>
	</div>
)

export default Header;

