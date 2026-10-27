import { S3Client } from "@aws-sdk/client-s3";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd(), process.env.NODE_ENV !== "production");

export const s3 = new S3Client({
  region: process.env.AWS_REGION
});

export const bucket = process.env.S3_BUCKET!;
