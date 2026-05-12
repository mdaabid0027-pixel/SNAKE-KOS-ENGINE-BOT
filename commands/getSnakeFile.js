/*CMD
  command: getSnakeFile
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
command: getSnakeFile
*/

let file = Bot.getProperty("snake_file_id");

if(!file){
Bot.sendMessage("❌ Snake file not available.");
return;
}

Api.sendDocument({
document:file
});
