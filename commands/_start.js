/*CMD
  command: /start
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
command: /start
*/

// ==============================
// BASIC USER DATA
// ==============================

let uid = user.telegramid.toString();

let firstName = user.first_name || "NoName";
let lastName = user.last_name ? " " + user.last_name : "";
let fullName = firstName + lastName;
let username = user.username || "NoUsername";

Bot.setProperty(uid + "_username", username, "string");
Bot.setProperty(uid + "_name", fullName, "string");

// ==============================
// BOT ID SYSTEM (UNIQUE)
// ==============================

let botId = Bot.getProperty(uid + "_botid");

if (!botId) {
  let nextBotId = Bot.getProperty("next_botid");

  if (!nextBotId) {
    nextBotId = 100;
  }

  nextBotId = parseInt(nextBotId) + 1;
  botId = nextBotId;

  Bot.setProperty("next_botid", nextBotId, "integer");
  Bot.setProperty(uid + "_botid", botId, "integer");
  Bot.setProperty("botid_" + botId, uid, "string");
}

// ==============================
// BALANCE
// ==============================

let balance = Bot.getProperty(uid + "_balance");
if (!balance) balance = 0;

// ==============================
// RESELLER CHECK
// ==============================

let teamList = Bot.getProperty("team_list");
if (!Array.isArray(teamList)) teamList = [];

let isReseller = teamList.map(String).includes(uid);
let role = isReseller ? "Reseller" : "User";

// ==============================
// TUTORIAL VIDEO
// ==============================

let videoLink = Bot.getProperty("tutorial_video_link");

if (videoLink) {
  Api.sendMessage({
    text: "🎥 How to use this bot:\n" + videoLink,
    disable_web_page_preview: false
  });
}

// ==============================
// WELCOME MESSAGE
// ==============================

let msg = "";

if (isReseller) {
  msg =
    "👋 Welcome Reseller!\n\n" +
    "👤 Name: " + fullName +
    "\n🆔 Telegram ID: " + uid +
    "\n🪪 Bot ID: #" + botId +
    "\n👑 Role: " + role +
    "\n💰 Balance: ₹" + balance +
    "\n\nUse the menu below to manage purchases, stock and balance.";
} else {
  msg =
    "👋 Welcome!\n\n" +
    "👤 Name: " + fullName +
    "\n🆔 Telegram ID: " + uid +
    "\n🪪 Bot ID: #" + botId +
    "\n👑 Role: " + role +
    "\n💰 Balance: ₹" + balance +
    "\n\nUse the menu below to purchase keys and manage your account.";
}

// ==============================
// MAIN MENU
// ==============================

Bot.sendKeyboard(
  "🛒 Purchase Product\n💳 Check Balance,➕ Add Balance\n📦 Check Stock,🧾 Purchase History",
  msg
);
