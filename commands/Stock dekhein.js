/*CMD
  command: Stock dekhein
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
  command: Stock dekhein
CMD*/

// Helper: get stock count safely
function countStock(key) {
  let arr = Bot.getProperty(key);
  if (!arr || !Array.isArray(arr)) return 0;
  return arr.length;
}

// 8BP stock
let s8_3  = countStock("8bp_3day_stock");
let s8_10 = countStock("8bp_10day_stock");
let s8_30 = countStock("8bp_30day_stock");
let s8_90 = countStock("8bp_90day_stock");

// Carrom stock
let sc_3  = countStock("carom_3day_stock");
let sc_10 = countStock("carom_10day_stock");
let sc_30 = countStock("carom_30day_stock");
let sc_90 = countStock("carom_90day_stock");

// Soccer stock
let ss_3  = countStock("soccer_3day_stock");
let ss_10 = countStock("soccer_10day_stock");
let ss_30 = countStock("soccer_30day_stock");
let ss_90 = countStock("soccer_90day_stock");

// Message formatting
let msg = 
`📦 Upalabdh stock:

🎮 8BP:

  - 3 din: ${s8_3} keys
  - 10 din: ${s8_10} keys
  - 30 din: ${s8_30} keys
  - 90 din: ${s8_90} keys

🎮 Carrom:

  - 3 din: ${sc_3} keys
  - 10 din: ${sc_10} keys
  - 30 din: ${sc_30} keys
  - 90 din: ${sc_90} keys

🎮 Soccer:

  - 3 din: ${ss_3} keys
  - 10 din: ${ss_10} keys
  - 30 din: ${ss_30} keys
  - 90 din: ${ss_90} keys`;

Api.sendMessage({
  text: msg
});
