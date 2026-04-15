/*CMD
  command: /usercount
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
  command: /usercount
  folder: Admin Panel
*/

let admin = Bot.getProperty("admin");
if (user.telegramid != admin) return;

let users = Bot.getProperty("user_list") || [];

Api.sendMessage({
  chat_id: admin,
  text: "👥 Total Users: " + users.length
});
