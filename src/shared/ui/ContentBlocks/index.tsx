"use client";

/**
 * Content block
 *
 * @example
 * <ContentBlock />
*/
const ContentBlock: React.FC<{
	title?: React.ReactNode;
	extend?: React.ReactNode;
	children?: React.ReactNode;
}> = ({
	title,
	extend,
	children
}) => (
	<div className="flex flex-col gap-4 w-full pointer-events-none select-none">
		{(!!title || !!extend) && (
			<div className="flex gap-4 justify-between items-center bg-back py-4 text-text text-xl sticky top-0 z-100">
				{title && (
					<h2 className="text-2xl font-semibold">
						{title}
					</h2>
				)}
				{!!extend && (
					<span className="pointer-events-auto">
						{extend}
					</span>
				)}
			</div>
		)}
		<div className="w-full flex flex-col">
			{children}
		</div>
	</div>
);

export default ContentBlock;
