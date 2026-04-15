/*CMD
  command: K8bp
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
command: K8bp
*/

Bot.setProperty(user.telegramid + "_selected_game", "8bp", "string");

Bot.runCommand("/kosco");
