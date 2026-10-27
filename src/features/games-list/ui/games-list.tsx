"use client";

import {
	useEffect,
	useRef
} from "react";
import useInfiniteList from "../model/infinite-list";
import type { Game } from "@/entities/Game";
import {
	MasonryTable,
	Spin
} from "@/shared/ui";
import GameCard from "@/entities/Game";

/**
 * Instances list
 *
 * @example
 * <GamesListTemplate />
*/
const GamesList: React.FC<{
	count: number;
	fetchNext?: boolean;
}> = ({
	count=5,
	fetchNext
}) => {
	const endRef = useRef<HTMLDivElement>(null);
	const query = useInfiniteList(count);

	useEffect(() => {
		if (!fetchNext)
			return;
		const target = endRef.current;

		if (!target)
			return;

		const observer = new IntersectionObserver(([ entry ]) => {
			if (entry.isIntersecting && !query?.isFetchingNextPage && query?.hasNextPage)
				query.fetchNextPage();
		});

		observer.observe(target);

		return () => observer.disconnect();
	}, [
		query,
		fetchNext
	]);

	const items: Game[] = query.data?.pages?.map?.(page => page.items)?.flat?.() || [];

	return (
		<Spin loading={query?.isLoading}>
			<MasonryTable<Game>
				items={items}
				render={(data: Game) => (
					<GameCard 
						{...data}
						key={data.id}
					/>
				)}
			/>
			<Spin loading={query?.isFetchingNextPage} />
			{fetchNext && <div ref={endRef} />}
		</Spin>
	);
};

export default GamesList;
