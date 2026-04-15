/*CMD
  command: Cancel ❌
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
  command: Cancel ❌
*/

Api.sendMessage({
  text: "Topup Cancel ❌",
  reply_markup: { remove_keyboard: true }
});

Bot.runCommand("/startt");
