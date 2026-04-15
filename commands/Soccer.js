/*CMD
  command: Soccer
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
command: Soccer
*/

Bot.setProperty(user.telegramid + "_selected_game", "Soccer", "string");

Bot.runCommand("confirmPurchase");
