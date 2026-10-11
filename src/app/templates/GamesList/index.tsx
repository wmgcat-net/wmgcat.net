"use client";

import api from "@/app/api";
import MasonryTable from "@/app/atoms/MasonryTable";
import Spin from "@/app/atoms/Spin";
import Game from "@/app/molecules/Game";
import GameProps from "@/types/game";
import ResponseResult from "@/types/response";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";

/**
 * Instances list
 *
 * @example
 * <GamesListTemplate />
*/
const GamesListTemplate: React.FC<{ initial: ResponseResult<GameProps>; }> = ({ initial }) => {
	const endRef = useRef<HTMLDivElement>(null);
	const query = useInfiniteQuery({
		queryFn: ({ pageParam = initial.meta.offset }) => api.get("/games", {
			params: {
				offset: pageParam,
				limit: initial?.meta?.limit
			}
		}),
		queryKey: [ "list", "games" ],
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

	const items = query.data?.pages?.map(page => page.data.items).flat();

	return (
		<Spin loading={query?.isLoading}>
			<MasonryTable<GameProps>
				items={items}
				render={(data: GameProps) => <Game {...data} />}
			/>
			<Spin loading={query?.isFetchingNextPage} />
			<div ref={endRef} />
		</Spin>
	);
};

export default GamesListTemplate;
