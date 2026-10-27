import type { Post } from "@/entities/Post";
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
): Promise<Response<Post>> => {
	const { data } = await api.get<Response<Post>>("/posts", {
		params: {
			offset, 
			limit
		}
	});

	return data;
}

export default list;
