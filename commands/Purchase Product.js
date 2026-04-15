/*CMD
  command: Purchase Product
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
command: Purchase Product
*/

User.setProperty("purchase_step", "product", "string");

Bot.sendKeyboard(
"Snake Engine\nKos Engine\n⬅️ Back",
"Select Product:"
);
