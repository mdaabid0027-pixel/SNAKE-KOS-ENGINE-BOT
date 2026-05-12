/*CMD
  command: selectGameMenu
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
command: selectGameMenu
*/

let app = Bot.getProperty(user.telegramid + "_selected_app");

if(app == "snake"){
  Bot.sendKeyboard(
    "8BP\nCarrom\nSoccer\n🔙 Back",
    "Select Game:"
  );
  return;
}

if(app == "kos"){
  Bot.sendKeyboard(
    "8BP\nCarrom\nFree Fire\n🔙 Back",
    "Select Game:"
  );
  return;
}

Bot.sendMessage("❌ App not selected.");
Bot.runCommand("/start");
