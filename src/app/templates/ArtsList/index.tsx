"use client";

import api from "@/app/api";
import MasonryTable from "@/app/atoms/MasonryTable";
import Spin from "@/app/atoms/Spin";
import Art from "@/app/molecules/Art";
import ArtProps from "@/types/art";
import ResponseResult from "@/types/response";
import { useInfiniteQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect, useRef } from "react";

/**
 * Instances list
 *
 * @example
 * <ArtsListTemplate />
*/
const ArtsListTemplate: React.FC<{ initial: ResponseResult<ArtProps>; }> = ({ initial }) => {
	const endRef = useRef<HTMLDivElement>(null);
	const query = useInfiniteQuery<AxiosResponse<ResponseResult<ArtProps>>>({
		initialPageParam: initial.meta.offset || 0,
		queryFn: ({ pageParam }) => api.get("/arts", {
			params: {
				offset: pageParam,
				limit: initial?.meta?.limit
			}
		}),
		queryKey: [ "list", "arts" ],
		getNextPageParam: (prev) => {
			const next = Number(prev?.data?.meta?.offset) + Number(prev?.data?.meta?.limit);
			if (next < Number(prev?.data?.meta?.total))
				return next;

			return null;
		}
	});

	useEffect(() => {
		const target = endRef.current;

		if (!target)
			return;

		const observer = new IntersectionObserver(([ entry ]) => {
			if (entry.isIntersecting && !query?.isFetchingNextPage && query?.hasNextPage)
				query.fetchNextPage();
		});

		observer.observe(target);

		return () => observer.disconnect();
	}, [ query ]);

	const items: ArtProps[] = query.data?.pages?.map?.(page => page.data.items)?.flat?.() || [];

	return (
		<Spin loading={query?.isLoading}>
			<MasonryTable<ArtProps>
				items={items}
				render={(data: ArtProps) => <Art {...data} />}
			/>
			<Spin loading={query?.isFetchingNextPage} />
			<div ref={endRef} />
		</Spin>
	);
};

export default ArtsListTemplate;
