"use client";
import Link from "next/link";
import { ContentBlock, Project } from "@/shared/ui";

const Projects: React.FC = () => {
	return (
		<ContentBlock title="Projects">
			<div className="flex flex-col gap-4">
				<Link
					href="/articles/memorial"
					className="h-full"
				>
					<Project
						title="Memorial"
						description="All my old projects doesn&apos;t make to release"
						image="https://wmgcat.s3.eu-north-1.amazonaws.com/articles/memorial/banner.png"
					/>
				</Link>
				<Link
					href="https://ioy.app"
					target="_blank"
					className="h-full"
				>
					<Project
						title="Ioy.app"
						description="Webgames, arts, jams"
						image="/ioy_banner.png"
					/>
				</Link>
				<Link
					href="/very-secret-world"
					className="h-full"
				>
					<Project
						title="Very secret world"
						description="Minecraft server 26.3"
						image="/minecraft.png"
					/>
				</Link>
			</div>
		</ContentBlock>
	);
};

export default Projects;
