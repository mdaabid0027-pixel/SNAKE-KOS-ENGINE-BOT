/*CMD
  command: /pricing
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
  command: /pricing
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Price
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let priceTarget = Bot.getProperty("price_edit_target");

if (priceTarget && message) {

  let newPrice = message;
  if (isNaN(newPrice)) {
    return Api.sendMessage({
      text: "❌ Invalid number. Please enter a valid numeric price.",
      parse_mode: "HTML"
    });
  }

  Bot.setProperty(priceTarget, parseFloat(newPrice), "float");
  Bot.setProperty("price_edit_target", "", "string");

  Api.sendMessage({
    text: `✔️ Price updated for <b>${priceTarget}</b> to <b>₹${newPrice}</b>.`,
    parse_mode: "HTML"
  });
}
