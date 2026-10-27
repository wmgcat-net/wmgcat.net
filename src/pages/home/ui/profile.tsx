"use client";
import Image from "next/image";
import Links from "./links";

const Profile: React.FC = () => {
	return (
		<header className="w-full pointer-events-none select-none h-fit">
			<div className="relative w-full h-64 rounded-4xl overflow-hidden">
				<Image
					src="/background.gif"
					fill
					alt="wmgcat background.png"
				/>
			</div>
			<div className="relative -mb-12 bottom-12 flex flex-col items-center">
				<div className="w-28 aspect-square relative">
					<Image
						src="/avatar.png"
						alt="wmgcat icon.png"
						fill
						className="rounded-full border-6 border-back"
					/>
				</div>
				<div className="flex flex-col gap-2 bg-back rounded-2xl px-4 py-2 items-center">
					<p className="text-primary font-medium text-2xl">wmgcat</p>
					<p className="text-text text-center text-xl">Web, Gamedev. Creator of 42Eng and IOY.APP</p>
					<div className="w-75 max-w-full pointer-events-auto mt-4">
						<Links />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Profile;
