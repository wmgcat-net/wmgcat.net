import Link from "./link";

export default interface Art {
	/** ID */
	id: number;
	/** Art author */
	author: string;
	/** Date created */
	date_created: string;
	/** Links */
	links?: Link[];
}
