/*CMD
  command: 📦 Check Stock
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
command: Check Stock
*/

Api.sendMessage({
  text: "📦 Select Engine to check stock:",
  reply_markup: {
    inline_keyboard: [

      [
        {
          text: "🐍 Snake Engine Stock",
          callback_data: "🐍 Snake Engine Stock"
        }
      ],

      [
        {
          text: "🚀 Kos Engine Stock",
          callback_data: "🚀 Kos Engine Stock"
        }
      ]

    ]
  }
});
