/*CMD
  command: /addstock
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
  command: /addstock
  help: /addstock GAME DURATION KEY
  folder: Stock
*/

let admin = Bot.getProperty("admin")

if (user.telegramid != admin) {
  Bot.sendMessage("❌ Only admin can add stock")
  return
}

if (!message) {
  Bot.sendMessage(
  "⚠️ Usage:\n/addstock GAME DURATION KEY\n\nExample:\n/addstock carrom 3day ABCD-1234"
  )
  return
}

// remove command
let args = message.replace("/addstock", "").trim().split(" ")

if (args.length < 3) {
  Bot.sendMessage("❌ Invalid format\nUse: /addstock GAME DURATION KEY")
  return
}

let game = args[0].toLowerCase()
let duration = args[1].toLowerCase()
let key = args.slice(2).join(" ")

let stockKey = "stock_" + game + "_" + duration

let stock = Bot.getProperty(stockKey)
if (!stock) {
  stock = []
}

stock.push(key)

Bot.setProperty(stockKey, stock, "json")

// 📡 CHANNEL LOG
let logChannel = Bot.getProperty("log_channel")

if (logChannel) {
Api.sendMessage({
chat_id: logChannel,
parse_mode: "HTML",
text:
"📦 <b>STOCK ADDED</b>\n\n" +
"👤 Admin: @" + (user.username || "NoUsername") +
"\n🆔 ID: <code>" + user.telegramid + "</code>" +
"\n🎮 Game: " + game +
"\n⏳ Duration: " + duration +
"\n🔑 Key:\n<code>" + key + "</code>" +
"\n\n📦 Total Stock: " + stock.length
})
}

// admin confirmation
Bot.sendMessage(
"✅ Stock Added Successfully\n\n" +
"🎮 Game: " + game +
"\n⏳ Duration: " + duration +
"\n🔑 Key: " + key +
"\n\n📦 Total Stock: " + stock.length
)
