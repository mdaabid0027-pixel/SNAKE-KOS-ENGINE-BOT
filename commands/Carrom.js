/*CMD
  command: Carrom
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
command: Carrom
*/

Bot.setProperty(user.telegramid + "_selected_game", "carrom", "string");
Bot.runCommand("selectDurationMenu");
