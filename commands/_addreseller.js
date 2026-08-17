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

  Bot.sendMessage("❌ Only admin allowed.");
  return;

}

// usage check
let args = message.split(" ");

if(args.length < 2){

  Bot.sendMessage(
    "Usage:\n\n/addreseller USERID USERID"
  );

  return;

}

// all reseller ids
let ids = args.slice(1).map(String);

// save temp ids
Bot.setProperty(
  "reseller_add_targets",
  ids,
  "json"
);

// auto add into team list
let team = Bot.getProperty("team_list") || [];
team = team.map(String);

for(let id of ids){

  if(!team.includes(id)){
    team.push(id);
  }

}

Bot.setProperty(
  "team_list",
  team,
  "json"
);

// send full grid
Api.sendMessage({
  parse_mode:"HTML",
  text:

"📄 <b>Send Full Reseller Price Grid</b>\n\n" +
"Replace XX with prices.\n\n" +
"<code>" +

// SNAKE

"snake_8bp_3=280\n" +
"snake_8bp_10=700\n" +
"snake_8bp_30=1400\n" +
"snake_8bp_90=3800\n\n" +

"snake_carrom_3=140\n" +
"snake_carrom_10=350\n" +
"snake_carrom_30=770\n" +
"snake_carrom_90=2030\n\n" +

"snake_soccer_3=130\n" +
"snake_soccer_10=280\n" +
"snake_soccer_30=530\n" +
"snake_soccer_90=1500\n\n" +

// KOS

"kos_8bp_1=100\n" +
"kos_8bp_7=220\n" +
"kos_8bp_15=360\n" +
"kos_8bp_30=620\n\n" +

"kos_carrom_1=80\n" +
"kos_carrom_7=190\n" +
"kos_carrom_15=340\n" +
"kos_carrom_30=585\n\n" +

// AIMAI

"aimai_carrom_1=XX\n" +
"aimai_carrom_3=XX\n" +
"aimai_carrom_7=XX\n" +
"aimai_carrom_15=XX\n" +
"aimai_carrom_30=XX\n" +
"aimai_carrom_90=XX" +

"</code>"
});

// wait for reply
Bot.runCommand("resellerGridInput");
