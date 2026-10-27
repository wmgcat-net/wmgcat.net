import Image from "next/image";

const Project: React.FC<{
	title: string;
	description?: string;
	image: string;
}> = ({
	title,
	description,
	image
}) => {
	return (
		<div className="flex items-center gap-4 hover:bg-white/10 rounded-full pointer-events-auto transition-colors">
			<div className="relative h-20 w-20 overflow-hidden rounded-full">
				<Image
					src={image}
					alt={title}
					fill
				/>
			</div>
			<div className="flex flex-col">
				<p className="text-2xl text-primary">{title}</p>
				{description && <p className="text-xl">{description}</p>}
			</div>
		</div>
	);
}

export default Project;
