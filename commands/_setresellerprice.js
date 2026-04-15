/*CMD
  command: /setresellerprice
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
command: /setresellerprice
folder: Admin Panel
*/

let admin = Bot.getProperty("admin");

if(user.telegramid != admin){

Bot.sendMessage("❌ Only admin allowed.");
return;

}

Api.sendMessage({
text:"Select Engine for reseller pricing:",
reply_markup:{
inline_keyboard:[
[
{ text:"🐍 Snake Engine", callback_data:"/setResellerSnake" }
],
[
{ text:"🚀 Kos Engine", callback_data:"/setResellerKos" }
]
]
}
});
