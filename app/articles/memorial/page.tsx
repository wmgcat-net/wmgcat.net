import { PageMemorial } from "@/pages/articles";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Memorial",
  description: "Here are all my old projects that, for various reasons and factors, did not make it to release",
	category: "memorial",
	alternates: {
		canonical: "/articles/memorial"
	},
	openGraph: {
		type: "website",
		url: "https://wmgcat.net/articles/memorial",
		description: "Here are all my old projects that, for various reasons and factors, did not make it to release",
		siteName: "Memorial",
		images: [
			{
				url: "https://wmgcat.net/articles/memorial/banner.png",
				alt: "wmgcat.net - Games, arts, and other projects!",
				width: 1200,
				height: 630
			}
		]
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
		"memorial"
	],
	creator: "wmgcat",
	robots: {
		index: true,
		follow: true,
		nocache: false
	}
};

export default async function ArticleMemorial() {
	return <PageMemorial />;
}
