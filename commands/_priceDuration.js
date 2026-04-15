/*CMD
  command: /priceDuration
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
command: /priceDuration
*/

User.setProperty("price_duration", params, "string");

Bot.sendMessage("Enter new price:");

Bot.runCommand("savePriceValue");
