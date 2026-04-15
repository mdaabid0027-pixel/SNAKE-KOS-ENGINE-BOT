/*CMD
  command: /viewReseller
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
  command: /viewReseller
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Panel 
  answer: 
  keyboard: 
  aliases: /resellerlist
  group: 
CMD*/

let admin = Bot.getProperty("admin");

if (user.telegramid != admin) {
  return Api.sendMessage({
    text: "⚠️ Only admin can view reseller grids.",
    parse_mode: "HTML"
  });
}

let parts = message.split(" ");
if (parts.length < 2) {
  return Api.sendMessage({
    text: "❗ Format:\n<code>/viewReseller USERID</code>",
    parse_mode: "HTML"
  });
}

let targetId = parts[1].trim();
let grid = Bot.getProperty(`${targetId}_grid`);

if (!grid || Object.keys(grid).length == 0) {
  return Api.sendMessage({
    text: `📭 Reseller <b>${targetId}</b> has no grid.`,
    parse_mode: "HTML"
  });
}

let msg = `<b>📜 Reseller Grid for ${targetId}</b>\n\n`;

for (let key in grid) {
  msg += `<b>${key}</b> : ₹${grid[key]}\n`;
}

Api.sendMessage({
  text: msg,
  parse_mode: "HTML"
});
