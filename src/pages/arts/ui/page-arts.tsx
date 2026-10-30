"use client";

import ArtsList from "@/features/arts-list";
import { useHeader } from "@/features/header-titles";
import { useEffect } from "react";

const PageArts: React.FC = () => {
	useEffect(() => {
		useHeader.getState().setTitle("Arts");
	}, []);

	return (
		<ArtsList
			count={20}
			fetchNext
		/>
	);
}

export default PageArts;
