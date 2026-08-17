/*CMD
  command: saveStockKeys
  help: 
  need_reply: true
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
command: saveStockKeys
need_reply: true
*/

let engine = User.getProperty("stock_engine");
let game = User.getProperty("stock_game");
let duration = User.getProperty("stock_duration");

if(!engine || !game || !duration){

  Bot.sendMessage(
    "❌ Stock setup failed. Try again."
  );

  return;
}

let stockKey =
  engine + "_" +
  game + "_" +
  duration + "_stock";

let existing =
  Bot.getProperty(stockKey);

if(!Array.isArray(existing)){
  existing = [];
}

let newKeys =
  message.split("\n")
  .map(x => x.trim())
  .filter(x => x.length > 0);

if(newKeys.length == 0){

  Bot.sendMessage(
    "❌ No keys received."
  );

  return;
}

let updated =
  existing.concat(newKeys);

Bot.setProperty(
  stockKey,
  updated,
  "json"
);


// ENGINE NAME

let engineName;

if(engine == "snake"){
  engineName = "Snake Engine";
}
else if(engine == "kos"){
  engineName = "Kos Engine";
}
else if(engine == "aimai"){
  engineName = "AimAI";
}
else{
  engineName = engine;
}


// SUCCESS MESSAGE

Bot.sendMessage(
  "✅ Stock Added Successfully\n\n" +
  "Engine: " + engineName +
  "\nGame: " + game.toUpperCase() +
  "\nDuration: " + duration + " Days" +
  "\nAdded: " + newKeys.length +
  "\nTotal Stock: " + updated.length
);


// LOG CHANNEL

let logChannel =
  Bot.getProperty("log_channel");

if(logChannel){

  Api.sendMessage({
    chat_id: logChannel,
    parse_mode: "HTML",
    text:

      "📦 <b>STOCK ADDED</b>\n\n" +

      "📦 <b>Engine:</b> " +
      engineName +

      "\n🎮 <b>Game:</b> " +
      game.toUpperCase() +

      "\n⏳ <b>Duration:</b> " +
      duration + " Days" +

      "\n\n➕ <b>Added Keys:</b> " +
      newKeys.length +

      "\n📦 <b>Total Stock:</b> " +
      updated.length +

      "\n\n🔑 <b>Keys Added:</b>\n\n" +

      "<code>" +
      newKeys.join("\n") +
      "</code>"
  });

}
