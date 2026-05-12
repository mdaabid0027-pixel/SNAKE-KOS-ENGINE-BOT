/*CMD
  command: /savePurchaseMsg
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
command: /savePurchaseMsg
*/

Bot.setProperty(
user.telegramid + "_last_purchase_msg",
options.result.message_id,
"integer"
);
