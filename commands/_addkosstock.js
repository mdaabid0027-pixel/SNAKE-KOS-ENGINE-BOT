/*CMD
  command: /addkosstock
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

/*CMD
command: /addkosstock
*/

let admin = Bot.getProperty("admin");

if (user.telegramid != admin) {
  return Bot.sendMessage("❌ Admin only command");
}

/*
Format:

/addkosstock game duration key

Example:

/addkosstock 8bp 1 ABCD123
*/

let args = message.split(" ");

if (args.length < 4) {
  return Bot.sendMessage(
    "Usage:\n/addkosstock game duration key\n\nExample:\n/addkosstock 8bp 1 ABCD123"
  );
}

let game = args[1].toLowerCase();
let duration = args[2];
let key = args.slice(3).join(" ");

let stockKey = "kos_" + game + "_" + duration + "_stock";

let stock = Bot.getProperty(stockKey);
if (!stock) stock = [];

stock.push(key);

Bot.setProperty(stockKey, stock, "json");

Bot.sendMessage(
  "✅ Kos stock added\n\n" +
  "🎮 Game: " + game +
  "\n⏳ Duration: " + duration + " Days" +
  "\n📦 Total Stock: " + stock.length
);
