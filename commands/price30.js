/*CMD
  command: price30
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
command: price30
*/

User.setProperty("price_duration", "30", "string");

Bot.sendMessage("Enter price:");

Bot.runCommand("savePriceValue");
