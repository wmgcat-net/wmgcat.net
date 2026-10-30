"use client";

import { useHeader } from "@/features/header-titles";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const PageHistory: React.FC = () => {
	useEffect(() => {
		useHeader.getState().setTitle("History");
	}, []);

	return (
		<>
			<Link
				href="/very-secret-world"
				className="w-fit hover:underline cursor-pointer hover:opacity-60 text-xl"
			>
				Back
			</Link>
			<p className="text-default text-[#f9c629]!">
				2025 - 2026
			</p>
			<Image
				src="/minecraft/1.png"
				alt="Hero"
				width={1280}
				height={720}
				className="w-full"
			/>
			<p className="text-default indent-8">
				A New Year&apos;s gift for our subscribers - a place to have fun together over the holidays.
			</p>
			<div className="grid grid-cols-2 gap-4 w-full">
				<Image
					src="/minecraft/2.png"
					alt="Santa"
					width={1280}
					height={720}
					className="w-full"
				/>
				<Image
					src="/minecraft/3.png"
					alt="Group selfie"
					width={1280}
					height={720}
					className="w-full"
				/>
			</div>
			<p className="text-default text-white indent-8">
				We took down Evil Santa, slayed the Ender Dragon, and vanquished Herobrine!
			</p>
			<p className="text-default text-[#f9c629]! text-center">
				This world&apos;s story is just beginning...
			</p>
		</>
	);
}

export default PageHistory;
