import { Telegraf,session } from 'telegraf';
import response from './utils/jiodl';
import message from './utils/message';
import dotenv from 'dotenv';


dotenv.config()

const token = process.env.BOT_TOKEN
if (token === undefined) {
    throw new Error('BOT_TOKEN must be provided!')
}
const bot = new Telegraf(token);
bot.use(session());

bot.use(async (ctx, next) => {
    const start: number = Date.now()
    await next()
    const ms = Date.now() - start
    console.log('Response time: %sms', ms)
  })
  

// start commend Message 
bot.start((msg) => {
    msg.telegram.sendMessage(
        msg.chat.id,
        message.start,
        { parse_mode: "HTML" }
    )
})


// InlineQuery 
bot.on('inline_query', async (msg) => {
    const inline_query: string = msg.update.inline_query.query;
    let result: any = await response(inline_query);
    await msg.telegram.answerInlineQuery(msg.inlineQuery.id, result);
})


bot.launch();