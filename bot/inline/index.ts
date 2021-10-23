import bot from "../bot";
import { Composer } from "telegraf";
import { onInlineQuery } from "./Inline_query";

export const onInline = async () => {
  bot.use(onInlineQuery);
};
