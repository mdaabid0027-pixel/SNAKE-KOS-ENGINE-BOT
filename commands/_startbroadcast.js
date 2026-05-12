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
if (user.telegramid != admin){
  return Bot.sendMessage("Only admin allowed.");
}

let msg_id = Bot.getProperty("broadcast_msg_id");
let chat_id = Bot.getProperty("broadcast_chat_id");
let users = Bot.getProperty("user_list") || [];

if (!msg_id){
  return Bot.sendMessage("Pehle /setbroadcast karo!");
}

let count = 0;

for (let i = 0; i < users.length; i++){
  Api.forwardMessage({
    chat_id: users[i],
    from_chat_id: chat_id,
    message_id: msg_id
  });
  count++;
}

Bot.sendMessage("✅ Broadcast Complete!\n📤 Sent to: " + count + "/" + users.length + " users!");
