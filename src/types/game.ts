import Link from "./link";

export default interface Game {
	/** ID */
	id: number;
	/** Game title */
	title: string;
	/** Date created */
	date_created: string;
	/** Description */
	description?: string;
	/** Links */
	links: Link[];
}
