import { posts } from "@/shared/api/model/db-schema";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const postSchema = createSelectSchema(posts, {
	content: (schema) =>
		schema.trim()
			.max(150)
});

type Post = z.infer<typeof postSchema>;
export default Post;
