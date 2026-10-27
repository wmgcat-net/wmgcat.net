import { useMutation } from "@tanstack/react-query";
import post from "../api/post";
import { AxiosError } from "axios";
import PostData from "./schema";

const useSubmit = () => useMutation({
	mutationKey: [ "posts", "submit" ],
	mutationFn: async (data: PostData) => {
		const response = await post(data);
		return response;
	},
	onError: (err: AxiosError) => {
		console.error(err);
	},
	onSuccess: (data) => {
		console.log(data);
	}
});

export default useSubmit;
