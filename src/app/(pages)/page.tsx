import { apiServerGetArts } from "../api/arts";
import { apiServerGetGames } from "../api/games";
import HomeTemplate from "../templates/Home";

/**
 * Homepage
*/
export default async function Home() {
  return (
		<HomeTemplate
			arts={apiServerGetArts(0, 5)}
			games={apiServerGetGames(0, 5)}
		/>
	);
}
