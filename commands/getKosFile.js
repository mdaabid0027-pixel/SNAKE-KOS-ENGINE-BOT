/*CMD
  command: getKosFile
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
command: getKosFile
*/

let file = Bot.getProperty("kos_file_id");

if(!file){
Bot.sendMessage("❌ Kos file not available.");
return;
}

Api.sendDocument({
document:file
});
