/*CMD
  command: 🛒 Purchase Product
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
command: Purchase Product
*/

User.setProperty("purchase_step", "product", "string");

Api.sendMessage({
  text: "<b>🛒 Select a Product</b>\n\n<i>Please choose one of the options below.</i>",
  parse_mode: "HTML",
  reply_markup: {
    keyboard: [
      [{ text: "Snake Engine", style: "success" }],
      [{ text: "Kos Engine", style: "primary" }],
      [{ text: "AimAI", style: "success" }],
      [{ text: "⬅️ Back", style: "danger" }]
    ],
    resize_keyboard: true
  }
});
