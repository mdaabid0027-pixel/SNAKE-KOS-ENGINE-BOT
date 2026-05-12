/*CMD
  command: 8BP
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
command: 8BP
*/

Bot.setProperty(user.telegramid + "_selected_game", "8bp", "string");
Bot.runCommand("selectDurationMenu");
