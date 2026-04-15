/*CMD
  command: Add Funds e
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
command: Add Funds h
need_reply: false
*/

Bot.sendMessage(
"💰 How much balance do you want to add?\n\nEnter amount (example: 100)"
);

Bot.runCommand("getAmount");
