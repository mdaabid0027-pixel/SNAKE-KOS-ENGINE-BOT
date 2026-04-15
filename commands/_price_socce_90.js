/*CMD
  command: /price_socce_90
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
  command: /price_socce_90
  folder: Price
CMD*/

Bot.setProperty("price_edit_target", "soccer_90day_price", "string");

Api.sendMessage({
  text: "💲 Enter new <b>User Price</b> for <b>Soccer – 90 Days</b>:",
  parse_mode: "HTML"
});

Bot.runCommand("/pricing");
