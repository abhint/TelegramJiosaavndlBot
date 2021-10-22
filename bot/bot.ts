import { Telegraf } from "telegraf";
import * as dotenv from "dotenv";
dotenv.config();

if (process.env.BOT_TOKEN === undefined) {
  console.log("Token");
  process.exit(1);
}

const bot = new Telegraf(String(process.env.BOT_TOKEN));

export default bot;
