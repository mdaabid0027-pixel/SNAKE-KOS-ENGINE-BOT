/*CMD
  command: Kos Engine
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
command: Kos Engine
*/

Bot.setProperty(user.telegramid + "_selected_app", "kos", "string");

User.setProperty("purchase_step", "engine", "string");

Api.sendMessage({
  text: "Select Duration:",
  reply_markup: {
    keyboard: [
      ["1 Day", "7 Days"],
      ["15 Days", "30 Days"],
      ["⬅️ Back"]
    ],
    resize_keyboard: true
  }
});
