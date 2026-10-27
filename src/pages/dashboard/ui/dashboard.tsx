"use client";

import { Button } from "@/shared/ui";
import { FormProvider, useForm } from "react-hook-form";
import Textarea from "./Textarea";
import useSubmit from "../model/submit";
import z from "zod";
import { postSchema } from "../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";

const Dashboard: React.FC = () => {
	const methods = useForm<
		z.input<typeof postSchema>,
		unknown,
		z.output<typeof postSchema>
	>({
		resolver: zodResolver(postSchema),
		defaultValues: {
			content: "",
			ru_content: ""
		}
	});
	const submit = useSubmit();
	const { errors } = methods.formState;

	return (
		<FormProvider {...methods}>
			<form 
				className="flex flex-col gap-4"
				onSubmit={methods.handleSubmit((data) => submit.mutate(data))}
			>
				<h1 className="text-2xl text-primary font-medium">New post</h1>
				<Textarea
					{...methods.register("content")}
					placeholder="Enter your post"
				/>
				{errors?.content && <p className="text-danger text-xl">{errors?.content?.message}</p>}
				<Textarea
					{...methods.register("ru_content")}
					placeholder="Enter you RU post"
				/>
				{errors?.ru_content && <p className="text-danger text-xl">{errors?.ru_content?.message}</p>}
				<input
					type="file"
					{...methods.register("image")}
					className="border border-br rounded-2xl p-2"
				/>
				{errors?.image && <p className="text-danger text-xl">{errors?.image?.message}</p>}
				<input
					{...methods.register("token")}
					className="border border-br rounded-2xl p-2"
					placeholder="Auth token"
				/>
				<Button
					htmlType="submit"
					variant="second"
					loading={submit?.isPending}
				>
					Send
				</Button>
			</form>
		</FormProvider>
	);
};

export default Dashboard;
