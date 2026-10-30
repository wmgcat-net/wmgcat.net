import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Layout from "@/app/layouts/layout";

const roboto = Roboto({
  variable: "--font-roboto",
	weight: [ "400", "700", "200" ],
  subsets: [ "latin" ]
});

export const metadata: Metadata = {
  title: {
		template: "%s | wmgcat",
		default: "wmgcat"
	},
  description: "Welcome to wmgcat.net! Discover games, arts, and other creative projects - all in one place.",
	icons: {
		icon: "/favicon.ico",
		shortcut: "/logo.png",
		apple: "/logo.png"
	},
	category: "portfolio",
	openGraph: {
		type: "website",
		url: "https://wmgcat.net",
		description: "Welcome to wmgcat.net! Discover games, arts, and other creative projects - all in one place.",
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
		canonical: "/"
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
		"Arts"
	],
	creator: "wmgcat",
	robots: {
		index: true,
		follow: true,
		nocache: false
	}
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col items-center">
				<Layout>
					{children}
				</Layout>
			</body>
    </html>
  );
}
