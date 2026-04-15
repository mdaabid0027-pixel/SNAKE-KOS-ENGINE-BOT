/*CMD
  command: /price_8b_90
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
  command: /price_8b_90
  folder: Price
CMD*/

Bot.setProperty("price_edit_target", "8bp_90day_price", "string");

Api.sendMessage({
  text: "💲 Enter new <b>User Price</b> for <b>8BP – 90 Days</b>:",
  parse_mode: "HTML"
});

Bot.runCommand("/pricing");
