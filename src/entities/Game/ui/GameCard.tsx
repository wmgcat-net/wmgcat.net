"use client";

import { Link as LinkType } from "@/shared/api";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import {
	useCallback,
	useState
} from "react";
import { LuGlobe } from "react-icons/lu";
import {
	SiItchdotio,
	SiNewgrounds
} from "react-icons/si";
import Game from "../model/game";
import { Button } from "@/shared/ui";

/**
 * Game component
 *
 * @example
 * <GameCard />
*/
const GameCard: React.FC<Game> = ({
	id,
	type,
	author,
	title,
	description,
	created_at,
	links
}) => {
	const [ error, setError ] = useState<boolean>(false);
	const Icon = useCallback((type: LinkType["type"]) => {
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
			<p className="text-text/25 text-sm text-right">{dayjs(created_at)?.format?.("DD.MM.YYYY")}</p>
			{!!links?.length && (
				<div className="flex flex-wrap justify-end gap-4 pointer-events-auto">
					{links?.map?.((link: LinkType) => (
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

export default GameCard;
