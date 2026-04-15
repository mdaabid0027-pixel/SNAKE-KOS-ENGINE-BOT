/*CMD
  command: priceCarrom
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
command: priceCarrom
*/

User.setProperty("price_game", "carrom", "string");

Bot.runCommand("selectDurationPrice");
