import { Metadata } from "next";
import Header from "./components/Header";
import "./style.css";

export const metadata: Metadata = {
  title: "Very secret world",
  description: "A minecraft private server",
	category: "minecraft",
	alternates: {
		canonical: "/ms"
	},
	openGraph: {
		type: "website",
		url: "https://wmgcat.net/ms",
		description: "A minecraft private server",
		siteName: "Very secret world",
		images: [
			{
				url: "https://wmgcat.net/banner.png",
				alt: "wmgcat.net - Games, arts, and other projects!",
				width: 1200,
				height: 630
			}
		]
	},
	referrer: "strict-origin-when-cross-origin",
	keywords: [
		"minecraft",
		"wmgcat",
		"very secret world",
		"private",
		"server"
	],
	creator: "wmgcat",
	robots: {
		index: true,
		follow: true,
		nocache: false
	}
};

export default function MSLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-screen flex flex-col items-center w-full bg">
				<Header />
				<main className="flex-1 flex w-2xl max-w-full max-xl:px-4 flex-col gap-4 py-8">
					{children}
				</main>
			</body>
    </html>
  );
}
