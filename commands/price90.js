/*CMD
  command: price90
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
command: price90
*/

User.setProperty("price_duration", "90", "string");

Bot.sendMessage("Enter price:");

Bot.runCommand("savePriceValue");
