/*CMD
  command: /checkbalance
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
  command: /checkbalance
CMD*/

let admin = Bot.getProperty("admin");

let parts = message.trim().split(/\s+/);

// 🔹 If admin checking another user
if (user.telegramid == admin && parts.length == 2) {

  let targetId = parts[1].trim();
  let key = targetId + "_balance";

  let balance = Bot.getProperty(key);
  if (!balance) balance = 0;

  let username = Bot.getProperty(targetId + "_username");
  let name = Bot.getProperty(targetId + "_name");

  if (!username || username == "undefined") username = "NoUsername";
  if (!name || name == "undefined") name = "NoName";

  return Api.sendMessage({
    text:
      `💰 <b>User Balance Info</b>\n\n` +
      `👤 Name: ${name}\n` +
      `🔗 Username: @${username}\n` +
      `🆔 User ID: <code>${targetId}</code>\n\n` +
      `📊 Balance: ${balance} INR`,
    parse_mode: "HTML"
  });
}

// 🔹 Normal user checking own balance
let key = user.telegramid + "_balance";
let balance = Bot.getProperty(key);
if (!balance) balance = 0;

Api.sendMessage({
  text:
    `💰 <b>Your Balance</b>\n\n` +
    `📊 Current Balance: ${balance} INR`,
  parse_mode: "HTML"
});
