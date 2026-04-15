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
// 🔔 ADMIN NOTIFY
// ==============================

let admin = Bot.getProperty("admin");

if(admin){

Api.sendMessage({
chat_id: admin,
parse_mode: "HTML",
text:
"🚀 <b>User Opened Bot</b>\n\n" +
"👤 Name: " + user.first_name +
"\n🆔 ID: <code>" + user.telegramid + "</code>" +
"\n📛 Username: @" + (user.username || "NoUsername")
});

}


// ==============================
// ✅ SAVE USER DATA
// ==============================

let list = Bot.getProperty("user_list") || [];

if(!list.includes(user.telegramid)){

list.push(user.telegramid);
Bot.setProperty("user_list", list, "json");

}

// save username
Bot.setProperty(
user.telegramid + "_username",
user.username || "NoUsername",
"string"
);

// save full name
Bot.setProperty(
user.telegramid + "_name",
user.first_name + (user.last_name ? " " + user.last_name : ""),
"string"
);


// ==============================
// 👑 CHECK RESELLER
// ==============================

let uid = user.telegramid.toString();

let teamList = Bot.getProperty("team_list") || [];

let isReseller = teamList.map(String).includes(uid);


// ==============================
// 📢 LOAD GLOBAL OFFER
// ==============================

let offer = Bot.getProperty("global_offer");

let offerText = "";

if(offer){

offerText =
"📢 <b>Special Offer</b>\n\n" +
offer +
"\n\n━━━━━━━━━━━━━━━━━━\n\n";

}


// ==============================
// 📝 WELCOME MESSAGE
// ==============================

let msg;

if(isReseller){

msg =
offerText +
"👋 Welcome Reseller!\n\n" +
"Use the menu below to manage purchases, stock and balance.";

}else{

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
{ text: "Purchase Product" },
{ text: "Purchase History" }
],

[
{ text: "Check Balance" },
{ text: "Add Balance" }
],

[
{ text: "Check Stock" }
]

],

resize_keyboard: true

}

});
