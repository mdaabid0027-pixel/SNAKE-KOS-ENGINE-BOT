/*CMD
  command: priceKosEngine
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
command: priceKosEngine
*/

User.setProperty("price_engine", "kos", "string");

Bot.sendKeyboard(
"8BP\nCarrom\nSoccer",
"Select Game:"
);
