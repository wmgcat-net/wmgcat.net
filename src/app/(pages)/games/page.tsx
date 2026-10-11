import Spin from "@/app/atoms/Spin";
import GameListTemplate from "@/app/templates/GamesList";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Games",
  description: "Collection of games to explore and play!",
	category: "games",
	openGraph: {
		type: "website",
		url: "https://wmgcat.net/games",
		description: "Collection of games to explore and play!",
		siteName: "wmgcat.net",
		images: [
			{
				url: "https://wmgcat.net/banner.png",
				alt: "wmgcat.net - Games, arts, and other projects!",
				width: 1200,
				height: 630
			}
		]
	},
	alternates: {
		canonical: "/games"
	},
	referrer: "strict-origin-when-cross-origin",
	keywords: [
		"Gamedev",
		"JavaScript",
		"Webdev",
		"Website",
		"42eng",
		"wmgcat",
		"Portfolio",
		"web"
	],
	creator: "wmgcat",
	robots: {
		index: true,
		follow: true,
		nocache: false
	}
};

/**
 * Games list
*/
export default async function Games() {
	return (
		<Suspense fallback={<Spin loading />}>
			<GameListTemplate
				initial={{
					items: [],
					meta: {
						offset: 0,
						limit: 5
					}
				}}
			/>
		</Suspense>
	);
}
