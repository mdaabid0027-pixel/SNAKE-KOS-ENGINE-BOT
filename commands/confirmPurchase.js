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

let uid = user.telegramid.toString();

let app = Bot.getProperty(uid + "_selected_app");
let game = Bot.getProperty(uid + "_selected_game");
let duration = Bot.getProperty(uid + "_selected_duration");

// session check
if (!app || !game || !duration) {
  Bot.sendMessage("⚠️ Session expired. Please start again.");
  Bot.runCommand("/start");
  return;
}

game = game.toLowerCase().trim();
duration = duration.toString().trim();

let baseKey = app + "_" + game + "_" + duration;

// new session id every time confirmPurchase opens
let sid = Date.now().toString();
Bot.setProperty(uid + "_purchase_sid", sid, "string");

// reseller check
let teamList = Bot.getProperty("team_list") || [];
let isReseller = teamList.map(String).includes(uid);

// pricing
let grid = Bot.getProperty(uid + "_grid") || {};
let price = 0;

if (isReseller && grid[baseKey] !== undefined) {
  price = Number(grid[baseKey]);
} else {
  price = Number(Bot.getProperty(baseKey + "_price")) || 0;
}

// price missing
if (price <= 0) {
  Bot.sendMessage(
    "❌ Price not configured.\n\n" +
    "Product: " + app +
    "\nGame: " + game.toUpperCase() +
    "\nDuration: " + duration + " Days"
  );
  return;
}

// stock
let stock = Bot.getProperty(baseKey + "_stock") || [];
let stockCount = Array.isArray(stock) ? stock.length : 0;

// app name
let appName = (app == "snake") ? "Snake Engine" : "Kos Engine";

// reseller flow
if (isReseller) {
  Api.sendMessage({
    parse_mode: "HTML",
    text:
      "🛒 <b>Confirm Purchase</b>\n\n" +
      "📦 Product: " + appName +
      "\n🎮 Game: " + game.toUpperCase() +
      "\n⏳ Duration: " + duration + " Days" +
      "\n💰 Price per key: ₹" + price +
      "\n📊 Stock Available: " + stockCount +
      "\n👤 Role: Reseller" +
      "\n\nSelect quantity:",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "1 Key", callback_data: "/buyqty 1 " + sid },
          { text: "2 Keys", callback_data: "/buyqty 2 " + sid }
        ],
        [
          { text: "5 Keys", callback_data: "/buyqty 5 " + sid },
          { text: "10 Keys", callback_data: "/buyqty 10 " + sid }
        ],
        [
          { text: "❌ Cancel", callback_data: "/cancelPurchase " + sid }
        ]
      ]
    }
  });
} else {
  Api.sendMessage({
    parse_mode: "HTML",
    text:
      "🛒 <b>Confirm Purchase</b>\n\n" +
      "📦 Product: " + appName +
      "\n🎮 Game: " + game.toUpperCase() +
      "\n⏳ Duration: " + duration + " Days" +
      "\n💰 Price: ₹" + price +
      "\n📊 Stock Available: " + stockCount +
      "\n👤 Role: User" +
      "\n\nDo you want to continue?",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "✅ Yes", callback_data: "/purchaseNow " + sid },
          { text: "❌ No", callback_data: "/cancelPurchase " + sid }
        ]
      ]
    }
  });
}
