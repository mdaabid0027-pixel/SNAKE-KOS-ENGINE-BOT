/*CMD
  command: Balance dekhein
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
  command: Balance dekhein
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// Property key for this user
let key = user.telegramid + "_balance";

// Get balance (default 0 if not exists)
let balance = Bot.getProperty(key);
if (!balance) balance = 0;

// Format message
let msg = `💰 Aapka balance: ₹${balance} INR`;

Api.sendMessage({
  text: msg
});


