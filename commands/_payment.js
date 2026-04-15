/*CMD
  command: /payment
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
  command: /payment
CMD*/

User.setProperty("wait_payment", "yes", "string");

Bot.sendMessage(
  "💳 Payment Request\n\n" +
  "Please send your payment screenshot as PHOTO.\n\n" +
  "After verification, balance will be added."
);
