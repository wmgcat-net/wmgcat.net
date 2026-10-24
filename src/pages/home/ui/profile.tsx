"use client";
import Image from "next/image";
/**
 * Profile info
 *
 * @example
 * <Profile />
*/
const Profile: React.FC = () => {
	return (
		<header className="w-full pointer-events-none select-none">
			<div className="relative w-full h-64 aspect-video rounded-4xl overflow-hidden">
				<Image
					src="/background.gif"
					fill
					alt="wmgcat background.png"
				/>
			</div>
			<div className="relative md:left-8 bottom-12 flex items-end max-md:flex-col max-md:items-center">
				<div className="w-24 aspect-square relative">
					<Image
						src="/avatar.png"
						alt="wmgcat icon.png"
						fill
						className="rounded-full border-6 border-back"
					/>
				</div>
				<div className="relative md:top-7 flex flex-col bg-back rounded-2xl px-4 py-2 max-md:items-center">
					<p className="text-primary font-bold text-2xl">wmgcat</p>
					<p className="text-text text-xl">Web, Gamedev. Creator of 42Eng and IOY.APP</p>
				</div>
			</div>
		</header>
	);
};

export default Profile;
