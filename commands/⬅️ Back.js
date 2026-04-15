/*CMD
  command: ⬅️ Back
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
command: ⬅️ Back
*/

let step = User.getProperty("purchase_step");

let app = Bot.getProperty(user.telegramid + "_selected_app");

if(step == "game"){

if(app == "snake"){
Bot.runCommand("Snake Engine");
return;
}

if(app == "kos"){
Bot.runCommand("Kos Engine");
return;
}

}

if(step == "duration"){

Bot.runCommand("Purchase Product");
return;

}

if(step == "engine"){

Bot.runCommand("/start");
return;

}

// fallback
Bot.runCommand("/start");
