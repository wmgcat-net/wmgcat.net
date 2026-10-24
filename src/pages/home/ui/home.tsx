"use client";

import {
	Button,
	ContentBlock
} from "@/shared/ui";
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";
import Profile from "./profile";
import Links from "./links";
import Projects from "./projects";
import GamesList from "@/features/games-list";
import ArtsList from "@/features/arts-list";

/**
 * Homepage
 *
 * @example
* <Home />
*/
const Home: React.FC = () => (
	<>
		<Profile />
		<Links />
		<Projects />
		<ContentBlock
			title="Games"
			extend={(
				<Link href="/games">
					<Button variant="second">
						More
						<LuChevronRight />
					</Button>
				</Link>
			)}
		>
			<GamesList count={10} />
		</ContentBlock>
		<ContentBlock
			title="Arts"
			extend={(
				<Link href="/arts">
					<Button variant="second">
						More
						<LuChevronRight />
					</Button>
				</Link>
			)}
		>
			<ArtsList count={10} />
		</ContentBlock>
	</>
);

export default Home;
