"use client";

import { useHeader } from "@/features/header-titles";
import PostsList from "@/features/posts-list";
import { useEffect } from "react";

const PagePosts: React.FC = () => {
	useEffect(() => {
		useHeader.getState().setTitle("Blog");
	}, []);

	return (
		<PostsList
			count={20}
			fetchNext
		/>
	);
}

export default PagePosts;
