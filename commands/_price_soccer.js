/*CMD
  command: /price_soccer
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
  command: /price_soccer
  folder: Price
CMD*/

Api.sendMessage({
  text: "<b>Soccer Price Manager</b>\nSelect duration:",
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: [
      [
        { text: "3 Days", callback_data: "/price_socce_3" }
      ],
      [
        { text: "10 Days", callback_data: "/price_socce_10" }
      ],
      [
        { text: "30 Days", callback_data: "/price_socce_30" }
      ],
      [
        { text: "90 Days", callback_data: "/price_socce_90" }
      ]
    ]
  }
});
