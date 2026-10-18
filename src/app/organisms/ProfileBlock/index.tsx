import Button from "@/app/atoms/Button";
import Links from "@/app/molecules/Links";
import Profile from "@/app/molecules/Profile";
import Image from "next/image";
import Link from "next/link";

/**
 * Profile info block
 *
 * @example
 * <ProfileBlock />
*/
const ProfileBlock: React.FC = () => {
	return (
		<div className="flex flex-col">
			<Profile />
			<Links />
			<div className="grid grid-cols-3 max-lg:grid-cols-2 gap-4 mt-8 items-start">
				<Link
					href="/articles/memorial"
					className="h-full"
				>
					<Button 
						className="flex flex-col! h-full! w-full! rounded-xl!"
						variant="clear"
					>
						<Image
							src="/articles/memorial/banner.png"
							width={960}
							height={540}
							alt="Article: Memorial"
							className="w-full"
						/>
						Memorial
					</Button>
				</Link>
				<Link
					href="https://ioy.app"
					target="_blank"
					className="h-full"
				>
					<Button 
						className="flex flex-col! h-full! w-full! rounded-xl!"
						variant="clear"
					>
						<Image
							src="/ioy_banner.png"
							width={400}
							height={300}
							alt="ioy.app"
							className="w-full"
						/>
						IOY
					</Button>
				</Link>
				<Link
					href="/ms"
					className="h-full"
				>
					<Button 
						className="flex flex-col! h-full! w-full! rounded-xl! text-ellipsis! overflow-hidden!"
						variant="clear"
					>
						<Image
							src="/minecraft.png"
							width={64}
							height={64}
							alt="Minecraft server"
							className="w-42"
						/>
						Minecraft Server
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default ProfileBlock;
