/*CMD
  command: /uploadStock
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
  command: /uploadStock
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Stock
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let admin = Bot.getProperty("admin");

if (user.telegramid != admin) {
  return Api.sendMessage({
    text: "⚠️ Only admin can upload stock."
  });
}

let text = "📦 *Upload Stock*\n\nSelect the game:";
let buttons = [
  [
    { text: "8BP", callback_data: "/stock_8bp" }],[
    { text: "Carrom", callback_data: "/stock_carrom" }],[
    { text: "Soccer", callback_data: "/stock_soccer" }
  ]
];

Api.sendMessage({
  text: text,
  parse_mode: "Markdown",
  reply_markup: { inline_keyboard: buttons }
});


