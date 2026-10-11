import apiGetArts from "@/app/api/arts";
import ArtsListTemplate from "@/app/templates/ArtsList";

/**
 * Arts list
*/
export default async function Arts() {
	const data = await apiGetArts(0, 5);

	return (
		<ArtsListTemplate
			initial={data}
		/>
	);
}
