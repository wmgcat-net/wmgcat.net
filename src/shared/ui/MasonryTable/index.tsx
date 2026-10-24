"use client";

import "./style.scss";
import {
	useEffect,
	useRef,
	useState
} from "react";
import { motion } from "motion/react";

const GAP = 16;
const MIN_COLUMN_WIDTH = 160;
const MAX_COLUMN_WIDTH = 200;

const MasonryTable = <T extends { id: number },>({
	items,
	render
}: {
	items: T[];
	render: (data: T) => React.ReactNode;
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [ columns, setColumns ] = useState<T[][]>([]);

	useEffect(() => {
		const container = containerRef.current;
		if (!container)
			return;

		const resize = () => {
			const width = container.clientWidth;

			const getColumnCount = (width: number) => {
				const maxColumns = Math.floor(
					(width + GAP) / (MIN_COLUMN_WIDTH + GAP)
				);

				const minColumns = Math.ceil(
					(width + GAP) / (MAX_COLUMN_WIDTH + GAP)
				);

				return Math.max(minColumns, maxColumns);
			};

			const count = getColumnCount(width);

			const result = Array.from(
				{ length: count },
				() => []
			);

			const heights = Array(count).fill(0);

			for (const item of (items || [])) {
				const index = heights.indexOf(Math.min(...heights));
				result[index].push(item as never);
				heights[index]++;
			}

			setColumns(result);
		};

		resize();

		const observer = new ResizeObserver(resize);
		observer.observe(container);

		return () => observer.disconnect();
	}, [ items ]);

	return (
		<div
			ref={containerRef}
			className="w-masonry"
		>
			{columns.map((column, columnIndex) => (
				<div
					key={columnIndex}
					className="w-masonry-column"
				>
					{column.map((item) => (
						<motion.div
							key={item?.id}
							initial={{
								opacity: 0,
								scale: 0.5
							}}
							animate={{
								opacity: 1,
								scale: 1
							}}
						>
							{render(item)}
						</motion.div>
					))}
				</div>
			))}
		</div>
	);
};

export default MasonryTable;
