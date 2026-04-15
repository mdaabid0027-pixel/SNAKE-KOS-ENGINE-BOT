/*CMD
  command: Purchase 90-Day key
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
  command: Purchase 90-Day key
  folder: 
CMD*/

Bot.setProperty(user.telegramid + "_selected_duration", 90, "integer");

Api.sendMessage({
  text: "🎮 Please choose the game:",
  reply_markup: {
    keyboard: [
      [{ text: "8BP" }],
      [{ text: "Carom" }],
      [{ text: "Soccer" }]
    ],
    resize_keyboard: true
  }
});

Bot.runCommand("/games");
