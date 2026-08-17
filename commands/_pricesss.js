/*CMD
  command: /pricesss
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
command: /prices
*/

let uid = user.telegramid.toString();

let teamList = Bot.getProperty("team_list") || [];

let isReseller =
teamList.map(String).includes(uid);

let grid =
Bot.getProperty(uid + "_grid") || {};

// USD RATE
let usdRate = 96;

// price function
function price(engine, game, days){

let resellerKey =
engine + "_" + game + "_" + days;

if(
isReseller &&
grid[resellerKey] !== undefined
){
return grid[resellerKey];
}

return Bot.getProperty(
engine + "_" +
game + "_" +
days + "_price"
) || 0;

}

// USD convert
function usd(inr){
return (
Number(inr) / usdRate
).toFixed(2);
}

let text =
"💰 Current Price List:\n\n";

// =====================
// SNAKE ENGINE
// =====================

text += "🐍 Snake Engine:\n\n";

text += "🎮 8BP:\n";

let p;

p = price("snake","8bp","3");
text += "  • 3-day: ₹" + p + " ($" + usd(p) + ")\n";

p = price("snake","8bp","10");
text += "  • 10-day: ₹" + p + " ($" + usd(p) + ")\n";

p = price("snake","8bp","30");
text += "  • 30-day: ₹" + p + " ($" + usd(p) + ")\n";

p = price("snake","8bp","90");
text += "  • 90-day: ₹" + p + " ($" + usd(p) + ")\n\n";

text += "🎮 Carrom:\n";

p = price("snake","carrom","3");
text += "  • 3-day: ₹" + p + " ($" + usd(p) + ")\n";

p = price("snake","carrom","10");
text += "  • 10-day: ₹" + p + " ($" + usd(p) + ")\n";

p = price("snake","carrom","30");
text += "  • 30-day: ₹" + p + " ($" + usd(p) + ")\n";

p = price("snake","carrom","90");
text += "  • 90-day: ₹" + p + " ($" + usd(p) + ")\n\n";

text += "🎮 Soccer:\n";

p = price("snake","soccer","3");
text += "  • 3-day: ₹" + p + " ($" + usd(p) + ")\n";

p = price("snake","soccer","10");
text += "  • 10-day: ₹" + p + " ($" + usd(p) + ")\n";

p = price("snake","soccer","30");
text += "  • 30-day: ₹" + p + " ($" + usd(p) + ")\n";

p = price("snake","soccer","90");
text += "  • 90-day: ₹" + p + " ($" + usd(p) + ")\n\n";

// =====================
// KOS ENGINE
// =====================

text += "🚀 Kos Engine:\n\n";

text += "🎮 8BP:\n";

p = price("kos","8bp","1");
text += "  • 1-day: ₹" + p + " ($" + usd(p) + ")\n";

p = price("kos","8bp","7");
text += "  • 7-day: ₹" + p + " ($" + usd(p) + ")\n";

p = price("kos","8bp","15");
text += "  • 15-day: ₹" + p + " ($" + usd(p) + ")\n";

p = price("kos","8bp","30");
text += "  • 30-day: ₹" + p + " ($" + usd(p) + ")\n\n";

text += "🎮 Carrom:\n";

p = price("kos","carrom","1");
text += "  • 1-day: ₹" + p + " ($" + usd(p) + ")\n";

p = price("kos","carrom","7");
text += "  • 7-day: ₹" + p + " ($" + usd(p) + ")\n";

p = price("kos","carrom","15");
text += "  • 15-day: ₹" + p + " ($" + usd(p) + ")\n";

p = price("kos","carrom","30");
text += "  • 30-day: ₹" + p + " ($" + usd(p) + ")\n\n";

Api.sendMessage({
text: text
});
