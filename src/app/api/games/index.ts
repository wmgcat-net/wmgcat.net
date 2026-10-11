import Game from "@/types/game";
import api, { serverApi } from "..";
import ResponseResult from "@/types/response";

/**
 * Get games from Server API 
 * 
 * @param offset - Offset 
 * @param limit - Limit 
 * @returns
*/
export const apiServerGetGames = async (offset: number, limit: number): Promise<ResponseResult<Game>> => {
	const { data } = await serverApi.get<ResponseResult<Game>>("/games", {
		params: {
			offset, 
			limit
		}
	});

	return data;
}

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
