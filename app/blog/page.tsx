import { PagePosts } from "@/pages/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "My personal blog about software development, games, and creativity",
	category: "blog",
	openGraph: {
		type: "website",
		url: "https://wmgcat.net/blog",
		description: "My personal blog about software development, games, and creativity",
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
		canonical: "/blog"
	},
	referrer: "strict-origin-when-cross-origin",
	keywords: [
		"wmgcat",
		"blog",
		"gamedev",
		"javascript",
		"webdev",
		"arts",
		"web"
	],
	creator: "wmgcat",
	robots: {
		index: true,
		follow: false,
		nocache: false
	}
};

export default async function Blog() {
	return <PagePosts />;
}
