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
	return (
		<article className="flex flex-col gap-4 text-xl text-text pointer-events-none select-none">
			<h1 className="text-4xl text-primary">Memorial</h1>
			<Image
				src="https://wmgcat.s3.eu-north-1.amazonaws.com/articles/memorial/banner.png"
				alt="Memorial banner"
				width={960}
				height={540}
			/>
			<p className="indent-8">Here are all my old projects that, for various reasons and factors, did not make it to release. The main goal of these projects was to finish at least one, as the first release is the hardest, and everything else will be much easier!</p>
			<h2 className="text-3xl text-second">Game Maker</h2>
			<div className="grid grid-cols-2 gap-4 w-full">
				<Image
					src="https://wmgcat.s3.eu-north-1.amazonaws.com/articles/memorial/1/1.gif"
					width={722}
					height={276}
					alt="Demonstration of Combat System"
					className="w-full"
				/>
				<Image
					src="https://wmgcat.s3.eu-north-1.amazonaws.com/articles/memorial/1/2.gif"
					width={320}
					height={174}
					alt="Moving Between Floors"
					className="w-full"
				/>
			</div>
			<p className="indent-8">The idea of this game was that the entire world is randomly generated. There was an upper world and dungeons. In this project, the developer stopped right at the generation stage</p>
			<Image
					src="https://wmgcat.s3.eu-north-1.amazonaws.com/articles/memorial/2/1.gif"
					width={633}
					height={233}
					alt="Moon"
					className="w-full"
			/>
			<p className="indent-8">In this game, the idea was to create a survival experience on the moon. You needed to build various generators and workbenches, extracting resources from lunar rocks</p>
			<div className="grid grid-cols-2 gap-4 w-full">
				<Image
					src="https://wmgcat.s3.eu-north-1.amazonaws.com/articles/memorial/3/1.gif"
					width={795}
					height={591}
					alt="Multiple items on screen"
					className="w-full"
				/>
				<Image
					src="https://wmgcat.s3.eu-north-1.amazonaws.com/articles/memorial/3/2.gif"
					width={798}
					height={525}
					alt="water mechanics"
					className="w-full"
				/>
			</div>
			<p className="indent-8">The mechanics in this game were inspired by The Binding of Isaac; you had to move through levels and collect your unique build to fight bosses</p>
			<div className="grid grid-cols-2 gap-4 w-full">
				<Image
					src="https://wmgcat.s3.eu-north-1.amazonaws.com/articles/memorial/4/1.gif"
					width={652}
					height={448}
					alt="Hat - Boomerang!"
					className="w-full"
				/>
				<Image
					src="https://wmgcat.s3.eu-north-1.amazonaws.com/articles/memorial/4/2.gif"
					width={616}
					height={283}
					alt="Moving between floors"
					className="w-full"
				/>
			</div>
			<p className="indent-8">In a game about Link on the Nintendo DSi, there was an interesting mechanic where you had to draw the trajectory of the boomerang with a stylus, so I decided to implement it in my game. Here, however, the entire trajectory is drawn by the player&apos;s movement</p>
			<div className="grid grid-cols-3 gap-4 w-full">
				<Image
					src="https://wmgcat.s3.eu-north-1.amazonaws.com/articles/memorial/5/1.gif"
					width={608}
					height={468}
					alt="Door opening mechanics"
					className="w-full"
				/>
				<Image
					src="https://wmgcat.s3.eu-north-1.amazonaws.com/articles/memorial/5/2.gif"
					width={644}
					height={384}
					alt="Item collection, as well as UI/UX"
					className="w-full"
				/>
				<Image
					src="https://wmgcat.s3.eu-north-1.amazonaws.com/articles/memorial/5/3.gif"
					width={780}
					height={584}
					alt="Version of the game on Love2D"
					className="w-full"
				/>
			</div>
			<p className="indent-8">I rewrote this game multiple times in various languages. Its development started in Game Maker, then I wanted to use it as my thesis project and rewrote it into a web version using JavaScript + PHP, and later I completely rewrote it in Love2D. In this game, you need to move boxes and open doors. Perhaps someday I will get around to implementing this game on my own engine!</p>
			<h2 className="text-3xl text-second">World of Fantasy Consoles</h2>
			<Image
				src="https://wmgcat.s3.eu-north-1.amazonaws.com/articles/memorial/6/1.gif"
				width={512}
				height={288}
				alt="RPG on TIC-80"
				className="w-full"
			/>
			<p className="indent-8">This was one of the first projects on this console. I experimented with animated tiles (Lava) and interfaces</p>
			<div className="grid grid-cols-2 gap-4 w-full">
				<Image
					src="https://wmgcat.s3.eu-north-1.amazonaws.com/articles/memorial/7/1.gif"
					width={512}
					height={288}
					alt="Can't figure it out without a book"
					className="w-full"
				/>
				<Image
					src="https://wmgcat.s3.eu-north-1.amazonaws.com/articles/memorial/7/2.png"
					width={500}
					height={600}
					alt="Recipe list for the Game"
					className="w-full"
				/>
			</div>
			<p className="indent-8">This is not quite a finished project; I created it during a game jam. The nuance of this game is that it’s difficult to play without hints on how to assemble any dish</p>
			<Image
				src="https://wmgcat.s3.eu-north-1.amazonaws.com/articles/memorial/8/1.gif"
				width={512}
				height={288}
				alt="In search of theasures"
				className="w-full"
			/>
			<p className="indent-8">This game could have seen the light of day if I had been making backups at that time</p>
			<Image
				src="https://wmgcat.s3.eu-north-1.amazonaws.com/articles/memorial/9/1.gif"
				width={384}
				height={384}
				alt="Roguelike on PICO-8"
				className="w-full"
			/>
			<p className="indent-8">The idea of this game was that a dungeon was randomly generated from pre-made levels, and there was supposed to be a random boss at the end of each dungeon</p>
			<Image
				src="https://wmgcat.s3.eu-north-1.amazonaws.com/articles/memorial/10/1.gif"
				width={384}
				height={384}
				alt="Arcade"
				className="w-full"
			/>
			<p className="indent-8">An arcade game where you had to shoot waves of aliens</p>
			<h2 className="text-3xl text-second">Finish!</h2>
			<Image
				src="https://wmgcat.s3.eu-north-1.amazonaws.com/articles/memorial/footer.gif"
				width={946}
				height={570}
				alt="Footer"
				className="w-full"
			/>
			<p className="text-center text-second">The princess is in another castle...</p>
		</article>
	)
}
