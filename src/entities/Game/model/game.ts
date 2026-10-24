import { instances } from "@/shared/api";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const gameSchema = createSelectSchema(instances, {
	title: (schema) =>
		schema.trim()
			.max(256)
			.nonoptional(),
	description: (schema) =>
		schema.trim()
			.max(1000),
	type: z.enum([ "game" ])
});

type Game = z.infer<typeof gameSchema>;
export default Game;
