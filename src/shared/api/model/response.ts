interface Response<T> {
	/** Content */
	items: T[];
	/** Metadata */
	meta: {
		/** Offset */
		offset: number;
		/** Limit */
		limit: number;
		/** Total */
		total?: number;
	}
}

export default Response;
