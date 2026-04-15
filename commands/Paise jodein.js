/*CMD
  command: Paise jodein
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
  command: Paise jodein
*/

Api.sendMessage({
  text: "💰 टॉपअप पेज",
  reply_markup: {
    keyboard: [
      [{ text: "रद्द करें ❌" }]
    ],
    resize_keyboard: true
  }
});

// Run your real command
Bot.runCommand("AddBalanceh");
