import bot from "./bot/bot";
import { command } from "./bot/commands";
(async () => {
  await command();
  await bot.launch();
})();
