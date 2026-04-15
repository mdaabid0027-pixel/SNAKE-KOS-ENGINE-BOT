/*CMD
  command: priceSoccer
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
command: priceSoccer
*/

User.setProperty("price_game", "soccer", "string");

Bot.runCommand("selectDurationPrice");
