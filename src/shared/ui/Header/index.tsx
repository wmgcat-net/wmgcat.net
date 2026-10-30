"use client";

import { Button } from "@/shared/ui";
import {
	AnimatePresence,
	motion
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
	LuBook,
	LuBookOpen
} from "react-icons/lu";

const Header: React.FC<{
	/** Nav menu */
	items: {
		/** Label */
		label: string;
		/** Icon */
		icon?: React.ReactNode;
		/** Link */
		href: string;
	}[];
	/** Header title */
	title?: string;
}> = ({
	items,
	title
}) => {
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
				<AnimatePresence mode="wait">
					<motion.p
						key={title}
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{
							duration: .125,
							ease: [ .34, 1.2, .64, 1 ]
						}}
						className="overflow-hidden text-lg"
					>
					{title}
				</motion.p>
			</AnimatePresence>
			<div 
				className="relative"
				onMouseEnter={() => setOpen(true)}
				onMouseLeave={() => setOpen(false)}
			>
				<Button 
					variant="clear"
					onClick={() => setOpen((prev) => !prev)}
				>
					<AnimatePresence 
						mode="wait"
						initial={false}
					>
						<motion.span
							key={open ? "open" : "close"}
							initial={{ scale: .65, rotate: -25 }}
							animate={{ scale: 1, rotate: 0 }}
							exit={{ scale: .65, rotate: 25 }}
							transition={{
								duration: .125,
								ease: [ .34, 1.2, .64, 1 ]
							}}
						>
							{open ? <LuBookOpen /> : <LuBook />}
						</motion.span>
					</AnimatePresence>
				</Button>
				<AnimatePresence mode="wait">
					<motion.nav 
						key={open ? "open" : "close"}
						initial={{
							opacity: 0,
							height: open ? 0 : "auto"
						}}
						animate={{
							opacity: 1,
							height: open ? "auto" : 0
						}}
						exit={{
							height: open ? 0 : "auto"
						}}
						transition={{
							duration: .125
						}}	
						className={`${open && "flex absolute" || "hidden"} flex-col gap-4 items-start top-full -right-4 z-1000 p-4 bg-back rounded-bl-2xl overflow-hidden`}
					>
						{items?.map?.((item, i) => (
							<Link 
								href={item?.href || "/"}
								onClick={() => setOpen(false)}
								className="w-full"
								key={`nav-${i}-item`}
							>
								<Button 
									variant="clear"
									className="w-full"
								>
									{item?.icon && item.icon}
									{item.label}
								</Button>
							</Link>
						))}
					</motion.nav>
				</AnimatePresence>
			</div>
		</header>
	);
};

export default Header;
