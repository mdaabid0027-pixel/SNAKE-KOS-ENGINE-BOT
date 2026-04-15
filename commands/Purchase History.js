/*CMD
  command: Purchase History
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
command: Purchase History
*/

let uid = user.telegramid;

let history = Bot.getProperty(uid + "_purchase_history");

if(!history || history.length === 0){

Bot.sendMessage(
"📭 No purchases yet.\n\nAfter buying keys, your history will appear here."
);

return;

}

Bot.sendMessage(
"🧾 Your Purchase History:\n\n" +
history.join("\n\n")
);
