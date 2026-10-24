"use client";

import "../style.css";
import {
	QueryClient,
	QueryClientProvider
} from "@tanstack/react-query";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

/**
 * Main layout
 *
 * @example
 * <LayoutDefault />
*/
const LayoutDefault: React.FC<{ children?: React.ReactNode; }> = ({ children }) => {
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

export default LayoutDefault;
