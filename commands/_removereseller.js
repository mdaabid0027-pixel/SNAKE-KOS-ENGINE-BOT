/*CMD
  command: /removereseller
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
command: /removereseller
folder: Admin Panel
*/

let admin = Bot.getProperty("admin");

if(user.telegramid != admin){

Bot.sendMessage("❌ Only admin can remove reseller.");
return;

}

// check format

let args = message.split(" ");

if(args.length < 2){

Bot.sendMessage(
"❗ Format:\n/removereseller USERID USERID"
);

return;

}

let removeIds = args.slice(1);

let team = Bot.getProperty("team_list") || [];

let removed = [];

for(let id of removeIds){

id = String(id);

// remove from team list

if(team.includes(id)){

team = team.filter(x => x != id);

// delete reseller grid

Bot.setProperty(id + "_grid", null);

removed.push(id);

}

}

// save updated team list

Bot.setProperty("team_list", team, "json");


// result message

if(removed.length > 0){

Bot.sendMessage(
"✅ Reseller removed successfully:\n\n" +
removed.join("\n")
);

}else{

Bot.sendMessage("⚠️ No matching reseller found.");

}
