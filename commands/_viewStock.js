/*CMD
  command: /viewStock
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
  command: /viewStock
  folder: Admin Panel
*/

let admin = Bot.getProperty("admin");

if (user.telegramid != admin) {
  return Api.sendMessage({
    text: "⚠️ Only admin can view full stock with codes.",
    parse_mode: "HTML"
  });
}

// Helper function
function getStock(key) {
  let arr = Bot.getProperty(key);
  if (!arr || !Array.isArray(arr) || arr.length === 0) {
    return { count: 0, list: "— No stock —" };
  }

  let formatted = arr
    .map((c, i) => (i + 1) + ". " + c)
    .join("\n");

  return { count: arr.length, list: formatted };
}

// 8BP
let s8_3  = getStock("8bp_3day_stock");
let s8_10 = getStock("8bp_10day_stock");
let s8_30 = getStock("8bp_30day_stock");
let s8_90 = getStock("8bp_90day_stock");

// Carrom
let sc_3  = getStock("carom_3day_stock");
let sc_10 = getStock("carom_10day_stock");
let sc_30 = getStock("carom_30day_stock");
let sc_90 = getStock("carom_90day_stock");

// Soccer
let ss_3  = getStock("soccer_3day_stock");
let ss_10 = getStock("soccer_10day_stock");
let ss_30 = getStock("soccer_30day_stock");
let ss_90 = getStock("soccer_90day_stock");

// Final Message
let msg =
"<b>📦 FULL STOCK LIST</b>\n\n" +

"<b>🎮 8BP</b>\n" +
"3D (" + s8_3.count + ")\n" + s8_3.list + "\n\n" +
"10D (" + s8_10.count + ")\n" + s8_10.list + "\n\n" +
"30D (" + s8_30.count + ")\n" + s8_30.list + "\n\n" +
"90D (" + s8_90.count + ")\n" + s8_90.list + "\n\n" +

"<b>🎮 Carrom</b>\n" +
"3D (" + sc_3.count + ")\n" + sc_3.list + "\n\n" +
"10D (" + sc_10.count + ")\n" + sc_10.list + "\n\n" +
"30D (" + sc_30.count + ")\n" + sc_30.list + "\n\n" +
"90D (" + sc_90.count + ")\n" + sc_90.list + "\n\n" +

"<b>🎮 Soccer</b>\n" +
"3D (" + ss_3.count + ")\n" + ss_3.list + "\n\n" +
"10D (" + ss_10.count + ")\n" + ss_10.list + "\n\n" +
"30D (" + ss_30.count + ")\n" + ss_30.list + "\n\n" +
"90D (" + ss_90.count + ")\n" + ss_90.list;

Api.sendMessage({
  text: msg,
  parse_mode: "HTML"
});
