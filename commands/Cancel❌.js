/*CMD
  command: Cancel❌
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
command: Cancel❌
*/

User.setProperty("add_amount", null);

Bot.sendMessage("❌ Payment process cancelled.");

Bot.runCommand("/startt");
