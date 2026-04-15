/*CMD
  command: KSoccer
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
command: KSoccer
*/

Bot.setProperty(user.telegramid + "_selected_game", "soccer", "string");

Bot.runCommand("/kosco");
