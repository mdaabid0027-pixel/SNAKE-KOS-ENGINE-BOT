/*CMD
  command: /verifyPayment
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

let order_id =
Bot.getProperty("order_" + user.telegramid);

if(!order_id){
Bot.sendMessage("⚠️ No active payment request.");
return;
}

HTTP.get({
  url:
  "https://fampay.anujbots.xyz/verify.php?order_id=" +
  order_id +
  "&api_key=YOUR_API_KEY",

  success: "/autoCheckResult"
});
