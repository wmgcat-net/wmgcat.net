import Button from "@/app/atoms/Button";
import GameProps from "@/types/game";
import LinkProps from "@/types/link";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { LuGlobe } from "react-icons/lu";
import { SiItchdotio, SiNewgrounds } from "react-icons/si";

/**
 * Game component
 *
 * @example
 * <Game />
*/
const Game: React.FC<GameProps> = ({
	id,
	title,
	description,
	date_created,
	links
}) => {
	const [ error, setError ] = useState<boolean>(false);
	const Icon = useCallback((type: LinkProps["type"]) => {
		switch(type) {
			case "ng": return <SiNewgrounds />;
			case "itch": return <SiItchdotio />;
			default: return <LuGlobe />;
		}
		return null;
	}, []);

	return (
		<div className="w-full flex flex-col gap-2 pointer-events-none select-none">
			<div className="relative w-full aspect-9/8">
				{error ? (
					<Image
						src="/noize.png"
						fill
						alt={title}
					/>
				) : (
					<Image
						src={`/games/${id}/avatar.png`}
						fill
						alt={title}
						onError={() => setError(true)}
					/>
				)}
			</div>
			<p className="text-primary text-xl text-center text-wrap line-clamp-2">{title}</p>
			<p className="text-text/50 text-lg text-wrap line-clamp-2 indent-4">{description}</p>
			<p className="text-text/25 text-sm text-right">{dayjs(date_created)?.format?.("DD.MM.YYYY")}</p>
			{!!links?.length && (
				<div className="flex flex-wrap justify-end gap-4 pointer-events-auto">
					{links?.map?.((link: LinkProps) => (
						<Link
							href={link.href}
							target="_blank"
							key={link.href}
						>
							<Button>
								{Icon(link.type)}
							</Button>
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export default Game;
