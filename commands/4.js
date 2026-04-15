/*CMD
  command: 4
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
  command: 4
*/

let qty = parseInt(message);
let uid = user.telegramid;

Bot.setProperty(uid + "_bulk_qty", qty, "integer");

Bot.runCommand("/bulkConfirm");
