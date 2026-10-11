import apiGetArts from "../api/arts";
import apiGetGames from "../api/games";
import HomeTemplate from "../templates/Home";

/**
 * Homepage
*/
export default async function Home() {
  return (
		<HomeTemplate
			arts={apiGetArts(0, 5)}
			games={apiGetGames(0, 5)}
		/>
	);
}
