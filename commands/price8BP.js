/*CMD
  command: price8BP
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
command: price8BP
*/

User.setProperty("price_game", "8bp", "string");

Bot.runCommand("selectDurationPrice");
