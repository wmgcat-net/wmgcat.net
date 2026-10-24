"use client";

import "./style.scss";
import { GoIssueDraft } from "react-icons/go";
import {
	AnimatePresence,
	motion
} from "motion/react";

const Button: React.FC<{
	children: React.ReactNode;
	disabled?: boolean;
	htmlType?: HTMLButtonElement["type"];
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	variant?: "default" | "primary" | "second" | "danger" | "text" | "clear";
	className?: string;
	loading?: boolean;
}> = ({
	children,
	disabled,
	htmlType="button",
	onClick,
	variant="default",
	className,
	loading
}) => (
	<AnimatePresence mode="wait">
		<motion.button
			animate={{
				paddingRight: loading ? 48 : 18
			}}
			className={`relative w-button ${variant} ${(className && className) || ""}`}
			disabled={disabled}
			type={htmlType}
			onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
				if (disabled || loading) {
					e.preventDefault();
					return;
				}

				if (onClick)
					onClick(e);
			}}
		>
			{children}
			<AnimatePresence mode="wait">
				{loading && (
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="absolute right-4 animate-spin overflow-hidden"
					>
						<GoIssueDraft />
					</motion.span>
				)}
			</AnimatePresence>
		</motion.button>
	</AnimatePresence>
);

export default Button;
