import type { Response } from "@/shared/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import list from "../api/list";
import type { Art } from "@/entities/Art";

const useInfiniteList = (count: number) => useInfiniteQuery<Response<Art>>({
	queryKey: [ "arts", String(count) ],
	initialPageParam: 0,
	queryFn: ({ pageParam }) =>
		list(pageParam as number, count),
	getNextPageParam: (prev) => {
		const next = Number(prev?.meta?.offset || 0) + Number(prev?.meta?.limit || count);
		if (next < Number(prev?.meta?.total || 0))
			return next;

		return null;
	}
});

export default useInfiniteList;
