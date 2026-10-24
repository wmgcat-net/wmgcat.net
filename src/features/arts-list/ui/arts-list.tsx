"use client";

import {
	useEffect,
	useRef
} from "react";
import useInfiniteList from "../model/infinite-list";
import ArtCard, { Art } from "@/entities/Art";
import {
	MasonryTable,
	Spin
} from "@/shared/ui";

/**
 * Instances list
 *
 * @example
 * <ArtsListTemplate />
*/
const ArtsList: React.FC<{
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

	const items: Art[] = query.data?.pages?.map?.(page => page.items)?.flat?.() || [];

	return (
		<Spin loading={query?.isLoading}>
			<MasonryTable<Art>
				items={items}
				render={(data: Art) => <ArtCard {...data} />}
			/>
			<Spin loading={query?.isFetchingNextPage} />
			{fetchNext && <div ref={endRef} />}
		</Spin>
	);
};

export default ArtsList;
