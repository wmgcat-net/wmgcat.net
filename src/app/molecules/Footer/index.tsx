"use client";

import Link from "next/link";
import Button from "@/app/atoms/Button";
import { LuArrowUp } from "react-icons/lu";

const Footer: React.FC<{ onUpClick?: () => void; }> = ({ onUpClick }) => {
	return (
		<footer className="pointer-events-none select-none flex justify-between items-center px-6 py-4 gap-4 rounded-t-4xl w-full z-1000 bg-back! transition-all" >
			<p className="text-xl font-extralight">v{process.env.NEXT_PUBLIC_APP_VERSION}</p>
			<Link href="mailto:support@wmgcat.net">
				<Button variant="clear">
					support@wmgcat.net
				</Button>
			</Link>
			<Button
				variant="clear"
				onClick={onUpClick}
				className="pointer-events-auto"
			>
				<LuArrowUp />
			</Button>
		</footer>
	);
};

export default Footer;
