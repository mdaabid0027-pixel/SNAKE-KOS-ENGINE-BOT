/*CMD
  command: /purchaseNow
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
command: /purchaseNow
*/

let uid = user.telegramid.toString();

// session verify
let sid = params.trim();

let currentSid =
Bot.getProperty(uid + "_purchase_sid") || "";

if (sid != currentSid) {

  Bot.sendMessage(
    "⚠️ Session expired.\nPlease restart the bot."
  );

  Bot.runCommand("/start");

  return;
}

let app = Bot.getProperty(uid + "_selected_app");
let game = Bot.getProperty(uid + "_selected_game");
let duration = Bot.getProperty(uid + "_selected_duration");

if (!app || !game || !duration) {
  Bot.sendMessage("⚠️ Session expired. Please start again.");
  Bot.runCommand("/start");
  return;
}

game = game.toLowerCase().trim();
duration = duration.toString().trim();

let teamList = Bot.getProperty("team_list") || [];
let isReseller = teamList.map(String).includes(uid);

let qty = parseInt(Bot.getProperty(uid + "_bulk_qty")) || 1;

if (!isReseller) qty = 1;

let baseKey = app + "_" + game + "_" + duration;

let grid = Bot.getProperty(uid + "_grid") || {};

let price = 0;

if (isReseller && grid[baseKey] !== undefined) {

  price = Number(grid[baseKey]);

} else {

  price = Number(
    Bot.getProperty(baseKey + "_price")
  ) || 0;

}

if (price <= 0) {

  Bot.sendMessage("❌ Price not configured.");
  return;

}

let totalPrice = price * qty;

// balance check first

let balKey = uid + "_balance";

let balance =
Bot.getProperty(balKey) || 0;

if (balance < totalPrice) {

  Bot.sendMessage(
    "❌ Insufficient Balance\n\n" +
    "Required: ₹" + totalPrice +
    "\nYour balance: ₹" + balance +
    "\n\nPlease add balance first."
  );

  return;

}

// stock check after balance

let stockKey = baseKey + "_stock";

let stock =
  Bot.getProperty(stockKey) || [];

let stockCount =
  Array.isArray(stock) ? stock.length : 0;

if (stockCount < qty) {

  Bot.sendMessage(
    "❌ Out of Stock\n\n" +
    "Requested: " + qty +
    "\nAvailable: " + stockCount
  );

  let admin =
    Bot.getProperty("admin");

  if (admin) {

    let alertAppName;

    if (app == "snake") {
      alertAppName = "Snake Engine";
    } else if (app == "kos") {
      alertAppName = "Kos Engine";
    } else if (app == "aimai") {
      alertAppName = "AimAI";
    } else {
      alertAppName = app;
    }

    Api.sendMessage({
      chat_id: admin,
      parse_mode: "HTML",
      text:
        "🚨 <b>STOCK ALERT</b>\n\n" +

        "📦 <b>Engine:</b> " +
        alertAppName +

        "\n🎮 <b>Game:</b> " +
        game.toUpperCase() +

        "\n⏳ <b>Duration:</b> " +
        duration + " Days" +

        "\n👤 <b>User:</b> @" +
        (user.username || "NoUsername") +

        "\n🆔 <b>ID:</b> <code>" +
        uid + "</code>" +

        "\n🔢 <b>Requested:</b> " +
        qty +

        "\n📊 <b>Available:</b> " +
        stockCount
    });

  }

  Bot.runCommand("/start");

  return;

}

// deduct balance

let newBalance =
balance - totalPrice;

Bot.setProperty(
  balKey,
  newBalance,
  "float"
);

// deliver keys

let delivered = [];

for (let i = 0; i < qty; i++) {

  delivered.push(stock.shift());

}

Bot.setProperty(
  stockKey,
  stock,
  "json"
);

// user success

Api.sendMessage({
  parse_mode: "HTML",
  text:
    "╔════════════════════╗\n" +
    "🎉 <b>PURCHASE SUCCESSFUL</b>\n" +
    "╚════════════════════╝\n\n" +

    "📦 <b>Product:</b> " +
    (app == "snake" ? "Snake Engine" : "Kos Engine") +

    "\n🎮 <b>Game:</b> " + game.toUpperCase() +

    "\n⏳ <b>Duration:</b> " + duration + " Days" +

    "\n🛒 <b>Quantity:</b> " + qty +

    "\n━━━━━━━━━━━━━━━━━━━━\n" +
    "🔑 <b>Your License Key(s)</b>\n" +
    "<code>" + delivered.join("\n") + "</code>" +

    "\n━━━━━━━━━━━━━━━━━━━━\n" +
    "💰 <b>Remaining Balance:</b> ₹" + newBalance.toFixed(2) +

    "\n\n⚠️ <i>Please save your key(s). Lost keys cannot be recovered.</i>\n\n" +
    "🙏 <b>Thank you for choosing Techno Aabid Store!</b>"
});

// admin notify

let admin =
  Bot.getProperty("admin");

if (admin) {

  let appName;

  if (app == "snake") {
    appName = "Snake Engine";
  } else if (app == "kos") {
    appName = "Kos Engine";
  } else if (app == "aimai") {
    appName = "AimAI";
  } else {
    appName = app;
  }

  Api.sendMessage({
    chat_id: admin,
    parse_mode: "HTML",
    text:
      "🔔 <b>KEY SOLD</b>\n\n" +

      "👤 Name: " +
      (user.first_name || "NoName") +

      "\n📛 Username: @" +
      (user.username || "NoUsername") +

      "\n🆔 ID: <code>" +
      uid + "</code>" +

      "\n📦 <b>Engine:</b> " +
      appName +

      "\n🎮 <b>Game:</b> " +
      game.toUpperCase() +

      "\n⏳ <b>Duration:</b> " +
      duration + " Days" +

      "\n🔢 Qty: " + qty +

      "\n💰 Total: ₹" +
      totalPrice +

      "\n\n🔑 Keys:\n<code>" +
      delivered.join("\n") +
      "</code>"
  });

}


// log channel

let logChannel =
  Bot.getProperty("log_channel");

if (logChannel) {

  let appName;

  if (app == "snake") {
    appName = "Snake Engine";
  } else if (app == "kos") {
    appName = "Kos Engine";
  } else if (app == "aimai") {
    appName = "AimAI";
  } else {
    appName = app;
  }

  Api.sendMessage({
    chat_id: logChannel,
    parse_mode: "HTML",
    text:
      "📡 <b>KEY SOLD</b>\n\n" +

      "👤 <b>User:</b> @" +
      (user.username || "NoUsername") +

      "\n🆔 <code>" +
      uid + "</code>" +

      "\n\n📦 <b>Engine:</b> " +
      appName +

      "\n🎮 <b>Game:</b> " +
      game.toUpperCase() +

      "\n⏳ <b>Duration:</b> " +
      duration + " Days" +

      "\n🔢 <b>Quantity:</b> " +
      qty +

      "\n💰 <b>Total Paid:</b> ₹" +
      totalPrice +

      "\n💳 <b>Balance Left:</b> ₹" +
      newBalance.toFixed(2) +

      "\n📦 <b>Remaining Stock:</b> " +
      stock.length +

      "\n👑 <b>Role:</b> " +
      (isReseller ? "Reseller" : "User") +

      "\n\n🔑 <b>Keys:</b>\n<code>" +
      delivered.join("\n") +
      "</code>"
  });

}

// history

let history =
  Bot.getProperty(uid + "_purchase_history") || [];

let historyAppName;

if (app == "snake") {
  historyAppName = "Snake Engine";
} else if (app == "kos") {
  historyAppName = "Kos Engine";
} else if (app == "aimai") {
  historyAppName = "AimAI";
} else {
  historyAppName = app;
}

let historyEmoji;

if (app == "snake") {
  historyEmoji = "🐍";
} else if (app == "kos") {
  historyEmoji = "🚀";
} else if (app == "aimai") {
  historyEmoji = "🤖";
} else {
  historyEmoji = "📦";
}

let entry =

  historyEmoji + " " +
  historyAppName +

  "\n🎮 Game: " +
  game.toUpperCase() +

  "\n⏳ Duration: " +
  duration + " Days" +

  "\n🔢 Qty: " +
  qty +

  "\n💰 Paid: ₹" +
  totalPrice +

  "\n🔑 Keys:\n" +
  delivered.join(", ") +

  "\n📅 Date: " +

  new Date().toLocaleString(
    "en-IN",
    {
      timeZone: "Asia/Kolkata"
    }
  );

history.unshift(entry);

history = history.slice(0, 20);

Bot.setProperty(
  uid + "_purchase_history",
  history,
  "json"
);


// reset qty

Bot.setProperty(
  uid + "_bulk_qty",
  null,
  "integer"
);


// back to start

Bot.runCommand("/startt");
