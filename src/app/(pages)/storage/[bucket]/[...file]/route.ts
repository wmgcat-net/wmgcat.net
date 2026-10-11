import minio from "@/libs/minio";
import { NextResponse } from "next/server";
import { Readable } from "node:stream";
import mime from "mime-types";

/**
 * Get image from S3 (Minio)
*/
export async function GET(
	_: Request,
	{ params }: { params: Promise<{ bucket: string; file: string[] }> }
) {
	const {
		bucket,
		file
	} = await params;

	try {
		const objectName = file.join("/");
		const stream = await minio.getObject(bucket, objectName);
		const contentType = mime.lookup(objectName) || "application/octet-stream";

		return new Response(Readable.toWeb(stream) as ReadableStream, {
			headers: {
				"Content-Type": contentType,
				"Cache-Control": "private, max-age=600",
				"X-Content-Type-Options": "nosniff"
			}
		});
	}
	catch {
		return NextResponse.json(
			{ error: "File not found" },
			{ status: 404 }
		);
	}
}
