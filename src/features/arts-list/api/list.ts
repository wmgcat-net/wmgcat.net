import type { Art } from "@/entities/Art";
import type { Response } from "@/shared/api";
import api from "@/shared/api";

/**
 * Get arts from API
 * 
 * @param offset - Offset 
 * @param limit - Limit 
 * @returns
*/
const list = async (
	offset: number,
	limit: number
): Promise<Response<Art>> => {
	const { data } = await api.get<Response<Art>>("/arts", {
		params: {
			offset, 
			limit
		}
	});

	return data;
}

export default list;
