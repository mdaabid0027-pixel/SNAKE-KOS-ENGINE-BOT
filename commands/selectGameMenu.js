/*CMD
  command: selectGameMenu
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
command: selectGameMenu
*/

User.setProperty("purchase_step", "game", "string");

Api.sendMessage({
  text: "Select Game:",
  reply_markup: {
    keyboard: [
      ["8BP", "Carrom"],
      ["Soccer"],
      ["⬅️ Back"]
    ],
    resize_keyboard: true
  }
});
