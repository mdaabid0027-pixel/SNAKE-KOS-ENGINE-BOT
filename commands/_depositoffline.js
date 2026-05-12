/*CMD
  command: /depositoffline
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
  command: Add Balance
*/

Api.sendMessage({
  text: "💰 Topup Page",
  reply_markup: {
    keyboard: [
      [{ text: "Cancel ❌" }]
    ],
    resize_keyboard: true
  }
});

// Run your real command
Bot.runCommand("AddBalance");
