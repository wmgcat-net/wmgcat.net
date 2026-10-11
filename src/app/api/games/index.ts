import Game from "@/types/game";
import api from "..";
import ResponseResult from "@/types/response";

/**
 * Get games from API 
 * 
 * @param offset - Offset 
 * @param limit - Limit 
 * @returns
*/
const apiGetGames = async (offset: number, limit: number): Promise<ResponseResult<Game>> => {
	const { data } = await api.get<ResponseResult<Game>>("/games", {
		params: {
			offset, 
			limit
		}
	});

	return data;
}

export default apiGetGames;
