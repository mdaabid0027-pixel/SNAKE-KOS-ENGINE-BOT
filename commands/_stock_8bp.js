/*CMD
  command: /stock_8bp
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
  command: /stock_8bp
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Stock
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let text = "📦 Upload 8BP Stock\nSelect duration:";
let buttons = [
  [    { text: "3 Days", callback_data: "/upload_8b_3" }
  ],
  [
    { text: "10 Days", callback_data: "/upload_8b_10" }
  ],
  [
    { text: "30 Days", callback_data: "/upload_8b_30" }
  ],
  [
    { text: "90 Days", callback_data: "/upload_8b_90" }
  ]
];

Api.sendMessage({
  text: text,
  reply_markup: { inline_keyboard: buttons }
});
