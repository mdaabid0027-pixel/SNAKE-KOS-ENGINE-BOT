/*CMD
  command: /confirmPurchase
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: old wala only snake
  keyboard: 
  aliases: 
  group: 
CMD*/

let admin = Bot.getProperty("admin");

// 1. Load user selections
let game = Bot.getProperty(user.telegramid + "_selected_game");
let duration = Bot.getProperty(user.telegramid + "_selected_duration");

// Validation: Check if game and duration exist
if (!game || !duration) {
  Api.sendMessage({
    text: "⚠️ <b>Purchase error:</b> Game or duration not selected. Please start over.",
    parse_mode: "HTML"
  });
  return Bot.runCommand("/startt");
}

let gameKey = game.toLowerCase().trim(); 
let durationStr = duration.toString().trim();

// --------------------------------------------
// 🔥 PRICE CALCULATION
// --------------------------------------------
let grid = Bot.getProperty(user.telegramid + "_grid");
let priceKey = gameKey + "_" + durationStr;
let finalPrice;

// Check if reseller has a custom price, otherwise use default
if (grid && grid[priceKey]) {
  finalPrice = parseFloat(grid[priceKey]);
} else {
  finalPrice = parseFloat(Bot.getProperty(gameKey + "_" + durationStr + "day_price")) || 0;
}

// --------------------------------------------
// 💰 BALANCE CHECK
// --------------------------------------------
let balKey = user.telegramid + "_balance";
let balance = Bot.getProperty(balKey) || 0;

if (balance < finalPrice) {
  Api.sendMessage({
    text: "❌ <b>Your Balance Is Lower Than Purchase Price</b>\n\n💰 Your balance: ₹" + balance + "\n📢 Required: ₹" + finalPrice + "\n\nDeposit Now! Through 'AddBalance' Menu.",
    parse_mode: "HTML"
  });
  return Bot.runCommand("/startt"); // Stop here and go back
}

// --------------------------------------------
// 🔥 STOCK CHECK 
// --------------------------------------------
let stockKey = gameKey + "_" + durationStr + "day_stock";
let stock = Bot.getProperty(stockKey);

if (!stock || stock.length === 0) {
  Api.sendMessage({
    text: "❌ <b>Out of Stock!</b>\nKeys for this duration are currently unavailable. No money has been deducted.",
    parse_mode: "HTML"
  });
  return Bot.runCommand("/startt"); // Stop here and go back
}

// --------------------------------------------
// 💸 TRANSACTION (Deduct Balance)
// --------------------------------------------
let newBalance = balance - finalPrice;
Bot.setProperty(balKey, newBalance, "float");

// --------------------------------------------
// 🗝 KEY DELIVERY (Remove from Stock)
// --------------------------------------------
let deliveredKey = stock.shift();
Bot.setProperty(stockKey, stock, "json");

// --------------------------------------------
// 🧾 SEND INVOICE TO USER
// --------------------------------------------
let invoice = "<b>-: ✅ " + game + " " + durationStr + " Day Key :-</b>\n\n" +
              "👤 @" + (user.username || "User") + " (<code>" + user.telegramid + "</code>)\n" +
              "🔑 <b>Key:</b> <code>" + deliveredKey + "</code>\n" +
              "💰 <b>Remaining Balance:</b> ₹" + newBalance.toFixed(2);

Api.sendMessage({
  text: invoice,
  parse_mode: "HTML",
  disable_web_page_preview: true
});

// --------------------------------------------
// 📢 ADMIN NOTIFICATION
// --------------------------------------------
Api.sendMessage({
  chat_id: admin,
  text: "🔔 <b>KEY SOLD</b>\n" +
        "👤 @" + (user.username || "N/A") + " (" + user.telegramid + ")\n" +
        "🎮 <b>Game:</b> " + game + "\n" +
        "⏳ <b>Duration:</b> " + durationStr + " days\n" +
        "🔑 <b>Key:</b> <code>" + deliveredKey + "</code>",
  parse_mode: "HTML"
});

// --------------------------------------------
// 📡 LOG CHANNEL NOTIFICATION
// --------------------------------------------

let logChannel = Bot.getProperty("log_channel");

if(logChannel){

Api.sendMessage({
chat_id: logChannel,
parse_mode: "HTML",
text:
"📦 <b>NEW KEY SOLD</b>\n\n" +

"👤 <b>User:</b> @" + (user.username || "NoUsername") + "\n" +
"🆔 <code>" + user.telegramid + "</code>\n\n" +

"🎮 <b>Game:</b> " + game + "\n" +
"⏳ <b>Duration:</b> " + durationStr + " Days\n\n" +

"💰 <b>Price:</b> ₹" + finalPrice + "\n" +
"💳 <b>Balance Left:</b> ₹" + newBalance.toFixed(2) + "\n\n" +

"🔑 <b>Delivered Key:</b>\n<code>" + deliveredKey + "</code>\n\n" +

"📦 <b>Remaining Stock:</b> " + stock.length
});

}

// --------------------------------------------
// 🚀 FINAL REDIRECT
// --------------------------------------------
Bot.runCommand("/startt");
