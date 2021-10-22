import bot from "../bot";
import { Composer } from "telegraf";
import { onInlineQuery } from "./Inline_query";

const oInline = async () => {
    bot.use(Composer.privateChat(onInlineQuery))
};
