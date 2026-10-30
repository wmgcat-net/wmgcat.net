import { PageHistory } from "@/pages/very-secret-world";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "History",
  description: "A minecraft private server",
	category: "minecraft",
	alternates: {
		canonical: "/ms/history"
	},
	referrer: "strict-origin-when-cross-origin",
	keywords: [
		"minecraft",
		"wmgcat",
		"very secret world",
		"private",
		"server",
		"story",
		"history"
	],
	creator: "wmgcat",
	robots: {
		index: true,
		follow: true,
		nocache: false
	}
};

export default async function MSHistory() {
	return <PageHistory />;
}
