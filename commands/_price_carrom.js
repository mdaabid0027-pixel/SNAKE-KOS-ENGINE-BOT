/*CMD
  command: /price_carrom
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
  command: /price_carrom
  folder: Price
CMD*/

Api.sendMessage({
  text: "<b>Carrom Price Manager</b>\nSelect duration:",
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: [
      [
        { text: "3 Days", callback_data: "/price_carro_3" }
      ],
      [
        { text: "10 Days", callback_data: "/price_carro_10" }
      ],
      [
        { text: "30 Days", callback_data: "/price_carro_30" }
      ],
      [
        { text: "90 Days", callback_data: "/price_carro_90" }
      ]
    ]
  }
});
