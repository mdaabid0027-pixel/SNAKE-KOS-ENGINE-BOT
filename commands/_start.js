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
// ✅ NORMALIZE USER LIST
// ==============================

let uid = user.telegramid.toString();
let list = Bot.getProperty("user_list") || [];
list = list.map(String);

let isNewUser = !list.includes(uid);

// ==============================
// 👤 SAVE USER DATA
// ==============================

Bot.setProperty(
  uid + "_username",
  user.username || "NoUsername",
  "string"
);

Bot.setProperty(
  uid + "_name",
  user.first_name + (user.last_name ? " " + user.last_name : ""),
  "string"
);

// ==============================
// 🆕 ADMIN NOTIFY ONLY FOR NEW USER
// ==============================

let admin = Bot.getProperty("admin");

if (isNewUser) {

  list.push(uid);
  Bot.setProperty("user_list", list, "json");

  let userNumber = list.length;

  if (admin) {
    Api.sendMessage({
      chat_id: admin,
      parse_mode: "HTML",
      text:
        "🆕 <b>New User Joined Bot</b>\n\n" +
        "👤 Name: " + (user.first_name || "NoName") +
        "\n📛 Username: @" + (user.username || "NoUsername") +
        "\n🆔 ID: <code>" + uid + "</code>" +
        "\n\n📊 <b>User Number:</b> #" + userNumber +
        "\n👥 <b>Total Users:</b> " + userNumber
    });
  }

}

// ==============================
// 👑 CHECK RESELLER
// ==============================

let teamList = Bot.getProperty("team_list") || [];
let isReseller = teamList.map(String).includes(uid);

// ==============================
// 📢 LOAD GLOBAL OFFER
// ==============================

let offer = Bot.getProperty("global_offer");
let offerText = "";

if (offer) {
  offerText =
    "📢 <b>Special Offer</b>\n\n" +
    offer +
    "\n\n━━━━━━━━━━━━━━━━━━\n\n";
}

// ==============================
// 📝 WELCOME MESSAGE
// ==============================

let msg = "";

if (isReseller) {
  msg =
    offerText +
    "👋 Welcome Reseller!\n\n" +
    "Use the menu below to manage purchases, stock and balance.";
} else {
  msg =
    offerText +
    "👋 Welcome!\n\n" +
    "Use the menu below to purchase keys and manage your account.";
}

// ==============================
// ✅ MAIN MENU
// ==============================

Api.sendMessage({
  text: msg,
  parse_mode: "HTML",
  reply_markup: {
    keyboard: [

      [
        { text: "🛒 Purchase Product" }
      ],

      [
        { text: "💳 Check Balance" },
        { text: "➕ Add Balance" }
      ],

      [
        { text: "📦 Check Stock" },
        { text: "🧾 Purchase History" }
      ]

    ],

    resize_keyboard: true,
    is_persistent: true
  }
});
