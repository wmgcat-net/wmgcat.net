"use client";

import {
	useEffect,
	useRef
} from "react";
import useInfiniteList from "../model/infinite-list";
import {
	MasonryTable,
	Spin
} from "@/shared/ui";
import { Post } from "@/entities/Post";
import PostCard from "@/entities/Post/ui/postCard";

/**
 * Instances list
 *
 * @example
 * <GamesListTemplate />
*/
const PostsList: React.FC<{
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

	const items: Post[] = query.data?.pages?.map?.(page => page.items)?.flat?.() || [];

	return (
		<Spin loading={query?.isLoading}>
			<div className="flex flex-col gap-8">
				{items?.map?.((item) => (
					<PostCard 
						{...item}
						key={item.id}
					/>
				))}
			</div>
			<Spin loading={query?.isFetchingNextPage} />
			{fetchNext && <div ref={endRef} />}
		</Spin>
	);
};

export default PostsList;
