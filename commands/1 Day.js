/*CMD
  command: 1 Day
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
command: 1 Days
*/

Bot.setProperty(user.telegramid + "_selected_duration", "1", "string");

User.setProperty("purchase_step", "game", "string");

Bot.runCommand("selectGameMenu");
