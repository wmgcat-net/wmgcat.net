import Button from "@/app/atoms/Button";
import ArtProps from "@/types/art";
import LinkProps from "@/types/link";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { LuGlobe, LuUser } from "react-icons/lu";
import { SiItchdotio, SiNewgrounds, SiTelegram } from "react-icons/si";

/**
 * Art component
 *
 * @example
 * <Art />
*/
const Art: React.FC<ArtProps> = ({
	id,
	author,
	date_created,
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
						src={`/storage/creatives/${id}/image.png`}
						alt={author}
						onError={() => setError(true)}
					/>
				)}
			</div>
			<p className="text-primary text-xl text-center text-wrap line-clamp-2 flex gap-2 items-center justify-center">
				<LuUser />
				{author}
			</p>
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

export default Art;
