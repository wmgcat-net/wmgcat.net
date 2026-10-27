"use client";

import { Button } from "@/shared/ui";
import Link from "next/link";
import { LuArrowUp, LuGithub } from "react-icons/lu";

const Footer: React.FC<{ onUpClick?: () => void; }> = ({ onUpClick }) => {
	return (
		<footer className="flex justify-between items-center p-4 gap-4 w-full bg-back">
			<p className="text-lg font-extralight">v{process.env.NEXT_PUBLIC_APP_VERSION}</p>
			<div className="flex gap-4 items-center">
				<Link
					href="https://github.com/wmgcat-net/wmgcat.net"
					target="_blank"
				>
					<Button variant="clear">
						<LuGithub />
					</Button>
				</Link>
				<Button
					variant="clear"
					onClick={onUpClick}
					className="pointer-events-auto"
				>
					<LuArrowUp />
				</Button>
			</div>
		</footer>
	);
};

export default Footer;
