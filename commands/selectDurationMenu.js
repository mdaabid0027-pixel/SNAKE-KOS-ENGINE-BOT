/*CMD
  command: selectDurationMenu
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
command: selectDurationMenu
*/

let engine = Bot.getProperty(user.telegramid + "_selected_app");

if(engine == "snake"){

Api.sendMessage({
text: "Select Duration:",
reply_markup: {
keyboard: [

["3 Days", "10 Days"],

["30 Days", "90 Days"],

["⬅️ Back"]

],
resize_keyboard: true
}
});

return;

}


// KOS MENU

if(engine == "kos"){

Api.sendMessage({
text: "Select Duration:",
reply_markup: {
keyboard: [

["1 Day", "7 Days"],

["15 Days", "30 Days"],

["⬅️ Back"]

],
resize_keyboard: true
}
});

return;

}


Bot.sendMessage("❌ Engine not selected properly.");
Bot.runCommand("/start");
