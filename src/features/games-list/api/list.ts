import type { Game } from "@/entities/Game";
import type { Response } from "@/shared/api";
import api from "@/shared/api";

/**
 * Get games from API 
 * 
 * @param offset - Offset 
 * @param limit - Limit 
 * @returns
*/
const list = async (
	offset: number,
	limit: number
): Promise<Response<Game>> => {
	const { data } = await api.get<Response<Game>>("/games", {
		params: {
			offset, 
			limit
		}
	});

	return data;
}

export default list;
