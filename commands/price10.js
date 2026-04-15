/*CMD
  command: price10
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
command: price10
*/

User.setProperty("price_duration", "10", "string");

Bot.sendMessage("Enter price:");

Bot.runCommand("savePriceValue");
