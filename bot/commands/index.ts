import { Composer } from "telegraf";
import bot from "../bot";
import { onStart } from "./command_handlers";

export const command = async () => {
  bot.use(Composer.privateChat(onStart));
};
