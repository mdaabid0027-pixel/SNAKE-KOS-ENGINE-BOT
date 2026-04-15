/*CMD
  command: /buyqty
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
command: /buyqty
*/

let uid = user.telegramid;

// check session validity first
let app = Bot.getProperty(uid + "_selected_app");
let game = Bot.getProperty(uid + "_selected_game");
let duration = Bot.getProperty(uid + "_selected_duration");

if(!app || !game || !duration){

Bot.sendMessage(
"⚠️ Session expired.\nPlease select product again."
);

Bot.runCommand("/start");

return;

}

// quantity
let qty = parseInt(params);

if(!qty || qty <= 0){

Bot.sendMessage("❌ Invalid quantity.");

return;

}

game = game.toLowerCase();

// stock check
let stockKey = app + "_" + game + "_" + duration + "_stock";

let stock = Bot.getProperty(stockKey) || [];

let stockCount = Array.isArray(stock) ? stock.length : 0;

// ❌ stock check LAST
if(stockCount < qty){

Bot.sendMessage(
"❌ Not enough stock available.\n\nRequested: " +
qty +
"\nAvailable: " +
stockCount
);

// notify admin
let admin = Bot.getProperty("admin");

if(admin){

Api.sendMessage({
chat_id: admin,
text:
"🚨 STOCK ALERT\n\n" +
"User: @" + (user.username || "NoUsername") +
"\nEngine: " + app +
"\nGame: " + game +
"\nDuration: " + duration +
"\nRequested: " + qty +
"\nAvailable: " + stockCount
});

}

// reset session
Bot.setProperty(uid + "_bulk_qty", null);
Bot.setProperty(uid + "_selected_game", null);
Bot.setProperty(uid + "_selected_duration", null);

// redirect
Bot.runCommand("/start");

return;

}

// save quantity
Bot.setProperty(uid + "_bulk_qty", qty, "integer");

// run purchase engine
if(app == "snake"){

Bot.runCommand("/co");

return;

}

if(app == "kos"){

Bot.runCommand("/kosco");

return;

}
