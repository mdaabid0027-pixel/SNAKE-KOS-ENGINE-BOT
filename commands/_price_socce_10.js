/*CMD
  command: /price_socce_10
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
  command: /price_socce_10
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Price
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

Bot.setProperty("price_edit_target", "soccer_10day_price", "string");

Api.sendMessage({
  text: "💲 Enter new <b>User Price</b> for <b>Soccer – 10 Days</b>:",
  parse_mode: "HTML"
});
Bot.runCommand("/pricing")
