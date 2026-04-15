/*CMD
  command: confirmPurchase
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
command: confirmPurchase
*/

let uid = user.telegramid;

let app = Bot.getProperty(uid + "_selected_app");
let game = Bot.getProperty(uid + "_selected_game");
let duration = Bot.getProperty(uid + "_selected_duration");

if(!app || !game || !duration){

Bot.sendMessage("❌ Session expired.");
Bot.runCommand("/start");
return;

}

game = game.toLowerCase();

let priceKey = app + "_" + game + "_" + duration + "_price";
let price = Bot.getProperty(priceKey) || 0;

let balKey = uid + "_balance";
let balance = Bot.getProperty(balKey) || 0;

let stockKey = app + "_" + game + "_" + duration + "_stock";
let stock = Bot.getProperty(stockKey) || [];

let stockCount = Array.isArray(stock) ? stock.length : 0;

let appName = (app == "snake") ? "Snake Engine" : "Kos Engine";

// price check
if(price <= 0){

Bot.sendMessage(
"❌ Price not configured.\n\n" +
"Product: " + appName +
"\nGame: " + game.toUpperCase() +
"\nDuration: " + duration + " Days"
);

return;

}

// balance check FIRST
if(balance < price){

Bot.sendMessage(
"❌ Insufficient Balance\n\n" +
"Price per key: ₹" + price +
"\nYour balance: ₹" + balance +
"\n\nPlease add balance first."
);

return;

}

// show confirm screen EVEN IF stock = 0

Api.sendMessage({
parse_mode: "HTML",
text:
"🛒 <b>Confirm Purchase</b>\n\n" +
"📦 Product: " + appName +
"\n🎮 Game: " + game.toUpperCase() +
"\n⏳ Duration: " + duration + " Days" +
"\n💰 Price per key: ₹" + price +
"\n📊 Stock Available: " + stockCount +
"\n\nSelect quantity:",
reply_markup:{
inline_keyboard:[
[
{ text:"1 Key", callback_data:"/buyqty 1" },
{ text:"2 Keys", callback_data:"/buyqty 2" }
],
[
{ text:"5 Keys", callback_data:"/buyqty 5" },
{ text:"10 Keys", callback_data:"/buyqty 10" }
]
]
}
});

Bot.sendKeyboard(
"Cancel 🚫",
"Press Cancel to return to menu"
);
