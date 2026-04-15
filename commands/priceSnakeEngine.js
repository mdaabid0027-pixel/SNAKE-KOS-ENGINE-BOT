/*CMD
  command: priceSnakeEngine
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*CMD
command: priceSnakeEngine
*/

User.setProperty("price_engine", "snake", "string");

Bot.sendKeyboard(
"8BP\nCarrom\nSoccer",
"Select Game:"
);
