import { Post } from "@/entities/Post";
import api from "@/shared/api";

/**
 * Get games from API 
 * 
 * @param offset - Offset 
 * @param limit - Limit 
 * @returns
*/
const post = async ({
	content,
	ru_content,
	image,
	token
}: {
	content: string;
	ru_content: string;
	image?: File;
	token: string;
}): Promise<Post> => {
	const { data } = await api.postForm<Post>("/posts", {
		content,
		ru_content,
		image
	}, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	});

	return data;
}

export default post;
