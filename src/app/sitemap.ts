import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://wmgcat.net",
			priority: 1
		},
		{
			url: "https://wmgcat.net/games",
			priority: 0.8
		},
		{
			url: "https://wmgcat.net/arts",
			priority: 0.8
		}
	];
}
