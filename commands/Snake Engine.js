/*CMD
  command: Snake Engine
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
command: Snake Engine
*/

Bot.setProperty(user.telegramid + "_selected_app", "snake", "string");

User.setProperty("purchase_step", "engine", "string");

Api.sendMessage({
  text: "Select Duration:",
  reply_markup: {
    keyboard: [
      ["3 Days", "10 Days"],
      ["30 Days", "90 Days"],
      ["⬅️ Back"]
    ],
    resize_keyboard: true
  }
});
