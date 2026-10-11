interface ResponseResult<T> {
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

export default ResponseResult;
