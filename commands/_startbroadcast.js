/*CMD
  command: /startbroadcast
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
command: /startbroadcast
need_reply: false
*/

let admin = Bot.getProperty("admin");
if (user.telegramid != admin) {
  return Bot.sendMessage("Only admin allowed.");
}

let msg_id = Bot.getProperty("broadcast_msg_id");
let chat_id = Bot.getProperty("broadcast_chat_id");

if (!msg_id || !chat_id) {
  return Bot.sendMessage("Pehle /setbroadcast karo!");
}

// ==============================
// LOAD ALL USER LIST CHUNKS
// user_list, user_list_2, user_list_3...
// ==============================

let allUsers = [];

for (let i = 1; i <= 100; i++) {
  let key = (i === 1) ? "user_list" : "user_list_" + i;
  let list = Bot.getProperty(key);

  if (Array.isArray(list) && list.length > 0) {
    allUsers = allUsers.concat(list.map(String));
  }
}

// remove duplicates
allUsers = [...new Set(allUsers)];

if (allUsers.length === 0) {
  return Bot.sendMessage("No users found.");
}

let count = 0;

for (let i = 0; i < allUsers.length; i++) {
  Api.forwardMessage({
    chat_id: allUsers[i],
    from_chat_id: chat_id,
    message_id: msg_id
  });
  count++;
}

Bot.sendMessage(
  "✅ Broadcast Complete!\n📤 Sent to: " + count + "/" + allUsers.length + " users!"
);
