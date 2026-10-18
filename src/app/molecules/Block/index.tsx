"use client";

import MasonryTable from "@/app/atoms/MasonryTable";
import Spin from "@/app/atoms/Spin";
import ResponseResult from "@/types/response";
import { useQuery } from "@tanstack/react-query";

/**
 * Content block
 *
 * @example
 * <Block />
*/
const Block = <T extends { id: number }, >({
	title,
	extend,
	request,
	render
}: {
	title?: React.ReactNode;
	extend?: React.ReactNode;
	request: Promise<ResponseResult<T>>;
	render: (data: T) => React.ReactNode;
}) => {
	const query = useQuery<ResponseResult<T>>({
		queryKey: [ "block", "request", title ],
		enabled: !!request,
		queryFn: () => request
	});

	const next = Number(query?.data?.meta?.offset) + Number(query?.data?.meta?.limit);
	const total = Number(query?.data?.meta?.total);
	const items = query?.data?.items as T[];

	return (
		<div className="flex flex-col gap-4 w-full pointer-events-none select-none">
			{(!!title || !!extend) && (
				<div className="flex gap-4 justify-between items-center bg-back py-4 text-text text-xl sticky top-0 z-100">
					{title && (
						<h2 className="text-2xl font-semibold">
							{title}
						</h2>
					)}
					{(next < total) && (
						<span className="pointer-events-auto">
							{extend}
						</span>
					)}
				</div>
			)}
			<div className="w-full flex flex-col">
				<Spin loading={!query?.isSuccess}>
					<MasonryTable<T>
						items={items}
						render={render}
					/>
				</Spin>
			</div>
		</div>
	);
}

export default Block;
