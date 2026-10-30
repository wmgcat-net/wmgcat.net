import { useHeader } from "@/features/header-titles";
import { Header } from "@/shared/ui";
import {
	LuGamepad,
	LuImage,
	LuMessageCircle
} from "react-icons/lu";

const AppHeader: React.FC = () => {
	const title = useHeader((state) => state.title);

	return (
		<Header
			title={title}
			items={[
				{
					label: "Blog",
					href: "/blog",
					icon: <LuMessageCircle />
				},
				{
					label: "Games",
					href: "/games",
					icon: <LuGamepad />
				},
				{
					label: "Arts",
					href: "/arts",
					icon: <LuImage />
				}
			]}
		/>
	);
}

export default AppHeader;
