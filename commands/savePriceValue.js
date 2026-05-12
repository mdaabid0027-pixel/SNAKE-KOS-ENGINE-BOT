/*CMD
  command: savePriceValue
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
command: savePriceValue
need_reply: true
*/

let engine = User.getProperty("price_engine");
let game = User.getProperty("price_game");
let duration = User.getProperty("price_duration");

let price = parseFloat(message);

if(isNaN(price)){
Bot.sendMessage("❌ Invalid price");
return;
}


// SAVE ONLY OLD FORMAT

let priceKey =
engine + "_" + game + "_" + duration + "_price";

Bot.setProperty(priceKey, price, "integer");


Bot.sendMessage(
"✅ Price updated successfully\n\n" +
"Engine: " + engine +
"\nGame: " + game +
"\nDuration: " + duration +
"\nPrice: ₹" + price
);
