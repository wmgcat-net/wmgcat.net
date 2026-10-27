import z from "zod";

const postSchema = z.object({
	content:
		z.string()
			.trim()
			.max(150, "Max 150 chars")
			.nonempty("Required!"),
	ru_content:
		z.string()
			.trim()
			.max(150, "Max 150 chars")
			.nonempty("Required!"),
	image:
		z.custom<FileList>()
			.optional()
			.transform((files) => files?.[0])
			.refine(
				(file) => !file || file?.size <= 5 * 1024 * 1024,
				"File size max 5MB"
			),
	token: z.string()
		.trim()
		.nonempty("Auth token required!")
});

type PostData = z.output<typeof postSchema>;

export default PostData;
export {
	postSchema
}
