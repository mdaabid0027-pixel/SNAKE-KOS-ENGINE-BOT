/*CMD
  command: रद्द करें ❌
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
  command: रद्द करें ❌
*/

Api.sendMessage({
  text: "❌ टॉपअप रद्द कर दिया गया",
  reply_markup: { remove_keyboard: true }
});

Bot.runCommand("/st");
