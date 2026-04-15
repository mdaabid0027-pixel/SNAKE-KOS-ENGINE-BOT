/*CMD
  command: /price_8bp
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
  command: /price_8bp
  folder: Price
CMD*/

Api.sendMessage({
  text: "<b>8BP Price Manager</b>\nSelect duration:",
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: [
      [
        { text: "3 Days", callback_data: "/price_8b_3" }
      ],
      [
        { text: "10 Days", callback_data: "/price_8b_10" }
      ],
      [
        { text: "30 Days", callback_data: "/price_8b_30" }
      ],
      [
        { text: "90 Days", callback_data: "/price_8b_90" }
      ]
    ]
  }
});
