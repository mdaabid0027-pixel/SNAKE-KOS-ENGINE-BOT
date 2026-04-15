/*CMD
  command: price3
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
command: price3
*/

User.setProperty("price_duration", "3", "string");

Bot.sendMessage("Enter price:");

Bot.runCommand("savePriceValue");
