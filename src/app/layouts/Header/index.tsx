import { Button } from "@/shared/ui";
import Image from "next/image";
import Link from "next/link";
import {
	LuGamepad,
	LuImage
} from "react-icons/lu";

/**
 * Header
 *
 * @example
* <Header/>
*/
const Header: React.FC = () => {
	return (
		<header className="flex justify-between items-center gap-4 w-full px-6 py-4 bg-br/25 rounded-b-4xl select-none">
			<Link href="/">
				<Image
					src="/logo.png"
					alt="header logo"
					width={48}
					height={48}
					className="pointer-events-none select-none"
				/>
			</Link>
			<nav className="flex gap-4 items-center">
				<Link href="/games">
					<Button variant="default">
						<LuGamepad />
						Games
					</Button>
				</Link>
				<Link href="/arts">
					<Button variant="default">
						<LuImage />
						Arts
					</Button>
				</Link>
			</nav>
		</header>
	);
};

export default Header;
