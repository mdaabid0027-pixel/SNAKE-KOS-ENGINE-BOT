/*CMD
  command: /stt
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
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  aliases: ❌ nahi
  group: 
CMD*/

// ==============================
// 🔔 ADMIN NOTIFY (ADDED)
// ==============================

let admin = Bot.getProperty("admin");

let userId = user.telegramid;
let name = user.first_name || "No Name";
let username = user.username ? "@" + user.username : "No Username";

if (admin) {
  Api.sendMessage({
    chat_id: admin,
    text:
      "🚀 <b>Hindi Start Pressed</b>\n\n" +
      "👤 Name: " + name + "\n" +
      "🆔 User ID: <code>" + userId + "</code>\n" +
      "🔗 Username: " + username,
    parse_mode: "HTML"
  });
}

// ==============================
// 🔥 Load Global Offer
// ==============================

let offer = Bot.getProperty("global_offer");
let offerText = "";

if (offer) {
  offerText =
    "📢 <b>विशेष ऑफर</b>\n\n" +
    offer +
    "\n\n━━━━━━━━━━━━━━━━━━\n\n";
}

let msg = `Swagat hai! Kripya ek vikalp chunen:`;

// ==============================
// ✅ Keyboard (Same as before)
// ==============================

let keyboard = {
  keyboard: [
    [
      { text: "3 din ka key kharidein" },
      { text: "10 din ka key kharidein" }
    ],
    [
      { text: "30 din ka key kharidein" },
      { text: "90 din ka key kharidein" }
    ],
    [
      { text: "Balance dekhein" },
      { text: "Paise jodein" },
      { text: "Stock dekhein" }
    ]
  ],
  resize_keyboard: true
};

Api.sendMessage({
  text: offerText + msg,
  parse_mode: "HTML",
  reply_markup: keyboard
});
