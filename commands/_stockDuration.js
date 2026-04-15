/*CMD
  command: /stockDuration
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
command: /stockDuration
*/

User.setProperty("stock_duration", params, "string");

Bot.sendMessage(
"Send keys (one key per line):\n\nExample:\nKEY123\nKEY456\nKEY789"
);

Bot.runCommand("saveStockKeys");
