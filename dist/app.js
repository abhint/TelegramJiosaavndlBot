"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const jiodl_1 = __importDefault(require("./utils/jiodl"));
const message_1 = __importDefault(require("./utils/message"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const token = process.env.BOT_TOKEN;
if (token === undefined) {
    throw new Error('BOT_TOKEN must be provided!');
}
const bot = new telegraf_1.Telegraf(token);
bot.use(telegraf_1.session());
bot.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log('Response time: %sms', ms);
});
// start commend Message 
bot.start((msg) => {
    msg.telegram.sendMessage(msg.chat.id, message_1.default.start, { parse_mode: "HTML" });
});
// InlineQuery 
bot.on('inline_query', async (msg) => {
    const inline_query = msg.update.inline_query.query;
    let result = await jiodl_1.default(inline_query);
    await msg.telegram.answerInlineQuery(msg.inlineQuery.id, result);
});
bot.launch();
