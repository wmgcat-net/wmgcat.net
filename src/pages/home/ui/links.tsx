"use client";

import Link from "next/link";
import { Button } from "@/shared/ui";
import {
	SiBluesky,
	SiDeviantart,
	SiGithub,
	SiItchdotio,
	SiNewgrounds,
	SiPinterest,
	SiTelegram
} from "react-icons/si";

const Links: React.FC = () => {
	return (
		<div className="flex gap-4 flex-wrap justify-center items-center">
			<Link
				href="https://github.com/wmgcat"
				target="_blank"
			>
				<Button variant="clear">
					<SiGithub />
				</Button>
			</Link>
			<Link
				href="https://bsky.app/profile/wmgcat.bsky.social"
				target="_blank"
			>
				<Button variant="clear">
					<SiBluesky />
				</Button>
			</Link>
			<Link
				href="https://t.me/wmgcat"
				target="_blank"
			>
				<Button variant="clear">
					<SiTelegram />
				</Button>
			</Link>
			<Link
				href="https://www.deviantart.com/wmgcat"
				target="_blank"
			>
				<Button variant="clear">
					<SiDeviantart />
				</Button>
			</Link>
			<Link
				href="https://wmgcat.newgrounds.com"
				target="_blank"
			>
				<Button variant="clear">
					<SiNewgrounds />
				</Button>
			</Link>
			<Link
				href="https://wmgcat.itch.io/"
				target="_blank"
			>
				<Button variant="clear">
					<SiItchdotio />
				</Button>
			</Link>
			<Link
				href="https://www.pinterest.com/wmgcat"
				target="_blank"
			>
				<Button variant="clear">
					<SiPinterest />
				</Button>
			</Link>
		</div>
	);
};

export default Links;
