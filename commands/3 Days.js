/*CMD
  command: 3 Days
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
command: 3 Days
*/

Bot.setProperty(user.telegramid + "_selected_duration", "3", "string");

User.setProperty("purchase_step", "duration", "string");

Bot.runCommand("confirmPurchase");
