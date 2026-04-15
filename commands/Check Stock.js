/*CMD
  command: Check Stock
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
command: Check Stock
*/

// helper function
function countStock(key) {
  let arr = Bot.getProperty(key);
  if (!arr || !Array.isArray(arr)) return 0;
  return arr.length;
}

// games
let games = ["8bp", "carrom", "soccer"];

// durations
let snakeDurations = ["3", "10", "30", "90"];
let kosDurations = ["1", "7", "15", "30"];

let msg = "📦 Current Stock Info:\n\n";

// Snake Engine
msg += "🐍 Snake Engine:\n\n";

for (let g of games) {

  msg += g.toUpperCase() + ":\n";

  for (let d of snakeDurations) {

    let key = "snake_" + g + "_" + d + "_stock";
    let stock = countStock(key);

    msg += " " + d + " day ➜ " + stock + " keys\n";
  }

  msg += "\n";
}

// Kos Engine
msg += "🚀 Kos Engine:\n\n";

for (let g of games) {

  msg += g.toUpperCase() + ":\n";

  for (let d of kosDurations) {

    let key = "kos_" + g + "_" + d + "_stock";
    let stock = countStock(key);

    msg += " " + d + " day ➜ " + stock + " keys\n";
  }

  msg += "\n";
}

Api.sendMessage({
  text: msg
});
