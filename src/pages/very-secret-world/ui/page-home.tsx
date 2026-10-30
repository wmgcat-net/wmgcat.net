"use client";

import { useHeader } from "@/features/header-titles";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const PageHome: React.FC = () => {
	useEffect(() => {
		useHeader.getState().setTitle("Very secret world");
	}, []);

	return (
		<div className="min-h-full flex-1 flex flex-col gap-8">
			<div className="flex gap-4 w-full">
				<Image
					src="/minecraft/icon.png"
					width={64}
					height={64}
					className="aspect-square w-24 h-24"
					alt="Icon"
				/>
				<div className="flex flex-col gap-4">
					<h2 className="text-danger! text-xl">Requirements:</h2>
					<ul className="list-disc pl-4">
						<li className="font-extrabold underline">Official Minecraft account!</li>
					</ul>
				</div>
			</div>
			<div className="flex-1 flex flex-col gap-4 w-full">
				<h2 className="text-[#f9c629]! text-2xl">Server Access</h2>
				<p className="text-lg">You get access to the Minecraft server</p>
				<Link
					href="https://boosty.to/wmgcat/purchase/4140215?ssource=DIRECT&share=subscription_link"
					target="_blank"
					className="w-full!"
				>
					<button className="text-[#5ea919]! border-2 border-[#5ea919] p-2 cursor-pointer w-full">
						BUY
					</button>
				</Link>
			</div>
			<div className="flex flex-col gap-4">
				<h2 className="text-[#5ea919]! text-xl">Links:</h2>
				<ul className="pl-4 list-disc">
					<li>
						<Link
							href="/very-secret-world/history"
							className="w-fit hover:underline cursor-pointer hover:opacity-60 text-xl"
						>
							History
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default PageHome;
