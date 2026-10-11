import apiGetGames from "@/app/api/games";
import GameListTemplate from "@/app/templates/GamesList";

/**
 * Games list
*/
export default async function Games() {
	const data = await apiGetGames(0, 5);

	return (
		<GameListTemplate
			initial={data}
		/>
	);
}
