"use client";
import Footer from "@/app/molecules/Footer";
import Header from "@/app/molecules/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

/**
 * Main layout
 *
 * @example
 * <LayoutTemplate />
*/
const LayoutTemplate: React.FC<{ children?: React.ReactNode; }> = ({ children }) => {
	const [ query ] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={query}>
			<div className="flex flex-col max-w-full w-4xl items-center flex-1 gap-4">
				<Header />
				<main className="flex-1 flex flex-col gap-4 w-full max-lg:px-6">
					{children}
				</main>
				<Footer
					onUpClick={() => {
						window.scrollTo({
							top: 0,
							behavior: "smooth"
						});
					}}
				/>
			</div>
		</QueryClientProvider>
	);
};

export default LayoutTemplate;
