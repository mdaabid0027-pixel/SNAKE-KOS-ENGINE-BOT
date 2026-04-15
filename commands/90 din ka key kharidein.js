/*CMD
  command: 90 din ka key kharidein
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
  command: 90 din ka key kharidein
CMD*/

Bot.setProperty(user.telegramid + "_selected_duration", 90, "integer");

Api.sendMessage({
  text: "🎮 Kripya game chunen:",
  reply_markup: {
    keyboard: [
      [{ text: "8BP" }], 
      [{ text: "Carom" }], 
      [{ text: "Soccer" }]
    ],
    resize_keyboard: true
  }
});

Bot.runCommand("/play");
