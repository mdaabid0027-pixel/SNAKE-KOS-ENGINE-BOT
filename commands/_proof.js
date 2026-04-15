/*CMD
  command: /proof
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
command: /proof
*/

let msg =
"✅ <b>PROOF SECTION</b>\n\n" +
"━━━━━━━━━━━━━━━━━━\n\n" +

"👇 <b>हिंदी (Hindi)</b> 👇\n\n" +
"यहाँ बहुत सारे पेमेंट और रिज़ल्ट के प्रूफ उपलब्ध हैं।\n" +
"आप नीचे दिए गए चैनलों में जाकर सभी प्रूफ देख सकते हैं।\n" +
"सभी प्रूफ 100% रियल हैं और समय-समय पर अपडेट होते रहते हैं।\n\n" +

"━━━━━━━━━━━━━━━━━━\n\n" +

"👇 <b>English</b> 👇\n\n" +
"Here You Can Find Many Payment & Result Proofs.\n" +
"You Can Check All Proofs In The Channels Given Below.\n" +
"All Proofs Are 100% Real And Updated Regularly.\n\n" +

"━━━━━━━━━━━━━━━━━━\n\n" +

"🔗 <b>1️⃣ Main Channel:</b>\n" +
"https://t.me/Techno_Aabid\n\n" +

"🔗 <b>2️⃣ All Proof Channel:</b>\n" +
"https://t.me/Aabid_proofs\n\n" +

"🔗 <b>3️⃣ Snake Engine Deal Proof:</b>\n" +
"https://t.me/Snakeengine_india_Proof";

Api.sendMessage({
  text: msg,
  parse_mode: "HTML",
  disable_web_page_preview: true
});
