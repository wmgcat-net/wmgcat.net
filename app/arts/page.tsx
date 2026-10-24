import ArtsList from "@/features/arts-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arts",
  description: "Collection of artworks and fan arts",
	category: "arts",
	openGraph: {
		type: "website",
		url: "https://wmgcat.net/arts",
		description: "Collection of artworks and fan arts",
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
		canonical: "/arts"
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
		"web",
		"fan",
		"fanarts",
		"arts"
	],
	creator: "wmgcat",
	robots: {
		index: true,
		follow: true,
		nocache: false
	}
};

/**
 * Arts list
*/
export default async function Arts() {
	return (
		<ArtsList
			count={20}
			fetchNext
		/>
	);
}
