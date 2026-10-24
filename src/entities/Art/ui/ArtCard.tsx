import dayjs from "dayjs";
import {
	useCallback,
	useState
} from "react";
import { LuGlobe, LuUser } from "react-icons/lu";
import {
	SiItchdotio,
	SiNewgrounds,
	SiTelegram
} from "react-icons/si";
import type Art from "../model/art";
import type { Link as LinkProps } from "@/shared/api";
import Image from "next/image";
import { Button } from "@/shared/ui";
import Link from "next/link";

/**
 * Art component
 *
 * @example
 * <ArtCard />
*/
const ArtCard: React.FC<Art> = ({
	id,
	author,
	created_at,
	links
}) => {
	const [ error, setError ] = useState<boolean>(false);
	const Icon = useCallback((type: LinkProps["type"]) => {
		switch(type) {
			case "ng": return <SiNewgrounds />;
			case "itch": return <SiItchdotio />;
			case "telegram": return <SiTelegram />;
			default: return <LuGlobe />;
		}
	}, []);

	return (
		<div className="w-full flex flex-col gap-2 pointer-events-none select-none">
			<div className="relative w-full min-h-20">
				{error ? (
					<Image
						src="/noize.png"
						fill
						alt={author}
					/>
				) : (
					<img
						src={`/instances/${id}/image.png`}
						alt={author}
						onError={() => setError(true)}
					/>
				)}
			</div>
			<p className="text-primary text-xl text-center text-wrap line-clamp-2 flex gap-2 items-center justify-center">
				<LuUser />
				{author}
			</p>
			<p className="text-text/25 text-sm text-right">{dayjs(created_at)?.format?.("DD.MM.YYYY")}</p>
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

export default ArtCard;
