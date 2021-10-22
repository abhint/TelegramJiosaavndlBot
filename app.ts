import bot from "./bot/bot";
import { command } from "./bot/commands";
import { onInline } from "./bot/inline";
(async () => {
  await onInline();
  await command();
  await bot.launch();
})();
