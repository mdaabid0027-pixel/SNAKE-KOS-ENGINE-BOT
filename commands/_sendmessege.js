/*CMD
  command: /sendmessege
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

// Replace with your Telegram ID
var ADMIN_ID = 5006281199;

if (user.telegramid != 5006281199) {
  Bot.sendMessage("Access denied");
  return;
}

// Remove command name
var text = message.replace("/sendmessage", "").trim();

if (!text) {
  Bot.sendMessage("Usage:\n/sendmessege USER_ID message");
  return;
}

var parts = text.split(" ");
var targetId = parts[0];

// Remove user ID from message
parts.shift();
var msg = parts.join(" ");

if (!msg) {
  Bot.sendMessage("Please provide a message to send.");
  return;
}

// Send message to target user
Api.sendMessage({
  chat_id: targetId,
  text: msg
});

Bot.sendMessage("Message sent to user ID: " + targetId);
