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

Bot.sendMessage("❌ Stock setup failed. Try again.");

return;

}

let stockKey = engine + "_" + game + "_" + duration + "_stock";

let existing = Bot.getProperty(stockKey);
if(!Array.isArray(existing)) existing = [];

let newKeys = message.split("\n")
.map(x => x.trim())
.filter(x => x.length > 0);

let updated = existing.concat(newKeys);

Bot.setProperty(stockKey, updated, "json");

Bot.sendMessage(
"✅ Stock Added Successfully\n\n" +
"Engine: " + engine +
"\nGame: " + game +
"\nDuration: " + duration +
"\nAdded: " + newKeys.length +
"\nTotal Stock: " + updated.length
);

