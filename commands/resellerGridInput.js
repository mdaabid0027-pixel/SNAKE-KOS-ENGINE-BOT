/*CMD
  command: resellerGridInput
  help: 
  need_reply: true
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
command: resellerGridInput
need_reply: true
*/

let admin = Bot.getProperty("admin");

if(user.telegramid != admin){

Bot.sendMessage("❌ Only admin allowed.");
return;

}

// reseller ids
let ids =
Bot.getProperty("reseller_add_targets") || [];

if(ids.length == 0){

Bot.sendMessage("❌ No reseller targets found.");
return;

}

// parse grid
let lines = message.split("\n");

let parsedGrid = {};

for(let line of lines){

if(!line.includes("=")) continue;

let parts = line.split("=");

let key =
parts[0].trim().toLowerCase();

let valueRaw =
parts[1].trim();

// skip XX
if(valueRaw.toUpperCase() == "XX"){
continue;
}

let value = Number(valueRaw);

if(isNaN(value)){
continue;
}

parsedGrid[key] = value;

}

// no valid price
if(Object.keys(parsedGrid).length == 0){

Bot.sendMessage(
"❌ No valid prices found."
);

return;

}

// load reseller list
let team =
Bot.getProperty("team_list") || [];

team = team.map(String);

// add/update all ids
for(let uid of ids){

uid = uid.toString();

// add reseller if missing
if(!team.includes(uid)){
team.push(uid);
}

// save custom grid
Bot.setProperty(
uid + "_grid",
parsedGrid,
"json"
);

}

// save reseller list
Bot.setProperty(
"team_list",
team,
"json"
);

// clear temp
Bot.setProperty(
"reseller_add_targets",
[],
"json"
);

// success
Bot.sendMessage(
"✅ Reseller pricing applied successfully.\n\n" +
"👥 Total Updated: " + ids.length
);
