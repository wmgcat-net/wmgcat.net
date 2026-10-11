import Button from "@/app/atoms/Button";
import Link from "next/link";
import {
	SiBluesky,
	SiDeviantart,
	SiGithub,
	SiItchdotio,
	SiNewgrounds,
	SiPinterest,
	SiTelegram
} from "react-icons/si";

/**
 * Social links
 *
 * @example
 * <Links />
*/
const Links: React.FC = () => {
	return (
		<div className="flex gap-4 flex-wrap justify-center items-center">
			<Link
				href="https://github.com/wmgcat"
				target="_blank"
			>
				<Button>
					<SiGithub />
					Github
				</Button>
			</Link>
			<Link
				href="https://bsky.app/profile/wmgcat.bsky.social"
				target="_blank"
			>
				<Button>
					<SiBluesky />
					Bluesky
				</Button>
			</Link>
			<Link
				href="https://t.me/wmgcat"
				target="_blank"
			>
				<Button>
					<SiTelegram />
					Telegram
				</Button>
			</Link>
			<Link
				href="https://www.deviantart.com/wmgcat"
				target="_blank"
			>
				<Button>
					<SiDeviantart />
					DevianArt
				</Button>
			</Link>
			<Link
				href="https://wmgcat.newgrounds.com"
				target="_blank"
			>
				<Button>
					<SiNewgrounds />
					Newgrounds
				</Button>
			</Link>
			<Link
				href="https://wmgcat.itch.io/"
				target="_blank"
			>
				<Button>
					<SiItchdotio />
					Itch.io
				</Button>
			</Link>
			<Link
				href="https://www.pinterest.com/wmgcat"
				target="_blank"
			>
				<Button>
					<SiPinterest />
					Pinterest
				</Button>
			</Link>
		</div>
	);
};

export default Links;
