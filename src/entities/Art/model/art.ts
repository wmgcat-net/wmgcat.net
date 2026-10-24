import { instances } from "@/shared/api";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const artSchema = createSelectSchema(instances, {
	title: (schema) =>
		schema.trim()
			.max(256)
			.nonoptional(),
	description: (schema) =>
		schema.trim()
			.max(1000),
	type: z.enum([ "art" ])
});

type Art = z.infer<typeof artSchema>;
export default Art;
