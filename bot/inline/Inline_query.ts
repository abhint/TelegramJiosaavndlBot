import { Composer } from "telegraf";
import { get_result } from "../utils/connection_handlers";

const onInlineQuery = Composer.on("inline_query", async (msg) => {
  const query: string = msg.update.inline_query.query;
  let result: any = await get_result(query);
  await msg.answerInlineQuery(result);
});
