/*CMD
  command: Purchase 10-Day key
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
  command: Purchase 10-Day key
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

Bot.setProperty(user.telegramid + "_selected_duration", 10, "integer");

Api.sendMessage({
  text: "🎮 please choose the game:",
  reply_markup: {
    keyboard: [
      [{ text: "8BP" }], [{ text: "Carom" }], [{ text: "Soccer" }]
    ],
    resize_keyboard: true
  }
});
Bot.runCommand("/games")
