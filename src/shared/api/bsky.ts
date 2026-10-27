import { BskyAgent, RichText } from "@atproto/api";
import sharp from "sharp";

export async function publishToBluesky(
  content: string,
  image?: File,
  alt = ""
) {
  const identifier = process.env.BLUESKY_IDENTIFIER;
  const password = process.env.BLUESKY_APP_PASSWORD;

  if (!identifier || !password) {
    throw new Error("Bluesky environment variables are missing");
  }

  const text = new RichText({ text: content });

  if (text.graphemeLength > 300) {
    throw new Error("Bluesky: текст должен быть не длиннее 300 символов");
  }

  const agent = new BskyAgent({
    service: "https://bsky.social"
  });

  await agent.login({ identifier, password });
  await text.detectFacets(agent);

  let embed;

  if (image) {
    const {
			data,
			info
		} = await sharp(Buffer.from(await image.arrayBuffer()))
      .rotate()
      .resize({
        width: 1600,
        height: 1600,
        fit: "inside",
        withoutEnlargement: true
      })
      .jpeg({ quality: 80 })
      .toBuffer({ resolveWithObject: true });

    const uploaded = await agent.uploadBlob(data, {
      encoding: "image/jpeg"
    });

    embed = {
      $type: "app.bsky.embed.images" as const,
      images: [
        {
          alt,
          image: uploaded.data.blob,
          aspectRatio: {
            width: info.width,
            height: info.height
          }
        }
      ]
    };
  }

  return agent.post({
    text: text.text,
    facets: text.facets,
    embed,
    createdAt: new Date().toISOString()
  });
}
