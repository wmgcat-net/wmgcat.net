"use client";

import { Button } from "@/shared/ui";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    LuBook,
    LuBookOpen,
    LuClipboardList,
	LuGamepad,
	LuGithub,
	LuImage,
    LuMessageCircle
} from "react-icons/lu";

const Header: React.FC = () => {
	const [ open, setOpen ] = useState<boolean>(false);

	return (
		<header className="flex gap-4 items-center z-100 bg-back w-full p-4 justify-between">
			<Link href="/">
				<Image
					src="/logo.png"
					alt="header logo"
					width={42}
					height={42}
					className="pointer-events-none select-none"
				/>
			</Link>
			<div 
				className="relative"
				onMouseEnter={() => setOpen(true)}
				onMouseLeave={() => setOpen(false)}
			>
				<Button 
					variant="clear"
					onClick={() => setOpen((prev) => !prev)}
				>
					{!open ? <LuBook /> : <LuBookOpen />}
				</Button>
				<nav className={`${open && "flex absolute" || "hidden"} flex-col gap-4 items-start top-full -right-4 z-1000 p-4 bg-back rounded-bl-2xl`}>
					<Link 
						href="/blog"
						onClick={() => setOpen(false)}
						className="w-full"
					>
						<Button 
							variant="clear"
							className="w-full"
						>
							<LuMessageCircle />
							Blog
						</Button>
					</Link>
					<Link 
						href="/games"
						onClick={() => setOpen(false)}
						className="w-full"
					>
						<Button 
							variant="clear"
							className="w-full"
						>
							<LuGamepad />
							Games
						</Button>
					</Link>
					<Link 
						href="/arts"
						onClick={() => setOpen(false)}
						className="w-full"
					>
						<Button 
							variant="clear"
							className="w-full"
						>
							<LuImage />
							Arts
						</Button>
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
