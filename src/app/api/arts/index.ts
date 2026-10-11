import api from "..";
import ResponseResult from "@/types/response";
import Art from "@/types/art";

/**
 * Get arts from API 
 * 
 * @param offset - Offset 
 * @param limit - Limit 
 * @returns
*/
const apiGetArts = async (offset: number, limit: number): Promise<ResponseResult<Art>> => {
	const { data } = await api.get<ResponseResult<Art>>("/arts", {
		params: {
			offset, 
			limit
		}
	});

	return data;
}

export default apiGetArts;
