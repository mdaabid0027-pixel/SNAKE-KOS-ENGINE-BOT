/*CMD
  command: saveGlobalResellerGrid
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
command: saveGlobalResellerGrid
need_reply: true
*/

let admin = Bot.getProperty("admin");

if(user.telegramid != admin){

Bot.sendMessage("❌ Only admin allowed.");
return;

}

// get reseller list

let teamList = Bot.getProperty("team_list") || [];

if(teamList.length == 0){

Bot.sendMessage("❌ No resellers found.");
return;

}

let lines = message.split("\n");

let parsedGrid = {};


// =============================
// GRID PARSER
// =============================

for(let line of lines){

if(!line.includes("=")) continue;

let parts = line.split("=");

let key = parts[0].trim().toLowerCase();

let valueRaw = parts[1].trim();


// skip XX entries

if(valueRaw.toUpperCase() == "XX"){
continue;
}


// convert to number

let value = Number(valueRaw);


// skip invalid numbers

if(isNaN(value)){
continue;
}


// valid entry save

parsedGrid[key] = value;

}


// =============================
// APPLY GRID TO ALL RESELLERS
// =============================

for(let uid of teamList){

let grid = Bot.getProperty(uid + "_grid") || {};

for(let key in parsedGrid){

grid[key] = parsedGrid[key];

}

Bot.setProperty(uid + "_grid", grid, "json");

}


// =============================
// SUCCESS MESSAGE
// =============================

Bot.sendMessage(
"✅ Reseller price grid updated successfully for ALL resellers."
);
