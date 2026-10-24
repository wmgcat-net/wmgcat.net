"use client";

import {
	AnimatePresence,
	motion
} from "motion/react";
import Image from "next/image";

const Spin: React.FC<{
	children?: React.ReactNode;
	loading?: boolean;
}> = ({
	children,
	loading
}) => (
	<>
		<AnimatePresence mode="wait">
			{loading && (
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					exit={{ scale: 0 }}
					className="p-4 z-1 w-full flex justify-center items-center"
				>
					<Image
						src="/logo.png"
						width={64}
						height={64}
						alt="Loading icon"
						className="animate-spin"
					/>
				</motion.div>
			)}
		</AnimatePresence>
		{!loading && children}
	</>
);

export default Spin;
