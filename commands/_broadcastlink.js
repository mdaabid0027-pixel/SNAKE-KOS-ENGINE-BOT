/*CMD
  command: /broadcastlink
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
  command: /broadcastlink
  need_reply: true
  folder: Admin Panel
CMD*/

let admin = Bot.getProperty("admin");

if (user.telegramid != admin) {
  return Bot.sendMessage("⚠️ Only admin can use this.");
}

// If command itself sent, ask for content
if (message == "/broadcastlink") {
  return Bot.sendMessage("Send link on first line and message below it.");
}

let userList = Bot.getProperty("user_list");

if (!userList || userList.length === 0) {
  return Bot.sendMessage("❌ No users found.");
}

// Split lines
let lines = message.split("\n");

let link = lines[0];
let text = lines.slice(1).join("\n");

let finalMessage = link;

if (text) {
  finalMessage += "\n\n" + text;
}

let sent = 0;

for (let i = 0; i < userList.length; i++) {

  Api.sendMessage({
    chat_id: userList[i],
    text: finalMessage,
    disable_web_page_preview: false
  });

  sent++;
}

Bot.sendMessage(`✅ Broadcast sent to ${sent} users.`);
