/*CMD
  command: price15
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
command: price15
*/

User.setProperty("price_duration", "15", "string");

Bot.sendMessage("Enter price:");

Bot.runCommand("savePriceValue");
