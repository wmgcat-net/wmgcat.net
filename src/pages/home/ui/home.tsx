"use client";

import {
	Button,
	ContentBlock
} from "@/shared/ui";
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";
import Profile from "./profile";
import Projects from "./projects";
import GamesList from "@/features/games-list";
import ArtsList from "@/features/arts-list";
import PostsList from "@/features/posts-list";
import { useHeader } from "@/features/header-titles";
import { useEffect } from "react";

const Home: React.FC = () => {
	useEffect(() => {
		useHeader.getState().setTitle("");
	}, []);

	return (
		<>
			<Profile />
			<Projects />
			<ContentBlock
				title="Blog"
				extend={(
					<Link href="/blog">
						<Button variant="clear">
							<LuChevronRight />
						</Button>
					</Link>
				)}
			>
				<PostsList count={3} />
			</ContentBlock>
			<ContentBlock
				title="Games"
				extend={(
					<Link href="/games">
						<Button variant="clear">
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
						<Button variant="clear">
							<LuChevronRight />
						</Button>
					</Link>
				)}
			>
				<ArtsList count={10} />
			</ContentBlock>
		</>
	);
}

export default Home;
