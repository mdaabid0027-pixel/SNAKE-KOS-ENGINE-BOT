/*CMD
  command: /addreseller
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
command: /addreseller
folder: Admin Panel
*/

let admin = Bot.getProperty("admin");

if(user.telegramid != admin){

Bot.sendMessage("❌ Only admin can add reseller.");
return;

}

// check format

let args = message.split(" ");

if(args.length < 2){

Bot.sendMessage(
"Usage:\n\n/addreseller USERID"
);

return;

}

let newReseller = args[1];

// load team list

let team = Bot.getProperty("team_list") || [];

// check duplicate

if(team.includes(String(newReseller))){

Bot.sendMessage("⚠️ User already reseller.");
return;

}

// add reseller

team.push(String(newReseller));

Bot.setProperty("team_list", team, "json");

// create reseller grid

let grid = Bot.getProperty(newReseller + "_grid");

if(!grid){

Bot.setProperty(newReseller + "_grid", {}, "json");

}

// notify reseller user

Api.sendMessage({
chat_id: newReseller,
text:
"🎉 Congratulations!\n\n" +
"You have been added as a Reseller.\n" +
"Please contact admin to get your pricing details."
});

// notify admin

Bot.sendMessage(
"✅ Reseller added successfully.\n\nUser ID: " +
newReseller +
"\n\nNow set reseller pricing using:\n/setresellerprice"
);
