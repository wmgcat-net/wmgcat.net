"use client";

import GamesList from "@/features/games-list";
import { useHeader } from "@/features/header-titles";
import { useEffect } from "react";

const PageGames: React.FC = () => {
	useEffect(() => {
		useHeader.getState().setTitle("Games");
	}, []);

	return (
		<GamesList
			count={20}
			fetchNext
		/>
	);
}

export default PageGames;
