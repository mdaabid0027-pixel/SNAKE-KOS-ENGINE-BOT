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
  folder: Admin Panel
*/

let admin = Bot.getProperty("admin");

if (user.telegramid != admin) return;

let targets = Bot.getProperty("reseller_add_targets");

if (!targets || targets.length === 0) {
  return Bot.sendMessage("⚠️ No reseller IDs found.");
}

let lines = message.split("\n");

let pricing = {};

for (let line of lines) {

  line = line.trim();

  if (!line.includes("=")) continue;

  let parts = line.split("=");

  let key = parts[0].trim().toLowerCase();
  let price = parseFloat(parts[1]);

  if (!key || isNaN(price)) continue;

  pricing[key] = price;
}

// load team list
let teamList = Bot.getProperty("team_list") || [];

for (let i = 0; i < targets.length; i++) {

  let uid = targets[i];

  Bot.setProperty(uid + "_grid", pricing, "json");

  Bot.setProperty(uid + "_isReseller", true, "boolean");

  if (!teamList.includes(uid)) {
    teamList.push(uid);
  }
}

Bot.setProperty("team_list", teamList, "json");

Bot.setProperty("reseller_add_targets", null, "json");

Bot.sendMessage("✅ Reseller pricing applied successfully.");
