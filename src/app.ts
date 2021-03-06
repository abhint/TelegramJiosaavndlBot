import { Telegraf } from "telegraf";
import response from "./utils/jiodl";
import message from "./utils/message";
import dotenv from "dotenv";

dotenv.config();

const token = process.env.BOT_TOKEN;
if (token === undefined) {
  throw new Error("BOT_TOKEN must be provided!");
}
const bot = new Telegraf(token);

// start commend Message
bot.start((msg) => {
  msg.telegram.sendMessage(
    msg.chat.id,
    `Hi ${msg.from.first_name.replace(/[<>/]/g, "")}!\n${message.start}`,
    {
      reply_to_message_id: msg.message.message_id,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: "🧑‍💻 Developer", url: "https://t.me/thankappan369" }],
          [
            {
              text: "🗂 SOURCE",
              url: "https://github.com/AbhijithNT/TelegramJiosaavndlBot",
            },
          ],
        ],
      },
    }
  );
});

// InlineQuery
bot.on("inline_query", async (msg) => {
  const inline_query: string = msg.update.inline_query.query;
  let result: any = await response(inline_query);
  await msg.answerInlineQuery(result);
});

bot.launch({
  webhook: {
    domain: process.env.URL,
    port: Number(process.env.PORT),
  },
});

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
