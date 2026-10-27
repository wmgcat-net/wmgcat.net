export async function publishToTelegram(content: string, image?: File) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const channelId = process.env.TELEGRAM_CHANNEL_ID;

  if (!token || !channelId) {
    throw new Error("Telegram environment variables are missing");
  }

  async function send(method: string, body: FormData) {
    body.set("chat_id", channelId!);

    const response = await fetch(
      `https://api.telegram.org/bot${token}/${method}`,
      {
        method: "POST",
        body,
        signal: AbortSignal.timeout(30_000)
      }
    );

    const data = await response.json();

    if (!response.ok || !data.ok) {
      throw new Error(data.description || "Telegram API error");
    }

    return data.result;
  }

  if (image) {
    const animation = image.type === "image/gif";
    const body = new FormData();

    body.set(animation ? "animation" : "photo", image, image.name);

    if (content.length <= 1024) {
      body.set("caption", content);
			body.set("show_caption_above_media", "true");
    }

    await send(animation ? "sendAnimation" : "sendPhoto", body);

    if (content.length <= 1024) return;
  }

  for (const chunk of content.match(/[\s\S]{1,4000}/gu) ?? []) {
    const body = new FormData();
    body.set("text", chunk);

    await send("sendMessage", body);
  }
}
