/*CMD
  command: /broadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send broadcast message

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*CMD
command: /broadcast
need_reply: true
*/

let OWNER_ID = 5006281199;

if (user.telegramid != OWNER_ID){
  return Bot.sendMessage("Only admin allowed.");
}

let text = message;
let users = Bot.getProperty("user_list") || [];

if (users.length == 0){
  return Bot.sendMessage("No users found.");
}

let sent = 0;

for (var i = 0; i < users.length; i++){

  Api.sendMessage({
    chat_id: users[i],
    text: text,
    on_error: "/broadcastError"
  });

  sent++;
}

Bot.sendMessage("✅ Broadcast Sent To " + sent + " Users.");
