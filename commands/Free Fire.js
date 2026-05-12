/*CMD
  command: Free Fire
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
command: Free Fire
*/

Bot.setProperty(user.telegramid + "_selected_game", "freefire", "string");
Bot.runCommand("selectDurationMenu");
