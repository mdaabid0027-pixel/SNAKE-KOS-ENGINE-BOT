/*CMD
  command: /play
  help: 
  need_reply: true
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
  command: /play
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let game = message.trim();

// --------------------------------------------
// ✅ Allowed Games Only
// --------------------------------------------
let allowedGames = ["8bp", "carom", "soccer"];

// Convert input to lowercase for checking
let gameLower = game.toLowerCase();

// If game is not allowed → Reject user
if (!allowedGames.includes(gameLower)) {
  return Api.sendMessage({
    text: "❌ Invalid game selected.\n\nAllowed Games:\n• 8BP\n• Carom\n• Soccer\n\n⚠ Please select a valid game.",
    parse_mode: "HTML"
  });
}

// Save valid game
Bot.setProperty(user.telegramid + "_selected_game", game, "string");

// Fetch selected duration
let duration = Bot.getProperty(user.telegramid + "_selected_duration");
duration = duration.toString().trim();

// Prepare pricing keys
let gameKey = gameLower;    // 8bp / carom / soccer
let normalPriceKey = `${gameKey}_${duration}day_price`;
let grid = Bot.getProperty(`${user.telegramid}_grid`);
let keyName = `${gameKey}_${duration}`;

// Determine price
let finalPrice;

// 🔥 If user is reseller & has custom grid pricing
if (grid && grid[keyName]) {
  finalPrice = parseFloat(grid[keyName]);
} else {
  finalPrice = parseFloat(Bot.getProperty(normalPriceKey)) || 0;
}

// Confirmation message
let msg =
`Kya aap <b>${game}</b> ka <b>${duration} din</b> wala key 
₹<b>${finalPrice}.00</b> INR me lena chahte hain?`;

// Ask user to confirm
Api.sendMessage({
  text: msg,
  parse_mode: "HTML",
  reply_markup: {
    keyboard: [
      // All buttons in one inner array = one row
      [{ text: "✔ Haan" }, { text: "❌ Nahi" }]
    ],
    resize_keyboard: true
  }
});


