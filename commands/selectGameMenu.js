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
  Api.sendMessage({
    text: "<b>🎮 Select Game</b>\n\n<i>Choose your game below.</i>",
    parse_mode: "HTML",
    reply_markup: {
      keyboard: [
        [{ text: "8BP", style: "primary" }],
        [{ text: "Carrom", style: "danger" }],
        [{ text: "Soccer", style: "success" }],
        [{ text: "🔙 Back", style: "danger" }]
      ],
      resize_keyboard: true
    }
  });
  return;
}

if(app == "kos"){
  Api.sendMessage({
    text: "<b>🎮 Select Game</b>\n\n<i>Choose your game below.</i>",
    parse_mode: "HTML",
    reply_markup: {
      keyboard: [
        [{ text: "8BP", style: "success" }],
        [{ text: "Carrom", style: "primary" }],
        [{ text: "🔙 Back", style: "danger" }]
      ],
      resize_keyboard: true
    }
  });
  return;
}

if(app == "aimai"){
  Api.sendMessage({
    text: "<b>🎮 Select Game</b>\n\n<i>Choose your game below.</i>",
    parse_mode: "HTML",
    reply_markup: {
      keyboard: [
        [{ text: "Carrom", style: "primary" }],
        [{ text: "🔙 Back", style: "danger" }]
      ],
      resize_keyboard: true
    }
  });
  return;
}

Bot.sendMessage("❌ App not selected.");
Bot.runCommand("/start");
